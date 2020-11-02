class Game{
	constructor(debug=true){
		this.spriteData;
		this.spriteImage;
		this.canvas = document.getElementById("game");
		this.context = this.canvas.getContext('2d');
		this.debug = debug;
		
		const game = this;
		this.loadJSON("flowers", function(data){
			game.spriteData = JSON.parse(data);
			game.spriteImage = new Image();
			game.spriteImage.src = game.spriteData.meta.image;
			game.spriteImage.onload = function(){
				let game = window.game;
				game.init();
				game.refresh();
			}
		});
	}
	
	loadJSON(json, callback) {   
		let xobj = new XMLHttpRequest();
		xobj.overrideMimeType("application/json");
		xobj.open('GET', json + '.json', true); 
		xobj.onreadystatechange = function () {
			  if (xobj.readyState == 4 && xobj.status == "200") {
				callback(xobj.responseText);
			  }
		};
		xobj.send(null);  
	}
	
	init(){
		// create an engine
		const Bodies = Matter.Bodies;
		
		this.engine = Matter.Engine.create();

		let bodies = [];
		let sprites = [];
		for(let i=0; i<14; i++){
			const index = Math.floor(Math.random()*4);
			const frameData = this.spriteData.frames[index];
			let radius = (frameData.frame.w + frameData.frame.h)/4;
			let sides;
			if (index==1) sides = 5;
			if (index==3) sides = 4;
			let body;
			if (sides==null){
				body = Bodies.circle(100 + i*70, 100, radius);
			}else{
				let vertices = [];
				let offset = Math.PI/sides;
				radius += (6-sides)*radius*0.1;
				for(let j=0; j<sides; j++){
					const theta = (j/sides) * Math.PI * 2 + offset;
					vertices.push(new Vertex(Math.sin(theta)*radius, Math.cos(theta)*radius));
				}
				body = Bodies.fromVertices(100 + i*70, 100, vertices);
			}
			sprites.push(new Sprite(this.spriteImage, frameData, body));
			bodies.push(body);
		}
		this.sprites = sprites;
		
		bodies.push(Bodies.rectangle(400, 610, 810, 60, { isStatic: true }));
		bodies.push(Bodies.rectangle(30, 300, 60, 600, { isStatic: true }));
		bodies.push(Bodies.rectangle(400, 300, 400, 10, { isStatic: true, angle: 0.4 }))
		bodies.push(Bodies.rectangle(770, 300, 60, 600, { isStatic: true }));
		
		// add all of the bodies to the world
		Matter.World.add(this.engine.world, bodies);

		// run the engine
		Matter.Engine.run(this.engine);
	}
	
	refresh(){
		const game = this;
		window.requestAnimationFrame(function(){ game.refresh(); });
		this.render();
	}
	
	debugPhysics(bodies){
		this.context.beginPath();

		for (let i = 0; i < bodies.length; i += 1) {
			const vertices = bodies[i].vertices;

			this.context.moveTo(vertices[0].x, vertices[0].y);

			for (let j = 1; j < vertices.length; j += 1) {
				this.context.lineTo(vertices[j].x, vertices[j].y);
			}

			this.context.lineTo(vertices[0].x, vertices[0].y);
		}

		this.context.lineWidth = 1;
		this.context.strokeStyle = '#999';
		this.context.stroke();
	}
	
	render() {
		let bodies = Matter.Composite.allBodies(this.engine.world);

		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

		for(let i=0; i<this.sprites.length; i++){
			this.sprites[i].render(this.context);
		}
		
		if (this.debug) this.debugPhysics(bodies);
	}
}

class Sprite{
	constructor(image, frameData, physicsBody){
		this.image = image;
		this.frameData = frameData;
		this.physicsBody = physicsBody;
	}
	
	render(context){
		if (context!=null && this.physicsBody!=null){
			const frame = this.frameData.frame;
			context.translate(this.physicsBody.position.x, this.physicsBody.position.y);
			context.rotate(this.physicsBody.angle);
			context.drawImage(this.image, frame.x, frame.y, frame.w, frame.h, -frame.w/2, -frame.h/2, frame.w, frame.h);
			context.setTransform(1,0,0,1,0,0);
		}else{
			console.warn("No context or physicsBody when calling Sprite.render")
		}
	}
}

class Vertex{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
}



