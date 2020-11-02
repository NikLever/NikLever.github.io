class Game{
	constructor(index){
		this.canvas = document.getElementById('game');
		this.context = this.canvas.getContext("2d");
		this.assets = { xbloke:false, background:false, bits:false, particles:false };
		
		const sfxExt = (SFX.supportsVideoType("webm")) ? "webm" : "mp3";
		const game = this;
		const options = {
			assets:[
				`sfx/collect.${sfxExt}`,
				`sfx/jump.${sfxExt}`,
				"background.jpg",
				"bits.json",
				"bits.png",
				"particles.json",
				"particles.png",
				"xbloke.json",
				"xbloke.png"
			],
			oncomplete: function(){
				const progress = document.getElementById('progress');
				progress.style.display = "none";
				game.load();
			},
			onprogress: function(value){
				const bar = document.getElementById('progress-bar');
				bar.style.width = `${value*100}%`;
			}
		}
		
		const preloader = new Preloader(options);
	}
	
	load(){
		this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
		this.jumpSfx = new SFX({
			context: this.audioContext,
			src:{mp3:"sfx/jump.mp3", webm:"sfx/jump.webm"},
			loop: false,
			volume: 0.3
		});
		this.collectSfx = new SFX({
			context: this.audioContext,
			src:{mp3:"sfx/collect.mp3", webm:"sfx/collect.webm"},
			loop: false,
			volume: 0.3
		});
		this.loadJSON("xbloke", function(data){
			game.spriteData = JSON.parse(data);
			let imageSrc = game.spriteData.meta.image;
			game.spriteImage = new Image();
			game.spriteImage.onload = function(){
				game.assets.xbloke = true;
				if (game.assetsLoaded()) game.init();
			}
			game.spriteImage.src = imageSrc;
		});
		this.loadJSON("bits", function(data){
			game.bitsData = JSON.parse(data);
			let imageSrc = game.bitsData.meta.image;
			game.bitsImage = new Image();
			game.bitsImage.onload = function(){
				game.assets.bits = true;
				if (game.assetsLoaded()) game.init();
			}
			game.bitsImage.src = imageSrc;
		});
		this.loadJSON("particles", function(data){
			game.particles = {};
			game.particles.json = JSON.parse(data);
			let imageSrc = game.particles.json.meta.image;
			game.particles.image = new Image();
			game.particles.image.onload = function(){
				game.assets.particles = true;
				if (game.assetsLoaded()) game.init();
			}
			game.particles.image.src = imageSrc;
		});
		this.background = new Image();
		this.background.onload = function(){
			game.assets.background = true;
			if (game.assetsLoaded()) game.init();
		}
		game.background.src = "background.jpg";
	}
	
	assetsLoaded(){
		for(let prop in this.assets){
			if (!this.assets[prop]) return false;
		}
		
		return true;
	}
	
	//Loads the sprite data json file
	loadJSON(fileName, callback){
		var xobj = new XMLHttpRequest();
			xobj.overrideMimeType("application/json");
		xobj.open('GET', fileName + '.json', true); // Replace 'my_data' with the path to your file
		xobj.onreadystatechange = function () {
			  if (xobj.readyState == 4 && xobj.status == "200") {
				// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
				callback(xobj.responseText);
			  }
		};
		xobj.send(null);  
	}
	
	//Called after the spritesheet is loaded to initialise the actors and their initial action
	init(){
		this.position = {x:0, y:-120, width:this.canvas.width};
		
		let options = {
			context: this.context,
			image: this.spriteImage,
			x: this.canvas.width/2,
			y: this.canvas.height/2 + 230,
			canvasOffset: this.position
		};
		this.xbloke = new AnimSprite('xbloke', options);
		
		const game = this;
		this.anims = [];
		this.anims.push(new Anim("walk", {frameData:this.spriteData.frames, frames:[9,"..",25], motion:{x:150, y:0}}));
		this.anims.push(new Anim("run", {frameData:this.spriteData.frames, frames:[9,"..2",25], motion:{x:250, y:0}}));
		this.anims.push(new Anim("jump", {frameData:this.spriteData.frames, frames:[41,"..",58], motion:{x:100, easing:{type:"outQuad", change:-150, duration:18/30}}, loop:false, oncomplete:function(){
			game.setAction("xbloke", "drop");
		}}));
		this.anims.push(new Anim("drop", {frameData:this.spriteData.frames, frames:[59,"..",73], motion:{x:150, easing:{type:"inQuad", change:150, duration:18/30}}, loop:false, oncomplete:function(){
			game.checkFloor();
		}}));
		this.anims.push(new Anim("land", {frameData:this.spriteData.frames, frames:[74,"..",87], loop:false, oncomplete:function(){
			if (game.mouseData!=null && game.mouseData.down){
				game.setAction("xbloke", "walk");
			}else{
				game.setAction("xbloke", "landrest");
			}
		}}));
		this.anims.push(new Anim("landrest", {frameData:this.spriteData.frames, frames:[88,"..",100], loop:false, oncomplete:function(){
			game.setAction("xbloke", "ambient");
		}}));
		this.anims.push(new Anim("ambient", {frameData:this.spriteData.frames, frames:[101,"..",575]}));
		this.anims.push(new Anim("kick", {frameData:this.spriteData.frames, frames:[580,"..",605], motion:{x:50, easing:{type:"projectile", change:-30, duration:25/30}}, loop:false, oncomplete:function(){
			game.checkFloor();
			game.setAction("xbloke", "ambient");
		}}));
		this.anims.push(new Anim("lookback", {frameData:this.spriteData.frames, frames:[606,"..",675], loop:false, oncomplete:function(){
			game.setAction("xbloke", "ambient");
		}}));
		this.anims.push(new Anim("lookforward", {frameData:this.spriteData.frames, frames:[680,"..",759], loop:false, oncomplete:function(){
			game.setAction("xbloke", "ambient");
		}}));
		this.anims.push(new Anim("dance", {frameData:this.spriteData.frames, frames:[762,"..",880]}));
		
		this.xbloke.anim = this.setAction("xbloke", "ambient");
		
		const eoptions = {
			image: this.particles.image,
			json: this.particles.json,
			index: 9,
			scale: 0.4,
			opacity: 1,
			angle:270,
			angleVariation:0.2,
			emissionRate:10,
			additive: true,
			canvasOffset: this.position,
			x: 0,
			y: 0,
			gravity: 0,
			scaleWithAge: false,
			spin: 0.1,
			speed: 1,
			life: 10000,
			particleLife: 6
		}
		
		this.emitter = new Emitter(eoptions);
		
		this.lastTime = Date.now();
		
		this.refresh();
		
		if ('ontouchstart' in window){
			this.canvas.addEventListener('touchstart', down);
			this.canvas.addEventListener('touchmove', move);
			document.addEventListener('touchend', up);	
		}else{
			this.canvas.addEventListener('mousedown', down);
			this.canvas.addEventListener('mousemove', move);
			document.addEventListener('mouseup', up);
		}
		
		function down(evt){
			game.mousedown(evt);
		}
		
		function move(evt){
			game.mousemove(evt);
		}
		
		function up(evt){
			game.mouseup(evt);
		}
	}
	
	getMousePos(evt) {
        let clientX = evt.targetTouches ? evt.targetTouches[0].pageX : evt.pageX;
		let clientY = evt.targetTouches ? evt.targetTouches[0].pageY : evt.pageY;
        return new Vertex(clientX - this.canvas.offsetLeft, clientY - this.canvas.offsetTop);
    }
	
	mousedown(evt){
		evt.preventDefault();
		
		let mousePos = this.getMousePos(evt);
		let mouseData = { down:true, clickPosition:mousePos, swipePosition:new Vertex(mousePos.x, mousePos.y), clickTime: Date.now() };
		let flipped = mousePos.x<this.canvas.width*0.3;
		let actionSet = false;
		
		if (this.mouseData!=null){
			let elapsedTime = mouseData.clickTime - game.mouseData.clickTime;
			if (elapsedTime<500){
				//Double click
				if (this.xbloke.onground){
					if (mousePos.y>this.canvas.height/2){
						this.setAction("xbloke", "kick", flipped);
					}else{
						this.setAction("xbloke", "jump", flipped);
						this.jumpSfx.play();
					}
					actionSet = true;
				}
			}
		}
			
		if (!actionSet && this.xbloke.onground){
			if (flipped){
				this.setAction("xbloke", "walk", flipped);
			}else if (mousePos.x>this.canvas.width*0.7){
				this.setAction("xbloke", "walk", flipped);
			}
		}
		
		this.mouseData = mouseData;
	}
	
	mousemove(evt){
		evt.preventDefault();
		
		let mousePos = this.getMousePos(evt);
		
		if (this.mouseData!=null){
			if (this.mouseData.down && this.xbloke.onground && (this.mouseData.swipePosition.y - mousePos.y)>100){
				this.mouseData.swipePosition.y = mousePos.y;
				this.setAction("xbloke", "jump", this.xbloke.flipped);
			}else if (mousePos.y > this.mouseData.swipePosition.y){
				this.mouseData.swipePosition.y = mousePos.y;
			}
		}
	}
	
	mouseup(evt){
		evt.preventDefault();
		
		this.mouseData.down = false;
		
		if (this.xbloke.onground){
			let anim;
			if (this.xbloke.animName == "run" ){
				anim = new Anim("slowdown", {frameData:this.spriteData.frames, frames:[9,"..2",25], motion:{x:150, y:0}});
				this.xbloke.anim = anim;
			}else if (this.xbloke.animName == "walk"){
				anim = new Anim("slowdown", {frameData:this.spriteData.frames, frames:[9,"..",25], motion:{x:50, y:0}});
				this.xbloke.anim = anim;
			}else{
				this.setAction("xbloke", "ambient", this.xbloke.flipped);
			}
		}
	}
	
	animNamed(name){
		for(let i=0; i<this.anims.length; i++){
			if (this.anims[i].name == name) return this.anims[i];
		}
		return null;
	}
	
	setAction(spriteName, animName, flipped){
		let anim = this.animNamed(animName);
		anim.reset();
		anim.y = this[spriteName].y;
		this[spriteName].anim = anim; 
		if (flipped!=null) this[spriteName].flipped = flipped;
		if (spriteName == "xbloke"){
			switch(animName){
				case "walk":
				case "land":
				case "landrest":
				case "ambient":
				case "dance":
				case "run":
				case "lookback":
				case "lookforward":
					this.xbloke.onground = true;
					break;
				default:
					this.xbloke.onground = false;
			}
		}
		return anim;
	}
	
	checkFloor(){
		let rect1 = new Rect(this.xbloke.x, this.xbloke.y, this.xbloke.frameData.frame.w, this.xbloke.frameData.frame.h);
		let delta = 10;
		let floor = 120 + this.canvas.height/2 + 230;
		let posY = -this.position.y + this.xbloke.y;
		
		if (this.xbloke.onground){
			if (posY<floor){
				//Check if on a platform
				rect1.h += delta;
				let onplatform = false;
				for(let i=0; i<this.bitsData.platforms.length; i++){
					let platform = this.bitsData.platforms[i];
					let frame;
					for(let j=0; j<this.bitsData.frames.length; j++){
						if (this.bitsData.frames[j].filename==platform.filename){
							frame = this.bitsData.frames[j].frame;
							break;
						}
					}
					if (frame!=null){
						let rect2 = new Rect(platform.x + 2*delta, platform.y, frame.w - delta*2, frame.h);
						if (rect1.overlaps(rect2)){
							if (rect1.top<rect2.top){
								this.xbloke.y = platform.y - 37 * this.xbloke.anchor.y;
								onplatform = true;
								break;
							}
						}
					}
				}
				if (!onplatform){
					this.setAction("xbloke", "drop", this.xbloke.flipped);
				}
			}
		}else{
			for(let i=0; i<this.bitsData.platforms.length; i++){
				let platform = this.bitsData.platforms[i];
				let frame;
				for(let j=0; j<this.bitsData.frames.length; j++){
					if (this.bitsData.frames[j].filename==platform.filename){
						frame = this.bitsData.frames[j].frame;
						break;
					}
				}
				if (frame!=null){
					let rect2 = new Rect(platform.x + 4*delta, platform.y, frame.w - delta*3, frame.h);
					if (rect1.overlaps(rect2)){
						if (rect1.top<rect2.top){
							this.xbloke.y = platform.y - 37 * this.xbloke.anchor.y;
							this.setAction("xbloke", "land");
							return;
						}
					}
				}
			}
		}
		
		
		if (posY>floor){
			this.xbloke.y = floor - 120;
			this.setAction("xbloke", "land", this.xbloke.flipped);
		}	
	}
	
	//Triggers an update and render
	refresh(){
		var now = Date.now();
		var dt = (now - this.lastTime) / 1000.0;
	 
		this.update(dt);
		this.render();

		if (this.mouseData!=null && this.mouseData.down){
			if (now-this.mouseData.clickTime>1000 && this.xbloke.animName=="walk"){
				this.setAction("xbloke", "run");
			}
		}else if (this.xbloke.animName == "slowdown"){
			this.xbloke._anim.motion.x *= 0.99;
			if (this.xbloke._anim.motion.x<50) this.setAction("xbloke", "ambient", this.xbloke.flipped);
		}
		
		if (this.xbloke.moving && !this.xbloke.jumping) this.checkFloor();
		
		const game = this;
		this.lastTime = now;
		requestAnimationFrame(function(){ game.refresh(); });
	};
	
	drawPlatforms(){
		let frame;
		for(let i=0; i<this.bitsData.frames.length; i++){
			if (this.bitsData.frames[i].filename=="platform.png"){
				frame = this.bitsData.frames[i].frame;
				break;
			}
		}
		
		for(let i=0; i<this.bitsData.platforms.length; i++){
			let platform = this.bitsData.platforms[i];
			this.context.drawImage(this.bitsImage, frame.x, frame.y, frame.w, frame.h, platform.x + this.position.x, platform.y + this.position.y, frame.w, frame.h);
		}	
	}
	
	drawDiamonds(){
		let frame;
		for(let i=0; i<this.bitsData.frames.length; i++){
			if (this.bitsData.frames[i].filename=="diamond.png"){
				frame = this.bitsData.frames[i].frame;
				break;
			}
		}
		
		let scale = 0.7;
		
		for(let i=0; i<this.bitsData.diamonds.length; i++){
			let diamond = this.bitsData.diamonds[i];
			if (diamond.found==null){
				this.context.drawImage(this.bitsImage, frame.x, frame.y, frame.w, frame.h, diamond.x + this.position.x, diamond.y + this.position.y, frame.w * scale, frame.h * scale);
			}else if (diamond.hidden==null){
				let elapsedTime = Date.now() - diamond.findTime;
				let opacity = 1.0 - elapsedTime/1000.0;
				if (opacity>0){
					let frame;
					for(let i=0; i<this.bitsData.frames.length; i++){
						if (this.bitsData.frames[i].filename=="blank.png"){
							frame = this.bitsData.frames[i].frame;
							break;
						}
					}
					this.context.globalAlpha = opacity;
					let delta = (1.0 - opacity) * 0.3;
					let dscale = scale + delta;
					this.context.drawImage(this.bitsImage, frame.x, frame.y, frame.w, frame.h, diamond.x + this.position.x-delta/2, diamond.y + this.position.y-delta/2, frame.w * dscale, frame.h * dscale);
					this.context.globalAlpha = 1.0;
				}else{
					diamond.hidden = true;
				}
			}
		}	
	}
	
	checkDiamonds(){
		let delta = 10;
		let rect1 = new Rect(this.xbloke.x+delta, this.xbloke.y+delta, 45, 45);
		for(let i=0; i<this.bitsData.diamonds.length; i++){
			let diamond = this.bitsData.diamonds[i];
			let frame;
			for(let j=0; j<this.bitsData.frames.length; j++){
				if (this.bitsData.frames[j].filename==diamond.filename){
					frame = this.bitsData.frames[j].frame;
					break;
				}
			}
			if (frame!=null){
				let rect2 = new Rect(diamond.x, diamond.y, frame.w, frame.h);
				if (rect1.overlaps(rect2)){
					this.collectSfx.play();
					diamond.found = true;
					diamond.opacity = 1.0;
					diamond.findTime = Date.now();
					break;
				}
			}
		}
	}
	
	constrainBackground(){
		//Aim of this is to centre xbloke
		let centre = new Vertex(this.canvas.width/2, this.canvas.height/2);
		let position = new Vertex(centre.x - this.xbloke.x, centre.y - this.xbloke.y);
		let blend = 0.3;
		let easePosition = new Vertex(this.position.x * (1 - blend) + position.x * blend, this.position.y * (1 - blend) + position.y * blend);
		if (easePosition.y>0) easePosition.y = 0;
		if ((easePosition.y + this.background.height)<this.canvas.height) easePosition.y = this.canvas.height - this.background.height;
		this.position.x = easePosition.x;
		this.position.y = easePosition.y;
	}
	
	//Updates the actors 
	update(dt){
		this.xbloke.update(dt);
		this.emitter.update(dt);
		this.emitter.position.x = this.xbloke.x;
		this.emitter.position.y = this.xbloke.y;
		this.constrainBackground();
		this.checkDiamonds();
	}
	
	//Renders all actors
	render(){
		//console.log("preview render");
		this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
		
		let scale = 0.8;
		let left = this.position.x * scale;
		while(left>0) left -= this.background.width;
		left -= this.background.width;
		
		do{
			left += this.background.width;
			this.context.drawImage(this.background, left, this.position.y * scale);
		}while((left + this.background.width)<this.canvas.width);
		
		this.drawPlatforms();
		this.drawDiamonds();
		if (this.xbloke.animName=='jump') this.emitter.render(this.context);
		
		this.xbloke.render();
	}
}