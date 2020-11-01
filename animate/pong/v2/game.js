class Game{
	constructor(stage, root){
		this.stage = stage;
		this.root = root;
		
		this.init();
	}
	
	init(){
		this.score_txt = this.root.score_txt;
		
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
		this.newBall();
		this.active = true;
	}
	
	newBall(){
		this.ball.x = this.ball.origin.x;
		this.ball.y = this.ball.origin.y;
		this.ball.move = { x:Math.random()*2 - 1, y:Math.random()};
		const mag = Math.sqrt(this.ball.move.x * this.ball.move.x + this.ball.move.y * this.ball.move.y);
		this.ball.move.x /= mag;
		this.ball.move.y /= mag;
		const speed = 2;
		this.ball.move.x *= speed;
		this.ball.move.y *= speed;
	}
	
	moveBall(){
		this.ball.x += this.ball.move.x;
		this.ball.y += this.ball.move.y;
		
		const stageSize = { width:canvas.width/this.stage.scaleX, height:canvas.height/this.stage.scaleY };
		const ballSize = { width:54, height:54 };
		
		if (this.ball.x<ballSize.width/2 || this.ball.x>(stageSize.width - ballSize.width/2)) this.ball.move.x = -this.ball.move.x;
		if (this.ball.y<ballSize.height/2){
			this.ball.move.y = -this.ball.move.y;
			this.score++;
		}
		if (this.ball.y>(stageSize.height + ballSize.height/2)){
			//In later version this will lose a life
			this.ball.move.y = -this.ball.move.y;
			//this.newBall();
		}
	}
	
	updateScore(){
    	let str = "000" + this.score;
    	str = str.substr(str.length - 3);
		this.score_txt.text = str;
	}
	
	update(){
		if (!this.active) return;
		
		this.moveBall();
		this.updateScore();
	}
}