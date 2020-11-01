class Game{
	constructor(root){
		this.root = root;
		this.init();
	}
	
	init(){
		const game = this;
		
		this.startTime = this.time;
		
		this.root.play_btn.on('click', function(){ game.start(); });
		this.rikonActive = true;
		this.nuggetsCollected = 10;
		this.digNugget = true;
		this.digNuggetCount = 0;
		this.nuggets = [];
		for(let i=1; i<=10; i++) this.nuggets.push(this.root[`nugget${i}_mc`]);
		this.bullets = [];
		for(let i=1; i<=10; i++) this.bullets.push(this.root[`bullet${i}_mc`]);
		this.bullets.forEach(function(bullet){ bullet.active = false; });
		
		//Get the MovieClips (MC)
		this.sign = this.root.sign_mc;
		this.cowboy = this.root.cowboy_mc;
		this.pod = this.root.pod_mc;
		this.shadow = this.root.shadow_mc;
		
		this.signActive = true;
		this.sign.gotoAndPlay(0);
		this.speed = 0;
		this.boost = 0;
		this.status = "FLY";
		this.flameLevel = 10;
		
		//Initialise MC positions and animations
		this.planetPos = 0;
		this.pod.x = 831;
		this.cowboy.x = 100;
		this.shadow.x = 120;
		this.sign.gotoAndPlay(0);
		this.pod.gotoAndStop(0);
		this.cowboy.stop();
		
		this.nuggetsCollected = 10;
		this.timeLeft = 3000;
		this.enterShip = false;
		this.alienKill = false;
		
		this.rikonPos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this.setRikonPositions();
		
	}
	
	get time(){
		return new Date().getTime(); 	
	}
	
	start(){
		const game = this;
		this.root.gotoAndStop("game");
		this.root.control_mc.up_btn.on("click", function(){ game.boost = -10; });
		this.root.control_mc.down_btn.on("click", function(){ game.boost = 5; });
		this.root.control_mc.left_btn.on("click", function(){ 
			if (game.cowboy.right) game.cowboy.gotoAndPlay(game.cowboy.currentFrame + 1);
			game.speed = -10; 
		});
		this.root.control_mc.right_btn.on("click", function(){ 
			if (!game.cowboy.right) game.cowboy.gotoAndPlay(game.cowboy.currentFrame + 1);
			game.speed = 10; 
		});
		createjs.Ticker.addEventListener("tick", function(){ game.update(); });
	}
	
	update(){
		this.boost += 0.5;
		this.speed *= 0.8;
		this.bg.x += this.speed;
		this.cowboy.y += this.boost;
		if (this.cowboy.y>300){
			this.boost = -10;
		}
	}
	
	loopRunningRikon(rikon){
		if (rikon.x>-100) {
			rikon.x += (this.speed-5);
			const panPos = Math.floor((rikon.x-275)/2.75);
			const volPos = 100 - Math.abs(panPos/3);
			//sfxRun.setPan(panPos);
			//sfxRun.setVolume(volPos);
			if (rikon.x>115 && rikon.x<145 && this.cowboy.y>280 && this.timeLeft>0 && rikon.carryNugget) {
				rikon.carryNugget = false;
				rikon.anim_mc.nugget_mc.y = 200;
				this.cowboy.anim_mc.nugget_mc.gotoAndPlay(1);
				this.nuggetsCollected++;
			} 
			rikon.gotoAndPlay(rikon.currentFrame - 1);
		} else {
			//sfxRun.stop();
			rikon.gotoAndPlay(0);
		}	
	}
	
	initDiggingRikon(rikon){
		rikon.active = true;
		rikon.prevActive = false;
		this.rikonActive = false;
		rikon.Y = 0;
		rikon.x = 570;
	}
	
	updateDiggingRikon(rikon){
		rikon.distance = 600;
		for(let i=0; i<15; i++) {
			const temp = game.planetPos - game.rikonPos[i];
			if (temp>-25 && temp<575) {
				rikon.distance = temp;
				rikon.active = i;
				if (rikon.active != rikon.prevActive) {
					rikon.digNuggetCount=0;
					rikon.nugget1_mc.gotoAndStop(0);
					rikon.nugget2_mc.gotoAndStop(0);
					rikon.nugget3_mc.gotoAndStop(0);
					rikon.digNugget = false;
					rikon.rikonY=0;
				}
				rikon.prevActive = rikon.active;
			} else {
				rikon.parent.rikonActive = false;
			}	
		}
		
		if (rikon.distance < 600) {
			rikon.parent.rikonActive = true;
		} else {
			rikon.parent.rikonActive = false;
		}
		rikon.x = rikon.distance;
		rikon.rikonY += 0.2;
		rikon.anim_mc.y = rikon.rikonY;
		if (!rikon.digNugget && rikon.digNuggetCount<3 && rikon.distance<500) {
			rikon.digNuggetDelay = 0;
			rikon.digNuggetCount++;
			rikon.digNugget = true;
		}
		rikon.gotoAndPlay(rikon.currentFrame - 1);	
	}
	
	rikonDigging(rikon){
		if (rikon.digNugget) {
			rikon.digNugget = false;
			rikon.parent[`nugget${rikon.digNuggetCount}_mc`].gotoAndPlay(1);
		}
		if (rikon.parent.rikonActive) {
			const panPos = Math.floor((rikon.parent.x-275)/2.75);
			const volPos = 100 - Math.abs(panPos/3);
			//_parent.sfxDig.setPan(panPos);
			//_parent.sfxDig.setVolume(volPos);
			//_parent.sfxDig.start();
		}
	}
	
	setRikonPositions () {
		let check;
		for (let i=0; i<15; i++) {
			do {
				check = false;
				this.rikonPos[i] = -600 - Math.floor(Math.random() * 14000);
				for (let j=0; j<15; j++) {
					const rikonGap = Math.abs(this.rikonPos[j] - this.rikonPos[i]);
					if (j!=i && rikonGap < 600) {
						check = true;
						break;
					}
				}
			} while (check);
		}
		do {
			check = false;
			for (let i=0; i<14; i++) {
				if (this.rikonPos[i+1] > this.rikonPos[i]) {
					check = true;
					[this.rikonPos[i], this.rikonPos[i+1]] = [ this.rikonPos[i+1], this.rikonPos[i]];
					break;	
				}
			}
		} while (check == 1);
	}
	
	setTimer () {
		const timeleft = this.duration - (this.time - this.startTime)/1000;
		if (timeLeft>0) {
			this.timer.gotoAndStop(Math.floor(100-(timeLeft/30)));
			this.distanceMeter.gotoAndStop(Math.floor(this.planetPos/-150));
		} else {
			this.root.gotoAndStop("lose");
		}
	}
	
	updateShip () {
		if (this.pod.x>356) {
			this.pod.x += this.speed;
		} else {
			this.enterShip = true;
			this.speed = 0;
			this.pod.x = 356;
			this.move = { x:5.5, y:(310-this.cowboy.y)/40 }
			this.cowboyYpos = this.cowboy.y;
			this.status = "SHIP";
			this.cowboy.gotoAndStop("right");
			this.root.gotoAndPlay ("win");
		}
	}
	
	shootBullet(shootX) {
		let fired = false;
		this.bullets.forEach(function(bullet){
			if (!fired && !bullet.active){
				this.nuggetsCollected--;
				bullet.x = 125;
				bullet.y = this.cowboy.y + 30;
				bullet.shootX = shootX;
				bullet.gotoAndPlay(1);
				bullet.active = true;
				fired = true;
			}
		});
	}
	
	updateBullet(bullet){
		bullet.x += -game.speed + bullet.shootX;
		
		const delta = { x:Math.abs(bullet.x - this.alien.x), y:Math.abs(bullet.y - this.alien.y) };
		
		if (delta.x<25 && delta.y<25) {
			this.alienKill = true;
			bullet.active = false;
			bullet.gotoAndStop(0);
		} else if (bullet.x>570) {
			bullet.active = false;
			bullet.gotoAndStop(0);
		} else {
			bullet.gotoAndPlay(bullet.currentFrame - 1);
		}
	}
	
	updateDigNugget(nugget){
		nugget.x += (game.speed + nugget.move.x);
		nugget.y -= nugget.move.y;
		nugget.move.y -= 0.5;
		nuggetX = nugget.parent.distance + nugget.x;
		const delta = { x:this.cowboy.x - nuggetX, y:this.cowboy._y - (380 + nugget._y) };
		if (delta.x<10 && delta.x>-60 && delta.y<15 && delta.y>-65) {
			game.riciclesCollected++;
			nugget.gotoAndPlay (nugget.currentFrame + 1);
		} else if (nugget.hitTest(this.alien)) {
			this.alien.anim_mc.nugget_mc.gotoAndPlay(1);
			nugget.gotoAndStop (0);
		} else if (nugget.y>425 || nuggetX<-25 || nuggetX>575) {
			nugget.gotoAndStop (0);
		} else {
			nugget.gotoAndPlay(nugget.currentFrame - 1);
		}
	}
	
}
