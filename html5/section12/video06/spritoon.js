/* An Actor is the root element to a sprite animation.
It can be moved around by setting the x, y, rotation and scale values
It can automatically moved by setting the motion value.
Motion can define x, y, rotation and scale values these are the amount they will change by in 1 second
An Actor contains layers which are individual sprites in a hierarchy */
class Actor {
	constructor(spriteData, frames, image){
		this.frames = frames;
		this.spriteData = spriteData;
		this.name = spriteData.name;
		this.image = image;
		this.config = spriteData.config;
		this.actions = spriteData.actions;
		this.matrix = new Matrix();
		this.scale = 1;
		this.flipped = false;
		this.rotation = 0;
		this.x = 0;
		this.y = 0;
		this.className = "Actor";
		
		this.createFlipped();
		this.createSprite(spriteData.nodes);
		
		if (this.actions!=null){
			for(let j=0; j<this.actions.length; j++){
				let obj = this.actions[j];
				let action = new Action(obj.name, this.layers);
				if (obj.layers!=null) action.layers = obj.layers;
				if (obj.loop!=null) action.loop = obj.loop;
				if (obj.duration!=null) action.duration = obj.duration;
				action.update();
				this.actions[j] = action;
			}
		}
	}
	
	createFlipped(){
		let canvas = document.createElement("canvas");
		canvas.width = this.image.width;
		canvas.height = this.image.height;
		let context = canvas.getContext("2d");
		context.scale(-1,1);
		context.drawImage(this.image, -this.image.width, 0);//, -this.image.width, 0, this.image.width, this.image.height);
		this.flippedImage = new Image();
		this.flippedImage.src = canvas.toDataURL();
	}
	
	setMotion(options){
		this.motion = { x:0, y:0, scale:1, rotation:0 };
		for(let prop in options){
			this.motion[prop] = options[prop];
		}
	}
	
	createSprite(nodes){
		this.sprite = [];
		this.layers = [];
		for(let i=0; i<nodes.length; i++){
			let node = this.createSpriteFromNodes(nodes[i], this);
			this.sprite.push(node);
		}
		this.orderLayers();
	}
	
	createSpriteFromNodes(node, parent=null){
		let options = {};
		options.context = this.context;
		options.image = this.image;
		options.flippedImage = this.flippedImage;
		options.frameData = this.getFrameData(node.name);
		let config = this.getConfig(node.name, this.config);
		options.node = node;
		options.config = config;
		options.parent = parent;
		options.x = (node.x==null) ? 0 : node.x;
		options.y = (node.y==null) ? 0 : node.y;
		if (parent==this) config.position = { x:0, y:0 };
		let part = new Sprite(options);
		this.layers.push(part);
		if (node.children!=null){
			for(let j=0; j<node.children.length; j++){
				let childNode = node.children[j];
				let child = this.createSpriteFromNodes(childNode, part);
				part.addChild(child);
			}
		}
		return part;
	}
	
	getFrameData(name){
		if (this.spriteData==null) return null;
		
		for(let i=0; i<this.frames.length; i++){
			let frame = this.frames[i];
			if (frame.filename.startsWith(name)) return frame;
		}
		
		return null;
	}
	
	getConfig(name, config){
		if (config==null) return null;
		if (Array.isArray(config) ){
			for(let i=0; i<config.length; i++){
				if (name == config[i].nodeName) return config[i];
				if (config[i].children!=null && config[i].children.length>0){
					for(let j=0; j<config[i].children.length; j++){
						let result = this.getConfig(name, config[i].children[j]);
						if (result != null) return result;
					}
				}	
			}
		}else{
			if (name == config.nodeName) return config;
			if (config.children!=null && config.children.length>0){
				for(let i=0; i<config.children.length; i++){
					let result = this.getConfig(name, config.children[i]);
					if (result != null) return result;
				}
			}
		}
		return null;
	}
	
	orderLayers(){
		let moved = false;
		do{
			moved = false;
			for(let i=1; i<this.layers.length; i++){
				if (this.layers[i-1].zOrder>this.layers[i].zOrder){
					this.layers[i-1] = this.layers.splice(i, 1, this.layers[i-1])[0];
					moved = true;
				}
			}
		}while(moved);
	}
	
	getRotation(){
		return this.rotation;
	}
	
	getScale(){
		return this.scale;
	}
	
	selectAction(indexOrName, motion=null){
		if (this.actions==null) return false;
		let action = null;
		this.motion = motion;
		
		if (isNaN(indexOrName)){
			//Find the action by name
			for(let i=0; i<this.actions.length; i++){
				if (this.actions[i].name == indexOrName){
					this.action = this.actions[i];
					break;
				}
			}
		}else{
			action = this.actions[indexOrName];
		}
		this.currentTime = 0;
		this.startTime = Date.now();
		this.action = action;
		return (this.action!=null);
	}

	update(dt){
		if (this.action!=null){
			this.currentTime += dt;

			if (this.action.loop!=null && this.action.loop && this.action.duration!=null && this.currentTime>this.action.duration){
				this.currentTime = 0;
			}
			
			if (this.motion!=null){
				this.scale += this.motion.scale * dt;
				this.rotation += this.motion.rotation * dt;
				this.x += this.motion.x * dt;
				this.y += this.motion.y * dt;
			}
		
			let a = Math.cos(this.rotation);
			let b = Math.sin(this.rotation);
			let scale = {x:this.scale, y:this.scale};
			if (this.flipped) scale.x *= -1;
			this.matrix = new Matrix(a * scale.x,b,-b,a * scale.y,this.x,this.y);
			
			this.action.setTime(this.currentTime);
			
			for (let i=0; i<this.sprite.length; i++){
				this.sprite[i].update(dt);
			}
		}
	}
	
	render(context){
		if (this.layers == null) return;
		
		for(let i=0; i<this.layers.length; i++) this.layers[i].render(context, this.flipped);
	}
}

class Anim{
	constructor(name, options){
		this.name = name;
		this.fps = (options.fps==null) ? 30 : options.fps;
		this.frames = this.parseFrames(options.frames);
		this.frameData = options.frameData;
		this.loop = (options.loop==null) ? true : false;
		this.motion = options.motion;
		this.oncomplete = options.oncomplete;
	}
	
	parseFrames(frames){
		//[0,"..",12,"s",0,"..",5]]
		// ".." means count up from current index to value indicated by next element in the array
		// "..2" means count up in twos from current index to value indicated by next element in the array
		// "s" means loop start - or 0 if not specified
		//This returns a flat array
		if (!Array.isArray(frames)) return [];
		
		let result = [];
		let startIndex, endIndex;
		
		for(let i=0; i<frames.length; i++){
			if (typeof(frames[i])==="string"){
				switch(frames[i]){
					case "..":
						i++;
						startIndex = result[result.length-1];
						endIndex = frames[i];
						for(let idx=startIndex+1; idx<=endIndex; idx++){
							result.push(idx);
						}
						break;
					case "..2":
						i++;
						startIndex = result[result.length-1];
						endIndex = frames[i];
						for(let idx=startIndex+1; idx<=endIndex; idx+=2){
							result.push(idx);
						}
						break;
					case "s":
						this.loopIndex = result.length;
						break;
					default:
						console.error("Anim.parseFrames found unexpected string " + frames[i]);
						break;
				}
			}else{
				result.push(frames[i]);
			}
		}
		
		return result;
	}
	
	reset(){
		this.currentTime = 0;
	}
	
	update(dt){
		if (isNaN(this.currentTime)) this.reset();
		this.currentTime += dt;
		
		let index = Math.floor(this.currentTime * this.fps);
		
		if (this.loop){
			if (this.loopIndex!=null){
				let loopLength = this.frames.length - this.loopIndex;
				if (index>this.loopIndex){
					index-=this.loopIndex;
					while(index>loopLength) index-=loopLength;
					index += this.loopIndex;
				}
			}else{
				while(index>=this.frames.length) index-=this.frames.length;
			}
		}else{
			if (index>=this.frames.length){
				if (this.oncomplete!=null){
					this.oncomplete();
					return;		
				}else{
			 		index = this.frames.length - 1;
				}
			}
 		}
		
		this.frame = this.frameData[this.frames[index]];
	}
}

class AnimSprite{
	constructor(name, options){
		this.name = name;
		this.context = options.context;
		this.image = options.image;
		this.flipped = false;
		this.x = (options.x==null) ? 0 : options.x;
		this.y = (options.y==null) ? 0 : options.y;
		this.anchor = (options.anchor==null) ? { x:0.5, y:0.5 } : options.anchor;
		this.scale = (options.scale==null) ? 1.0 : options.scale;
		this.opacity = (options.opacity==null) ? 1.0 : options.opacity;
		this.rotation = (options.rotation==null) ? 0 : options.rotation;
		this.canvasOffset = options.canvasOffset;
		this.className = "AnimSprite";
	}
	
	set anim(value){
		this._anim = value;
		if (value.motion!=null && value.motion.easing!=null){
			let options = value.motion.easing;
			//(start, end, duration, startTime=0, type='linear')
			this._anim.easing = new Easing(value.y, value.y + options.change, options.duration, 0, options.type);
		}
		this.animTime = 0;
	}
	
	get animName(){
		if (this._anim==null) return "none";
		return this._anim.name;
	}
	
	get moving(){
		if (this._anim==null) return false;
		if (this._anim.motion==null) return false;
		if (this._anim.motion.x==null) return false;
		return true;
	}
	
	get jumping(){
		return (this.animName=="jump");
	}
	
	update(dt){
		if (this._anim!=null){
			this._anim.update(dt);
			this.frameData = this._anim.frame;
			if (this._anim.motion!=null){
				this.x += ((this.flipped) ? -this._anim.motion.x : this._anim.motion.x) * dt;
				if (this._anim.motion.easing){
					this.y = this._anim.easing.value(this.animTime);
					//console.log("xbloke y:" + this.y.toFixed(2));
				}else{
					this.y += this._anim.motion.y * dt;
				}
			}
			this.animTime += dt;
		}
	}
	
	/*get offset(){
		let scale = this.scale;
		return new Vertex( this.frameData.frame.w * scale * this.anchor.x, this.frameData.frame.h * scale * this.anchor.y);
	}*/
	get offset(){
		const scale = this.scale;
		const w = this.frameData.sourceSize.w ;
		const h = this.frameData.sourceSize.h;
		return { x: (w - (w - this.frameData.frame.w)/2) * scale * this.anchor.x, y: (h - (h - this.frameData.frame.h)/2) * scale * this.anchor.y};
	}
	
	render() {
		let frame;
		try{
			frame = this.frameData.frame;
		}catch(e){
			console.log("Null frame");
			this._anim.update(0);
			this.frameData = this._anim.frame;
			frame = this.frameData.frame;
		}
		const canvasOffset = (this.canvasOffset==null) ? {x:0, y:0} : this.canvasOffset;
		const pos = {x: this.x, y:this.y };
		const offset = this.offset;
		pos.y -= offset.y - canvasOffset.y;
		if (this.flipped){
			pos.x += offset.x + canvasOffset.x;
		}else{
			pos.x -= offset.x - canvasOffset.x;
		}
		
		let alpha = this.context.globalAlpha;
		this.context.globalAlpha = this.opacity;
		
		this.context.translate(pos.x, pos.y);
		if (this.flipped) this.context.scale(-1,1);
		
		this.context.drawImage(
		   this.image,
		   frame.x,
		   frame.y,
		   frame.w,
		   frame.h,
		   0,
		   0,
		   frame.w * this.scale,
		   frame.h * this.scale);
		
		this.context.globalAlpha = alpha;
		this.context.setTransform(1,0,0,1,0,0);
		
		/*if (this.flipped){			
			this.context.scale(-1,1);
			this.context.translate(-this.x - canvasOffset.x, this.y + canvasOffset.y);
			this.context.rotate(this.rotation);
			this.context.drawImage(
			   this.image,
			   frame.x,
			   frame.y,
			   frame.w,
			   frame.h,
			   -offset.x,
			   -offset.y,
			   frame.w * this.scale,
			   frame.h * this.scale
			);
		}else{
			this.context.translate(this.x + canvasOffset.x, this.y + canvasOffset.y);
			this.context.rotate(this.rotation);
			this.context.drawImage(
			   this.image,
			   frame.x,
			   frame.y,
			   frame.w,
			   frame.h,
			   -offset.x,
			   -offset.y,
			   frame.w * this.scale,
			   frame.h * this.scale
			);
		}*/
	}
}

/* A Sprite is an individual image from the spritesheet */
class Sprite {
				
	constructor(options){
		this.frameData = options.frameData;
		this.context = options.context;
		this.image = options.image;
		this.flippedImage = options.flippedImage;
		this.x = (options.x==null) ? 0 : options.x;
		this.y = (options.y==null) ? 0 : options.y;
		this.anchor = (options.anchor==null) ? { x:0.5, y:0.5 } : options.anchor;
		this.scale = (options.scale==null) ? 1.0 : options.scale;
		this.opacity = (options.opacity==null) ? 1.0 : options.opacity;
		this.rotation = (options.rotation==null) ? 0 : options.rotation;
		if (options.canvasOffset) this.canvasOffset = options.canvasOffset;
		this.zOrder = 0;
		this.className = "Sprite";
		
		if (options.node!=null){
			this.node = options.node;
			if (options.config!=null){
				let config = options.config;
				if (options.parent!=null){
					if (config.position!=null){
						this.x = Number(config.position.x);
						this.y = Number(config.position.y);
					} 
				}
				if (config.anchor!=null){
					this.anchor = { x:Number(config.anchor.x), y:Number(config.anchor.y) };
				}
				if (config.scale!=null) this.scale = Number(config.scale);
				if (config.rotation!=null) this.rotation = Number(config.rotation);
				if (config.zOrder!=null) this.zOrder = Number(config.zOrder);
				if (config.opacity!=null) this.opacity = Number(config.opacity);
			}
		}
		if (options.parent!=null) this.parent = options.parent;
		this.setRest(false);//Save the current position as the rest position
		this.children = [];
	}

	addChild(child){
		this.children.push(child);
	}

	/*get offset(){
		let scale = this.getScale();
		return new Vertex( this.frameData.frame.w * scale * this.anchor.x, this.frameData.frame.h * scale * this.anchor.y);
	}*/
	get offset(){
		const scale = this.scale;
		const w = this.frameData.sourceSize.w ;
		const h = this.frameData.sourceSize.h;
		return { x: (w - (w - this.frameData.frame.w)/2) * scale * this.anchor.x, y: (h - (h - this.frameData.frame.h)/2) * scale * this.anchor.y};
	}
	
	get position(){
		return new Vertex(this.matrix.e, this.matrix.f);	
	}
	
	get boundingBox(){
		let pt = this.position;
		let w = this.frameData.frame.w * this.scale;
		let h = this.frameData.frame.h * this.scale;
		pt.x -= w * this.anchor.x;
		pt.y -= h * this.anchor.y;
		return new Rect(pt.x, pt.y, w, h);
	}
	
	 get config(){
		let json;
		 if (this.rest!=null){
			json = { nodeName: this.node.name,
					 anchor:this.anchor,
					 position:this.rest.position,
					 scale:this.rest.scale,
					 rotation:this.rest.rotation,
					 opacity:this.rest.opacity,
				     zOrder:this.zOrder } 
		 }else{
		 	json = { nodeName: this.node.name,
					 anchor:this.anchor,
					 position:{x:this.x, y:this.y},
					 scale:this.scale,
					 rotation:this.rotation,
					 opacity:this.opacity,
				     zOrder:this.zOrder }
	 	}
		if (this.children!=null && this.children.length>0){
			json.children = []
			for (let i=0; i<this.children.length; i++){
				json.children.push(this.children[i].config);
			}
		}
		return json;
	}
	
	getRotation(){
		let rotation = this.rotation;
		if (this.parent!=null){
			rotation += this.parent.getRotation();
		}
		return rotation;
	}
	
	getScale(){
		let scale = this.scale;
		if (this.parent!=null){
			scale *= this.parent.getScale();
		}
		return scale;
	}
	
	update(dt){
		// Draw the animation
		let a = Math.cos(this.rotation);
		let b = Math.sin(this.rotation);
		this.matrix = new Matrix(a*this.scale,b,-b,a*this.scale,this.x,this.y);
		if (this.parent!=null) this.matrix.mult(this.parent.matrix);
		for (let i=0; i<this.children.length; i++){
			let child = this.children[i];
			this.children[i].update(dt);
		}
	}
	
	setRest(restore=true){
		//Animations are from the rest position
		if (restore){
			if (this.rest!=null){
				this.frameData = window.spritoon.app.spriteData.frames[this.rest.imageIndex];
				this.x = this.rest.position.x;
				this.y = this.rest.position.y;
				this.scale = this.rest.scale;
				this.rotation = this.rest.rotation;
				this.opacity = this.rest.opacity;
			}
		}else{
			this.rest = {};
			this.rest.imageIndex = this.frameData.index;
			this.rest.position = { x:this.x, y:this.y }
			this.rest.scale = this.scale;
			this.rest.rotation = this.rotation;
			this.rest.opacity = this.opacity;
		}
	}
	
	render(context, flipped=false) {
		let offset = this.offset;
		let rotation = this.getRotation();
		let scale = this.getScale();
		let alpha = context.globalAlpha;
		
		context.globalAlpha = this.opacity;
		
		if (flipped){
			context.save();

			context.translate(this.matrix.e, this.matrix.f);
			context.rotate(rotation);
			context.drawImage(
			   this.flippedImage,
			   this.flippedImage.width - this.frameData.frame.x - this.frameData.frame.w,
			   this.frameData.frame.y,
			   this.frameData.frame.w,
			   this.frameData.frame.h,
			   -offset.x,
			   -offset.y,
			   this.frameData.frame.w * scale,
			   this.frameData.frame.h * scale
			);

			context.restore();
		}else{
			if (rotation!=0){
				context.save();

				context.translate(this.matrix.e, this.matrix.f);
				context.rotate(rotation);
				context.drawImage(
				   this.image,
				   this.frameData.frame.x,
				   this.frameData.frame.y,
				   this.frameData.frame.w,
				   this.frameData.frame.h,
				   -offset.x,
				   -offset.y,
				   this.frameData.frame.w * scale,
				   this.frameData.frame.h * scale
				);

				context.restore();
			}else{
				context.drawImage(
				   this.image,
				   this.frameData.frame.x,
				   this.frameData.frame.y,
				   this.frameData.frame.w,
				   this.frameData.frame.h,
				   this.matrix.e - offset.x,
				   this.matrix.f - offset.y,
				   this.frameData.frame.w * scale,
				   this.frameData.frame.h * scale
				);
			}
		}
		
		context.globalAlpha = alpha;
	}
}

/* An Action defines the motion of sprite layers in an Actor */
class Action{
	constructor(name, sprites){
		this.name = name;
		this.layers = {};
		this.sprites = sprites;
	}
	
	addKey(layerName, channelName, time, value){
		let layer = this.layers[layerName];
		if (layer==null){
			this.layers[layerName] = { image:[], x:[], y:[], rotation:[], scale:[], opacity:[] };
			layer = this.layers[layerName];
		}
		let channel = layer[channelName];
		if (channel==null) return; 
		let key = new Key(time, value);
		let insertIndex = 0;
		if (channel.length==0){
			channel.push(key);
		}else{
			for(let i=0; i<channel.length; i++){
				if (Math.abs(channel[i].time - time)<0.05){
					channel[i].time = time;
					channel[i].value = value;
					break;
				}else if (i==(channel.length-1)){
					if (time>channel[i].time){
						channel.push(key);
					}else{
						channel.splice(i, 0, key);
					}
					break;
				}else if (time>channel[i].time && time<channel[i+1].time){
					channel.splice(i+1, 0, key);
					break;
				}
			}
		}
		
		if (window.spritoon.app.timeline!=null) window.spritoon.app.timeline.data = layer;
	}
	
	update(){
		this.updateKeys();
		for(let prop in this.layers){
			let layer = this.layers[prop];
			let image = (layer.image==null) ? [] : layer.image; 
			let x = (layer.x==null) ? [] : layer.x; 
			let y = (layer.y==null) ? [] : layer.y; 
			let rotation = (layer.rotation==null) ? [] : layer.rotation; 
			let scale = (layer.scale==null) ? [] : layer.scale; 
			let opacity = (layer.opacity==null) ? [] : layer.opacity; 
			this.layers[prop] = { image:image, x:x, y:y, rotation:rotation, scale:scale, opacity:opacity };
		}	
	}
	
	updateKeys(){
		//Used to restore Key objects after loading from JSON
		for(let prop in this.layers){
			let layer = this.layers[prop];
			for(let channelName in layer){
				let channel = layer[channelName];
				for(let i=0; i<channel.length; i++){
					channel[i] = new Key(channel[i].time, channel[i].value, channel[i].easing);
				}
				//Now order them
				let moved;
				do{
					moved = false;
					for(let i=1; i<channel.length; i++){
						if (channel[i-1].time>channel[i].time){
							//Swap
							channel[i-1] = channel.splice(i, 1, channel[i-1])[0];
							moved = true;
						}
					}
				}while(moved);
			}
		}
		
	}
	
	getSprite(name){
		let sprite;
		
		for(let i=0; i<this.sprites.length; i++){
			if (this.sprites[i].node.name == name){
				sprite = this.sprites[i];
				break;
			}
		}
		
		return sprite;
	}
	
	setTime(time){
		for(let prop in this.layers){
			let sprite = this.getSprite(prop);
			if (sprite == null) return;
			let layer = this.layers[prop];

			for(let channelName in layer){
				let channel = layer[channelName];
				let prevKey = null;
				for(let i=0; i<channel.length; i++){
					let key = channel[i];
					if (time==key.time){
						if (channelName=="x" || channelName=="y"){
							sprite[channelName] = sprite.rest.position[channelName] + key.value; 
						}else{
							sprite[channelName] = sprite.rest[channelName] + key.value; 
						}
						break;
					}else if (i>0 && time>prevKey.time && time<key.time){
						let easing = new Easing(prevKey.value, key.value, (key.time - prevKey.time), prevKey.time, key.easing);
						//let delta = (time - prevKey.time)/(key.time - prevKey.time);
						//let value = (1-delta) * prevKey.value + delta * key.value;
						let value = easing.value(time);
						if (channelName=="x" || channelName=="y"){
							sprite[channelName] = sprite.rest.position[channelName] + value; 
						}else{
							sprite[channelName] = sprite.rest[channelName] + value; 
						}
						break;
					}
					prevKey = key;
				}
			}
		}
	}
}

/* A channel in an Action is a series of Keys that are attached to sprite. They are used to manipulate the image, x, y, scale, rotation, opacity. After Key one the easing value is used to control the motion */ 
class Key{
	constructor(time, value, easing="linear"){
		this.time = Number(time);
		this.value = Number(value);
		this.easing = easing;
		if (isNaN(this.value)) this.value = 0;
	}
}

/* A Vertex is a simple definition that holds an x and y value and allows you to add and subtract Vertices */
class Vertex{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	
	add(v){
		this.x += v.x;
		this.y += v.y;
	}
	
	sub(v){
		this.x -= v.x;
		this.y -= v.y;
	}
	
	normalize(){
		this.x /= this.mag;
		this.y /= this.mag;
	}
	
	get mag(){
		return Math.sqrt(this.x*this.x + this.y*this.y);
	}
	
	distanceTo(b){
		let v = new Vertex(this.x - b.x, this.y - b.y);
		return v.mag();
	}
}

/* A simple class to define a Rectangle */
class Rect{
	constructor(x=0,y=0,w=0,h=0){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}
	
	get left(){
		return this.x;
	}
	
	set left(value){
		this.x = value;
	}
	
	get right(){
		return this.x + this.w;
	}
	
	set right(value){
		this.w = value - this.x;
	}
	
	get top(){
		return this.y;
	}
	
	set top(value){
		this.y = value;
	}
	
	get bottom(){
		return this.y + this.h;
	}
	
	set bottom(value){
		this.h = value - this.y;
	}
	
	get width(){
		return this.w;
	}
	
	set width(value){
		this.w = value;
	}
	
	get height(){
		return this.h;
	}
	
	set height(value){
		this.h = value;
	}
	
	inRect(pt){
		return (pt.x>this.x && pt.x<(this.x + this.w) && pt.y>this.y && pt.y<(this.y + this.h));
	}
	
	/*overlaps(r) {
		let tw = this.w;
		let th = this.h;
		let rw = r.w;
		let rh = r.h;
		if (rw <= 0 || rh <= 0 || tw <= 0 || th <= 0) {
			return false;
		}
		let tx = this.x;
		let ty = this.y;
		let rx = r.x;
		let ry = r.y;
		rw += rx;//rw = right
		rh += ry;//rh = bottom
		tw += tx;//tw = right
		th += ty;//th = bottom
		//      overflow || intersect
		return ((rw < rx || rw > tx) &&
				(rh < ry || rh > ty) &&
				(tw < tx || tw > rx) &&
				(th < ty || th > ry));
	}*/
	
	overlaps(r){
		// If one rectangle is on left side of other
		//if (l1.x > r2.x || l2.x > r1.x)
		//l = top/left r = bottom/right
		if (this.left > r.right || r.left > this.right) return false;

		// If one rectangle is above other
		//if (l1.y < r2.y || l2.y < r1.y)
		if (this.bottom < r.top || r.bottom < this.top)	return false;
 
    	return true;
	}
}

/* Simple 2d matrix class used when updating sprites that have parents */
class Matrix{
	constructor(a=1,b=0,c=0,d=1,e=0,f=0){
		//a c e
		//b d f
		//0 0 1
		if (typeof a === "object"){
			this.copy(a);
		}else{
			this.a = a;
			this.b = b;
			this.c = c;
			this.d = d;
			this.e = e;
			this.f = f;
		}
	}
	
	reset(a=1,b=0,c=0,d=1,e=0,f=0){
		if (typeof a === "object"){
			this.copy(a);
		}else{
			this.a = a;
			this.b = b;
			this.c = c;
			this.d = d;
			this.e = e;
			this.f = f;
		}
	}
	
	copy(m){
		if (typeof m === "object"){
			this.a = m.a;	
			this.b = m.b;	
			this.c = m.c;	
			this.d = m.d;	
			this.e = m.e;	
			this.f = m.f;
			return true;
		}else{
			return false;
		}
	}
	
	plus(m){
		if (typeof m === "object"){
			this.a += m.a;
			this.b += m.b;
			this.c += m.c;
			this.d += m.d;
			this.e += m.e;
			this.f += m.f;
			return true;
		}else{
			return false;
		}
	}
	
	minus(m){
		if (typeof m === "object"){
			this.a -= m.a;
			this.b -= m.b;
			this.c -= m.c;
			this.d -= m.d;
			this.e -= m.e;
			this.f -= m.f;
			return true;
		}else{
			return false;
		}
	}
	
	mult(m){
		if (typeof m === "object"){
			let a = m.a * this.a + m.c * this.b;
			let b = m.b * this.a + m.d * this.b;
			let c = m.a * this.c + m.c * this.d;
			let d = m.b * this.c + m.d * this.d;
			let e = m.a * this.e + m.c * this.f + m.e;
			let f = m.b * this.e + m.d * this.f + m.f;
			this.a = a;
			this.b = b;
			this.c = c;
			this.d = d;
			this.e = e;
			this.f = f;
			return true;
		}else{
			return false;
		}
	}
	
	toString(){
		return this.a + ", " + this.b + ", " + this.c + "\n" + this.d + ", " + this.e + ", " + this.f;
	}
}

/*
 *
 * TERMS OF USE - EASING EQUATIONS - Based on
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
*/

class Easing{
	// t: current time, b: begInnIng value, c: change In value, d: duration
	constructor(start, end, duration, startTime=0, type='linear'){
		this.b = start;
		this.c = end - start;
		this.d = duration;
		this.type = type;
		this.startTime = startTime;
	}
	
	value(time){
		this.t = time - this.startTime;
		return this[this.type]();
	}
	
	linear(){
		return this.c*(this.t/this.d) + this.b;	
	}
	
	inQuad() {
		return this.c*(this.t/=this.d)*this.t + this.b;
	}
	
	outQuad() {
		return -this.c*(this.t/=this.d)*(this.t-2) + this.b;
	}
	
	inOutQuad() {
		if ((this.t/=this.d/2) < 1) return this.c/2*this.t*this.t + this.b;
		return -this.c/2 * ((--this.t)*(this.t-2) - 1) + this.b;
	}
	
	projectile(){
		let c = this.c;
		let b = this.b;
		let t = this.t;
		this.t *= 2;
		let result;
		let func;
		if (this.t<this.d){
			result = this.outQuad();
			func = "outQuad";
		}else{
			this.t -= this.d;
			this.b += c;
			this.c = -c;
			result = this.inQuad();
			func = "inQuad";
		}
		console.log("projectile: " + result.toFixed(2) + " time:" + this.t.toFixed(2) + " func:" + func);
		this.b = b;
		this.c = c;
		this.t = t;
		return result;
	}
	
	inCubic() {
		return this.c*(this.t/=this.d)*this.t*this.t + this.b;
	}
	
	outCubic() {
		return this.c*((this.t=this.t/this.d-1)*this.t*this.t + 1) + this.b;
	}
	
	inOutCubic() {
		if ((this.t/=this.d/2) < 1) return this.c/2*this.t*this.t*this.t + this.b;
		return this.c/2*((this.t-=2)*this.t*this.t + 2) + this.b;
	}
	
	inQuart() {
		return this.c*(this.t/=this.d)*this.t*this.t*this.t + this.b;
	}
	
	outQuart() {
		return -this.c * ((this.t=this.t/this.d-1)*this.t*this.t*this.t - 1) + this.b;
	}
	
	inOutQuart() {
		if ((this.t/=this.d/2) < 1) return this.c/2*this.t*this.t*this.t*this.t + this.b;
		return -this.c/2 * ((this.t-=2)*this.t*this.t*this.t - 2) + this.b;
	}
	
	inQuint() {
		return this.c*(this.t/=this.d)*this.t*this.t*this.t*this.t + this.b;
	}
	
	outQuint() {
		return this.c*((this.t=this.t/this.d-1)*this.t*this.t*this.t*this.t + 1) + this.b;
	}
	
	inOutQuint() {
		if ((this.t/=this.d/2) < 1) return this.c/2*this.t*this.t*this.t*this.t*this.t + this.b;
		return this.c/2*((this.t-=2)*this.t*this.t*this.t*this.t + 2) + this.b;
	}
	
	inSine() {
		return -this.c * Math.cos(this.t/this.d * (Math.PI/2)) + this.c + this.b;
	}
	
	outSine() {
		return this.c * Math.sin(this.t/this.d * (Math.PI/2)) + this.b;
	}
	
	inOutSine() {
		return -this.c/2 * (Math.cos(Math.PI*this.t/this.d) - 1) + this.b;
	}
	
	inExpo() {
		return (this.t==0) ? this.b : this.c * Math.pow(2, 10 * (this.t/this.d - 1)) + this.b;
	}
	
	outExpo() {
		return (this.t==this.d) ? this.b+this.c : this.c * (-Math.pow(2, -10 * this.t/this.d) + 1) + this.b;
	}
	
	inOutExpo() {
		if (this.t==0) return this.b;
		if (this.t==this.d) return this.b+this.c;
		if ((this.t/=this.d/2) < 1) return this.c/2 * Math.pow(2, 10 * (this.t - 1)) + this.b;
		return this.c/2 * (-Math.pow(2, -10 * --this.t) + 2) + this.b;
	}
	
	inCirc() {
		return -this.c * (Math.sqrt(1 - (this.t/=this.d)*this.t) - 1) + this.b;
	}
	
	outCirc() {
		return this.c * Math.sqrt(1 - (this.t=this.t/this.d-1)*this.t) + this.b;
	}
	
	inOutCirc() {
		if ((this.t/=this.d/2) < 1) return -this.c/2 * (Math.sqrt(1 - this.t*this.t) - 1) + this.b;
		return this.c/2 * (Math.sqrt(1 - (this.t-=2)*this.t) + 1) + this.b;
	}
	
	inElastic() {
		let s=1.70158, p=0, a=this.c;
		if (this.t==0) return this.b;  if ((this.t/=this.d)==1) return this.b+this.c;  if (!p) p=this.d*.3;
		if (a < Math.abs(this.c)) { a=this.c; let s=p/4; }
		else{ let s = p/(2*Math.PI) * Math.asin (this.c/a) };
		return -(a*Math.pow(2,10*(this.t-=1)) * Math.sin( (this.t*this.d-s)*(2*Math.PI)/p )) + this.b;
	}
	
	outElastic() {
		let s=1.70158, p=0, a=this.c;
		if (this.t==0) return this.b;  if ((this.t/=this.d)==1) return this.b+this.c;  if (!p) p=this.d*.3;
		if (a < Math.abs(this.c)) { a=this.c; let s=p/4; }
		else{ let s = p/(2*Math.PI) * Math.asin (this.c/a) };
		return a*Math.pow(2,-10*this.t) * Math.sin( (this.t*this.d-s)*(2*Math.PI)/p ) + this.c + this.b;
	}
	
	inOutElastic() {
		let s=1.70158, p=0, a=this.c;
		if (this.t==0) return this.b;  if ((this.t/=this.d/2)==2) return this.b+this.c;  if (!p) p=this.d*(.3*1.5);
		if (a < Math.abs(this.c)) { a=this.c; let s=p/4; }
		else{ let s = p/(2*Math.PI) * Math.asin (this.c/a) };
		if (this.t < 1) return -.5*(a*Math.pow(2,10*(this.t-=1)) * Math.sin( (this.t*this.d-s)*(2*Math.PI)/p )) + this.b;
		return a*Math.pow(2,-10*(this.t-=1)) * Math.sin( (this.t*this.d-s)*(2*Math.PI)/p )*.5 + this.c + this.b;
	}
	
	inBack() {
		let s = 1.70158;
		return this.c*(this.t/=this.d)*this.t*((s+1)*this.t - s) + this.b;
	}
	
	outBack() {
		let s = 1.70158;
		return this.c*((this.t=this.t/this.d-1)*this.t*((s+1)*this.t + s) + 1) + this.b;
	}
	
	inOutBack() {
		let s = 1.70158; 
		if ((this.t/=this.d/2) < 1) return this.c/2*(this.t*this.t*(((s*=(1.525))+1)*this.t - s)) + this.b;
		return this.c/2*((this.t-=2)*this.t*(((s*=(1.525))+1)*this.t + s) + 2) + this.b;
	}
	
	inBounce(t=this.t, b=this.b) {
		return this.c - this.outBounce (this.d-t, 0) + b;
	}
	
	outBounce(t=this.t, b=this.b) {
		if ((t/=this.d) < (1/2.75)) {
			return this.c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return this.c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return this.c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return this.c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	}
	
	inOutBounce() {
		if (this.t < this.d/2) return this.inBounce (this.t*2, 0) * .5 + this.b;
		return this.outBounce (this.t*2-this.d, 0) * .5 + this.c*.5 + this.b;
	}
}

class Emitter{
	constructor(options){
		this.emissionRate = (options.emissionRate!=undefined) ? options.emissionRate : 33;
		this.particleCount = (options.particleCount!=undefined) ? options.particleCount : 100;
		this.position = (options.x!=undefined) ? { x: options.x, y: options.y } : { x:0, y:0 };
		this.life = (options.life!=undefined) ? options.life : 3;
		this.speed = (options.speed!=undefined) ? options.speed : 10;
		this.speedVariation = (options.speedVariation!=undefined) ? options.speedVariation : 0.6;
		this.angleVariation = (options.angleVariation!=undefined && options.angle!=undefined) ? options.angleVariation : 1;
		this.theta = (options.angle!=undefined) ? options.angle * Math.PI / 180 : Math.random()*Math.PI*2;
		this.particleLife = (options.particlelife!=undefined) ? options.particlelife : 1;
		this.scaleWithAge = (options.scaleWithAge!=undefined) ? options.scaleWithAge : true;
		this.additive = (options.additive!=undefined) ? options.additive : false;
		this.canvasOffset = (options.canvasOffset!=undefined) ? options.canvasOffset : { x:0, y: 0 };
		
		this.init(options);
	}
	
	init(options){
		const opacity = (options.opacity!=undefined) ? options.opacity : 1;
		const scale = (options.scale!=undefined) ? options.scale : 1;
		const rotation = (options.rotation!=undefined) ? options.rotation : 0;
		const spin = (options.spin!=undefined) ? options.spin : 0;
		const gravity = (options.gravity==undefined) ? 0 : options.gravity;
		const index = (options.index!=undefined) ? options.index : 9;
		const image = options.image;
		const json = options.json;
		
		const poptions = {
			emitter: this,
			image: image,
			json: json,
			index: index,
			scale: scale,
			opacity: opacity,
			angle: this.theta,
			x: 0,
			y: 0,
			gravity: gravity,
			rotation: rotation,
			spin: spin,
			speed: this.speed,
			scaleWithAge: this.scaleWithAge,
			life: this.particleLife
		}
		
		this.particles = [];
		for(let i=0; i<100; i++){
			const particle = new Particle(poptions);
			particle.life = 0;
			this.particles.push(particle);
		}
		
		this.spawnTime = 0;
		this.spawnInterval = 1/this.emissionRate;
	}
	
	update(dt){
		this.life -= dt;
		this.spawnTime += dt;
		if (this.spawnTime>this.spawnInterval){
			for(let particle of this.particles){
				if (particle.life<=0){
					const speed = this.speed*(1-this.speedVariation) + this.speedVariation*Math.random()*this.speed;
					let theta = this.theta;
					theta += (this.angleVariation*(Math.random()-0.5)) * Math.PI * 2;
					//console.log(theta);
					particle.reset(speed, theta);
					this.spawnTime -= this.spawnInterval;
					if (this.spawnTime<=0) break;
				}
			}
		}
		
		for(let particle of this.particles){
			if (particle==null || particle.life<=0) continue;
			particle.update(dt);
		}
	}
	
	render(context){
		const op = context.globalCompositeOperation;
		if (this.additive) context.globalCompositeOperation = "lighter";
		for(let particle of this.particles){
			if (particle==null || particle.life<=0) continue;
			particle.render(context);
		}
		context.globalCompositeOperation = op;
	}
}
		
class Particle{
	constructor(options){
		if (options.emitter!=undefined) this.emitter = options.emitter;
		this.position = (options.x!=undefined) ? { x: options.x, y: options.y } : { x:0, y:0 };
		this.life = (options.life!=undefined) ? options.life : 1;
		const theta = (options.angle!=undefined) ? options.angle * Math.PI / 180 : Math.random()*Math.PI*2;
		const speed = (options.speed!=undefined) ? options.speed : 10;
		this.opacity = (options.opacity!=undefined) ? options.opacity : 1;
		this.scale = (options.scale!=undefined) ? options.scale : 1;
		this.rotation = (options.rotation!=undefined) ? options.rotation : 0;
		this.radialAccel = (options.rotation!=undefined) ? options.radialAccel : 0;
		this.origin = { x:this.position.x, y:this.position.y, life:this.life, scale:this.scale, opacity:this.opacity, rotation:this.rotation };
		this.scaleWithAge = (options.scaleWithAge!=undefined) ? options.scaleWithAge : true;
		this.gravity = (options.gravity==undefined) ? 0 : options.gravity;
		if (options.image!=undefined && options.json!=undefined && options.index != undefined){
			this.frame = options.json.frames[options.index].frame;
			this.image = options.image;
		}
		this.velocity = {
			x: speed * Math.cos(theta),
    		y: -speed * Math.sin(theta)
		}
		this.color = (options.color!=undefined) ? options.color : "#00f";
	}
	
	get canvasPosition(){
		const emitterPos = (this.emitter!=undefined) ? this.emitter.position : {x:0,y:0};
		return { x:emitterPos.x + this.position.x + this.emitter.canvasOffset.x, y:emitterPos.y + this.position.y + this.emitter.canvasOffset.y };
	}
	
	reset(speed, theta){
		this.life = this.origin.life;
		this.position.x = this.origin.x;
		this.position.y = this.origin.y;
		
		this.velocity = {
			x: speed * Math.cos(theta),
    		y: -speed * Math.sin(theta)
		};
		
		this.rotation = this.origin.rotation;
		this.radial = 0;
	}
	
	update(dt){
		this.life -= dt;
		
		let ratio = this.life / this.origin.life;
		if (ratio<0) ratio = 0;
    	if (this.scaleWithAge) this.scale = this.origin.scale * ratio;
		const fadeIn = 0.7;
		this.opacity = (ratio>fadeIn) ? this.origin.opacity * (1.0 - ratio)/(1.0 - fadeIn) : this.origin.opacity * (ratio/fadeIn);
		this.radial += this.radialAccel*dt;
		this.rotation += this.radial;
		this.velocity.y += this.gravity * dt;
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
	}
	
	render(context){
		const alpha = context.globalAlpha;
		context.globalAlpha = this.opacity;
		const position = this.canvasPosition;
		
		if (this.image!=undefined){
			context.translate(position.x, position.y);
			context.rotate(this.rotation);
			context.drawImage(
				this.image,
				this.frame.x,
				this.frame.y,
				this.frame.w,
				this.frame.h,
				-this.frame.w/2,
				-this.frame.h/2,
				this.frame.w * this.scale,
				this.frame.h * this.scale
			)
			context.setTransform(1,0,0,1,0,0);
		}else{
			context.fillStyle = this.color;
			context.fillRect(position.x, position.y, 5, 5);
		}
		context.globalAlpha = alpha;
	}
}

class Preloader{
	constructor(options){
		this.assets = {};
		for(let asset of options.assets){
			this.assets[asset] = { loaded:0, complete:false };
			this.load(asset);
		}
		this.onprogress = options.onprogress;
		this.oncomplete = options.oncomplete;
	}
	
	checkCompleted(){
		for(let prop in this.assets){
			const asset = this.assets[prop];
			if (!asset.complete) return false;
		}
		return true;
	}
	
	get progress(){
		let total = 0;
		let loaded = 0;
		
		for(let prop in this.assets){
			const asset = this.assets[prop];
			if (asset.total == undefined){
				loaded = 0;
				break;
			}
			loaded += asset.loaded;
			total += asset.total;
		}
		
		return loaded/total;
	}
	
	load(url){
		const loader = this;
		var xobj = new XMLHttpRequest();
		xobj.overrideMimeType("application/json");
		xobj.open('GET', url, true); 
		xobj.onreadystatechange = function () {
			  if (xobj.readyState == 4 && xobj.status == "200") {
				  loader.assets[url].complete = true;
				  if (loader.checkCompleted()) loader.oncomplete();	
			  }
		};
		xobj.onprogress = function(e){
			const asset = loader.assets[url];
			asset.loaded = e.loaded;
			asset.total = e.total;
			loader.onprogress(loader.progress);
		}
		xobj.send(null);
	}
}

class SFX{
	constructor(options){
		this.context = options.context;
		const volume = (options.volume!=undefined) ? options.volume : 1.0;
		this.gainNode = this.context.createGain();
		this.gainNode.gain.setValueAtTime(volume, this.context.currentTime);
		this.gainNode.connect(this.context.destination);
		this._loop = (options.loop==undefined) ? false : options.loop;
		this.fadeDuration = (options.fadeDuration==undefined) ? 0.5 : options.fadeDuration;
		this.autoplay = (options.autoplay==undefined) ? false : options.autoplay;
		this.buffer = null;
		
		let codec;
		for(let prop in options.src){
			if (prop=="webm" && SFX.supportsVideoType(prop)){
				codec = prop;
				break;
			}
			if (prop=="mp3"){
				codec = prop;
			}
		}
		
		if (codec!=undefined){
			this.url = options.src[codec];
			this.load(this.url);
		}else{
			console.warn("Browser does not support any of the supplied audio files");
		}
	}
	
	static supportsVideoType(type) {
		let video;
	  	// Allow user to create shortcuts, i.e. just "webm"
	  	let formats = {
			ogg: 'video/ogg; codecs="theora"',
			h264: 'video/mp4; codecs="avc1.42E01E"',
			webm: 'video/webm; codecs="vp8, vorbis"',
			vp9: 'video/webm; codecs="vp9"',
			hls: 'application/x-mpegURL; codecs="avc1.42E01E"'
		};

		if(!video) video = document.createElement('video');

	  	return video.canPlayType(formats[type] || type);
	}
	
	load(url) {
  		// Load buffer asynchronously
  		const request = new XMLHttpRequest();
  		request.open("GET", url, true);
  		request.responseType = "arraybuffer";

  		const sfx = this;

  		request.onload = function() {
			// Asynchronously decode the audio file data in request.response
    		sfx.context.decodeAudioData(
      			request.response,
      			function(buffer) {
					if (!buffer) {
						console.error('error decoding file data: ' + sfx.url);
						return;
					}
					sfx.buffer = buffer;
					if (sfx.autoplay) sfx.play();
				},
				function(error) {
					console.error('decodeAudioData error', error);
				}
    		);
  		}

  		request.onerror = function() {
    		console.error('SFX Loader: XHR error');
  		}

  		request.send();
	}
	
	set loop(value){
		this._loop = value;
		if (this.source!=undefined) this.source.loop = value;
	}
	
	play(){
		if (this.buffer==null) return; 
		if (this.source!=undefined) this.source.stop();
		this.source = this.context.createBufferSource();
		this.source.loop = this._loop;
	  	this.source.buffer = this.buffer;
	  	this.source.connect(this.gainNode);
		this.source.start(0);
	}
	
	set volume(value){
		this._volume = value;
		this.gainNode.gain.setTargetAtTime(value, this.context.currentTime + this.fadeDuration, 0);
	}
	
	pause(){
		if (this.source==undefined) return;
		this.source.stop();
	}
	
	stop(){
		if (this.source==undefined) return;
		this.source.stop();
	}
}