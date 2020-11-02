// JavaScript Document
class Game{
	constructor(){
    	this.canvas = document.getElementById("game");
		this.context = this.canvas.getContext("2d");
		this.context.font="30px Verdana";
		this.sprites = [];
		this.states = { "static": { "frames": [0], "loop": true, motion: { x: 0, y: 0 }, "fps": 1 },
				   "walk": { "frames": [0,1,2,3,4,5,6,7], "loop": true, motion: { x: 120, y: 0 }, "fps": 12 },
				   "turn": { "frames": [8,9,10,11,12], "loop": false, motion: { x: 0, y: 0 }, oncomplete: { state: "walk", flip: true }, userinteraction: false, "fps": 16 }};
		for(let prop in this.states){
			const state = this.states[prop];
			state.name = prop;
			state.duration = state.frames.length * (1.0/state.fps);
		}
		Object.freeze(this.states);
		
		const game = this;
		this.loadJSON("bucket", function(data, game){
			game.spriteData = JSON.parse(data);
			game.spriteImage = new Image();
			game.spriteImage.src = game.spriteData.meta.image;
			game.spriteImage.onload = function(){	
				game.init();
				game.refresh();
				if ('ontouchstart' in window){
					game.canvas.addEventListener('touchstart', tap);
					game.canvas.addEventListener('touchend', release);
				}else{
					game.canvas.addEventListener('mousedown', tap);
					game.canvas.addEventListener('mouseup', release);
				}
				
				function tap(evt){
					game.tap(evt);
				}
				
				function release(evt){
					game.release(evt);
				}
			}
		})
	}
	
	loadJSON(json, callback) {   
		var xobj = new XMLHttpRequest();
			xobj.overrideMimeType("application/json");
		xobj.open('GET', json + '.json', true); // Replace 'my_data' with the path to your file
		const game = this;
		xobj.onreadystatechange = function () {
			  if (xobj.readyState == 4 && xobj.status == "200") {
				// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
				callback(xobj.responseText, game);
			  }
		};
		xobj.send(null);  
	 }
	
	init(){
		this.score = 0;
		this.lastRefreshTime = Date.now();
		this.spawn();
		this.refresh();
			
		const game = this;
	}
	
	refresh() {
		const now = Date.now();
		const dt = (now - this.lastRefreshTime) / 1000.0;

		this.update(dt);
		this.render();

		this.lastRefreshTime = now;
		
		const game = this;
		requestAnimationFrame(function(){ game.refresh(); });
	}
	
	update(dt){
		for(let sprite of this.sprites){
			if (sprite==null) continue;
			sprite.update(dt);
		}
	}
	
	spawn(){
		const frameData = this.spriteData.frames[0];
		const sprite = new Sprite({
			game: this,
			context: this.context,
			x: 150,
			y: 180,
			width: frameData.sourceSize.w,
			height: frameData.sourceSize.h,
			anchor: { x:0.5, y:0.5 },
			image: this.spriteImage,
			json: this.spriteData,
			states: this.states,
			state: 'static'
		});
		
		this.bucket = sprite;
		this.sprites.push(sprite);
		this.sinceLastSpawn = 0;	
	}
	
	render(){
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		
		for(let sprite of this.sprites){
			sprite.render();
		}
	}
	
	getMousePos(evt) {
        const rect = this.canvas.getBoundingClientRect();
		const clientX = evt.targetTouches ? evt.targetTouches[0].pageX : evt.clientX;
		const clientY = evt.targetTouches ? evt.targetTouches[0].pageY : evt.clientY;
		
		const canvasScale = this.canvas.width / this.canvas.offsetWidth;
		const loc = {};
		
		loc.x = (clientX - rect.left) * canvasScale;
		loc.y = (clientY - rect.top) * canvasScale;
		
        return loc;
    }
	
	tap (evt) {
		evt.preventDefault();
		
		if (this.bucket==undefined) return;
		
		const mousePos = this.getMousePos(evt);
		
		const dx = mousePos.x/this.canvas.width;
		
		if (dx<0.25) this.bucket.setState("walk", true);
		if (dx>0.75) this.bucket.setState("walk", false);
	}
	
	release (evt){
		//console.log("release called");
		evt.preventDefault();
		this.bucket.setState("static");	
	}
}

class Sprite{
	constructor(options){
		this.game = options.game;
		this.context = options.context;
		this.width = options.width;
		this.height = options.height;
		this.image = options.image;
		this.json = options.json;
		this.index = options.index;
		this.frameData = options.frameData;
		this.x = options.x;
		this.y = options.y;
		this.anchor = (options.anchor==null) ? { x:0.5, y:0.5 } : options.anchor;
		this.states = options.states;
		this.state = options.states[options.state];
		this.scale = (options.scale==null) ? 1.0 : options.scale;
		this.opacity = (options.opacity==null) ? 1.0 : options.opacity;
		this.currentTime = 0;
		this.kill = false;
		
		this.state.duration = this.state.frames.length * (1.0/this.state.fps);
	}
	
	setState(stateName, flipped){
		if (flipped==null) flipped = this.flipped;
		this.flipped = flipped;
		this.currentTime = 0;
		this.state = this.states[stateName];	
	}
	
	get offset(){
		const scale = this.scale;
		const w = this.frameData.sourceSize.w ;
		const h = this.frameData.sourceSize.h;
		return { x: (w - (w - this.frameData.frame.w)/2) * scale * this.anchor.x, y: (h - (h - this.frameData.frame.h)/2) * scale * this.anchor.y};
	}
	
	update(dt){
		this.currentTime += dt;
		if (this.currentTime > this.state.duration){
			if (this.state.loop){
				this.currentTime -= this.state.duration;
			}else{
				if (this.state.oncomplete.flip != null) this.flipped = (this.state.oncomplete.flip) ? !this.flipped : this.flipped;
				this.setState(this.state.oncomplete.state);
			}
		}

		this.x += (this.flipped) ? -this.state.motion.x * dt : this.state.motion.x * dt;
		this.y += this.state.motion.y * dt;

		switch(this.state.name){
			case "walk":
				if (this.flipped){
					if (this.x<=(this.width/2)){
						this.setState("turn");
					}
				}else{
					if (this.x >= (this.game.canvas.width - this.width/3)){
						this.setState("turn");
					}
				}
				break;
		}
		
		const timeIndex = Math.floor( (this.currentTime/this.state.duration) * this.state.frames.length );
		const frameIndex = this.state.frames[timeIndex]; 
	
		this.frameData = this.json.frames[frameIndex];
	}
	
	render() {
		// Draw the animation
		const alpha = this.context.globalAlpha;
			
		this.context.globalAlpha = this.opacity;
		
		const frame = this.frameData.frame;
		const size = this.frameData.sourceSize;
		const pos = {x: this.x, y:this.y };
		const offset = this.offset;
		if (this.flipped){
			pos.x += offset.x;
			pos.y -= offset.y;
		}else{
			pos.x -= offset.x;
			pos.y -= offset.y;
		}
		
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
	}
}


