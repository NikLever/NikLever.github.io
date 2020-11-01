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
		
		this.speed = 0;
		this.boost = 0;
		this.gameover = true;
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
		this.gameover = false;
		this.startTime = this.time;
	}
	
	update(){
		if (this.gameover) return;
		
        this.updateCowboy();
        this.updateBg();
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
}
