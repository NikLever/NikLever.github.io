// JavaScript Document
class Game{
	constructor(){
    	this.canvas = document.getElementById("game");
		this.context = this.canvas.getContext("2d");
		this.context.font="30px Verdana";
		this.sprites = [];
		this.states = { "walk": { "frames": [1,2,3,4,5,6,7,8], "loop": true, motion: { x: 120, y: 0 }, "fps": 8 } };
		Object.freeze(this.states);
		
		const game = this;
		this.loadJSON("bucket", function(data, game){
			game.spriteData = JSON.parse(data);
			game.spriteImage = new Image();
			game.spriteImage.src = game.spriteData.meta.image;
			game.spriteImage.onload = function(){	
				game.init();
				game.refresh();
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
			context: this.context,
			x: 150,
			y: 180,
			width: frameData.sourceSize.w,
			height: frameData.sourceSize.h,
			anchor: { x:0.5, y:0.5 },
			image: this.spriteImage,
			json: this.spriteData,
			states: this.states,
			state: 'walk'
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
}

class Sprite{
	constructor(options){
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

	getState(){
		let stateTime = 0;
		for(var i=0; i<this.states.length; i++){
			const state = { "mode":this.states[i].mode, "duration":this.states[i].duration};
			if (this.currentTime>=stateTime && this.currentTime<(stateTime+state.duration)){
				state.time = this.currentTime - stateTime;
				return state;
			}else{
				stateTime += state.duration;
			}
		}
	}
		
	hitTest(pt){
		const centre = { x: this.x, y: this.y };
		const radius = (this.width * this.scale) / 2;
		//Now test if the pt is in the circle
		const dist = distanceBetweenPoints(pt, centre);

		return (dist<radius);
		
		function distanceBetweenPoints(a, b){
			var x = a.x - b.x;
			var y = a.y - b.y;
			
			return Math.sqrt(x * x + y * y);
		}
	}
		
	update(dt){
		this.currentTime += dt;
		if (this.currentTime > this.state.duration){
			if (this.state.loop){
				this.currentTime -= this.state.duration;
			}
		}

		this.x += this.state.motion.x * dt;
		this.y += this.state.motion.y * dt;

		if ( this.x > 500) this.x = -100;

		const index = Math.floor( (this.currentTime/this.state.duration) * this.state.frames.length );
		//console.log(index)
		this.frameData = this.json.frames[index];
	}
	
	render() {
		// Draw the animation
		const alpha = this.context.globalAlpha;
			
		this.context.globalAlpha = this.opacity;
		
		const frame = this.frameData.frame;
		const size = this.frameData.spriteSourceSize;
		
		this.context.drawImage(
		   this.image,
		   frame.x,
		   frame.y,
		   frame.w,
		   frame.h,
		   this.x - (this.width - size.x) * this.scale * this.anchor.x,
		   this.y - (this.height - size.y) * this.scale * this.anchor.y,
		   frame.w * this.scale,
		   frame.h * this.scale);
		
		this.context.globalAlpha = alpha;
	}
}