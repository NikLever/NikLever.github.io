class Game{
	constructor(){
        this.canvas = document.getElementById('canvas');
		this.context = this.canvas.getContext('2d');
		this.createSpriteTime = this.time;
    
		this.init();
	}
	
	get time(){
		return Date.now();
	}
	
	init(){
		const w = this.canvas.width;
		const h = this.canvas.height;
		
		this.physicsEngine = Matter.Engine.create();
		
		// ground
		const ground = Matter.Bodies.rectangle(w/2, h-5, w - 100, 10, { isStatic: true });
        const slope =  Matter.Bodies.rectangle(w/2, h/2, w/3, 10, { isStatic: true, angle:0.2 });
		Matter.World.add(this.physicsEngine.world, [ground, slope]);
		
		const game = this;
		Matter.Events.on(this.physicsEngine, 'afterUpdate', function(){ game.update(); });
		
		Matter.Engine.run(this.physicsEngine);
	}

	debugPhysics(bodies){
		if (this.context === undefined) return;
		
		const context = this.context;
        const scale = 1;//window.devicePixelRatio || 1;
		
		context.beginPath();
	
		bodies.forEach (function(body){
			const vertices = body.vertices;

			context.moveTo(vertices[0].x*scale, vertices[0].y*scale);

			vertices.forEach (function(vertex) {
				context.lineTo(vertex.x*scale, vertex.y*scale);
			});

			context.lineTo(vertices[0].x*scale, vertices[0].y*scale);
		});

		context.lineWidth = 1;
		context.strokeStyle = '#999';
		context.stroke();
	}
	
	addSprite() {
		const w = this.canvas.width;
		const scale = 1.5;
		const radius = 25;
		const index = Math.floor(Math.random()*5) + 1;
		
		const body = Matter.Bodies.circle(Math.random()*w, -radius, radius);
		
		Matter.World.add(this.physicsEngine.world, [body]);
		
		this.createSpriteTime = this.time;
	}
	
	removeBody(body){
		Matter.World.remove(this.physicsEngine.world, body);
	}
	
	update(evt){
		const w = this.canvas.width;
		const h = this.canvas.height;
        this.context.clearRect(0,0,w,h);
		const elapsedTime = this.time - this.createSpriteTime;
		
		if (elapsedTime>200) this.addSprite();
				
		const bodies = Matter.Composite.allBodies(this.physicsEngine.world);
	
		this.debugPhysics(bodies);
	}
}
