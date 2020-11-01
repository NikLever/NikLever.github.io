class Game{
	constructor(stage, root){
		this.stage = stage;
		this.root = root;
		
		this.init();
	}
	
	init(){
		this.bat = this.root.bat_mc;
		this.ball = this.root.ball_mc;
		this.bat.origin = { x:this.bat.x, y:this.bat.y };
		this.ball.origin = { x:this.ball.x, y:this.ball.y };
		
		this.bat.on("pressmove", function(evt) {
			const x = evt.stageX/stage.scaleX;
			//console.log(`Bat pressmove x:${x.toFixed(0)}`);
			evt.currentTarget.x = x;
		});
		
		const game = this;
		createjs.Ticker.addEventListener("tick", function(){ game.update(); });
		
		this.score = 0;
		this.active = false;
		
		this.newGame();
	}
	
	newGame(){
		this.score = 0;
		this.bat.x = this.bat.origin.x;
		this.bat.y = this.bat.origin.y;
		this.ball.x = this.ball.origin.x;
		this.ball.y = this.ball.origin.y;
	}
	
	update(){
		if (!this.active) return;
	}
}