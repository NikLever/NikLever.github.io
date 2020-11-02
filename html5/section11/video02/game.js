// JavaScript Document
class Game{
	constructor(){
		this.canvas = document.getElementById("game");
		this.context = this.canvas.getContext("2d");
		this.lastRefreshTime = Date.now();
		this.config = { cardWidth: 170, cardHeight: 255 };
		this.debug = false;
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
		
		this.dealSfx = new SFX({
			context: this.audioContext,
			src:{mp3:"sfx/swish.mp3", webm:"sfx/swish.webm"},
			loop: false,
			volume: 0.3
		});
		
		this.completeSfx = new SFX({
			context: this.audioContext,
			src:{mp3:"sfx/gliss.mp3", webm:"sfx/gliss.webm"},
			loop: false,
			volume: 0.3
		});
		
		this.state = "loading";
		this.resize();
		
		const game = this;
		this.loadJSON("cards", function(data, game){
			game.spriteData = JSON.parse(data);
			game.spriteImage = new Image();
			game.spriteImage.src = game.spriteData.meta.image;
			game.spriteImage.onload = function(){	
				game.init();
				game.refresh();
				if (window.PointerEvents){
					game.canvas.addEventListener("pointerdown", function(event){ game.tap(event); });
					game.canvas.addEventListener("pointermove", function(event){ game.move(event); });
					game.canvas.addEventListener("pointerup", function(event){ game.up(event); });
				}else if ('ontouchstart' in window){
					game.canvas.addEventListener("touchstart", function(event){ game.tap(event); });
					game.canvas.addEventListener("touchmove", function(event){ game.move(event); });
					game.canvas.addEventListener("touchend", function(event){ game.up(event); });
				}else{
					game.canvas.addEventListener("mousedown", function(event){ game.tap(event); });
					game.canvas.addEventListener("mousemove", function(event){ game.move(event); });
					game.canvas.addEventListener("mouseup", function(event){ game.up(event); });
				}
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
		const aspect = 1.5;
		
		if (width/height>aspect){
			//Use height as cell size
			this.canvas.height = height;
			this.canvas.width = height * aspect;
		}else{
			//Use width for cell size
			this.canvas.width = width;
			this.canvas.height = width/aspect;
		}
		
		this.update();
		this.render();
	}
	
	get scale(){
		return (this.canvas.width/11)/this.config.cardWidth;
	}
	
	shuffleDeck(suits){
		let deck = new Array(104);
		let index;
		const topcard = suits * 13 + 1;
		const packs = 8/suits;
		for(let i=1; i<topcard; i++){
			for(let j=0; j<packs; j++){
				do{
					index = Math.floor(Math.random()*104);
				}while(deck[index]!=null);
				deck[index] = i;
			}
		}
		return deck;
	}
	
	init(){
		this.sprites = [];
		this.ui = [];
		
		delete this.completed;
		delete this.foundation;
		delete this.tableau;
		delete this.stack;
		//This creates a panel that allows the user to choose a 1,2 or 4 suit game
		const width = this.canvas.width/8;
		const left = width*1.5;
		const scale = width/(this.config.cardWidth*1.05);
		const margin = this.config.cardHeight * scale * 0.7;
		let gap = this.canvas.height - margin*2;
		const height = gap/12;
		gap -= this.config.cardHeight*scale;
		const rect = new Rect(0,0,width*3*0.6, (gap/3)*0.6);
		rect.x = this.canvas.width/2 - rect.w/2;
		rect.y = this.canvas.height - margin - rect.h;
		
		const cardoptions = {
			game: this,
			frame: "cards{04}.png",
			index: 53,
			opacity: 1,
			x: left,
			y: this.canvas.height - margin,
			debug: this.debug,
			scale: scale
		}
		
		const top = margin + (this.config.cardHeight*scale)/2;
		cardoptions.x = left;
		//Left column
		for(let i=0; i<13; i++){
			cardoptions.y = margin + i*height;
			cardoptions.index = 13 - i;
			this.sprites.push(new Sprite('card', cardoptions));
		}
		//Top row
		cardoptions.index = 53;
		cardoptions.y = margin;
		for(let i=1; i<=4; i++){
			cardoptions.x = left + width*i;
			this.sprites.push(new Sprite('card', cardoptions));
		}
		cardoptions.x = left + 5*width;
		//Right column
		for(let i=0; i<13; i++){
			cardoptions.y = margin + i*height;
			cardoptions.index = 26 - i;
			this.sprites.push(new Sprite('card', cardoptions));
		}
		
		const game = this;
		const strs = ["HARD", "MEDIUM", "EASY"];
		const suits = [4,2,1];
		
		const buttonoptions = {
			font: 'Verdana',
			fontSize: rect.h*0.6,
			onClick: function(){ game.initGame(this); }
		}
		
		for(let i=0; i<strs.length; i++){
			buttonoptions.text = strs[i];
			buttonoptions.rect = new Rect(rect.x, this.canvas.height - margin - (gap/3)*i - rect.h, rect.w, rect.h);
			const button = new Button(buttonoptions);
			button.suits = suits[i];
			this.ui.push(button);
		}
		
		this.state = "new game";
	}
	
	initGame(button){
		this.ui = [];
		
		const deck = this.shuffleDeck(button.suits);
		const scale = this.scale;
		const width = this.canvas.width/10.5;
		const margin = (this.canvas.width - width*10)/2;
		const left = margin + width/2;
		const top = margin + (this.config.cardHeight*scale)/2;
		const height = this.canvas.height/80;	
		const cardoptions = {
			game: this,
			frame: "cards{04}.png",
			index: 54,
			opacity: 0.4,
			x: left,
			y: this.canvas.height - top,
			debug: this.debug,
			scale: scale
		}
		
		this.foundation = [];
		
		for(let i=0; i<8; i++){
			cardoptions.x = left + i*width;
			let sprite = new Sprite("card", cardoptions);
			this.foundation.push(sprite);
		}
		
		cardoptions.y = top;
		cardoptions.opacity = 1;
		
		let index=0;
		let tableau = [];
		for(let col=0; col<10; col++){
			cardoptions.x = left + col*width;
			let pile = [];
			for(let row=0; row<6; row++ ){
				if (row==5 && col>3) break;
				cardoptions.y = top + row*height;
				if ((row==4 && col>3) || (row==5)){
					cardoptions.index = deck[index];
				}else{
					cardoptions.index = 53;
				}
				const sprite = new Sprite('card', cardoptions);
				sprite.card = deck[index];
				sprite.cardName = this.cardName(deck[index]);
				pile.push(sprite);
				index++;	
			}	
			tableau.push(pile);
		}
		this.tableau = tableau;
		
		cardoptions.x = this.canvas.width - width/2 - margin;
		cardoptions.y = this.canvas.height - top;
		cardoptions.index = 53;
		this.stack = [];
		for(let i=index; i<104; i++){
			const sprite = new Sprite('card', cardoptions);
			sprite.card = deck[i];
			sprite.cardName = this.cardName(deck[i]);
			this.stack.push(sprite);
		}
		
		this.buildSpriteList();
		
		const game = this;
		
		let btnHeight = this.canvas.height/30;
		
		const buttonoptions = {
			text: "Quit",
			rect: new Rect(cardoptions.x - width*1.45, this.canvas.height - margin - btnHeight, width*0.9, btnHeight),
			fontSize: btnHeight*0.6,
			onClick: function(){ game.init(); }
		}
		this.ui.push(new Button(buttonoptions));
		
		this.state = "ready";
	}
	
	buildSpriteList(){
		//Recreate the sprites list from the piles
		this.sprites = [].concat(this.foundation);
		for(let pile of this.tableau) this.sprites = this.sprites.concat(pile);
		this.sprites = this.sprites.concat(this.stack);
	}
	
	dealFromStack(){
		const game = this;
			
		this.state = "dealing";
		this.tweens = [];
		let index = 0;
		
		for(let pile of this.tableau){
			const card = this.stack.pop();
			if (card==null) return;//Stack empty
			card.index = card.card;
			const pos = this.getNextCardCoordinates(index);
			const topCardOfPile = pile[pile.length-1];
			const cardIndex = this.sprites.indexOf(topCardOfPile);
			//Make sure we add this to the sprites list as the top card in a pile
			pile.splice(pile.length, 0, card);
			this.sprites.splice(this.sprites.length, 0, card);
			//constructor(target, channel, endValue, duration, oncomplete, easing="quadInOut"){
			this.tweens.push(new Tween(card, 'x', pos.x, 1, tweenend));
			this.tweens.push(new Tween(card, 'y', pos.y, 1, tweenend));
			
			if (this.debug){
				this.dumpCards(pile, "dealFromStack pile:");
				this.dumpCards(this.sprites, `dealFromStack sprites[${cardIndex}]:`, cardIndex, 2);
			}

			index++;
		}
		
		this.dealSfx.play();
		this.tweencount = 0;//Incremented for each tween end
		
		function tweenend(){
			game.tweencount++;
			if (game.tweencount==game.tweens.length){
				delete game.tweens;
				delete game.tweencount;
				game.buildSpriteList();//Change Z ordering
				game.state = "ready";
			}
		}
	}
	
	checkForCompletedPile(pile){
		let prevCardIndex;
		for(let i=pile.length-1; i>=0; i--){
			const card = pile[i];
			const cardIndex = (card.index-1) % 13;
			if (i==pile.length-1){
				if (cardIndex!=0 || pile.length<13) return false;
			}else if (card.index!=prevCardIndex+1){
				return false;
			}
			prevCardIndex = card.index;
			if (cardIndex==12) break;//Found a complete pile
		}	
		const cards = pile.splice(pile.length-13, 13);
		this.buildSpriteList();
		let count = 0;
		for(let card of this.foundation){
			if (card.index==54){
				card.index = cards[cards.length-1].index;
				card.opacity = 1;
				if (count==7){
					this.completeSfx.play();
					const game = this;
					setTimeout(function(){ game.init(); }, 2000);
					this.state = "gameover";
				}
				break;
			}
			count++;
		}
	}
	
	cardName(index){
		//Returns a human readable name of the card for debugging
		const suits = ['h','c','d','s'];
		const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
		const suit = suits[Math.floor((index-1)/ 13)];
		const card = cards[(index-1) % 13];
		return `${card}${suit}`;
	}
	
	dumpCards(cards, prefix="", startIndex=0, limit=-1){
		let names = [];
		let index = 0;
		let count=0;
		for(let card of cards){
			if (index>=startIndex){
				let fd = (card.index==53) ? " fd" : "";
				names.push(card.cardName + fd);
				count++;
				if (limit!=-1 && count>=limit) break;
			}
			index++;
		}
		console.log(prefix + " " + names.join(','));
	}
	
	legalMove(pile, index){
		//To be legal this is either the top card or the ones above it are of the same suit in descending order
		if (index == pile.length-1) return true;
		let cardIndex = pile[index].index;
		for(let i=index+1; i<pile.length; i++){
			const card = pile[i];
			cardIndex--;
			if (card.index != cardIndex) return false;
		}
		return true;
	}
	
	getNextCardCoordinates(col){
		const width = this.canvas.width/10.5;
		const height = this.canvas.height/80;
		const margin = (this.canvas.width - width*10)/2;
		const left = margin + width/2;
		const top = margin + (this.config.cardHeight*this.scale)/2;
		//Set the x and y values of drag cards
		const pile = this.tableau[col];
		let card, multiplier;
		if (pile.length>0){
			card = pile[pile.length-1];
			multiplier = (card.index==53) ? 1 : 3;
		}
		const y = (pile.length==0) ? top : card.y + height*multiplier;
		return {x:left + col * width, y};
	}
		
	emptyTableauPiles(){
		for(let pile of this.tableau){
			if (pile.length==0) return true;
		}	
		return false;
	}
	
	legalDrop(card, dragInfo){
		//Legal drop if drag pile is single length and one less than card	
		//or the drag pile bottom card is one less than card and same suit
		let checkCard = this.sprites[this.sprites.length-dragInfo.count];
		if (card.index==53){
			return true;
		}else{
			const dragCardIndex = ((checkCard.index-1) % 13) + 1;
			const dropCardIndex = ((card.index-1) % 13) + 1;
			return dropCardIndex == dragCardIndex + 1;
		}
	}
	
	insertArrayAt(array, index, arrayToInsert) {
    	Array.prototype.splice.apply(array, [index, 0].concat(arrayToInsert));
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
		if (this.state == "dealing"){
			for(let tween of this.tweens){
				tween.update(dt);
			}
		}
		
		for(let sprite of this.sprites){
			if (sprite==null) continue;
			sprite.update(dt);
		}
		
	}
	
	render(){
		if (this.state=="loading") return;
		
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		
		for(let sprite of this.sprites) sprite.render();
		for(let ui of this.ui) ui.render(this.context);
		
		if (this.debug && this.mousePos!=undefined){
			const size = 8;
			this.context.strokeStyle = "#000";
			this.context.beginPath();
			this.context.moveTo(this.mousePos.x-size, this.mousePos.y);
			this.context.lineTo(this.mousePos.x+size, this.mousePos.y);
			this.context.moveTo(this.mousePos.x, this.mousePos.y-size);
			this.context.lineTo(this.mousePos.x, this.mousePos.y+size);
			this.context.stroke();
		}
	}
	
	getMousePos(evt) {
		if (evt.targetTouches && evt.targetTouches.length==0) return this.mousePos;
		
        const rect = this.canvas.getBoundingClientRect();
		const clientX = evt.targetTouches ? evt.targetTouches[0].pageX : evt.clientX;
		const clientY = evt.targetTouches ? evt.targetTouches[0].pageY : evt.clientY;
		
		const mousePos = new Vertex( clientX - rect.left, clientY - rect.top);
		const canvasScale = this.canvas.width / this.canvas.offsetWidth;
		const loc = new Vertex(mousePos.x * canvasScale, mousePos.y * canvasScale);
		
		if (this.debug) this.mousePos = loc;
		
        return loc;
      }
	
	tap (evt) {
		const mousePos = this.getMousePos(evt);
		
		if (this.state=="gameover"){
			this.gameover();
			return;
		}else if (this.state=="new game"){
			for(let button of this.ui){
				if (button.hitTest(mousePos)){
					button.onClick();
				}
			}
			return;
		}else if (this.state!="ready") return;
		
		let card;
		
		for(let button of this.ui){
			if (button.hitTest(mousePos)){
				button.onClick();
				return;
			}
		}
		
		card = this.stack[this.stack.length-1];
		if (card!=undefined && card.hitTest(mousePos)){
			if (this.emptyTableauPiles()){
				this.errorSfx.play();
				this.showAlert("You cannot deal from the stack when there are empty tableau piles.", false);
			}else{
				this.dealFromStack();
				this.clickSfx.play();
			}
			return;
		}
		
		for(let pile of this.tableau){
			if (pile.length==0) continue;
			for(let i=pile.length-1; i>=0; i--){
				const card = pile[i];
				if (card.index<53){
					if (card.hitTest(mousePos)){
						if (this.legalMove(pile, i)){
							for(let j=i; j<pile.length; j++){
								pile[j].startPosition = { x: pile[j].x, y:pile[j].y };
							}
							//console.log("sprites count before drag:" + this.sprites.length);
							this.dragInfo = { offset:new Vertex(card.x-mousePos.x, card.y-mousePos.y), pile: pile, index: i, spriteIndex: this.sprites.indexOf(card)};
							const sprites = this.sprites.splice(this.dragInfo.spriteIndex, pile.length-i);
							this.dragInfo.count = sprites.length;
							pile.splice(i, sprites.length);
							//this.dumpCards(sprites, "mousedown drag list:");
							this.sprites = this.sprites.concat(sprites);
							//console.log("sprites count dragstart:" + this.sprites.length);
							this.clickSfx.play();
							return;
						}
					}
				}else if (i==pile.length-1){
					if (card.hitTest(mousePos)){
						//This will cause the card to be turned over
						card.index = card.card;
						this.clickSfx.play();
						return;
					}
				}
			}
		}	
		
		this.errorSfx.play();
	}
	
	move (evt){
		if (this.dragInfo == undefined) return;
		const mousePos = this.getMousePos(evt);
		
		let index = this.sprites.length-this.dragInfo.count;
		let card = this.sprites[index];
		card.x = mousePos.x + this.dragInfo.offset.x;
		card.y = mousePos.y + this.dragInfo.offset.y;
		const height = this.canvas.height/80;
		
		for(let i=index+1; i<this.sprites.length; i++){
			const sprite = this.sprites[i];
			sprite.x = card.x;
			sprite.y = card.y + (i-index) * height * 3;
		}
		
		this.mousePos = mousePos;
	}
	
	up(evt){
		if (this.dragInfo==undefined) return;
		const mousePos = this.getMousePos(evt);
		let legalDrop = false;
		let dropCard;
		let index=0;
		let dropPile;
		for(let pile of this.tableau){
			if (pile.length==0){
				const coords = this.getNextCardCoordinates(index);
				const bb = this.sprites[0].boundingBox;
				bb.x = coords.x - bb.w/2;
				bb.y = coords.y - bb.h/2;
				legalDrop = bb.inRect(mousePos);
				console.log(`mouse:${mousePos.x},${mousePos.y} rect:${bb} legalDrop:${legalDrop}`);
			}else if (pile.length>0){
				const card = pile[pile.length-1];
				if (card!=null){
					if (card.hitTest(mousePos)){
						legalDrop = this.legalDrop(card, this.dragInfo);
						dropCard = card;
					}
				}
			}
			
			if (legalDrop){
				//Found good drop location
				//Remove drag cards from top of sprites array
				const cards = this.sprites.splice(this.sprites.length - this.dragInfo.count, this.dragInfo.count);
				//this.dumpCards(cards, "mouseup cards:");
				//let dropIndex = this.sprites.indexOf(dropCard);
				let pileIndex = pile.length;
				//Insert drag cards at dropIndex in sprites array
				//this.insertArrayAt(this.sprites, dropIndex+1, cards);
				//Add drag cards to the drop pile
				pile = pile.concat(cards);
				dropPile = pile;
				//this.dumpCards(pile, 'mouseup pile:');
				//Set new pile at pile index in tableau
				this.tableau[index] = pile;
				const width = this.canvas.width/10.5;
				const height = this.canvas.height/80;
				const margin = (this.canvas.width - width*10)/2;
				const left = margin + width/2;
				const top = margin + (this.config.cardHeight*this.scale)/2;
				//Set the x and y values of drag cards
				const x = left + index * width;
				let y, faceDownDrop;
				if (pileIndex==0){
					y = top - height;
					faceDownDrop = true;
				}else{
					y = pile[pileIndex-1].y;
					faceDownDrop = (pile[pileIndex-1].index == 53);
				}
				
				for(let i=pileIndex; i<pile.length; i++){
					const card = pile[i];
					if (faceDownDrop && i==pileIndex){
						y += height;
					}else{
						y += height*3;
					}
					card.x = x;
					card.y = y;
				}
				//console.log("sprites count dragend:" + this.sprites.length);
				//this.dumpCards(this.sprites, `mouseup sprites[${dropIndex}]`, dropIndex, cards.length + 1);
				this.clickSfx.play();
				break;
			}
			
			index++;
		}
		
		if (!legalDrop){
			//Get drag cards
			const cards = this.sprites.splice(this.sprites.length-this.dragInfo.count, this.dragInfo.count);
			//Return the cards to their starting position
			for(let card of cards){
				card.x = card.startPosition.x;
				card.y = card.startPosition.y;
				delete card.startPosition;
			}
			//Replace them in the pile they were moved from
			const index = this.tableau.indexOf(this.dragInfo.pile);
			this.tableau[index] = this.dragInfo.pile.concat(cards);
			this.errorSfx.play();
		}else{
			this.checkForCompletedPile(dropPile);
		}
		
		this.buildSpriteList();
		
		delete this.dragInfo;
		delete this.mousePos;
	}
}




