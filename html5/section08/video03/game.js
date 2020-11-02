// JavaScript Document
class Game{
	constructor(){
		this.canvas = document.getElementById("game");
		this.context = this.canvas.getContext("2d");
		this.lastRefreshTime = Date.now();
		this.sinceLastSpawn = 0;
		this.sprites = [];
		this.score = 0;
		this.spriteData;
		this.spriteImage;
		this.icebergs = [];
		this.bear;
		this.platforms = [];
		this.buttons = [];
		this.ui = [];
		this.sprites = [];
		this.pauseTime = 0.2;
		
		this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
		this.collectSfx = new SFX({
			context: this.audioContext,
			src:{mp3:"sfx/collect.mp3", webm:"sfx/collect.webm"},
			loop: false,
			volume: 0.3
		});
		this.blowholeSfx = new SFX({
			context: this.audioContext,
			src:{mp3:"sfx/blowhole.mp3", webm:"sfx/blowhole.webm"},
			loop: false,
			volume: 0.3
		});
		this.dipSfx = new SFX({
			context: this.audioContext,
			src:{mp3:"sfx/splash_dip.mp3", webm:"sfx/splash_dip.webm"},
			loop: false,
			volume: 0.3
		});
		this.diveSfx = new SFX({
			context: this.audioContext,
			src:{mp3:"sfx/splash_dive.mp3", webm:"sfx/splash_dive.webm"},
			loop: false,
			volume: 0.3
		});
		const game = this;
		this.loadJSON("beargame", function(data, game){
			game.spriteData = JSON.parse(data);
			game.spriteImage = new Image();
			game.spriteImage.src = game.spriteData.meta.image;
			game.spriteImage.onload = function(){	
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
	
	init(){
		const fps = 25;
		this.config = {};
		this.config.iceberg = { row:105, col:160, x:-200, y:200 };
		this.config.height = 413;
		this.config.bear = {x: 170, y:100 };
		this.config.jump = { x: this.config.iceberg.col*(fps/11), y: this.config.iceberg.row*(fps/11)};
		//Create bear anims
		let anims = [];
		anims.push(new Anim("static", {frameData:this.spriteData.frames, frames:[0], loop:false, fps:fps}));
		anims.push(new Anim("forward", {frameData:this.spriteData.frames, frames:[0,"..",10], loop:false, motion:{ x:0, y:this.config.jump.y}, fps:fps, oncomplete(){ game.jumpComplete(); }}));
		anims.push(new Anim("backward", {frameData:this.spriteData.frames, frames:[11,"..",21], loop:false, motion:{ x:0, y:-this.config.jump.y}, fps:fps, oncomplete(){ game.jumpComplete(); }}));
		anims.push(new Anim("left", {frameData:this.spriteData.frames, frames:[22,"..",32], loop:false, motion:{ x:-this.config.jump.x, y:0}, fps:fps, oncomplete(){ game.jumpComplete(); }}));
		anims.push(new Anim("right", {frameData:this.spriteData.frames, frames:[33,"..",43], loop:false, motion:{ x:this.config.jump.x, y:0}, fps:fps, oncomplete(){ game.jumpComplete(); }}));
		anims.push(new Anim("hooray", {frameData:this.spriteData.frames, frames:[45,"..",69], loop:false, fps:fps, oncomplete(){ game.nextLevel(); }}));
		anims.push(new Anim("fall", {frameData:this.spriteData.frames, frames:[71,"..",127], loop:false, fps:fps, oncomplete(){ game.resetBear(); }}));
		const bearoptions = {
			context: this.context,
			image: this.spriteImage,
			x: this.config.bear.x,
			y: this.config.bear.y,
			anchor: new Vertex(0.35, 0.6),
			scale: 0.8,
			anims: anims
		}
		//Create bear
		this.bear = new AnimSprite("bear", bearoptions);
		this.bear.anim = "static";
		this.bear.iceberg = null;
		
		this.platforms = [];						  
		
		let platformoptions = {
			game: this,
			frame: "platform.png",
			x: 160,
			y: 75,
			anchor: new Vertex(0.5, 0.5),
			scale: 1,
		}
		let platform1 = new Sprite("platform", platformoptions);
		this.platforms.push(platform1);
		this.sprites.push(platform1);
		
		platformoptions.y = 560;
		let platform2 = new Sprite("platform", platformoptions);
		this.platforms.push(platform2);
		this.sprites.push(platform2);
		
		this.icebergs = [];
		let left = true;
		let scale = 0.8;
		const speed = 80;
		for(let row=0; row<3; row++){
			left = !left;
			this.icebergs.push([]);
			for(let col=0; col<4; col++){
				let iceanims = [];
				if (left){
					//Icebergs start at 133 - 1-8-31 32-39-62 - 133-140-163 164-171-194
					iceanims.push(new Anim("berg1", {frameData:this.spriteData.frames, frames:[133,"..",140,"h8","..",163], loop:false, motion:{ x:-speed, y:0}, fps:fps, oncomplete(){ game.spawn(this); }}));
					iceanims.push(new Anim("berg2", {frameData:this.spriteData.frames, frames:[164,"..",171,"h8","..",194], loop:false, motion:{ x:-speed, y:0}, fps:fps, oncomplete(){ game.spawn(this); }}));
				}else{
					iceanims.push(new Anim("berg1", {frameData:this.spriteData.frames, frames:[133,"..",140,"h8","..",163], loop:false, motion:{ x:speed, y:0}, fps:fps, oncomplete(){ game.spawn(this); }}));
					iceanims.push(new Anim("berg2", {frameData:this.spriteData.frames, frames:[164,"..",171,"h8","..",194], loop:false, motion:{ x:speed, y:0}, fps:fps, oncomplete(){ game.spawn(this); }}));
				}
				const options = {
					name: "iceberg",
					context: this.context,
					image: this.spriteImage,
					x: col*this.config.iceberg.col + this.config.iceberg.x,
					y: row*this.config.iceberg.row + this.config.iceberg.y,
					anchor: new Vertex(0.5, 0.5),
					scale: scale,
					anims: iceanims
				}
				let iceberg = new AnimSprite("iceberg", options);
				iceberg.row = row;
				this.icebergs[row].push(iceberg);
				let index = Math.ceil(Math.random()*2);
				iceberg.anim = `berg${index}`;
				iceberg._anim.currentTime = Math.random() * 6;
				this.sprites.push(iceberg);
			}
		}
		
		const lifeoptions = {
			game: this,
			frame: "lifeicon{04}.png",
			index: 8,
			x: 85,
			y: 15,
			anchor: new Vertex(0.5, 0.5),
			scale: 0.7,
		}
		//Life bar lifeicon00xx.png 1-15
		this.lifebar = new Sprite("lifebar", lifeoptions);
		this.sprites.push(this.lifebar);
		
		const msgoptions = {
			name: "ui",
			game: this,
			frame: "msg_panel{04}.png",
			index: 1,
			centre: true,
			scale: 1.0,
		}
		//Message panel - msg_panel000x.png 1-3
		this.msgPanel = new Sprite("msgPanel", msgoptions);
		
		const timeoptions = {
			game: this,
			frame: "stopwatch{04}.png",
			index: 1,
			x: 20,
			y: 50,
			anchor: new Vertex(0.5, 0.5),
			scale: 1.0,
		}
		//Stopwatch - stopwatch00xx.png 1-13
		this.stopwatch = new Sprite("stopwatch", timeoptions);
		this.sprites.push(this.stopwatch);
		
		const bottleoptions = {
			name: "ui",
			game: this,
			frame: "bottles{04}.png",
			index: 1,
			x: 290,
			y: 50,
			anchor: new Vertex(0.5, 0.5),
			scale: 0.5,
		}
		//Bottles - bottles000x.png 1-5
		this.bottle = new Sprite("bottle", bottleoptions);
		this.sprites.push(this.bottle);
		
		this.sprites.push(this.bear);
		
		const buttonoptions = {
			game: this,
			frame: "xarrow{04}.png",
			index: 1,
			x: 30,
			y: 490,
			anchor: new Vertex(0.5, 0.5),
			scale: 1.0,
		}
		this.buttons = [];
		//Buttons - xarrow000x.png 1-4
		
		for(let i=1; i<=4; i++){
			buttonoptions.index = i;
			buttonoptions.x = (i-1) * 75 + 47;
			let button = new Sprite("button", buttonoptions);
			this.buttons.push(button);
			this.sprites.push(button);
		}
		
		for(let sprite of this.sprites){
			sprite.debug = true;
		}
		
		const game = this;
		if ('ontouchstart' in window){
			this.canvas.addEventListener("touchstart", function(event){ game.tap(event); });
		}else{
			this.canvas.addEventListener("mousedown", function(event){ game.tap(event); });
		}
		
		this.state = "ready";
		
		this.refresh();
	}
	
	jumpComplete(){
		//Have we got across
		if (this.bear.y>500){
			this.bear.anim = "hooray";
			return;
		}else if (this.bear.y<=this.config.bear.y){
			this.bear.anim = "static";
			return;
		}
		//Is the bear on an iceberg?
		const pos = new Vertex(this.bear.x, this.bear.y);
		let found = false;
		for(let row of this.icebergs){
			for(let iceberg of row){
				if (iceberg.hitTest(pos)){
					//Make sure bear is in centre part of the iceberg
					const bb = iceberg.boundingBox;
					const left = bb.x + bb.w/8;
					const right = bb.x + bb.w * (7/8);
					const anim = iceberg.anim;
					if (this.bear.x>left && this.bear.x<right){
						//Now check if the anim shows a solid berg
						if (!anim.paused && (anim.frames.length - anim.index)>20){
							this.bear.iceberg = {sprite:iceberg, offset:new Vertex(this.bear.x-iceberg.x, this.bear.y-iceberg.y)};
						}
					}
					console.log(`Found iceberg x:${left}<${this.bear.x}<${right} paused:${anim.paused} frame:${anim.index} of ${anim.frames.length} iceberg:${this.bear.iceberg}`);
					found = true;
					break;
				}
			}
			if (found) break;
		}
		if (this.bear.iceberg==null){
			this.loseLife(true);
		}else{
			this.bear.anim = "static";
		}
	}
	
	loseLife(fall=false){
		this.bear.iceberg = null;
		if (fall){
			this.sprites.splice(this.sprites.indexOf(this.bear), 1);
			const row = Math.floor((this.bear.y - this.config.iceberg.y)/this.config.iceberg.row);
			const index = this.sprites.indexOf(this.icebergs[row][0]);
			this.sprites.splice(index, 0, this.bear);
			this.bear.anim = "fall";
		}else{
			this.resetBear();
		}
	}
	
	resetBear(){
		this.sprites.splice(this.sprites.indexOf(this.bear), 1);
		this.sprites.splice(this.sprites.length-4, 0, this.bear);
		this.bear.iceberg = null;
		this.bear.anim = "static";
		this.bear.x = this.config.bear.x;
		this.bear.y = this.config.bear.y;
	}
	
	nextLevel(){
		this.bear.anim = "static";
		this.state = "next level";
		this.level++;
		for(let row of this.icebergs){
			for(let iceberg of row){
				iceberg.targetY = iceberg.y;
				iceberg.reset = false;
			}
		}
		this.bear.targetY = this.config.bear.y;
		this.bear.reset = true;
		this.platforms[0].targetY = this.platforms[1].y;
		this.platforms[1].targetY = this.platforms[0].y;
		for(let platform of this.platforms){
			platform.reset = (platform.y>400);
		}
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
		if (this.state == "next level"){
			//Spawning a new level
			const ui = ["lifebar", "button", "bottle", "stopwatch"];
			let count = { reset:0, total:0 };
			let offsetY = -10;
			for(let sprite of this.sprites){
				if (ui.includes(sprite.name)) continue;
				count.total++;
				let check = (sprite.y >= sprite.targetY && sprite.reset);
				sprite.y += offsetY;
				let bb = sprite.boundingBox;
				if ((bb.y + bb.h) < 0){
					sprite.y += (this.canvas.height + bb.h);
					sprite.reset = true;
				}
				if (sprite.y<sprite.targetY && check){
					sprite.y = sprite.targetY;
					count.reset++;
				}
			}
			if (count.reset == count.total) this.state = "ready";
		}
		
		for(let row of this.icebergs){
			for(let iceberg of row){
				if (iceberg._anim.motion.x>0){
					//Moving right check off screen right
					if (iceberg.x>this.canvas.width + this.config.iceberg.col){
						iceberg.x -= this.config.iceberg.col * 4;
						break;
					}
				}else{
					if (iceberg.x<-this.config.iceberg.col){
						iceberg.x += this.config.iceberg.col * 4;
						break;
					}
				}
			}
		}
		
		if (this.bear.iceberg!=null){
			this.bear.x = this.bear.iceberg.sprite.x + this.bear.iceberg.offset.x;
			let offscreen = this.bear.x>320 || this.bear.x<0;
			if (offscreen){
				this.loseLife();
			}else{
				const anim = this.bear.iceberg.sprite.anim;
				if ((anim.frames.length-anim.index)<20){
					this.loseLife(true);
				}
			}
		}
		
		for(let sprite of this.sprites){
			if (sprite==null) continue;
			sprite.update(dt);
		}
	}
	
	spawn(anim){
		let sprite;
		let found = false;
		for(sprite of this.sprites){
			if (sprite._anim == anim){
				found = true;
				break;
			}
		}
		const index = Math.ceil(Math.random()*2);
		const animName = `berg${index}`;
		if (found){
			sprite.anim = animName;
			sprite.pauseAnim(this.pauseTime);
		}
		if (this.bear.iceberg!=null && sprite==this.bear.iceberg.sprite){
			this.loseLife(true);
		}
	}
	
	render(){
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.fillStyle = "#fff";
		this.context.fillRect(0,0,this.canvas.width, 20);
		for(let sprite of this.sprites) sprite.render();
	}
	
	getMousePos(evt) {
        const rect = this.canvas.getBoundingClientRect();
		const clientX = evt.targetTouches ? evt.targetTouches[0].pageX : evt.pageX;
		const clientY = evt.targetTouches ? evt.targetTouches[0].pageY : evt.pageY;
        return {
          x: clientX - rect.left,
          y: clientY - rect.top
        };
      }
	
	tap (evt) {
		if (this.state!="ready") return;
		if (this.bear.anim.name!="static") return;
		
		const mousePos = this.getMousePos(evt);
		const canvasScale = this.canvas.width / this.canvas.offsetWidth;
		const loc = {};
		
		loc.x = mousePos.x * canvasScale;
		loc.y = mousePos.y * canvasScale;
		
		let i=0;
		for (let button of this.buttons) {
			if (button.hitTest(loc)){
				this.bear.iceberg = null;
				switch(i){
					case 0:
						this.bear.anim = "left";
						break;
					case 1:
						this.bear.anim = "backward";
						break;
					case 2:
						this.bear.anim = "forward";
						break;
					case 3:
						this.bear.anim = "right";
						break;
				}
			}
			i++;
		}
	}
}




