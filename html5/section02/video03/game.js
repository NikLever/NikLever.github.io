// JavaScript Document
class Game{ 
	constructor(){
    	this.canvas = document.getElementById("game");
		this.context = this.canvas.getContext("2d");
		this.sprites = [];
		this.states = {"spawn":1, "static":2, "die":3}
		Object.freeze(this.states);
		
		this.spriteImage = new Image();
		this.spriteImage.src = "flower.png";
		
		const game = this;
		this.spriteImage.onload = function(){
			game.lastRefreshTime = Date.now();
			game.spawn();
			game.refresh();
		} 
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
		this.sinceLastSpawn += dt;
		if (this.sinceLastSpawn>1) this.spawn();
		let removed;
		do{
			removed = false;
			for(let sprite of this.sprites){
				if (sprite.kill){
					const index = this.sprites.indexOf(sprite);
					this.sprites.splice(index, 1);
					removed = true;
					break;
				}
			}
		}while(removed);
		
		for(let sprite of this.sprites){
			if (sprite==null) continue;
			sprite.update(dt);
		}
	}
	
	spawn(){
		const sprite = new Sprite({
			context: this.context,
			x: Math.random() * this.canvas.width,
			y: Math.random() * this.canvas.height,
			width: this.spriteImage.width,
			height: this.spriteImage.height,
			image: this.spriteImage,
			states: [ { "mode":this.states.spawn, "duration": 0.5 }, {"mode":this.states.static, "duration":1.5}, {"mode":this.states.die, "duration":0.8} ]
		});
		
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
		this.x = options.x;
		this.y = options.y;
		this.states = options.states;
		this.scale = (options.scale==null) ? 1.0 : options.scale;
		this.opacity = (options.opacity==null) ? 1.0 : options.opacity;
		this.currentTime = 0;
		this.kill = false;
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

	update(dt){
		this.currentTime += dt;
		const state = this.getState();
		if (state==null){
			this.kill = true;
			return;
		}
		const delta = state.time/state.duration;

		switch(state.mode){
			case this.states.spawn:
				//scale and fade in
				this.scale = delta;
				this.opacity = delta;
				break;
			case this.states.static:
				this.scale = 1.0;
				this.opacity = 1.0;
				break;
			case this.states.die:
				this.scale = 1.0 + delta;
				this.opacity = 1.0 - delta;
				break;
		}
	}
	
	render() {
		// Draw the animation
		const alpha = this.context.globalAlpha;
			
		this.context.globalAlpha = this.opacity;
		
		this.context.drawImage(
		   this.image,
		   0,
		   0,
		   this.width,
		   this.height,
		   this.x,
		   this.y,
		   this.width * this.scale,
		   this.height * this.scale);
		
		this.context.globalAlpha = alpha;
	}
}