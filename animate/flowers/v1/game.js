class Game{
	constructor(stage, root, lib){
		this.stage = stage;
		this.root = root;
		this.lib = lib;
		this.context = document.getElementById('canvas').getContext('2d');
		this.debug = true;
		this.createSpriteTime = this.time;
		
		this.init();
	}
	
	get time(){
		return Date.now();
	}
	
	init(){
		const w = this.stage.canvas.width;
		const h = this.stage.canvas.height;
		
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
        const scale = this.stage.scaleX;
		
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
		const w = this.stage.canvas.width;
		const scale = 1.5;
		const radius = 25;
		const index = Math.floor(Math.random()*5) + 1;
		
		const sprite = new this.lib[`Flower${index}`];
		sprite.scaleX = sprite.scaleY = scale;
		
		const body = Matter.Bodies.circle(Math.random()*w, -radius, radius);
		body.userData = { sprite };
		
		Matter.World.add(this.physicsEngine.world, [body]);
		
		this.root.addChild(sprite);
		
		this.createSpriteTime = this.time;
	}
	
	removeBody(body){
		if (body.userData !== undefined && body.userData.sprite !== undefined){
			this.root.removeChild(body.userData.sprite);
		}
		Matter.World.remove(this.physicsEngine.world, body);
	}
	
	update(evt){
		const w = this.stage.canvas.width;
		const h = this.stage.canvas.height;
		const elapsedTime = this.time - this.createSpriteTime;
		
		if (elapsedTime>200) this.addSprite();
				
		const bodies = Matter.Composite.allBodies(this.physicsEngine.world);
		const RAD2DEG = 180 / Math.PI;

		
		bodies.forEach( function(body){
			if (body.userData !== undefined && body.userData.sprite !== undefined){
				if (body.position.x<-20 || body.position.x>(w+20) || body.position.y>(h+20)){
					game.removeBody(body);
				}
				const sprite = body.userData.sprite;
				sprite.x = body.position.x;
				sprite.y = body.position.y;
				sprite.rotation = body.angle * RAD2DEG;
			}
		});
	
		if (this.debug) this.debugPhysics(bodies);
	}
}
