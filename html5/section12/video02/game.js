// JavaScript Document
class Game{
	constructor(){
		this.canvas = document.getElementById("game");
		this.context = this.canvas.getContext("2d");
		this.resize();
		
		const game = this;
		this.loadJSON("particles", function(data, game){
			game.particles = {};
			game.particles.json = JSON.parse(data);
			game.particles.image = new Image();
			game.particles.image.src = game.particles.json.meta.image;
			game.particles.image.onload = function(){	
				game.init();
			}
		})
	}
	
	loadJSON(json, callback) {   
		const xobj = new XMLHttpRequest();
			xobj.overrideMimeType("application/json");
		xobj.open('GET', json + '.json', true);
		const game = this;
		xobj.onreadystatechange = function () {
			  if (xobj.readyState == 4 && xobj.status == "200") {
				callback(xobj.responseText, game);
			  }
		};
		xobj.send(null);  
	}
	
	resize(){
		const width = window.innerWidth;
		const height = window.innerHeight;
		
		this.canvas.height = height;
		this.canvas.width = width;
		
		if (this.particles==undefined) return;
		this.update(0);
		this.render();
	}
	
	init(){	
		const options = {
			image: this.particles.image,
			json: this.particles.json,
			index: 9,
			scale: 1,
			opacity: 1,
			x: this.canvas.width/2,
			y: this.canvas.height/2,
			speed: 5,
			life: 3
		}
		
		this.particles.sprites = [];
		for(let i=0; i<100; i++){
			options.speed = 2 + Math.random()*3;
			this.particles.sprites.push(new Particle(options));
		}
		
		this.lastRefreshTime = Date.now();
		
		this.refresh();
	}
	
	refresh() {
		const now = Date.now();
		const dt = (now - this.lastRefreshTime) / 1000.0;

		this.update(dt);
		this.render();

		this.lastRefreshTime = now;
		
		const game = this;
		requestAnimationFrame(function(){ game.refresh(); });
	};
	
	update(dt){	
		let removed;
		do{
			removed = false;
			for(let particle of this.particles.sprites){
				if (particle==null) continue;
				if (particle.life<=0){
					const index = this.particles.sprites.indexOf(particle);
					this.particles.sprites.splice(index, 1);
					removed = true;
					break;
				}
			}
		}while(removed);
		
		for(let particle of this.particles.sprites){
			if (particle==null) continue;
			particle.update(dt);
		}
	}
	
	render(){
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		
		for(let particle of this.particles.sprites){
			if (particle==null) continue;
			particle.render(this.context);
		}
	}
}

class Particle{
	constructor(options){
		this.position = (options.x!=undefined) ? { x: options.x, y: options.y } : { x:0, y:0 };
		this.life = (options.life!=undefined) ? options.life : 1;
		const theta = (options.angle!=undefined) ? options.angle * Math.PI / 180 : Math.random()*Math.PI*2;
		const speed = (options.speed!=undefined) ? options.speed : 10;
		this.opacity = (options.opacity!=undefined) ? options.opacity : 1;
		this.scale = (options.scale!=undefined) ? options.scale : 1;
		this.rotation = (options.rotation!=undefined) ? options.rotation : 0;
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
	
	update(dt){
		this.life -= dt;
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
	}
	
	render(context){
		const alpha = context.globalAlpha;
		context.globalAlpha = this.opacity;
		if (this.image!=undefined){
			context.translate(this.position.x, this.position.y);
			context.rotate(this.rotation);
			context.drawImage(
				this.image,
				this.frame.x,
				this.frame.y,
				this.frame.w,
				this.frame.h,
				0,
				0,
				this.frame.w * this.scale,
				this.frame.h * this.scale
			)
			context.setTransform(1,0,0,1,0,0);
		}else{
			context.fillStyle = this.color;
			context.fillRect(this.position.x, this.position.y, 5, 5);
		}
	}
}
