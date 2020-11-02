class Game{
	constructor(debug=true){
		this.canvas = document.getElementById("game");
		this.context = this.canvas.getContext('2d');
		this.debug = debug;
		
		this.init();
		
		this.refresh();
	}
	
	init(){
		// create an engine
		const Bodies = Matter.Bodies;
		
		this.engine = Matter.Engine.create();

		let bodies = [];
		for(let i=0; i<8; i++){
			bodies.push(Bodies.circle(100 + i*100, 100, 40));
		}
		
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
		window.requestAnimationFrame(function(){ game.refresh() });
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

		if (this.debug) this.debugPhysics(bodies);
	}
}



