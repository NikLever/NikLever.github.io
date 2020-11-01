class Game{
	constructor(stage, root){
		this.stage = stage;
		this.root = root;
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
		this.shadow = this.root.shadow_mc;
		this.rikonRun = this.root.rikonRun_mc;
		this.rikonDig = this.root.rikonDig_mc;
        this.pod = this.root.pod_mc;
		
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
		
		
		//Initialise MC positions and animations
		this.cowboy.stop();
		
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
		this.stage.on("stagemousedown", function(){ game.mouseup = false; });
		this.stage.on("stagemouseup", function(){ game.mouseup = true; });
		createjs.Ticker.addEventListener("tick", function(){ game.update(); });
		
		this.sfx = {};
		this.sfx.run = playSound("sfxRun", true, 0, 0);
	}
	
	get time(){
		return Date.now(); 	
	}
	
	start(){
		const game = this;
		this.root.gotoAndStop("game");
		this.cowboy.visible = true;
		this.cowboy.y = 250;
		this.bg.x = 1000;
        this.pod.x = this.podInfo.start;
		this.nuggetsCollected = 10;
		this.gameover = false;
		this.startTime = this.time;
	}
	
	update(){
		if (this.gameover) return;
		
		this.updateCowboy();
        this.updateBg();
        this.updatePod();
        this.updateRunningRikon();
		this.updateDiggingRikon();
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
			const panPos = Math.floor((rikon.x-275)/2.75);
			if (this.sfx.run !== undefined) this.sfx.run.pan = panPos;
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

			if (rikon.userData.digNuggetCount<3 && rikon.x<400 && Math.random()<0.1) {
				rikon.userData.digNuggetCount++;
				const digNugget = rikon[`nugget${rikon.userData.digNuggetCount}_mc`];
				digNugget.gotoAndStop(1);
				digNugget.move = { x:Math.random() * 10 - 5, y:-12 - Math.random() * 5 };
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
		nugget.y += nugget.move.y;
		nugget.move.y += 0.5;
        
        const pt1 = nugget.localToLocal( 0, 0, this.cowboy );
        const pt2 = nugget.localToLocal( 0, 0, this.root );
        
        if (this.cowboy.hitTest(pt1.x, pt1.y)) {
			this.nuggetsCollected++;
			nugget.gotoAndPlay ("Hide");
		} else if (pt2.y>425 || pt2.x<-25 || pt2.x>575) {
            //Off screen bottom, left or right
			nugget.gotoAndStop (0);
		} 
	}
    
    updatePod () {
		if (this.pod.x>this.podInfo.end) {
			this.pod.x += this.speed;
		} else {
			this.speed = 0;
			this.pod.x = this.podInfo.end;
			this.gameover = true;
			this.root.gotoAndPlay ("win");
			this.cowboy.visible = false;
			this.pod.gotoAndPlay(1);
		}
	}
}