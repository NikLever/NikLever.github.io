/** An Actor is the root element to a sprite animation using a hierarchy of sprites.
It can be moved around by setting the x, y, rotation and scale values and can be flipped horizontally
It can automatically moved by setting the motion value.
Motion can define x, y, rotation and scale values these are the amount they will change by in 1 second
Motion values are in th coordinate system of the root element before scaling
An Actor contains layers which are individual sprites in a hierarchy 
@param {Object} spriteData json returned from the spritoon app that describes the nodes and hierarchy of a multi-layered sprite
@param {Object} frames json for spritesheet that describes the positioning of the individual images
@param {Image} image the actual image described by the frames json
@example
//this.spriteData is the data downloaded from the Spritoon online app niklever.com/spritoon
let actor = new Actor(this.spriteData.sprites[i], this.spriteData.frames, this.spriteImage);
**/
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
		
		//this.createFlipped();
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
	
	/**
	Choose an action from the action list passed in to the Actor constructor. Choose by index or by name
	@param {number} indexOrName if this value is a number then it is an index into the actions array passed to the constructor
	@param {string} indexOrName if this value is a string then it is the name of an action in the actions array
	@param {Object} motion (optional) is a object {x:0, y:0} where x and y describe the distance in pixels to travel in one second. 
	**/
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

	/**
	Call to update the Actor if it has an Action selected
	@param {number} dt time in seconds since last update
	**/
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
			let scale = { x:this.scale, y:this.scale };
			if (this.flipped) scale.x *= -1;
			this.matrix = new Matrix(a * scale.x,b,-b,a * scale.y,this.x,this.y);
			
			this.action.setTime(this.currentTime);
			
			for (let i=0; i<this.sprite.length; i++){
				this.sprite[i].update(dt);
			}
		}
	}
	
	/**
	Call to paint this actor to the context passed in
	@param {Object} context a 2d context for a html canvas
	**/
	render(context){
		if (this.layers == null) return;
		
		for(let i=0; i<this.layers.length; i++) this.layers[i].render(context, this.flipped);
	}
}

/**
Used to create a frame animation for a multi-framed sprite
@param {string} name the name of the animation
@param {object} options an option object that describes the animation.
@example let options = {
	name: "test",
	fps: 25, //default is 30 frames per second if not provided
	frames: [1,"..",10], //See the parseFrames method for more information
	loop: false, //defaults to true if omitted
	motion: {x:100, y:-50}, // defaults to 0,0 if omitted
	oncomplete: function(){ console.log('animation completed')}, //Called at animation end, called repeatedly for looping animation
}
**/
class Anim{
	constructor(name, options){
		this.name = name;
		this.fps = (options.fps==null) ? 30 : options.fps;
		this.frames = this.parseFrames(options.frames);
		this.frameData = options.frameData;
		this.loop = (options.loop==null) ? true : false;
		this.motion = options.motion;
		this.oncomplete = options.oncomplete;
		this.paused = false;
	}
	
	/**[0,"..",12,"s",0,"..",5]]<br>
	".." means count up from current index to value indicated by next element in the array<br>
	"r.." means count down from current index to value indicated by next element in the array<br>
	"..2" means count up in twos from current index to value indicated by next element in the array<br>
	"r..2" means count down in twos from current index to value indicated by next element in the array<br>
	"hXXX" means hold the previous index for the number of seconds specified by XXX<br>
	"s" means loop start - or 0 if not specified<br>
	This method is used by the frames parameter of the options object passed to the constructors
	**/
	parseFrames(frames){
		
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
						for(let idx=startIndex+1; idx<=endIndex; idx++) result.push(idx);
						break;
					case "r..":
						i++;
						startIndex = result[result.length-1];
						endIndex = frames[i];
						for(let idx=startIndex-1; idx>=endIndex; idx--) result.push(idx);
						break;
					case "..2":
						i++;
						startIndex = result[result.length-1];
						endIndex = frames[i];
						for(let idx=startIndex+1; idx<=endIndex; idx+=2) result.push(idx);
						break;
					case "r..2":
						i++;
						startIndex = result[result.length-1];
						endIndex = frames[i];
						for(let idx=startIndex-1; idx>=endIndex; idx-=2) result.push(idx);
						break;
					case "s":
						this.loopIndex = result.length;
						break;
					default:
						if (frames[i].startsWith("h")){
							const secs = Number(frames[i].substring(1));
							if (!isNaN(secs)){
								const count = Math.round(secs * this.fps);
								const copyIndex = result[result.length-1];
								for(let j=0; j<count; j++) result.push(copyIndex);
							}else{
								console.error(`Anim.parseframes ${frames[i]} does not contain a number.`);
							}
						}else{
							console.error("Anim.parseFrames found unexpected string " + frames[i]);
						}
						break;
				}
			}else{
				result.push(frames[i]);
			}
		}
		
		return result;
	}
	
	/**
	resets the time for this animation to zero and unpauses a paused animation. 
	**/
	reset(){
		this.currentTime = 0;
		this.paused = false;
		this.update();
	}
	
	/**
	Call to update an animation called by the AnimSprite if this Anim is attached to a sprite
	@param {number} dt (optional) updates the currentTime for an animation
	**/
	update(dt=0){
		if (this.paused) return;
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
		this.index = this.frames[index];
		
		if (this.frame==null){
			console.error(`Anim null frame for index ${index}, frames count:${this.frames.length}`);
		}
	}
}

/**
A class to handle sprites with frame animations
@param {string} name for this sprite
@param {object} options an options object that passes in the necessary parameters to create the sprite
@example 
const options = {
	context: context,//A canvas 2d context
	image: image,//a sprite sheet
	x: 100,
	y: 100,
	anchor: {0.5, 0.9}, //pivot point halfway across and near bottom of frame from spritesheet
	scale: 0.5, //(optional) defaults to 1
	opacity: 0.5, //(optional) defaults to 1
	rotation: 0.1, //(optional) defaults to 0
	backgroundPosition: null, //(optional) defaults to 0,0 allows offset relative to a background location
	physicsBody: null, //(optional) defaults to null  expects a Matter.Bodies object
	anims: anims, //An array of animations probably created using the Spritoon online app
}
let sprite = new AnimSprite('sprite', options);
**/
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
		this.backgroundPosition = options.backgroundPosition;
		this.physicsBody = options.physicsBody;
		this.anims = options.anims;
		this.sprite;
		this.className = "AnimSprite";
	}
	
	/**
	setter to set the animation it can be a name or a Anim object
	**/
	set anim(value){
		if (typeof(value)==="string" && this.anims!=null){
			if (this._anim!=undefined && this._anim.name==value) return;
			this._anim = this.getAnimNamed(value);
			this._anim.reset();
		}else{
			this._anim = value;
			this._anim.reset();
		}
		if (this._anim!=null && this._anim.motion!=null && this._anim.motion.easing!=null){
			let options = value.motion.easing;
			//(start, end, duration, startTime=0, type='linear')
			this._anim.easing = new Easing(value.y, value.y + options.change, options.duration, 0, options.type);
		}
		this.animTime = 0;
	}
	
	/**
	@returns {object} the current animation
	**/
	get anim(){
		return this._anim;
	}
	
	/**
	@param {string} a name that matches an Anim name from the anims array
	@returns {object} an animation from the anims array
	**/
	getAnimNamed(name){
		if (this.anims==null) return null;
		
		for(let i=0; i<this.anims.length; i++){
			if (this.anims[i].name==name) return this.anims[i];
		}
		
		return null;
	}
	
	/**
	@return {string} the current animation name or none if none set
	**/
	get animName(){
		if (this._anim==null) return "none";
		return this._anim.name;
	}
	
	/**
	@returns {boolean} is the AnimSprite moving
	**/
	get moving(){
		if (this._anim===null) return false;
		if (this._anim.motion===null) return false;
		const dx = (this._anim.motion.x!==null) ? this._anim.motion.x : 0;
		const dy = (this._anim.motion.y!==null) ? this._anim.motion.y : 0;
		if (dx*dx + dy*dy==0) return false;
		return true;
	}
	
	get jumping(){
		return (this.animName=="jump");
	}
	
	/**
	Pauses the current animation for a defined length
	@param {number} secs the number of seconds to pause the animation
	@param {boolean} hide (optional - defaults to true) hides this sprite while animation is paused
	**/
	pauseAnim(secs, hide=true){
		if (hide) this.opacity = 0;
		if (this._anim!=null) this._anim.paused = true;
		this.pauseInfo = { time:0, secs:secs };
	}
	
	/**
	Call to update the sprite and it's attached animation
	@param {number} dt - time in seconds since last update
	**/
	update(dt){
		if (this._anim!=null){
			if (this._anim.paused){
				this.pauseInfo.time += dt;
				if (this.pauseInfo.time>=this.pauseInfo.secs){
					this._anim.paused = false;
					this.opacity = 1;
				}
			}
			this._anim.update(dt);
			this.frameData = this._anim.frame;
			if (this.physicsBody==null && this._anim.motion!=null){
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
	
	/**
	@returns {Rect} a rectangle x,y,w,h that encases the sprite
	**/
	get boundingBox(){
		let pt = new Vertex(this.x, this.y);
		let w = this.frameData.frame.w;
		let h = this.frameData.frame.h;
		pt.x -= (this.frameData.sourceSize.w - (this.frameData.sourceSize.w-w)/2) * this.scale * this.anchor.x;
		pt.y -= (this.frameData.sourceSize.h - (this.frameData.sourceSize.h-h)/2) * this.scale * this.anchor.y;
		return new Rect(pt.x, pt.y, w * this.scale, h * this.scale);
	}
	
	/**
	@param {object} pt - a pt x,y that is being tested, often a mouse or touch location
	@returns {boolean} true if the pt is inside the bounding box
	**/
	hitTest(pt){
		const bb = this.boundingBox;
		return (pt.x>=bb.x && pt.x<(bb.x+bb.w) && pt.y>=bb.y && pt.y<(bb.y + bb.h));
	}
	
	get offset(){
		const scale = this.scale;
		const w = this.frameData.sourceSize.w;
		const h = this.frameData.sourceSize.h;
        const x = this.frameData.spriteSourceSize.x;
        const y = this.frameData.spriteSourceSize.y;
		return { x: (w - x) * scale * this.anchor.x, y: (h - y) * scale * this.anchor.y};
	}
	
	/**
	Call to render this sprite to the context passed to the constructor
	**/
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
		let offset = this.offset;
		let canvasOffset = (this.canvasOffset==null) ? {x:0, y:0} : this.canvasOffset;
		
		let alpha = this.context.globalAlpha;
		this.context.globalAlpha = this.opacity;
		
		if (this.physicsBody!=null){
			this.context.translate(this.physicsBody.position.x, this.physicsBody.position.y);
			this.context.rotate(this.physicsBody.angle);
			this.context.drawImage(this.image, frame.x, frame.y, frame.w, frame.h, -(frame.w/2) * this.scale, -(frame.h/2)*this.scale, frame.w * this.scale, frame.h * this.scale);
		}else if (this.flipped){			
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
		}
		
		this.context.setTransform(1,0,0,1,0,0);
		
		if (this.debug){
			this.context.strokeStyle = "#fff";
			const bb = this.boundingBox;
			this.context.strokeRect(bb.x, bb.y, bb.w, bb.h);
			this.context.strokeStyle = "#ff0";
			this.context.beginPath();
			const centre = new Vertex(this.x + canvasOffset.x, this.y + canvasOffset.y);
			const size = 5;
			this.context.moveTo(centre.x - size, centre.y);
			this.context.lineTo(centre.x + size, centre.y);
			this.context.moveTo(centre.x, centre.y - size);
			this.context.lineTo(centre.x, centre.y + size);
			this.context.stroke();
		}
		
		this.context.globalAlpha = alpha;
	}
}

/** 
A Sprite is an individual image from the spritesheet 
@param {object} options - an object that describes this sprite
@example const options{
	name: "test",
	x: 100,
	y: 100,
	game: null, //(optional) The game that this sprite is attached to usual in this.sprites array
	frameData: frameData, // The frames array from a json file - not used if game is set
	image: image, //Spritesheet image - not used if game is set
	context: context,
	center: null, //if defined it overrides the x,y values and centres the sprite in the game canvas only used if game is defined
	frame: "sprite{04}.png", //will replace {04} with index padded to 4 zeroes, {03} would pad to 3 zeroes
	index: 1, //The index for the frame image
	anchor: {x:0.5, y:0.9}, //(optional - defaults to 0.5,0.5) rotation and scaling center as a ratio of the width and height
	scale: 0.5, //(optional - defaults to 1)
	opacity: 0.6, //(optional - defaults to 1)
	rotation: 0, //in radians
	zOrder: 0, (optional - defaults to 0) higher numbers appear infront of lower numbers
	// node: used when a sprite node is created by an Actor. 
	// config: used when a sprite node is created by an Actor
	// parent: used when a sprite node is created by an Actor
	// children: used when a sprite node is created by an Actor
}
**/
class Sprite {
				
	constructor(name, options){
		this.name = name;
		this.x = (options.x==null) ? 0 : options.x;
		this.y = (options.y==null) ? 0 : options.y;
		this.debug = (options.debug==undefined) ? false : options.debug;
		this.game = (options.game!=undefined) ? options.game : null;
		if (this.game != null){
			this.frames = this.game.spriteData.frames;	
			this.frameName = options.frame;
			if (options.index!=undefined){
				this.index = options.index;
			}else{
				this.frame = this.getFrame(options.frame);
			}
			this.context = this.game.context;
			this.image = this.game.spriteImage;
			if (options.center!=null && options.center){
				this.x = this.game.canvas.width/2;
				this.y = this.game.canvas.height/2;
			}
		}else{
			if (Array.isArray(options.frameData)){
				this.frames = options.frameData;
				this.frame = this.setFrame(options.frame);
			}else{
				this.frame = this.frameData.frame;
			}
			this.context = options.context;
			this.image = options.image;
		}
		this.anchor = (options.anchor==null) ? { x:0.5, y:0.5 } : options.anchor;
		this.scale = (options.scale==null) ? 1.0 : options.scale;
		this.opacity = (options.opacity==null) ? 1.0 : options.opacity;
		this.rotation = (options.rotation==null) ? 0 : options.rotation;
		this.zOrder = 0;
		this.className = "Sprite";
		
		if (options.node!=null){//Used for cut-out animation
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
	
	get index(){
		return this._index;
	}
	
	/**
	@param {number} - sets the frame based on the frame name and this index value
	**/
	set index(value){
		//It is assumed that this._frame is in the format imagename{0x}.png where x is the number of 0s
		//to add and {04} becomes 0001 if index=1 or 0023 if index=23
		if (this.game==undefined && !this.frames.isArray()){
			console.error("Sprite trying to set index when there is no access to the frames array");
		}
		if (this.frameName==null){
			console.error("Sprite trying to set index when _frame is null");
			return; //We can't do anything
		}
		const formatPos = { start:this.frameName.indexOf("{") };
		if (formatPos.start==-1){
			console.error("Sprite trying to set index when _frame does not contain formatting information")
			return; //Not correct formatting
		}
		formatPos.end = this.frameName.indexOf("}");
		if (formatPos.end==-1){
			console.error("Sprite trying to set index when _frame does not contain correnct formatting information")
			return; //Not correct formatting
		}
		let formatStr = this.frameName.substring(formatPos.start+1, formatPos.end);
		if (formatStr.startsWith('0')){
			formatStr = formatStr.substring(1);
			const count = Number(formatStr);
			const str = this.frameName.substr(0, formatPos.start);
			let suffix = String(value);
    		while (suffix.length < count) suffix = "0" + suffix;
    		const ext = this.frameName.substr(formatPos.end+1);
			const frameName = str + suffix + ext;
			this.frame = this.getFrame(frameName);
		}
		this._index = value;
	}
	
	getFrame(name){
		let frame;
		let found = false;
		for(frame of this.frames){
			if (frame.filename == name){
				found = true;
				break;
			}
		}
		if (!found) return null;
		return frame.frame;
	}
	
	get offset(){
		let scale = this.getScale();
		let result;
		try{
			result = new Vertex( this.frame.w * scale * this.anchor.x, this.frame.h * scale * this.anchor.y);
		}catch(e){
			console.log("Sprite.offset null error");
			result = new Vertex(0,0);
		}
		return result;
	}
	
	get position(){
		return new Vertex(this.matrix.e, this.matrix.f);	
	}
	
	get boundingBox(){
		let pt = this.position;
		let w = this.frame.w * this.scale;
		let h = this.frame.h * this.scale;
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
	
	/**
	@param {number} pt position x, y to test
	@return {boolean} returns true if pt is in the bounding box for this sprite
	**/
	hitTest(pt){
		const bb = this.boundingBox;
		return (pt.x>=bb.x && pt.x<(bb.x+bb.w) && pt.y>=bb.y && pt.y<(bb.y + bb.h));
	}
	
	/**
	Before a sprite can be displayed update MUST be called
	@param {number} dt - time since last update
	**/
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
	
	/**
	$param {boolean} restore (optional defaults to true) used for an Actor to define the rest position from which an action happens. If restore is true then the rest position is reset, if restore is false then the current position, rotation, scale and opacity is saved to the rest object.
	**/
	setRest(restore=true){
		//Animations are from the rest position
		if (restore){
			if (this.rest!=null){
				this.frame = this.frames[this.rest.imageIndex];
				this.x = this.rest.position.x;
				this.y = this.rest.position.y;
				this.scale = this.rest.scale;
				this.rotation = this.rest.rotation;
				this.opacity = this.rest.opacity;
			}
		}else{
			this.rest = {};
			if (this.frame.index==undefined){
				let index = 0;
				for(let frame of this.frames){
					frame.index = index++;
				}
			}
			this.rest.imageIndex = this.frame.index;
			this.rest.position = { x:this.x, y:this.y }
			this.rest.scale = this.scale;
			this.rest.rotation = this.rotation;
			this.rest.opacity = this.opacity;
		}
	}
	
	/**
	renders this sprite to the canvas context
	@param {object} context - (optional context passed to constructor used if missed) 
	@param {boolean} flipped - (optional defaults to false)
	**/
	render(context=this.context, flipped=false) {
		let offset = this.offset;
		let rotation = this.getRotation();
		let scale = this.getScale();
		let alpha = context.globalAlpha;
		
		context.globalAlpha = this.opacity;
		
		context.translate(this.matrix.e, this.matrix.f);
		context.rotate(rotation);
		if (flipped) context.scale(-1,1);
		context.drawImage(
		   this.image,
		   this.image.width - this.frame.x - this.frame.w,
		   this.frame.y,
		   this.frame.w,
		   this.frame.h,
		   -offset.x,
		   -offset.y,
		   this.frame.w * scale,
		   this.frame.h * scale
		);

		context.setTransform(1,0,0,1,0,0);
		
		if (this.debug){
			this.context.strokeStyle = "#fff";
			const bb = this.boundingBox;
			this.context.strokeRect(bb.x, bb.y, bb.w, bb.h);
		}
		
		context.globalAlpha = alpha;
	}
}

/**
An Action defines the motion of sprite layers in an Actor 
@param {string} name - name for this Action
@param {array} sprites - an array of sprites being controlled by this Action
**/
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

/**
A channel in an Action is a series of Keys that are attached to sprite. They are used to manipulate the image, x, y, scale, rotation, opacity. After Key one the easing value is used to control the motion 
@param {number} time - The time that we want this key to occur
@param {number} value - the value to be at at this time
@param {string} easing - (optional defaults to linear) see Easing for more details
**/ 
class Key{
	constructor(time, value, easing="linear"){
		this.time = Number(time);
		this.value = Number(value);
		this.easing = easing;
		if (isNaN(this.value)) this.value = 0;
	}
}

/** 
A Vertex is a simple definition that holds an x and y value and allows you to add and subtract Vertices 
@param {number} x 
@param {number} y
**/
class Vertex{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	
	/**
	add another Vertex
	@param {Vertex} v - another Vertex
	**/
	add(v){
		this.x += v.x;
		this.y += v.y;
	}
	
	/**
	subtract another Vertex
	@param {Vertex} v - another Vertex
	**/
	sub(v){
		this.x -= v.x;
		this.y -= v.y;
	}
	
	/**
	Treat this Vertex as a vector of length 1
	**/
	normalize(){
		this.x /= this.mag;
		this.y /= this.mag;
	}
	
	/**
	@return length of this Vertex as though it is a vector
	**/
	get mag(){
		return Math.sqrt(this.x*this.x + this.y*this.y);
	}
	
	/**
	@param {Vertex} b - another Vertex
	@return {number} the distance to Vertex passed in
	**/
	distanceTo(b){
		let v = new Vertex(this.x - b.x, this.y - b.y);
		return v.mag();
	}
}

/**
A simple class to define a Rectangle 
@param {number} x - x position
@param {number} y - y position
@param {number} w - width
@param {number} h - height
**/
class Rect{
	constructor(x=0,y=0,w=0,h=0){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}
	
	/**
	@param {object} pt - position x, y
	@return {boolean} true if pt is inside the rectangle
	**/
	inRect(pt){
		return (pt.x>this.x && pt.x<(this.x + this.w) && pt.y>this.y && pt.y<(this.y + this.h));
	}
}

/**
Simple 2d matrix class used when updating sprites that have parents<br>
[a,c,e]<br>
[b,d,f]<br>
[0,0,1]<br>
@param {number} a
@param {number} b
@param {number} c
@param {number} d
@param {number} e
@param {number} f
**/
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
	
	/**
If the parameters are not provided then the matrix becomes the identity
@param {number} a
@param {number} b
@param {number} c
@param {number} d
@param {number} e
@param {number} f
	**/
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
	
	/**
	Copies the passed in Matrix to this one
	@param {Matrix} m 
	**/
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
	
	/**
	Adds the passed in Matrix to this one
	@param {Matrix} m 
	**/
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
	
	/**
	Subtracts the passed in Matrix from this one
	@param {Matrix} m 
	**/
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
	
	/**
	Multiply this matrix with the passed in Matrix
	@param {Matrix} m 
	**/
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
/**
Class to handle easing functions. Based on Robert Penner's code.
@param {number} start - the value at the start of an easing
@param {number} end - the value to change to.
@param {number} duration - the time to elapse in seconds
@param {number} startTime - (optional defaults to 0) pass in Date.now()/1000 if you want times to be relative to now
@param {number} type - (optional defaults to linear)
**/

class Easing{
	// t: current time, b: begInnIng value, c: change In value, d: duration
	constructor(start, end, duration, startTime=0, type='linear'){
		this.b = start;
		this.c = end - start;
		this.d = duration;
		this.type = type;
		this.startTime = startTime;
	}
	
	/**
	@param {number} time - time from startTime
	@return {number} value between start and end based on the easing method
	**/
	value(time){
		this.t = time - this.startTime;
		return this[this.type]();
	}
	
	/**
	easing method that has the same increment throughout the duration, called by value do not call directly
	**/
	linear(){
		return this.c*(this.t/this.d) + this.b;	
	}
	
	/**
	easing method that has a slow start, called by value do not call directly
	**/
	inQuad() {
		return this.c*(this.t/=this.d)*this.t + this.b;
	}
	
	/**
	easing method that has a slow stop, called by value do not call directly
	**/
	outQuad() {
		return -this.c *(this.t/=this.d)*(this.t-2) + this.b;
	}
	
	/**
	easing method that has a slow start and slow end, called by value do not call directly
	**/
	inOutQuad() {
		if ((this.t/=this.d/2) < 1) return this.c/2*this.t*this.t + this.b;
		return -this.c/2 * ((--this.t)*(this.t-2) - 1) + this.b;
	}
	
	/**
	easing method that has a slow start, called by value do not call directly
	**/
	inCubic() {
		return this.c*(this.t/=this.d)*this.t*this.t + this.b;
	}
	
	/**
	easing method that has a slow stop, called by value do not call directly
	**/
	outCubic() {
		return this.c*((this.t=this.t/this.d-1)*this.t*this.t + 1) + this.b;
	}
	
	/**
	easing method that has a slow start and slow end, called by value do not call directly
	**/
	inOutCubic() {
		if ((this.t/=this.d/2) < 1) return this.c/2*this.t*this.t*this.t + this.b;
		return this.c/2*((this.t-=2)*this.t*this.t + 2) + this.b;
	}
	
	/**
	easing method that has a slow start, called by value do not call directly
	**/
	inQuart() {
		return this.c*(this.t/=this.d)*this.t*this.t*this.t + this.b;
	}
	
	/**
	easing method that has a slow stop, called by value do not call directly
	**/
	outQuart() {
		return -this.c * ((this.t=this.t/this.d-1)*this.t*this.t*this.t - 1) + this.b;
	}
	
	/**
	easing method that has a slow start and slow end, called by value do not call directly
	**/
	inOutQuart() {
		if ((this.t/=this.d/2) < 1) return this.c/2*this.t*this.t*this.t*this.t + this.b;
		return -this.c/2 * ((this.t-=2)*this.t*this.t*this.t - 2) + this.b;
	}
	
	/**
	easing method that has a slow start, called by value do not call directly
	**/
	inQuint() {
		return this.c*(this.t/=this.d)*this.t*this.t*this.t*this.t + this.b;
	}
	
	/**
	easing method that has a slow stop, called by value do not call directly
	**/
	outQuint() {
		return this.c*((this.t=this.t/this.d-1)*this.t*this.t*this.t*this.t + 1) + this.b;
	}
	
	/**
	easing method that has a slow start and slow end, called by value do not call directly
	**/
	inOutQuint() {
		if ((this.t/=this.d/2) < 1) return this.c/2*this.t*this.t*this.t*this.t*this.t + this.b;
		return this.c/2*((this.t-=2)*this.t*this.t*this.t*this.t + 2) + this.b;
	}
	
	/**
	easing method that has a slow start, called by value do not call directly
	**/
	inSine() {
		return -this.c * Math.cos(this.t/this.d * (Math.PI/2)) + this.c + this.b;
	}
	
	/**
	easing method that has a slow stop, called by value do not call directly
	**/
	outSine() {
		return this.c * Math.sin(this.t/this.d * (Math.PI/2)) + this.b;
	}
	
	/**
	easing method that has a slow start and slow end, called by value do not call directly
	**/
	inOutSine() {
		return -this.c/2 * (Math.cos(Math.PI*this.t/this.d) - 1) + this.b;
	}
	
	/**
	easing method that has a slow start, called by value do not call directly
	**/
	inExpo() {
		return (this.t==0) ? this.b : this.c * Math.pow(2, 10 * (this.t/this.d - 1)) + this.b;
	}
	
	/**
	easing method that has a slow stop, called by value do not call directly
	**/
	outExpo() {
		return (this.t==this.d) ? this.b+this.c : this.c * (-Math.pow(2, -10 * this.t/this.d) + 1) + this.b;
	}
	
	/**
	easing method that has a slow start and slow end, called by value do not call directly
	**/
	inOutExpo() {
		if (this.t==0) return this.b;
		if (this.t==this.d) return this.b+this.c;
		if ((this.t/=this.d/2) < 1) return this.c/2 * Math.pow(2, 10 * (this.t - 1)) + this.b;
		return this.c/2 * (-Math.pow(2, -10 * --this.t) + 2) + this.b;
	}
	
	/**
	easing method that has a slow start, called by value do not call directly
	**/
	inCirc() {
		return -this.c * (Math.sqrt(1 - (this.t/=this.d)*this.t) - 1) + this.b;
	}
	
	/**
	easing method that has a slow stop, called by value do not call directly
	**/
	outCirc() {
		return this.c * Math.sqrt(1 - (this.t=this.t/this.d-1)*this.t) + this.b;
	}
	
	/**
	easing method that has a slow start and slow end, called by value do not call directly
	**/
	inOutCirc() {
		if ((this.t/=this.d/2) < 1) return -this.c/2 * (Math.sqrt(1 - this.t*this.t) - 1) + this.b;
		return this.c/2 * (Math.sqrt(1 - (this.t-=2)*this.t) + 1) + this.b;
	}
	
	/**
	easing method that has a slow start, called by value do not call directly
	**/
	inElastic() {
		let s=1.70158, p=0, a=this.c;
		if (this.t==0) return this.b;  if ((this.t/=this.d)==1) return this.b+this.c;  if (!p) p=this.d*.3;
		if (a < Math.abs(this.c)) { a=this.c; let s=p/4; }
		else{ let s = p/(2*Math.PI) * Math.asin (this.c/a) };
		return -(a*Math.pow(2,10*(this.t-=1)) * Math.sin( (this.t*this.d-s)*(2*Math.PI)/p )) + this.b;
	}
	
	/**
	easing method that has a slow stop, called by value do not call directly
	**/
	outElastic() {
		let s=1.70158, p=0, a=this.c;
		if (this.t==0) return this.b;  if ((this.t/=this.d)==1) return this.b+this.c;  if (!p) p=this.d*.3;
		if (a < Math.abs(this.c)) { a=this.c; let s=p/4; }
		else{ let s = p/(2*Math.PI) * Math.asin (this.c/a) };
		return a*Math.pow(2,-10*this.t) * Math.sin( (this.t*this.d-s)*(2*Math.PI)/p ) + this.c + this.b;
	}
	
	/**
	easing method that has a slow start and slow end, called by value do not call directly
	**/
	inOutElastic() {
		let s=1.70158, p=0, a=this.c;
		if (this.t==0) return this.b;  if ((this.t/=this.d/2)==2) return this.b+this.c;  if (!p) p=this.d*(.3*1.5);
		if (a < Math.abs(this.c)) { a=this.c; let s=p/4; }
		else{ let s = p/(2*Math.PI) * Math.asin (this.c/a) };
		if (this.t < 1) return -.5*(a*Math.pow(2,10*(this.t-=1)) * Math.sin( (this.t*this.d-s)*(2*Math.PI)/p )) + this.b;
		return a*Math.pow(2,-10*(this.t-=1)) * Math.sin( (this.t*this.d-s)*(2*Math.PI)/p )*.5 + this.c + this.b;
	}
	
	/**
	easing method that has a slow start, called by value do not call directly
	**/
	inBack() {
		let s = 1.70158;
		return this.c*(this.t/=this.d)*this.t*((s+1)*this.t - s) + this.b;
	}
	
	/**
	easing method that has a slow stop, called by value do not call directly
	**/
	outBack() {
		let s = 1.70158;
		return this.c*((this.t=this.t/this.d-1)*this.t*((s+1)*this.t + s) + 1) + this.b;
	}
	
	/**
	easing method that has a slow start and slow end, called by value do not call directly
	**/
	inOutBack() {
		let s = 1.70158; 
		if ((this.t/=this.d/2) < 1) return this.c/2*(this.t*this.t*(((s*=(1.525))+1)*this.t - s)) + this.b;
		return this.c/2*((this.t-=2)*this.t*(((s*=(1.525))+1)*this.t + s) + 2) + this.b;
	}
	
	/**
	easing method that has a slow start, called by value do not call directly
	**/
	inBounce(t=this.t, b=this.b) {
		return this.c - this.outBounce (this.d-t, 0) + b;
	}
	
	/**
	easing method that has a slow stop, called by value do not call directly
	**/
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
	
	/**
	easing method that has a slow start and slow end, called by value do not call directly
	**/
	inOutBounce() {
		if (this.t < this.d/2) return this.inBounce (this.t*2, 0) * .5 + this.b;
		return this.outBounce (this.t*2-this.d, 0) * .5 + this.c*.5 + this.b;
	}
}

/**
Paints text inside a bounding rectangle, if autorender is not passed to the options object then it will be rendered to the canvas immediately
@param {object} context - a canvas 2d context
@param {string} text - the text to draw
@param {Rect} rect - a rectangle that defines the bounding shape of the text
@param {object} options - an options object that describes the color, alignment, lineHeight, fontSize and font of the text
@example 
const options = {
	font = "Verdana",
	fontSize = 30,
	lineHeight = 35,
	color = "#ff00aa",
	alignment = 'center'
}
const txt = new TextBlock(context, "This is the text to draw\nThis will be on a second line.", new Rect(100,100,200,80), options)
**/
class TextBlock{
	constructor(context, text, rect, options={}){
		this.context = context;
		this.text = text;
		this.rect = rect;
		this.color = (options.color==undefined) ? "#000" : options.color;
		this.alignment = (options.alignment==undefined) ? "center" : options.alignment;
		this.lineHeight = (options.lineHeight!=null) ? options.lineHeight : 30;
		let fontSize = (options.fontSize==undefined) ? 12 : options.fontSize;
		let font = (options.font==undefined) ? 'Arial' : options.font;
		this.font = `${fontSize}px ${font}`;
		if (options.autorender==null || options.autorender) this.render();
	}
	
	/**
	renders the TextBlock to the context
	**/
	render(){
		let paragraphs = this.text.split("\n");
		let line = "";
		let txt;
		let str = "";
		let top = this.rect.y;
		let offset;
		
		this.context.fillStyle = this.color;
		this.context.font = this.font;
		
		for(let paragraph of paragraphs){
			let words = paragraph.split(" ");
			let index = 0;
			while(index<words.length){
				line = "";
				str = "";
				do{
					line += str;
					if (line==""){
						str = words[index++];
					}else{
						str = (" " + words[index++]);
					}
					txt = this.context.measureText(line + str);
				}while(txt.width<this.rect.w && index<words.length);

				if (index<words.length){
					index--;
				}else{
					line += str;
				}
				txt = this.context.measureText(line);

				switch(this.alignment){
					case "center":
						offset = (this.rect.w - txt.width)/2;
						break;
					case "left":
						offset = 0;
						break;
					case "right":
						offset = this.rect.w - txt.width;
						break;
				}

				this.context.fillText(line, this.rect.x + offset, top);

				top += this.lineHeight;
			}
		}
	}
}

/**
Used by a particle effect
@param {object} options - can contain the following<br>
emissionRate - number of particles to emit per second - defaults to 33<br>
particleCount - the number of particles that the emitter controls - defaults to 100<br>
position - x,y position relative to the top left of the canvas - defaults to 0,0
life - the life time duration of the emitter in seconds - defaults to 3
speed - the distance a particle should move in each screen refresh - defaults to 10
speedVariation - the difference in speed for each particle - defaults to 0.6
angle - the angle of the particle emission in degrees 0 is left, 90 is down, 180 is right and 270 is up
angleVariation - the amount of variation from angle that is allowed as a ratio 0-1 - defaults to 1
particleLife - the life time duration of a particle in seconds
scaleWithAge - when rendering does the particle size scale up as it goes through its life time - defaults to true
additive - should the globalCompositeOperation be 'lighter' - defaults to false
canvasOffset - is the emitter relative to an offset position - defaults to 0,0
opacity - the opacity of a particle - defaults to 1
scale - the scale of a particle - defaults to 1
rotation - the angle of a particle - defaults to 0
spin - the angular speed of a particle - defaults to 0
gravity - the gravity applied to a particle - defaults to 0
image - the spritesheet image to use for a bitmap particle
json - the json that describes the spritesheet image
index - the index into the json that should be used for a particle
**/
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
	
	/**
	Call to update the particles
	@param {number} dt - time since last refresh
	**/
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
	
	/**
	Call to render the particle effect to the context
	@param {object} context - a canvas 2d context
	**/
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

/**
A simple class to use with an Emitter. Probably not used directly.
@param {object} options - An options object containing the parameters for the particle, see Emitter for details
**/
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

/**
A class to handle preloading assets
@param {object} options - An options object that defines the assets and callbacks for onprogress and oncomplete
@example 
**/
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
			if (prop=="mp3" && SFX.supportsVideoType(prop)){
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