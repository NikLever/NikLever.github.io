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
		const Constraint = Matter.Constraint;
		
		this.engine = Matter.Engine.create();

		let bodies = [];
		let sprites = [];
		let pins = [];
		let body;
		const frame = this.spriteData.frames[0].frame;
		const scale = 0.5;
		const fps = 12;
        const game = this;
		this.anims = [];
		this.anims.push(new Anim("ambient", {frameData:this.spriteData.frames, frames:[0], fps:fps}));
		this.anims.push(new Anim("walk", {frameData:this.spriteData.frames, frames:[0,"..",7], fps:fps}));
		this.anims.push(new Anim("fall", {frameData:this.spriteData.frames, frames:[16,17], loop:false, fps:fps}));
		this.anims.push(new Anim("crash", {frameData:this.spriteData.frames, frames:[18,"..",30], loop:false, oncomplete:function(){
			game.bucket.anim = "ambient";
			Matter.Body.setAngle(game.bucket.physicsBody, 0);
		}, fps:fps}));
		this.anims.push(new Anim("pour", {frameData:this.spriteData.frames, frames:[0,0,0,0,0,0,35,"..",40], loop:false, fps:fps}));
		
		const defaultCategory = 0x0001;
        const draggableCategory = 0x0002;
        
		body = Bodies.rectangle(50, 100, frame.w * scale, frame.h * scale, {label:"bucket", collisionFilter:{category: draggableCategory}, friction: 0.0001});
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
		
		bodies.push(Bodies.rectangle(400, 610, 810, 60, { isStatic: true, label:"floor", collisionFilter:{category:defaultCategory} }));//Floor
		bodies.push(Bodies.rectangle(120, 150, 240, 10, { collisionFilter:{category:defaultCategory} }));
		bodies.push(Bodies.rectangle(20, 175, 40, 40, { isStatic: true, label:"clickable", collisionFilter:{category:defaultCategory} }));//supports right end of bucket platform
		bodies.push(Bodies.rectangle(170, 175, 40, 40, { isStatic: true, label:"clickable", collisionFilter:{category:defaultCategory} }));//supports right end of bucket platform
		bodies.push(Bodies.rectangle(-30, 300, 60, 600, { isStatic: true, collisionFilter:{category:defaultCategory} }));//Left side
		bodies.push(Bodies.rectangle(400, 200, 400, 10, { collisionFilter:{category: defaultCategory}}));
		bodies.push(Bodies.rectangle(260, 220, 40, 40, { isStatic: true, label:"clickable", collisionFilter:{category:defaultCategory} }));//supports left end of middle platform
		bodies.push(Bodies.rectangle(560, 220, 40, 40, { isStatic: true, label:"clickable", collisionFilter:{category:defaultCategory} }));//supports right end of middle platform
		bodies.push(Bodies.rectangle(600, 280, 10, 10, { isStatic: true, collisionFilter:{category:defaultCategory} }));//supports right end of middle platform
		bodies.push(Bodies.rectangle(680, 300, 220, 30, { isStatic: true, label:"exit platform", collisionFilter:{category:defaultCategory} }));//Bath platform
		bodies.push(Bodies.rectangle(760, 270, 80, 30, { isStatic: true, label:"bath", collisionFilter:{category:defaultCategory} }));//Bath
		bodies.push(Bodies.rectangle(795, 300, 10, 600, { isStatic: true, label:"right", collisionFilter:{category:defaultCategory} }));//Right side
		
		// add all of the bodies to the world
		Matter.World.add(this.engine.world, bodies);
		// add all of the pins to the world
		Matter.World.add(this.engine.world, pins);
		
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
		mouseConstraint.collisionFilter.mask = draggableCategory;
		Matter.World.add(this.engine.world, mouseConstraint);
		
		function down(evt){
			game.mousedown(evt);
		}
		
		if ('ontouchstart' in window){
			this.canvas.addEventListener("touchstart", down);
		}else{
			this.canvas.addEventListener("mousedown", down);
		}
		
		Events.on(mouseConstraint, 'startdrag', function(event){
			console.log(event);
			if (event.body.label!="bucket") Events.trigger(mouseConstraint, 'enddrag');
		});
		
		Events.on(this.engine, 'collisionStart', function(event) {
			const pairs = event.pairs;

			for (let pair of pairs) {
				let bucket;
				let platform;
				if (pair.bodyA === game.bucket.physicsBody) {
					bucket = pair.bodyA;
					platform = pair.bodyB;
				} else if (pair.bodyB === game.bucket.physicsBody) {
					bucket = pair.bodyB;
					platform = pair.bodyA;
				}
				if (bucket != undefined){
					game.bucket.supported = true;
					if (platform.label=="floor"){
						game.bucket.anim = "crash";
					}else if (platform.label=="bath"){
						game.bucket.anim = "pour";
					}
				}
			}
		})

		Events.on(this.engine, 'collisionEnd', function(event) {
			const pairs = event.pairs;

			for (let pair of pairs) {
				let bucket;
				let platform;
				if (pair.bodyA === game.bucket.physicsBody) {
					bucket = pair.bodyA;
					platform = pair.bodyB;
				} else if (pair.bodyB === game.bucket.physicsBody) {
					bucket = pair.bodyB;
					platform = pair.bodyA;
				}
				if (bucket != undefined){
					//console.log("Bucket collides with " + platform.label);
					game.bucket.supported = false;
				}
			}
		})

		 Events.on(this.engine, 'collisionActive', function(event) {
			const pairs = event.pairs;

			for (let pair of pairs) {

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
		window.requestAnimationFrame(function(){ game.refresh() });
		const now = Date.now();
		if (this.lastTime == null) this.lastTime = now;
		const dt = (now - this.lastTime)/1000.0
		this.update(dt);
		this.render();
		this.lastTime = now;
	}
	
	update(dt){
		const velocity = this.bucket.physicsBody.velocity;
		//console.log(`Bucket update ${velocity.x.toFixed(1)}, ${velocity.y.toFixed(1)}`);
		
		const animName = this.bucket.animName;
		
		if (animName!="crash" && animName!="pour"){
			if (velocity.x<1){
				this.bucket.anim = "ambient";
			}else if (velocity.x>1){
				this.bucket.anim = "walk";
			}

			if (!this.bucket.supported && velocity.y>1){
				this.bucket.anim = "fall";
			}
		}
		
		this.bucket.update(dt);	
	}
	
	debugPhysics(bodies, constraints){
		this.context.beginPath();

		for (let body of bodies) {
			const vertices = body.vertices;

			this.context.moveTo(vertices[0].x, vertices[0].y);

			for (let vertex of vertices) {
				this.context.lineTo(vertex.x, vertex.y);
			}

			this.context.lineTo(vertices[0].x, vertices[0].y);
		}

		this.context.lineWidth = 1;
		this.context.strokeStyle = '#999';
		this.context.stroke();
		
		this.context.beginPath();

		for (let constraint of constraints) {
			switch (constraint.render.type){
				case "pin":
					this.context.moveTo(constraint.pointB.x, constraint.pointB.y);
					this.context.arc(constraint.pointB.x, constraint.pointB.y, 2, 0, 2*Math.PI);
					let pos = Matter.Vector.add(constraint.bodyA.position, constraint.pointA);
					this.context.arc(pos.x, pos.y, 2, 0, 2*Math.PI);
					break;
			}
		}

		this.context.lineWidth = 1;
		this.context.strokeStyle = '#933';
		this.context.stroke();
	}
	
	render() {
		let bodies = Matter.Composite.allBodies(this.engine.world);
		let constraints = Matter.Composite.allConstraints(this.engine.world);
		
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

		for(let i=0; i<this.sprites.length; i++){
			this.sprites[i].render(this.context);
		}
		
		if (this.debug) this.debugPhysics(bodies, constraints);
	}
	
	getMousePos(evt) {
        let clientX = evt.targetTouches ? evt.targetTouches[0].pageX : evt.pageX;
		let clientY = evt.targetTouches ? evt.targetTouches[0].pageY : evt.pageY;
        return new Vertex(clientX - this.canvas.offsetLeft, clientY - this.canvas.offsetTop);
    }
	
	mousedown(evt){
		evt.preventDefault();
		
		const mousePos = this.getMousePos(evt);
		
		const bodies = Matter.Composite.allBodies(this.engine.world);
		
		for(let body of bodies){
			if (body.label!="clickable") continue;
			if (Matter.Bounds.contains(body.bounds, mousePos)) {
				for (let j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++) {
					const part = body.parts[j];
					if (Matter.Vertices.contains(part.vertices, mousePos)) {
						Matter.Composite.remove(this.engine.world, body);
						break;
					}
				}
			}
		}
	}
}



