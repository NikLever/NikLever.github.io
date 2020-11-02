class Game{
	constructor(debug=true){
		this.spriteData;
		this.spriteImage;
		this.canvas = document.getElementById("game");
		this.context = this.canvas.getContext('2d');
		this.debug = debug;
		
		const game = this;
		
		this.loadJSON("bucket", function(data){
			game.spriteData = JSON.parse(data);
			game.spriteImage = new Image();
			game.spriteImage.src = game.spriteData.meta.image;
			game.spriteImage.onload = function(){
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
		const Events = Matter.Events;
		
		this.engine = Matter.Engine.create();

		let bodies = [];
		let sprites = [];
		let body;
		const frame = this.spriteData.frames[0].frame;
		const scale = 0.5;
		const fps = 12;
		this.anims = [];
		this.anims.push(new Anim("ambient", {frameData:this.spriteData.frames, frames:[0], fps:fps}));
		this.anims.push(new Anim("walk", {frameData:this.spriteData.frames, frames:[1,"..",7], fps:fps, force:{x:150, y:0}}));
		body = Bodies.rectangle(50, 100, frame.w * scale, frame.h * scale);
		const options = {
			context: this.context,
			image: this.spriteImage,
			anchor: new Vertex(0.5, 0.95),
			scale: scale,
			physicsBody: body,
			anims: this.anims
		}
		this.bucket = new AnimSprite("bucket", options);
		this.bucket.anim = "ambient";
		sprites.push(this.bucket);
		bodies.push(body);
		
		this.sprites = sprites;
		
		bodies.push(Bodies.rectangle(400, 610, 810, 60, { isStatic: true }));//Floor
		bodies.push(Bodies.rectangle(50, 150, 100, 10, { isStatic: true, label:"clickable" }));//Bucket platform
		bodies.push(Bodies.rectangle(-30, 300, 60, 600, { isStatic: true }));//Left side
		bodies.push(Bodies.rectangle(400, 300, 400, 10, { isStatic: true, angle: 0.4, label:"clickable" }));//Sloping platform
		bodies.push(Bodies.rectangle(770, 300, 60, 600, { isStatic: true }));//Right side
		
		// add all of the bodies to the world
		Matter.World.add(this.engine.world, bodies);
		
		//Allow dragging of non-static bodies
		const mouseConstraint = Matter.MouseConstraint.create(this.engine, { //Create Constraint
		  element: this.canvas,
		  constraint: {
			render: {
			  visible: true
			},
			stiffness:0.8
		  }
		});
		Matter.World.add(this.engine.world, mouseConstraint);
		
		const game = this;
		
		function down(evt){
			game.mousedown(evt);
		}
		if ('ontouchstart' in window){
			this.canvas.addEventListener("touchstart", down);
		}else{
			this.canvas.addEventListener("mousedown", down);
		}
		
		Events.on(this.engine, 'collisionStart', function(event) {
			const pairs = event.pairs;

			for (let i = 0, j = pairs.length; i != j; ++i) {
				const pair = pairs[i];

				if (pair.bodyA === game.bucket.physicsBody) {
					
				} else if (pair.bodyB === game.bucket.physicsBody) {
					
				}
			}
		})

		Events.on(this.engine, 'collisionEnd', function(event) {
			const pairs = event.pairs;

			for (let i = 0, j = pairs.length; i != j; ++i) {
				const pair = pairs[i];

				if (pair.bodyA === game.bucket.physicsBody) {
					
				} else if (pair.bodyB === game.bucket.physicsBody) {
					
				}
			}
		})

		 Events.on(this.engine, 'collisionActive', function(event) {
			const pairs = event.pairs;

			for (let i = 0, j = pairs.length; i != j; ++i) {
				const pair = pairs[i];

				if (pair.bodyA === game.bucket.physicsBody) {
					
				} else if (pair.bodyB === game.bucket.physicsBody) {
					
				}
			}
		})
		 
		// run the engine
		Matter.Engine.run(this.engine);
	}
	
	refresh(){
		const game = this;
		window.requestAnimationFrame(function(){ game.refresh(); });
		const now = Date.now();
		if (this.lastTime == null) this.lastTime = now;
		const dt = (now - this.lastTime)/1000.0
		this.update(dt);
		this.render();
		this.lastTime = now;
	}
	
	update(dt){
		this.bucket.update(dt);	
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
	
	getMousePos(evt) {
        let clientX = evt.targetTouches ? evt.targetTouches[0].pageX : evt.pageX;
		let clientY = evt.targetTouches ? evt.targetTouches[0].pageY : evt.pageY;
        return new Vertex(clientX - this.canvas.offsetLeft, clientY - this.canvas.offsetTop);
    }
	
	mousedown(evt){
		evt.preventDefault();
		
		const mousePos = this.getMousePos(evt);
		
		const bodies = Matter.Composite.allBodies(game.engine.world);
		
		for(let body of bodies){
			if (body.label!="clickable") continue;
			if (Matter.Bounds.contains(body.bounds, mousePos)) {
				for (let j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++) {
					const part = body.parts[j];
					if (Matter.Vertices.contains(part.vertices, mousePos)) {
						Matter.Composite.remove(game.engine.world, body);
						break;
					}
				}
			}
		}
	}
}



