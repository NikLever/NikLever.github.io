class Game{
    constructor(exportRoot, stage){
        this.root = exportRoot;
        this.stage = stage;
        this.init();
    }
    
    init(){
        const game = this;
        this.root.play_btn.on('click', function(){
            game.root.play();
            game.root.rhino_mc.gotoAndPlay(0);
        });
    }
}