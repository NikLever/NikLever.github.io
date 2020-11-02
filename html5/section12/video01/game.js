// JavaScript Document
class Game{
	constructor(){
		this.canvas = document.getElementById("game");
		this.context = this.canvas.getContext("2d");
		this.resize();
		this.init();
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
			x: this.canvas.width/2,
			y: this.canvas.height/2,
			speed: 5,
			life: 3
		}
		
		this.particles = [];
		for(let i=0; i<100; i++){
			this.particles.push(new Particle(options));
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
			for(let particle of this.particles){
				if (particle==null) continue;
				if (particle.life<=0){
					const index = this.particles.indexOf(particle);
					this.particles.splice(index, 1);
					removed = true;
					break;
				}
			}
		}while(removed);
		
		for(let particle of this.particles){
			if (particle==null) continue;
			particle.update(dt);
		}
	}
	
	render(){
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		
		for(let particle of this.particles){
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
		context.fillStyle = this.color;
		//context.arc(this.position.x, this.position.y, 4, 0, Math.PI*2);
		context.fillRect(this.position.x, this.position.y, 5, 5);
	}
}
