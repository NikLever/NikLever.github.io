class Game{	
	constructor(debug=true){
		this.spriteData;
		this.spriteImage;
		this.canvas = document.getElementById("game");
		this.context = this.canvas.getContext('2d');
		this.debug = debug;
		this.remoteData = [];
		
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
		
		if ('ontouchstart' in window){
			this.canvas.addEventListener('touchstart', down);
			this.canvas.addEventListener('touchend', up);
		}else{
			this.canvas.addEventListener('mousedown', down);
			this.canvas.addEventListener('mouseup', up);
		}
		
		function down(evt){
			game.bucket.anim = "walk";
		}
		
		function up(){
			game.bucket.anim = "ambient";
		}
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
		const game = this;
		let sprites = [];
		const frame = this.spriteData.frames[0].frame;
		this.scale = 0.5;
		const fps = 12;
		this.anims = [];
		this.anims.push(new Anim("ambient", {frameData:this.spriteData.frames, frames:[0], fps:fps}));
		this.anims.push(new Anim("walk", {frameData:this.spriteData.frames, frames:[1,"..",7], motion: { x: 120, y: 0 }, fps:fps}));
		
		const options = {
			context: this.context,
			image: this.spriteImage,
			anchor: new Vertex(0.5, 0.95),
			x: this.canvas.width/2 + this.canvas.width/4 * (Math.random()-0.5),
			y: this.canvas.height/2 + this.canvas.height/4 * (Math.random()-0.5),
			scale: this.scale,
			anims: this.anims
		};
		
		this.bucket = new AnimSprite("bucket", options);
		this.bucket.anim = "ambient";
        
        sprites.push(this.bucket);
		
		this.sprites = sprites;
        
		const socket = io();
		socket.on('setId', function(data){
			socket.id = data.id;
		})
		socket.on('remoteData', function(data){
			game.remoteData = data;
		})
		this.bucket.socket = socket;
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
		const animName = this.bucket.animName;
		
		this.bucket.update(dt);	
		this.bucket.socket.emit("update", {
			x: this.bucket.x,
			y: this.bucket.y,
			index: this.bucket.index,
			flipped: this.bucket.flipped
		});
		
		if (this.bucket.flipped){
			if (this.bucket.x<20) this.bucket.flipped = false;
		}else{
			if (this.bucket.x>(this.canvas.width-20)) this.bucket.flipped = true;
		}
	}
	
	getOffset(index){
		const frameData = this.spriteData.frames[index];
		const anchor = this.bucket.anchor;
		const scale = this.scale;
		const w = frameData.sourceSize.w ;
		const h = frameData.sourceSize.h;
        const x = frameData.spriteSourceSize.x;
        const y = frameData.spriteSourceSize.y;
		return { x: (w - x) * scale * anchor.x, y: (h - y) * scale * anchor.y};
	}
	
	render(){
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		
		for(let sprite of this.sprites){
			sprite.render();
		}
		
		for(let sprite of this.remoteData){
			if (sprite.id == this.bucket.socket.id) continue;
			const index = sprite.index || 0; 
			const offset = this.getOffset(index);
			const frame = this.spriteData.frames[index].frame;
			const pos = {x: sprite.x, y:sprite.y};
			pos.y -= offset.y;
			if (sprite.flipped){
				pos.x += offset.x;
			}else{
				pos.x -= offset.x;
			}
			this.context.translate(pos.x, pos.y);
			if (sprite.flipped) this.context.scale(-1,1);
			this.context.drawImage(
			   this.spriteImage,
			   frame.x,
			   frame.y,
			   frame.w,
			   frame.h,
			   0,
			   0,
			   frame.w * this.scale,
			   frame.h * this.scale);

			this.context.setTransform(1,0,0,1,0,0);
		}
	}
}// JavaScript Document