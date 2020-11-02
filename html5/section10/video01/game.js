// JavaScript Document
class Game{
	constructor(){
		this.canvas = document.getElementById("game");
		this.context = this.canvas.getContext("2d");
		this.lastRefreshTime = Date.now();
		this.config = { tilesize: 128 };
		this.sprites = [];
		
		this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
		
		this.clickSfx = new SFX({
			context: this.audioContext,
			src:{mp3:"sfx/click.mp3", webm:"sfx/click.webm"},
			loop: false,
			volume: 0.3
		});
		
		this.errorSfx = new SFX({
			context: this.audioContext,
			src:{mp3:"sfx/boing.mp3", webm:"sfx/boing.webm"},
			loop: false,
			volume: 0.3
		});
		
		this.state = "loading";
		this.resize();
		
		const game = this;
		this.loadJSON("reversi", function(data, game){
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
	
	resize(){
		const width = window.innerWidth;
		const height = window.innerHeight;
		const aspect = 1.1;
		
		if (width/height>aspect){
			//Use height as cell size
			this.canvas.height = height;
			this.canvas.width = height * aspect;
		}else{
			//Use width for cell size
			this.canvas.width = width;
			this.canvas.height = width/aspect;
		}
		
		const cellsize = this.canvas.height/8;
		const scale = cellsize/this.config.tilesize;
		
		for(let sprite of this.sprites){
			sprite.x = sprite.col * cellsize + cellsize/2;
			sprite.y = sprite.row * cellsize + cellsize/2;
			sprite.scale = scale;
		}
		
		this.update();
		this.render();
	}
	
	init(){	
		const game = this;
		if ('ontouchstart' in window){
			this.canvas.addEventListener("touchstart", function(event){ game.tap(event); });
		}else{
			this.canvas.addEventListener("mousedown", function(event){ game.tap(event); });
		}
		
		this.state = "player";
		
		this.refresh();
	}
	
	get padding(){
		return this.canvas.height/50;
	}
	
	get cellsize(){
		return (this.canvas.height - this.padding*2)/8;
	}
	
	newtile(row, col, black=true){
		const fps = 25;
		const game = this;
		//Create tile anims
		let anims = [];
		if (black){
			anims.push(new Anim("static", {frameData:this.spriteData.frames, frames:[1], loop:false, fps:fps}));
		}else{
			anims.push(new Anim("static", {frameData:this.spriteData.frames, frames:[10], loop:false, fps:fps}));
		}
		anims.push(new Anim("towhite", {frameData:this.spriteData.frames, frames:[1,"..",10], loop:false, fps:fps, oncomplete(){ game.flipComplete(this); }}));
		anims.push(new Anim("toblack", {frameData:this.spriteData.frames, frames:[10,"r..",1], loop:false, fps:fps, oncomplete(){ game.flipComplete(this); }}));
		
		const cellsize = this.cellsize;
		const offset = this.padding + cellsize/2;
		const scale = cellsize/this.config.tilesize;
		
		const options = {
			game: this,
			scale: scale,
			anims: anims,
			x: offset + cellsize * col,
			y: offset + cellsize * row,
			anim: 'static'
		}
		
		const tile = new AnimSprite("tile", options);
		tile.row = row;
		tile.col = col;
		
		return tile;
	}
	
	flipComplete(anim){
		for(let sprite of this.sprites){
			if (sprite.anim==anim){
				sprite.anim = "static";
				break;
			}
		}
		this.flipcount++;
		if (this.flipcount==this.flips.length){
			if (this.state=="player_flip"){
				this.state="computer";
			}else{
				this.state="player";
			}
		}
	}
	
	tileAt(row, col){
		for(let sprite of this.sprites){
			if (sprite.row==row && sprite.col==col){
				return sprite;
			}
		}
	}
	
	checkTile(tile, black){
		return ((black && tile.frameData.filename=="tile_001.png") || (!black && tile.frameData.filename=="tile_010.png"));	
	}
	
	boundaryCheck(row, col){
		return (row>=0 && row<8 && col>=0 && col<8);	
	}
	
	checkLine(row, col, black, dirX, dirY){
		let line = [];
		let found;
		do{
			row += dirY;
			col += dirX;
			if (!this.boundaryCheck(row, col)) return [];
			let tile = this.tileAt(row, col);
			if (tile==null) return [];
			found = false;
			if (this.checkTile(tile, black)){
				line.push(tile);
				found=true;
			}else{
				//Must be tile of opposite colour so return
				break;
			}
		}while(found);
		
		return line;
	}
	
	getFlips(row, col, black){
		let flips = [];
		for(let dirX=-1; dirX<=1; dirX++){
			for(let dirY=-1; dirY<=1; dirY++){
				const line = this.checkLine(row, col, black, dirX, dirY);
				if (line!=null && line.length>0){
					flips = flips.concat(line);
				}
			}
		}	
		this.flips = flips; //Store for later use
		return flips;
	}
	
	computerMove(){
		//Initially just find the first legal move
		for(let row=0; row<8; row++){
			for(let col=0; col<8; col++){
				if (this.legalMove(row, col)){
					this.sprites.push(this.newtile(row, col));
					if (this.sprites.length<=4){
						this.state = "player";
					}else{
						for(let tile of this.flips) tile.anim = "toblack";
						this.flipcount = 0;
						this.clickSfx.play();
						this.state = "computer_flip";
					}
					return;
				}
			}
		}
	}
		
	legalMove(row, col, black=true){
		for(let sprite of this.sprites){
			if (sprite.row==row && sprite.col==col) return false;
		}
		
		if (this.sprites.length<4){
			return (row>=3 && row<=4 && col>=3 && col<=4);
		}else{
			return ((this.getFlips(row, col, !black)).length>0);	
		}
	}
	
	refresh() {
		if (this.state=="computer"){
			this.computerMove();
		}
		
		const now = Date.now();
		const dt = (now - this.lastRefreshTime) / 1000.0;

		this.update(dt);
		this.render();

		this.lastRefreshTime = now;
		
		const game = this;
		requestAnimationFrame(function(){ game.refresh(); });
	};
	
	update(dt){
		for(let sprite of this.sprites){
			if (sprite==null) continue;
			sprite.update(dt);
		}
	}
	
	render(){
		if (this.state=="loading") return;
		
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	
		const cellsize = this.cellsize;
		const padding = this.padding;
		const frame = this.spriteData.frames[0].frame;
		
		for(let x=padding-cellsize, col=-1; x<this.canvas.width; x+=cellsize, col++){
			for(let y=padding-cellsize, row=-1; y<this.canvas.height; y+=cellsize, row++){
				this.context.globalAlpha = (row>=3 && row<=4 && col>=3 && col<=4) ? 0.7 : 1.0;
				this.context.drawImage(this.spriteImage, frame.x, frame.y, frame.w, frame.h, x, y, cellsize, cellsize );
			}
		}
		const len = cellsize*8;
		
		this.context.beginPath();
		this.context.strokeStyle = "#550";
		this.context.lineWidth = cellsize/40;
		
		for(let i=0; i<=8; i++){
			const pos = i*cellsize + padding;
			this.context.moveTo(padding, pos);
			this.context.lineTo(len + padding, pos);
			this.context.moveTo(pos, padding);
			this.context.lineTo(pos, len + padding);
		}
		this.context.stroke();
		
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
		if (this.state!="player") return;
		
		const mousePos = this.getMousePos(evt);
		const canvasScale = this.canvas.width / this.canvas.offsetWidth;
		const loc = {};
		
		loc.x = mousePos.x * canvasScale;
		loc.y = mousePos.y * canvasScale;
		
		const padding = this.padding;
		const cellsize = this.cellsize;
		
		const row = Math.floor((loc.y-padding)/cellsize);
		const col = Math.floor((loc.x-padding)/cellsize);
		
		if (this.legalMove(row, col, false)){
			this.sprites.push(this.newtile(row, col, false));
			if (this.sprites.length<4){
				this.state = "computer";
			}else{
				for(let tile of this.flips) tile.anim = "towhite";
				this.flipcount = 0;
				this.state = "player_flip";
			}
			this.clickSfx.play();
		}else{
			this.errorSfx.play();
		}
	}
}




