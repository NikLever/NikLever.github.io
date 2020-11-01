class Game{
	constructor(stage, root){
		this.stage = stage;
		this.root = root;
		this.init();
        
		createjs.Sound.volume = 0.3;
	}
	
	init(){
        this.gameover = true;
        
		const game = this;
		this.root.play_btn.on('click', function(){ game.start(); });
        createjs.Ticker.addEventListener("tick", function(){ game.update(); });
	}
	
	get time(){
		return Date.now(); 	
	}
	
	start(){
		this.root.gotoAndStop("game");
		this.startTime = this.time;
        this.gameover = false;
	}
	
	update(){
		if (this.gameover) return;
	}
}
