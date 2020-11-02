// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
    	// maximal movement speed
        maxMoveSpeed: 0,
        // acceleration
        accel: 0,
        //facing right if true
        flipped: false
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    	// switch off acceleration direction
        this.accLeft = false;
        this.accRight = false;
        // current horizontal speed of main character
        this.xSpeed = 0;
    	this.setInputControl();
    },
    
	setInputControl() {
        var self = this;
        // add keyboard event listener
        // When there is a key being pressed down, judge if it's the designated directional button and set up acceleration in the corresponding direction
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event){
            switch(event.keyCode) {
                case cc.KEY.a:
                    self.accLeft = true;
                    break;
                case cc.KEY.d:
                    self.accRight = true;
                    break;
            }
        });

        // when releasing the button, stop acceleration in this direction
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function (event){
            switch(event.keyCode) {
                case cc.KEY.a:
                    self.accLeft = false;
                    break;
                case cc.KEY.d:
                    self.accRight = false;
                    break;
            }
        });        
    },
    
    playAnimation(name){
    	const anim = this.getComponent(cc.Animation);
    	if (anim.currentClip!==null && anim.currentClip.name==name) return;
    	anim.stop();
    	anim.play(name);
    },
    
    stopAnimation(name){
    	const anim = this.getComponent(cc.Animation);
    	anim.stop(name);
    },
    
    start () {

    },
	
    update (dt) {
     	// update speed of each frame according to the current acceleration direction
        if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
        } else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        }else{
        	this.xSpeed *= 0.9;
        	if (Math.abs(this.xSpeed)<3){
        		this.xSpeed = 0;
        		this.playAnimation('stand');
        	}
        }
        if (this.xSpeed!=0){
        	if (this.xSpeed<0){
        		this.node.scaleX = -1;
        	}else{
        		this.node.scaleX = 1;
        	}
        	this.playAnimation('walk');
        } 
        
        // restrict the movement speed of the main character to the maximum movement speed
        if ( Math.abs(this.xSpeed) > this.maxMoveSpeed ) {
            // if speed reaches its limit, use the max speed with current direction
            this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
        }

        // update the position of the main character according to the current speed
        this.node.x += this.xSpeed * dt;
    },
});