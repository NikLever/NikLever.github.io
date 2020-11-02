// JavaScript Document
class Game{
	constructor(){
		this.canvas = document.getElementById("game");
		this.context = this.canvas.getContext("2d");
		this.lastRefreshTime = Date.now();
		this.config = { tilesize: 128 };
		this.computer = { row:-1, col:-1 };
		this.sprites = [];
		this.ui = [];
		
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
		let scale = cellsize/this.config.tilesize;
		
		for(let sprite of this.sprites){
			sprite.x = sprite.col * cellsize + cellsize/2;
			sprite.y = sprite.row * cellsize + cellsize/2;
			sprite.scale = scale;
		}
		
		const x = this.canvas.width - (this.canvas.width - cellsize*8)/2;
		scale /= 1.5;
		
		let i=0;
		for(let sprite of this.ui){
			sprite.x = x;
			sprite.y = cellsize/2 + i * cellsize;
			sprite.scale = scale;
			i++;
		}
		
		this.update();
		this.render();
	}
	
	init(){	
		const cellsize = this.canvas.height/8;
		let scale = cellsize/this.config.tilesize;
		
		const x = this.canvas.width - (this.canvas.width - cellsize*8)/2;
		scale /= 1.5;
		
		const options = {
			game: this,
			frame: "tile_{03}.png",
			index: 10,
			x: x,
			y: cellsize/2,
			scale: scale
		}
		this.ui.push(new Sprite("white", options));
		options.index = 1;
		options.y = cellsize/2 + cellsize;
		this.ui.push(new Sprite("black", options));
		
		const game = this;
		
		if ('ontouchstart' in window){
			this.canvas.addEventListener("touchstart", function(event){ game.tap(event); });
		}else{
			this.canvas.addEventListener("mousedown", function(event){ game.tap(event); });
		}
		
		this.state = "gameover";
		
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
		anims.push(new Anim("black", {frameData:this.spriteData.frames, frames:[1], loop:false, fps:fps}));
		anims.push(new Anim("white", {frameData:this.spriteData.frames, frames:[10], loop:false, fps:fps}));
		anims.push(new Anim("towhite", {frameData:this.spriteData.frames, frames:[1,"..",10], loop:false, fps:fps, oncomplete(){ game.flipComplete(this, "white"); }}));
		anims.push(new Anim("toblack", {frameData:this.spriteData.frames, frames:[10,"r..",1], loop:false, fps:fps, oncomplete(){ game.flipComplete(this, "black"); }}));
		
		const cellsize = this.cellsize;
		const offset = this.padding + cellsize/2;
		const scale = cellsize/this.config.tilesize;
		const anim = (black) ? "black" : "white";
		const options = {
			game: this,
			scale: scale,
			anims: anims,
			x: offset + cellsize * col,
			y: offset + cellsize * row,
			anim: anim
		}
		
		const tile = new AnimSprite("tile", options);
		tile.row = row;
		tile.col = col;
		
		return tile;
	}
	
	flipComplete(anim, animName){
		for(let sprite of this.sprites){
			if (sprite.anim==anim){
				sprite.anim = animName;
				break;
			}
		}
		this.flipcount++;
		if (this.flipcount==this.flips.length){
			if (this.state=="player_flip"){
				this.state="computer";
			}else{
				if (!this.checkPlayerMoves()){
					this.state = "gameover";
				}else{
					this.state = "player";
				}
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
	
	checkPlayerMoves(){
		let result = false;
		for(let row=0; row<8; row++){
			for(let col=0; col<8; col++){
				if (this.legalMove(row, col, false)){
					result = true;
					break;
				}
			}
		}
		return result;
	}
	
	computerMove(){
		//Initially just find the first legal move
		for(let row=0; row<8; row++){
			for(let col=0; col<8; col++){
				if (this.legalMove(row, col)){
					this.computer = { row, col };
					const tile = this.newtile(row, col);
					tile.update(0);
					this.sprites.push(tile);
					if (this.sprites.length<=4){
						this.state = "player";
					}else{
						for(let tile of this.flips) tile.anim = "toblack";
						this.flipcount = 0;
						this.clickSfx.play();
						this.state = "computer_flip";
					}
					
					return true;
				}
			}
		}
		return false;//No moves available
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
	
	newGame(){
		this.whitecount = 0;
		this.sprites = [];
		this.state = "player";
	}
	
	refresh() {
		if (this.state=="computer"){
			if (!this.computerMove()){
				this.state = "gameover";
			}
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
		let count = 0;
		for(let sprite of this.sprites){
			if (sprite==null) continue;
			sprite.update(dt);
			if (this.checkTile(sprite, false)) count++;
		}
		for(let sprite of this.ui){
			if (sprite==null) continue;
			sprite.update(dt);
		}
		this.whitecount = count;
	}
	
	render(){
		if (this.state=="loading") return;
		
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	
		const cellsize = this.cellsize;
		const padding = this.padding;
		const frame = this.spriteData.frames[0].frame;
		
		for(let x=padding-cellsize, col=-1; x<this.canvas.width; x+=cellsize, col++){
			for(let y=padding-cellsize, row=-1; y<this.canvas.height; y+=cellsize, row++){
				this.context.globalAlpha = ((row>=3 && row<=4 && col>=3 && col<=4) || (row==this.computer.row && col==this.computer.col)) ? 0.7 : 1.0;
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
		
		let fontSize = cellsize/3;
		this.context.fillStyle = "#fff";
		this.context.font = `${fontSize}px Verdana`;
		
		let i=0;
		for(let sprite of this.ui){
			sprite.render();
			let count;
			switch(i){
				case 0:
					count = this.whitecount;
					break;
				case 1:
					count = this.sprites.length - this.whitecount;
					break;
			}
			let str = new String(count);
			let txt = this.context.measureText(str);
			this.context.fillText(str, sprite.x - txt.width/2, sprite.y + cellsize/1.5);
			i++;
		}
		
		if (this.state=="gameover"){
			const fontSize = this.canvas.height/20;
			const rect = new Rect(this.canvas.width/2 - this.canvas.width/6, this.canvas.height/2 - this.canvas.height/8, this.canvas.width/3, this.canvas.height/3);
			this.context.globalAlpha = 0.5;
			this.context.fillStyle = "#fff";
			this.context.fillRect(0, rect.y - fontSize*1.5, this.canvas.width, fontSize * 5 );
			this.context.globalAlpha = 1.0;
			const computercount = this.sprites.length - this.whitecount;
			const str = (computercount>this.whitecount) ? "Game Over.\nComputer wins.\nClick to play again." : "Game Over.\nYou win!\nClick to play again.";		
			const options = {
				color: "#550",
				font: "Verdana",
				fontSize: fontSize,
				lineHeight: fontSize * 1.2
			}
			const text = new TextBlock(this.context, str, rect, options);
		}
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
		if (this.state=="gameover"){
			this.newGame();
			return;
		}else if (this.state!="player") return;
		
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

class Board{
	constructor(tiles){
		this.tiles = tiles.concat([]);//Copy tiles to new Array
	}
	
	tileAt(row, col){
		for(let tile of this.tiles){
			if (tile.row==row && tile.col==col){
				return tile;
			}
		}
	}
	
	checkTile(tile, black){
		return ((black && tile.black) || (!black && !tile.black));	
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
		
	legalMove(row, col, black=true){
		for(let tile of this.tiles){
			if (tile.row==row && tile.col==col) return false;
		}
		
		if (this.tile.length<4){
			return (row>=3 && row<=4 && col>=3 && col<=4);
		}else{
			return ((this.getFlips(row, col, !black)).length>0);	
		}
	}
	
	cellWeight(row, col){
		if ((row==0 || row==7) && (col==0 || col==7)){
			//Corner
			return 15;
		}else if ((row==1 || row==6) && (col==1 || col==6)){
			//Adjacent to corner
			return -8;
		}else if (row==0 || row==7 || col==0 || col==7){
			return 8;
		}else  if (row==1 || row==6 || col==1 || col==6){
			return -4;
		}else{
			return 1;
		}
	}
	
	get score(){
		let white = 0;
		let black = 0;
		for(let tile of this.tiles){
			const weight = this.cellWeight(tile.row, tile.col);
			if (tile.black){
				black += weight;
			}else{
				white += weight;
			}
		}
		return { white, black };
	}
}

class Tile{
	constructor(row, col, black){
		this.row = row;
		this.col = col;
		this.black = black;
	}
}



