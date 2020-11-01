class Game{
	constructor(stage, root, lib){
		this.stage = stage;
		this.root = root;
		this.lib = lib;
		this.init();
		createjs.Sound.volume = 0.3;
	}
	
	init(){
		const game = this;
		
		this.startTime = this.time;
		
		this.root.play_btn.on('click', function(){ game.start(); });
		
		//Get the MovieClips (MC)
		this.bg = this.root.bg_mc;
		this.cowboy = this.root.cowboy_mc;
		this.pod = this.root.pod_mc;
		this.shadow = this.root.shadow_mc;
		this.rikonRun = this.root.rikonRun_mc;
		this.rikonDig = this.root.rikonDig_mc;
		this.alien = this.root.alien_mc;
		this.menu = { time:this.root.menu_mc.timer_mc, distance:this.root.menu_mc.distance_mc, collected:this.root.menu_mc.collected_txt }
		this.info = this.root.info_mc;
		this.info.cursor = "pointer";
        
		this.podInfo = { start:10000, end:356 };
		this.podInfo.range = this.podInfo.start - this.podInfo.end;
		this.diggingRikonPos = [];
		let pos = 0;
		do{
			pos += Math.random()*500 + 550;
			this.diggingRikonPos.push(pos);
		}while(pos<this.podInfo.start);
		
		this.speed = 0;
		this.boost = 0;
		this.gameover = true;
		this.flameLevel = 10;
		this.mouseup = true;
		this.bullets = [];
		
		
		//Initialise MC positions and animations
		this.planetPos = 0;
		this.pod.x = this.podInfo.start;
		this.cowboy.x = 100;
		this.shadow.x = 120;
		this.pod.gotoAndStop(0);
		this.cowboy.stop();
		
		this.duration = 120000;
		
		this.root.control_mc.up_btn.on("click", function(){ if (game.cowboy.y>120){
				game.boost = -7; 
				game.cowboy.flame.gotoAndPlay(1);
			}
		});
		this.root.control_mc.down_btn.on("click", function(){ game.boost = 5; });
		this.root.control_mc.left_btn.on("mousedown", function(){ 
			if (game.cowboy.right) game.cowboy.gotoAndPlay(game.cowboy.currentFrame + 1);
			game.speed = 10; 
		});
		this.root.control_mc.right_btn.on("mousedown", function(){ 
			if (!game.cowboy.right) game.cowboy.gotoAndPlay(game.cowboy.currentFrame + 1);
			game.speed = -10; 
		});
		this.root.control_mc.fire_btn.on("mousedown", function(){
			game.shoot();
		});
		
		this.stage.on("stagemousedown", function(){ game.mouseup = false; });
		this.stage.on("stagemouseup", function(){ game.mouseup = true; });
		createjs.Ticker.addEventListener("tick", function(){ game.update(); });
		
		this.info.on("click", function(){ game.start(); });
		
		this.sfx = {};
		this.sfx.run = playSound("sfxRun", -1, 0, 0);
		this.sfx.alien = playSound("sfxAlien", -1, 0, 0);
	}
	
	get time(){
		return new Date().getTime(); 	
	}
	
	start(){
		const game = this;
		this.root.gotoAndStop("game");
		this.cowboy.visible = true;
		this.cowboy.y = 250;
		this.pod.x = this.podInfo.start;
		this.bg.x = 1000;
		this.pod.gotoAndStop(0);
		this.nuggetsCollected = 10;
		this.gameover = false;
		this.startTime = this.time;
		this.resetAlien();
		while(this.bullets.length>0){
			const bullet = this.bullets.shift();
			this.exportRoot.removeChild(bullet);
		}
	}
	
	update(){
		if (this.gameover) return;
		
        this.updateCowboy();
        this.updateBg();
		this.updateDiggingRikon();
		this.updateRunningRikon();
		this.updatePod();
		this.updateAlien();
		this.updateBullets();
        this.updateMenu();
	}
	
    updateCowboy () {
		this.boost += 0.25;
		if (this.mouseup) this.speed *= 0.99;
		
		this.cowboy.y += this.boost;
		if (this.cowboy.y>300) this.boost = -5;
		
		const scale = this.cowboy.y/300;
		this.shadow.scaleX = scale;
		this.shadow.scaleY = scale;
		this.shadow.alpha = scale/2;
	}
    
    updateBg(){
        //Move bg
		this.bg.x += this.speed;
		//Seamless repeat of bg
		if (this.bg.x<220) this.bg.x += 1200;
		if (this.bg.x>1470) this.bg.x -= 1200;
    }
    
	updateRunningRikon(){
		const rikon = this.rikonRun;
		
		rikon.x -= (3 - this.speed);
		
		if (rikon.x>-100) {
			this.setVolumePan(this.sfx.run, rikon.x, 0.8);
			if (rikon.x>115 && rikon.x<145 && this.cowboy.y>280 && rikon.nugget_mc.visible) {
				rikon.nugget_mc.visible = false;
				this.cowboy.nugget_mc.gotoAndPlay(1);
				this.nuggetsCollected++;
			} 
		} else {
			rikon.x = Math.random()*300 + 540;
			rikon.nugget_mc.visible = true;
		}	
	}
	
    updatePod () {
		if (this.pod.x>356) {
			this.pod.x += this.speed;
		} else {
			this.speed = 0;
			this.pod.x = 356;
			this.gameover = true;
			this.root.gotoAndPlay ("win");
            this.info.gotoAndStop(Math.floor(Math.random()*3 + 1));
			this.cowboy.visible = false;
			this.pod.gotoAndPlay(1);
		}
	}
    
	updateDiggingRikon(){
		const rikon = this.rikonDig;
		if (rikon.userData === undefined) rikon.userData = { active:-1 };
		
		let xPos;
		let active = false;
		
		for(let i=0; i<this.diggingRikonPos.length; i++) {
			xPos = this.diggingRikonPos[i] - (this.podInfo.start - this.pod.x);
			if (xPos>-25 && xPos<575) {
				active = true;
				if (rikon.userData.active != i) {
					rikon.userData.digNuggetCount = 0;
					rikon.nugget1_mc.gotoAndStop(0);
					rikon.nugget2_mc.gotoAndStop(0);
					rikon.nugget3_mc.gotoAndStop(0);
					rikon.anim_mc.y = 0;
					rikon.userData.active = i;
				}
				break;
			} 	
		}
		
		rikon.x = xPos;
		
		if (active){
			rikon.anim_mc.y += 0.2;

			if (!rikon.userData.digNugget && rikon.userData.digNuggetCount<3 && rikon.x<500 && Math.random()<0.01) {
				rikon.userData.digNuggetCount++;
				const digNugget = rikon[`nugget${rikon.userData.digNuggetCount}_mc`];
				digNugget.gotoAndStop(1);
				digNugget.move = { x:Math.random() * 10 - 5, y:12 + Math.random() * 5 };
			}	
			
			//Check for nuggets that have been dug up and move accordingly
			for(let i=1; i<=3; i++){
				const nugget = rikon[`nugget${i}_mc`];
				if (nugget.currentFrame == 1) this.updateDigNugget(nugget);
			}
		}
	}
	
	updateDigNugget(nugget){
		nugget.x += (this.speed + nugget.move.x);
		nugget.y -= nugget.move.y;
		nugget.move.y -= 0.5;
		const nuggetX = nugget.parent.x + nugget.x;
		const nuggetY = nugget.parent.y + nugget.y;
		const delta = { x:this.cowboy.x - nuggetX, y:this.cowboy.y - nuggetY };
		if (delta.x<10 && delta.x>-60 && delta.y<15 && delta.y>-65) {
			this.nuggetsCollected++;
			nugget.gotoAndPlay ("Hide");
		} else if (nugget.hitTest(this.alien)) {
			this.alien.anim_mc.nugget_mc.gotoAndPlay(1);
			nugget.gotoAndStop (0);
		} else if (nugget.y>425 || nuggetX<-25 || nuggetX>575) {
			nugget.gotoAndStop (0);
		} 
	}
	
	resetAlien(){
		this.alien.gotoAndStop(0);
		this.alien.x = 600;
		
		this.alien.y = Math.random()*200 + 100;
		this.alien.userData = { speed:{ y:80, x:1 + Math.random()}, wavelength:80 + Math.random()*80, orgY: this.alien.y, hitTime: this.time, killed:false };
		this.sfx.alien.pan = 0;
		this.sfx.alien.volume = 0;
	
	}
	
	updateAlien(){
		this.alien.x -= (this.alien.userData.speed.x - this.speed); 
		this.alien.y = this.alien.userData.orgY + (Math.sin((600 - this.alien.x)/this.alien.userData.wavelength) * this.alien.userData.speed.y);
		
		this.setVolumePan(this.sfx.alien, this.alien.x, 0.1);
		
		if (!this.alien.userData.killed) checkCowboyCollision.call(this);
		
		if (this.alien.x<-100) this.resetAlien();
		
		function checkCowboyCollision () {
			if (this.alien.userData === undefined) return;
			
			const elapsedTime = this.time - this.alien.userData.hitTime;
			
			if (elapsedTime>1000){ 
                const pt = this.alien.localToLocal(0, 0, this.cowboy);
                
				if (this.cowboy.hitTest(pt.x, pt.y)) {
					if (this.nuggetsCollected>0) {
						this.alien.anim_mc.nugget_mc.gotoAndPlay(1);
						this.nuggetsCollected--;
					}
					if (this.cowboy.right) {
						this.cowboy.gotoAndPlay("rightHit");
					} else {
						this.cowboy.gotoAndPlay("leftHit");
					}
					this.alien.userData.hitTime = this.time;
                    playSound("rikHitwav", false, 0.3, 0);
				}
			}
		}
	}
	
	shoot(){
		if (this.nuggetsCollected<1) return;
		this.nuggetsCollected--;
		const bullet = new this.lib.nugget();
		bullet.parent = this.root;
		this.root.addChild(bullet);
		bullet.x = 125;
		bullet.y = this.cowboy.y + 30;
		bullet.scaleX = 0.5;
		bullet.scaleY = 0.5;
		bullet.userData = { shootX:Math.random()*15 + 10, active:true };
		if (!this.cowboy.right) bullet.userData.shootX = -bullet.userData.shootX;
		this.bullets.push(bullet);
        playSound("iAirgunwav", false, 0.5, 0);
	}
	
	updateBullets(){
		const game = this;
		this.bullets.forEach( function(bullet){ game.updateBullet(bullet); } );
		
		const inactiveBullets = this.bullets.filter( bullet => !bullet.userData.active );
		while(inactiveBullets.length>0){
			let bullet = inactiveBullets.pop();
			this.root.removeChild(bullet);
		}
		this.bullets = this.bullets.filter( bullet => bullet.userData.active );
	}
	
	updateBullet(bullet){
		bullet.x += -this.speed + bullet.userData.shootX;
		
		const delta = { x:Math.abs(bullet.x - this.alien.x), y:Math.abs(bullet.y - this.alien.y) };
	
		if (delta.x<25 && delta.y<25) {
			this.alien.gotoAndPlay("Die");
			this.alien.userData.killed = true;
			bullet.userData.active = false;
            playSound("alienHitwav", false, 0.5, 0);
		} else if (bullet.x>570 || bullet.x<-50) {
			bullet.userData.active = false;
		} 
	}
    
    updateMenu () {
		const timeLeft = Math.floor(((this.time - this.startTime)/this.duration)*100);
		if (timeLeft>=0) {
			this.menu.time.gotoAndStop(timeLeft);
			const frame = Math.min(Math.floor(((this.pod.x - this.podInfo.end)/this.podInfo.range) * 100), 99);
			this.menu.distance.gotoAndStop(frame);
			this.menu.collected.text = this.nuggetsCollected;
		} else {
			this.root.gotoAndPlay("lose");
			this.gameover = true;
		}
	}
    
    showScore(info){
		const frame = Math.floor(Math.random()*3) + 1;
		info.gotoAndStop(frame);
		//Calculate score
		const timeScore = Math.floor((this.duration - (this.time - this.startTime))/10);
		const nuggetScore = this.nuggetsCollected * 10;
		info.time_txt.text = timeScore;
		info.nuggets_txt.text = nuggetScore;
		info.score_txt.text = timeScore + nuggetScore;
	}
	
	valBetween(val, min, max){
		return Math.max(Math.min(val, max), min);
	}
	
	setVolumePan(sfx, x, maxVolume=0.4){
		if (sfx === undefined || x === undefined) return;
		const n = this.valBetween(x, 0, 550);
		sfx.pan = (n/550) * 2 - 1;
		sfx.volume = Math.sin((n/550) * Math.PI) * maxVolume;
	}
}
