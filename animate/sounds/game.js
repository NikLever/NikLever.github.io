class Game{
	constructor(stage, root){
		this.root = root;
		
		const game = this;
		
		stage.on("stagemouseup", function(){ game.vol = 0; game.pan = 0 });
		root.on("pressmove", function(evt) {
			game.pan = game.valBetween((evt.stageX/stage.scaleX)/640, 0, 1) * 2 - 1;
			game.vol = game.valBetween((evt.stageY/stage.scaleY)/400, 0, 1);	
		});
		
		root.an_btn.on('click', function(){ playSound("hit");});
		
		this.runLoop = playSound("runLoop", -1);
	}
	
	set vol(val){
		this.runLoop.volume = val;
		this.root.vol_txt.text = val.toFixed(1);
	}
	
	set pan(val){
		this.runLoop.pan = val;
		this.root.pan_txt.text = val.toFixed(1);
	}
	
	valBetween(val, min, max){
		return Math.max(Math.min(val, max), min);
	}
}