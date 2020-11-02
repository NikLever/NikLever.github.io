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
		
		this.update(0);
		this.render();
	}
	
	init(){	
		const options = {
			image: this.particles.image,
			json: this.particles.json,
			index: 8,
			scale: 1,
			opacity: 1,
			angle:90,
			angleVariation:0.2,
			emissionRate:10,
			additive: true,
			x: this.canvas.width/2,
			y: this.canvas.height/2,
			gravity: 0,
			scaleWithAge: false,
			radialAccel: 0.1,
			speed: 1,
			life: 10000,
			particleLife: 6
		}
		
		this.emitter = new Emitter(options);
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
		if (this.emitter==undefined) return;
		this.emitter.update(dt);
		if (this.emitter.life<=0){
			delete this.emitter;
		}
	}
	
	render(){
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		
		if (this.emitter==undefined) return;
		this.emitter.render(this.context);
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
		
		this.init(options);
	}
	
	init(options){
		const opacity = (options.opacity!=undefined) ? options.opacity : 1;
		const scale = (options.scale!=undefined) ? options.scale : 1;
		const rotation = (options.rotation!=undefined) ? options.rotation : 0;
		const radialAccel = (options.radialAccel!=undefined) ? options.radialAccel : 0;
		const gravity = (options.gravity==undefined) ? 0 : options.gravity;
		const index = (options.index!=undefined) ? options.index : 9;
		const image = options.image;
		const json = options.json;
		
		const poptions = {
			image: image,
			json: json,
			index: index,
			scale: scale,
			opacity: opacity,
			angle: this.theta,
			x: this.position.x,
			y: this.position.y,
			gravity: gravity,
			rotation: rotation,
			radialAccel: radialAccel,
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
		if (this.image!=undefined){
			context.translate(this.position.x, this.position.y);
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
			context.fillRect(this.position.x, this.position.y, 5, 5);
		}
		context.globalAlpha = alpha;
	}
}
