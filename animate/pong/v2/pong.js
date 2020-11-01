(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Bat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033FF").s().p("AmFCWQg+AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA+AAIMLAAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAg");
	this.shape.setTransform(54,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bat, new cjs.Rectangle(0,0,108,30), null);


(lib.Ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("AjcCUQgWiUBDgtQBUg3BiBiQBcBbBMgrQA+gcgNil");
	this.shape.setTransform(26.9,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009933").s().p("Ai+C4QgSgRgMgSQgGgkAAgfQAAhbAzgkQAegTAgAAIAAAAIABAAQA0AAA6A2IABABIAAAAIAHAHQA/A+A3AAIAAAAIAAAAQAZAAAXgMIABgBIACAAQAygYAAhzQAAgZgCgeQACAeAAAZQAABzgyAYIgCAAIgBABQgXAMgZAAIAAAAIAAAAQg3AAg/g+IgHgHIAAAAIgBgBQg6g2g0AAIgBAAIAAAAQggAAgeATQgzAkAABbQAAAfAGAkQgxhBAAhUQAAhqBPhNQBPhMBvAAQBwAABPBMQASASAOASQAvBBAABSQAABrhPBNQhPBMhwAAQhvAAhPhMg");
	this.shape_1.setTransform(27,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ball, new cjs.Rectangle(0,0,54,52), null);


// stage content:
(lib.pongv2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ball
	this.ball_mc = new lib.Ball();
	this.ball_mc.name = "ball_mc";
	this.ball_mc.parent = this;
	this.ball_mc.setTransform(349,237,1,1,0,0,0,27,26);

	this.timeline.addTween(cjs.Tween.get(this.ball_mc).wait(1));

	// Bat
	this.score_txt = new cjs.Text("000", "bold 45px 'Arial Black'", "#CCCCCC");
	this.score_txt.name = "score_txt";
	this.score_txt.textAlign = "center";
	this.score_txt.lineHeight = 66;
	this.score_txt.lineWidth = 133;
	this.score_txt.parent = this;
	this.score_txt.setTransform(603.5,-4);

	this.bat_mc = new lib.Bat();
	this.bat_mc.name = "bat_mc";
	this.bat_mc.parent = this;
	this.bat_mc.setTransform(347,335,1,1,0,0,0,54,15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("AmFiVIMLAAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAIsLAAQg+AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA+AAg");
	this.shape.setTransform(157,335);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.bat_mc},{t:this.score_txt}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(434.5,181.5,571,358);
// library properties:
lib.properties = {
	id: 'B0FAC188B4854BAAABD0C6A57D6D97AE',
	width: 667,
	height: 375,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B0FAC188B4854BAAABD0C6A57D6D97AE'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;