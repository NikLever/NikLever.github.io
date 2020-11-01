(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
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


(lib.Scene_1_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVAxIgVgnIgUAnIgRAAIAdgyIgbgvIARAAIASAiIATgiIARAAIgcAuIAeAzg");
	this.shape.setTransform(626.9,463.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLBFIAAhUIgLAAIAAgNIALAAIAAgLQABgLACgGQACgGAFgDQAEgDAIAAQAFAAAIACIgCAOIgIgBQgHAAgCADQgDAEAAAJIAAAJIAQAAIAAANIgQAAIAABUg");
	this.shape_1.setTransform(621.25,461.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAUIANgCQABAKAFAFQAGAFAIAAQAIAAAFgFQAGgEAAgHQgBgGgEgDQgCgCgLgDQgQgFgFgDQgGgDgDgGQgDgFAAgIQAAgNAJgHQAIgJAOAAQAIABAHADQAGADAEAFQAEAGABAKIgNACQgCgPgPAAQgJAAgEADQgEAEAAAFQAAAGAEADQACABAMAFQARAFAFAEQAFACACAFQADAFAAAIQAAAOgJAJQgIAJgQgBQgcABgEggg");
	this.shape_2.setTransform(614.8,463.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAmQgKgNAAgYQAAgZAKgNQALgOAPAAQAQAAALAOQAKANAAAYIAAAEIg7AAQABARAGAIQAHAJAJAAQAQAAAGgUIAOACQgEAQgJAIQgJAHgOAAQgQAAgLgNgAAXgIQgBgNgFgGQgGgJgLAAQgIgBgGAIQgHAIAAANIAsAAIAAAAg");
	this.shape_3.setTransform(602.275,463.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_4.setTransform(596.2,461.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYA+QgIgIAAgQIAOADQAAAIAFAEQAFAEAIAAQAIAAAFgEQAGgFACgJQABgEAAgRQgFAGgFAEQgGACgGAAQgOABgKgMQgLgPAAgWQAAgRAFgLQAFgMAIgFQAIgHAJAAQAHAAAGAEQAFAEAFAHIAAgMIANAAIAABUQAAAXgEAJQgEAKgIAGQgJAGgLAAQgPAAgJgJgAgOguQgHAIAAATQAAATAHAIQAGAJAJAAQAJAAAGgJQAHgIAAgTQAAgTgHgIQgGgJgKAAQgIAAgGAJg");
	this.shape_5.setTransform(589.925,465.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATAyIAAg6QAAgMgCgEQgBgFgEgDQgEgDgFAAQgJAAgGAHQgGAIAAARIAAA1IgOAAIAAhhIANAAIAAAOQAEgIAHgFQAGgEAHAAQAHAAAFADQAGADADAEQAEAEABAGQACAIAAANIAAA7g");
	this.shape_6.setTransform(581.525,463.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGBEIAAhhIANAAIAABhgAgGgwIAAgTIANAAIAAATg");
	this.shape_7.setTransform(575.5,461.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghAUIAOgCQABAKAFAFQAGAFAIAAQAIAAAFgFQAGgEAAgHQgBgGgEgDQgCgCgLgDQgQgFgFgDQgFgDgDgGQgEgFAAgIQAAgNAIgHQAJgJAOAAQAIABAHADQAGADAFAFQADAGABAKIgNACQgCgPgPAAQgJAAgEADQgEAEAAAFQAAAGAEADQACABAMAFQARAFAFAEQAFACACAFQADAFAAAIQAAAOgJAJQgIAJgQgBQgcABgFggg");
	this.shape_8.setTransform(569.9,463.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAsQgHgHAAgOQAAgIADgGQAEgHAGgDQAGgDAMgCQAQgCAIgEIAAgEQAAgLgEgEQgFgFgKAAQgJAAgFAEQgEADgDAMIgNgDQADgQAJgHQAIgHAQgBQAMAAAIAGQAHAEACAIQACAGAAAOIAAAVQAAAXABAHQAAAFADAGIgOAAIgDgLQgHAGgHAEQgHADgIAAQgMABgIgIgAgDAGQgIACgEACQgDABgCAEQgCADAAAFQAAAHAFAFQAEAEAIgBQAGAAAGgDQAGgEADgHQADgFAAgNIAAgGQgIAEgOACg");
	this.shape_9.setTransform(557.375,463.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdBDIgBgPIAHABQAFAAACgCQADgCADgDIAEgRIgehhIAPAAIAVBPIAYhPIANAAIgeBjQgHATgCAHQgDAGgFADQgEADgGAAQgEAAgFgCg");
	this.shape_10.setTransform(545,465.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAsQgHgHAAgOQAAgIADgGQAEgHAGgDQAGgDAMgCQAQgCAIgEIAAgEQAAgLgEgEQgFgFgKAAQgJAAgFAEQgEADgDAMIgNgDQADgQAJgHQAIgHAQgBQAMAAAIAGQAHAEACAIQACAGAAAOIAAAVQAAAXABAHQAAAFADAGIgOAAIgDgLQgHAGgHAEQgHADgIAAQgMABgIgIgAgDAGQgIACgEACQgDABgCAEQgCADAAAFQAAAHAFAFQAEAEAIgBQAGAAAGgDQAGgEADgHQADgFAAgNIAAgGQgIAEgOACg");
	this.shape_11.setTransform(536.675,463.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_12.setTransform(530.6,461.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgiBFIAAiHIAMAAIAAANQAFgIAGgEQAGgEAGAAQAKAAAHAHQAIAFAEAMQAFALAAARQAAAYgKANQgLANgOAAQgFAAgGgDQgGgDgDgGIAAAwgAgOgtQgIAKAAATQABASAGAJQAHAJAIAAQAIAAAGgJQAHgKAAgSQAAgUgGgJQgHgJgIAAQgIAAgGAKg");
	this.shape_13.setTransform(524.8,465.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaAmQgLgNAAgZQAAgZALgNQALgNAPAAQAQAAALANQALANAAAZQAAAagLAMQgKANgRAAQgPAAgLgNgAgQgbQgHAJAAASQAAAUAHAJQAHAJAJAAQAKAAAHgJQAHgKAAgTQAAgSgHgJQgHgKgKABQgJgBgHAKg");
	this.shape_14.setTransform(511.625,463.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgBBAQgEgDgCgFQgCgEAAgPIAAg4IgKAAIAAgNIAKAAIAAgYIANgKIAAAiIAOAAIAAANIgOAAIAAA5QAAAIABACQACADAFAAIAGAAIACAPIgLABQgHAAgDgDg");
	this.shape_15.setTransform(505.325,462.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaAmQgLgNAAgZQAAgZALgNQALgNAPAAQAQAAALANQALANAAAZQAAAagLAMQgKANgRAAQgPAAgLgNgAgQgbQgHAJAAASQAAAUAHAJQAHAJAJAAQAKAAAHgJQAHgKAAgTQAAgSgHgJQgHgKgKABQgJgBgHAKg");
	this.shape_16.setTransform(494.375,463.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYA+QgIgIAAgQIAOADQAAAIAFAEQAFAEAIAAQAIAAAFgEQAGgFACgJQABgEAAgRQgFAGgFAEQgGACgGAAQgOABgKgMQgLgPAAgWQAAgRAFgLQAFgMAIgFQAIgHAJAAQAHAAAGAEQAFAEAFAHIAAgMIANAAIAABUQAAAXgEAJQgEAKgIAGQgJAGgLAAQgPAAgJgJgAgOguQgHAIAAATQAAATAHAIQAGAJAJAAQAJAAAGgJQAHgIAAgTQAAgTgHgIQgGgJgKAAQgIAAgGAJg");
	this.shape_17.setTransform(485.475,465.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaAmQgLgNAAgZQAAgZALgNQALgNAPAAQAQAAALANQALANAAAZQAAAagLAMQgKANgRAAQgPAAgLgNgAgQgbQgHAJAAASQAAAUAHAJQAHAJAJAAQAKAAAHgJQAHgKAAgTQAAgSgHgJQgHgKgKABQgJgBgHAKg");
	this.shape_18.setTransform(477.075,463.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_19.setTransform(471,461.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AATAyIAAg6QAAgMgCgEQgBgFgEgDQgEgDgFAAQgJAAgGAHQgGAIAAARIAAA1IgOAAIAAhhIANAAIAAAOQAEgIAHgFQAGgEAHAAQAHAAAFADQAGADADAEQAEAEABAGQACAIAAANIAAA7g");
	this.shape_20.setTransform(460.675,463.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAjBEIgNgpIguAAIgMApIgPAAIAriHIAOAAIAuCHgAASAMIgThBIgGAaIgMAnIAlAAg");
	this.shape_21.setTransform(451.275,461.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgaAmQgKgNAAgYQAAgZAKgNQALgOAPAAQAQAAALAOQAKANAAAYIAAAEIg7AAQABARAGAIQAHAJAJAAQAQAAAGgUIAOACQgEAQgJAIQgJAHgOAAQgQAAgLgNgAAXgIQgBgNgFgGQgGgJgLAAQgIgBgGAIQgHAIAAANIAsAAIAAAAg");
	this.shape_22.setTransform(437.375,463.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAUBEIAAg+QgBgMgFgGQgEgFgIgBQgIABgGAHQgGAHAAARIAAA2IgOAAIAAiHIAOAAIAAAxQAEgHAGgDQAHgEAGAAQANAAAHAIQAIAIAAAWIAAA+g");
	this.shape_23.setTransform(428.75,461.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgBBAQgEgDgCgFQgCgEAAgPIAAg4IgKAAIAAgNIAKAAIAAgYIANgKIAAAiIAOAAIAAANIgOAAIAAA5QAAAIABACQACADAFAAIAGAAIACAPIgLABQgHAAgDgDg");
	this.shape_24.setTransform(422.425,462.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AARBEIgagzIgKAMIAAAnIgOAAIAAiHIAOAAIAABMIAfgmIASAAIgeAjIAiA+g");
	this.shape_25.setTransform(412.5,461.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYAmQgKgNAAgZQAAgZAKgNQAKgNAQAAQAMAAAJAJQAIAHADAQIgNADQgCgLgFgFQgFgEgHAAQgJAAgHAJQgGAIAAATQAAAUAGAJQAGAJAJAAQAIAAAGgGQAFgGACgNIANACQgCASgJAJQgKAJgNAAQgPAAgKgNg");
	this.shape_26.setTransform(404.475,463.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgGBEIAAhhIANAAIAABhgAgGgwIAAgTIANAAIAAATg");
	this.shape_27.setTransform(398.6,461.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_28.setTransform(395.1,461.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXA+QgLgHgHgRQgHgQAAgWQAAgXAHgPQAHgPAMgJQAMgHANgBQARABALAJQAMALAEATIgOAEQgHgcgXAAQgKAAgIAGQgIAFgFANQgFAMAAASQAAAbAKAOQAKAOAPAAQAMAAAJgJQAIgIADgSIAPAFQgFAXgMALQgMAMgSgBQgOABgLgJg");
	this.shape_29.setTransform(387.925,461.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AATAyIAAg6QAAgMgCgEQgBgFgEgDQgEgDgFAAQgJAAgGAHQgGAIAAARIAAA1IgOAAIAAhhIANAAIAAAOQAEgIAHgFQAGgEAHAAQAHAAAFADQAGADADAEQAEAEABAGQACAIAAANIAAA7g");
	this.shape_30.setTransform(626.375,439.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgdAsQgHgHAAgOQAAgIADgGQAEgHAGgDQAGgDAMgCQAQgCAIgEIAAgEQAAgKgEgFQgFgFgKAAQgJAAgFADQgEAEgDAMIgNgDQADgQAJgHQAIgHAQgBQAMAAAIAGQAHAEACAIQACAGAAAOIAAAVQAAAXABAHQAAAFADAGIgOAAIgDgLQgHAGgHAEQgHADgIAAQgMABgIgIgAgDAGQgIACgEACQgDABgCAEQgCADAAAFQAAAHAFAFQAEADAIAAQAGAAAGgDQAGgEADgHQADgFAAgNIAAgGQgIAEgOACg");
	this.shape_31.setTransform(617.725,439.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgiBFIAAiHIAMAAIAAANQAFgIAGgEQAGgEAGAAQAJAAAIAHQAIAFAFAMQAEALAAARQAAAYgKANQgLANgOAAQgGAAgFgDQgGgDgDgGIAAAwgAgOgtQgIAKAAATQABASAGAJQAHAJAIAAQAIAAAGgJQAHgKAAgSQAAgUgGgJQgHgJgIAAQgIAAgGAKg");
	this.shape_32.setTransform(609.3,441.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgYA4QgKgOAAgZQAAgQAFgLQAEgMAIgFQAIgGAJAAQAGAAAGAEQAFAEAEAGIAAgxIAOAAIAACHIgMAAIAAgNQgFAHgFAFQgGADgHAAQgNAAgLgNgAgOgKQgGAJAAATQAAATAHAJQAGAKAIgBQAJAAAHgJQAFgIABgTQgBgTgFgKQgHgJgKAAQgHAAgHAJg");
	this.shape_33.setTransform(595.85,438.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AATAyIAAg6QAAgMgCgEQgBgFgEgDQgEgDgFAAQgJAAgGAHQgGAIAAARIAAA1IgOAAIAAhhIANAAIAAAOQAEgIAHgFQAGgEAHAAQAHAAAFADQAGADADAEQAEAEABAGQACAIAAANIAAA7g");
	this.shape_34.setTransform(587.475,439.75);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgdAsQgHgHAAgOQAAgIADgGQAEgHAGgDQAGgDAMgCQAQgCAIgEIAAgEQAAgKgEgFQgFgFgKAAQgJAAgFADQgEAEgDAMIgNgDQADgQAJgHQAIgHAQgBQAMAAAIAGQAHAEACAIQACAGAAAOIAAAVQAAAXABAHQAAAFADAGIgOAAIgDgLQgHAGgHAEQgHADgIAAQgMABgIgIgAgDAGQgIACgEACQgDABgCAEQgCADAAAFQAAAHAFAFQAEADAIAAQAGAAAGgDQAGgEADgHQADgFAAgNIAAgGQgIAEgOACg");
	this.shape_35.setTransform(578.825,439.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgaAmQgKgNAAgYQAAgZAKgNQALgOAPAAQAQAAALAOQAKANAAAYIAAAEIg7AAQABARAGAIQAHAJAJAAQAQAAAGgUIAOACQgEAQgJAIQgJAHgOAAQgQAAgLgNgAAXgIQgBgNgFgGQgGgJgLAAQgIgBgGAIQgHAIAAANIAsAAIAAAAg");
	this.shape_36.setTransform(565.875,439.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AApAyIAAg9QAAgKgCgEQgBgFgDgCQgEgDgEAAQgJAAgGAHQgFAHAAAPIAAA4IgNAAIAAg/QAAgMgDgFQgFgFgGAAQgKAAgEAHQgGAIAAAUIAAAyIgOAAIAAhhIAMAAIAAAOQAEgIAHgEQAGgEAIgBQAJABAFAEQAFAEACAJQAGgJAGgEQAGgEAHgBQAMAAAHAJQAHAHAAASIAABCg");
	this.shape_37.setTransform(555.15,439.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgUAtQgHgFgCgIQgDgIAAgNIAAg8IAOAAIAAA1QAAAQACAFQABAFAEADQAEADAGAAQAJAAAGgIQAFgHAAgSIAAg0IAOAAIAABhIgMAAIAAgOQgFAIgGAEQgHAEgHAAQgJAAgHgFg");
	this.shape_38.setTransform(544.225,439.975);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_39.setTransform(538.2,438);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgaAmQgLgNAAgZQAAgZALgNQALgNAPAAQAQAAALANQALANAAAZQAAAagLAMQgKANgRAAQgPAAgLgNgAgQgbQgHAJAAASQAAAUAHAJQAHAJAJAAQAKAAAHgJQAHgKAAgTQAAgSgHgJQgHgKgKABQgJgBgHAKg");
	this.shape_40.setTransform(532.175,439.85);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgFAxIgfhhIAPAAIAVBOIAXhOIAOAAIgeBhg");
	this.shape_41.setTransform(524.05,439.875);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgaAmQgKgNAAgYQAAgZAKgNQALgOAPAAQAQAAALAOQAKANAAAYIAAAEIg7AAQABARAGAIQAHAJAJAAQAQAAAGgUIAOACQgEAQgJAIQgJAHgOAAQgQAAgLgNgAAXgIQgBgNgFgGQgGgJgLAAQgIgBgGAIQgHAIAAANIAsAAIAAAAg");
	this.shape_42.setTransform(511.475,439.85);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAUBEIAAg+QAAgMgGgGQgEgFgIgBQgIABgGAHQgGAHAAARIAAA2IgOAAIAAiHIAOAAIAAAxQAEgHAHgDQAFgEAHAAQANAAAIAIQAHAIAAAWIAAA+g");
	this.shape_43.setTransform(502.85,438);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgBBAQgEgDgCgFQgCgEAAgPIAAg4IgKAAIAAgNIAKAAIAAgYIANgKIAAAiIAOAAIAAANIgOAAIAAA5QAAAIABACQACADAFAAIAGAAIACAPIgLABQgHAAgDgDg");
	this.shape_44.setTransform(496.525,438.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgaAmQgKgNAAgYQAAgZAKgNQALgOAPAAQAQAAALAOQAKANAAAYIAAAEIg7AAQABARAGAIQAHAJAJAAQAQAAAGgUIAOACQgEAQgJAIQgJAHgOAAQgQAAgLgNgAAXgIQgBgNgFgGQgGgJgLAAQgIgBgGAIQgHAIAAANIAsAAIAAAAg");
	this.shape_45.setTransform(485.575,439.85);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgYA+QgIgIAAgQIAOADQAAAIAFAEQAFAEAIAAQAIAAAFgEQAGgFACgJQABgEAAgRQgFAGgFAEQgGACgGAAQgOABgKgMQgLgPAAgWQAAgRAFgLQAFgMAIgFQAIgHAJAAQAHAAAGAEQAFAEAFAHIAAgMIANAAIAABUQAAAXgEAJQgEAKgIAGQgJAGgLAAQgPAAgJgJgAgOguQgHAIAAATQAAATAHAIQAGAJAJAAQAJAAAGgJQAHgIAAgTQAAgTgHgIQgGgJgKAAQgIAAgGAJg");
	this.shape_46.setTransform(476.675,441.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AATAyIAAg6QAAgMgCgEQgBgFgEgDQgEgDgFAAQgJAAgGAHQgGAIAAARIAAA1IgOAAIAAhhIANAAIAAAOQAEgIAHgFQAGgEAHAAQAHAAAFADQAGADADAEQAEAEABAGQACAIAAANIAAA7g");
	this.shape_47.setTransform(468.275,439.75);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgdAsQgHgHAAgOQAAgIADgGQAEgHAGgDQAGgDAMgCQAQgCAIgEIAAgEQAAgKgEgFQgFgFgKAAQgJAAgFADQgEAEgDAMIgNgDQADgQAJgHQAIgHAQgBQAMAAAIAGQAHAEACAIQACAGAAAOIAAAVQAAAXABAHQAAAFADAGIgOAAIgDgLQgHAGgHAEQgHADgIAAQgMABgIgIgAgDAGQgIACgEACQgDABgCAEQgCADAAAFQAAAHAFAFQAEADAIAAQAGAAAGgDQAGgEADgHQADgFAAgNIAAgGQgIAEgOACg");
	this.shape_48.setTransform(459.625,439.85);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAUBEIAAg+QAAgMgGgGQgEgFgIgBQgHABgHAHQgGAHAAARIAAA2IgOAAIAAiHIAOAAIAAAxQAEgHAHgDQAFgEAHAAQANAAAHAIQAIAIAAAWIAAA+g");
	this.shape_49.setTransform(451,438);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgYAmQgKgNAAgZQAAgZAKgNQAKgNAQAAQAMAAAJAJQAIAHADAQIgNADQgCgLgFgFQgFgEgHAAQgJAAgHAJQgGAIAAATQAAAUAGAJQAGAJAJAAQAIAAAGgGQAFgGACgNIANACQgCASgJAJQgKAJgNAAQgPAAgKgNg");
	this.shape_50.setTransform(443.075,439.85);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgaAmQgLgNAAgZQAAgZALgNQALgNAPAAQAQAAALANQALANAAAZQAAAagLAMQgKANgRAAQgPAAgLgNgAgQgbQgHAJAAASQAAAUAHAJQAHAJAJAAQAKAAAHgJQAHgKAAgTQAAgSgHgJQgHgKgKABQgJgBgHAKg");
	this.shape_51.setTransform(430.275,439.85);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgBBAQgEgDgCgFQgCgEAAgPIAAg4IgKAAIAAgNIAKAAIAAgYIANgKIAAAiIAOAAIAAANIgOAAIAAA5QAAAIABACQACADAFAAIAGAAIACAPIgLABQgHAAgDgDg");
	this.shape_52.setTransform(423.975,438.225);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgYA+QgIgIAAgQIAOADQAAAIAFAEQAFAEAIAAQAIAAAFgEQAGgFACgJQABgEAAgRQgFAGgFAEQgGACgGAAQgOABgKgMQgLgPAAgWQAAgRAFgLQAFgMAIgFQAIgHAJAAQAHAAAGAEQAFAEAFAHIAAgMIANAAIAABUQAAAXgEAJQgEAKgIAGQgJAGgLAAQgPAAgJgJgAgOguQgHAIAAATQAAATAHAIQAGAJAJAAQAJAAAGgJQAHgIAAgTQAAgTgHgIQgGgJgKAAQgIAAgGAJg");
	this.shape_53.setTransform(412.775,441.75);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgdAsQgHgHAAgOQAAgIADgGQAEgHAGgDQAGgDAMgCQAQgCAIgEIAAgEQAAgKgEgFQgFgFgKAAQgJAAgFADQgEAEgDAMIgNgDQADgQAJgHQAIgHAQgBQAMAAAIAGQAHAEACAIQACAGAAAOIAAAVQAAAXABAHQAAAFADAGIgOAAIgDgLQgHAGgHAEQgHADgIAAQgMABgIgIgAgDAGQgIACgEACQgDABgCAEQgCADAAAFQAAAHAFAFQAEADAIAAQAGAAAGgDQAGgEADgHQADgFAAgNIAAgGQgIAEgOACg");
	this.shape_54.setTransform(404.375,439.85);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgVAyIAAhhIAMAAIAAAPQAFgKAEgEQADgDAFgBQAHABAHAFIgFAPQgEgDgGAAQgEAAgDADQgDADgBAFQgDAKAAALIAAAyg");
	this.shape_55.setTransform(398.15,439.75);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgYA4QgKgOAAgZQAAgQAFgLQAEgMAIgFQAIgGAJAAQAGAAAGAEQAFAEAFAGIAAgxIANAAIAACHIgMAAIAAgNQgEAHgGAFQgGADgHAAQgNAAgLgNgAgNgKQgHAJAAATQAAATAHAJQAHAKAHgBQAJAAAGgJQAGgIABgTQgBgTgGgKQgGgJgKAAQgIAAgFAJg");
	this.shape_56.setTransform(390.3,438.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgXA4QgLgOAAgZQAAgQAFgLQAEgMAIgFQAIgGAJAAQAGAAAGAEQAFAEAFAGIAAgxIANAAIAACHIgMAAIAAgNQgFAHgFAFQgGADgHAAQgNAAgKgNgAgNgKQgHAJAAATQAAATAHAJQAHAKAHgBQAJAAAGgJQAHgIAAgTQAAgTgHgKQgGgJgKAAQgIAAgFAJg");
	this.shape_57.setTransform(377.35,438.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AATAyIAAg6QAAgMgCgEQgBgFgEgDQgEgDgFAAQgJAAgGAHQgGAIAAARIAAA1IgOAAIAAhhIANAAIAAAOQAEgIAHgFQAGgEAHAAQAHAAAFADQAGADADAEQAEAEABAGQACAIAAANIAAA7g");
	this.shape_58.setTransform(368.975,439.75);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgdAsQgHgHAAgOQAAgIADgGQAEgHAGgDQAGgDAMgCQAQgCAIgEIAAgEQAAgKgEgFQgFgFgKAAQgJAAgFADQgEAEgDAMIgNgDQADgQAJgHQAIgHAQgBQAMAAAIAGQAHAEACAIQACAGAAAOIAAAVQAAAXABAHQAAAFADAGIgOAAIgDgLQgHAGgHAEQgHADgIAAQgMABgIgIgAgDAGQgIACgEACQgDABgCAEQgCADAAAFQAAAHAFAFQAEADAIAAQAGAAAGgDQAGgEADgHQADgFAAgNIAAgGQgIAEgOACg");
	this.shape_59.setTransform(360.325,439.85);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AggAUIANgCQABAKAFAFQAGAFAIAAQAIAAAFgFQAFgEABgHQAAgGgFgDQgDgCgKgDQgQgFgFgDQgFgDgEgGQgDgGAAgHQAAgNAJgHQAIgJAOAAQAIABAHADQAGADAEAFQAEAGACAKIgOACQgCgPgPAAQgIAAgFADQgEAEAAAFQAAAGAEADQADABALAFQARAFAFAEQAFACADAFQACAFAAAIQABAPgKAIQgIAJgQgBQgcABgEggg");
	this.shape_60.setTransform(347.85,439.85);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AggAUIANgCQABAKAGAFQAFAFAHAAQAKAAAEgFQAFgEABgHQAAgGgFgDQgDgCgKgDQgQgFgFgDQgGgDgDgGQgCgGAAgHQgBgNAJgHQAIgJAOAAQAIABAHADQAGADAEAFQAEAGACAKIgOACQgCgPgPAAQgIAAgFADQgEAEAAAFQAAAGAEADQADABALAFQARAFAFAEQAFACADAFQACAFAAAIQABAPgKAIQgJAJgPgBQgcABgEggg");
	this.shape_61.setTransform(340.1,439.85);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgaAmQgKgNAAgYQAAgZAKgNQALgOAPAAQAQAAALAOQAKANAAAYIAAAEIg7AAQABARAGAIQAHAJAJAAQAQAAAGgUIAOACQgEAQgJAIQgJAHgOAAQgQAAgLgNgAAXgIQgBgNgFgGQgGgJgLAAQgIgBgGAIQgHAIAAANIAsAAIAAAAg");
	this.shape_62.setTransform(331.875,439.85);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgVAyIAAhhIANAAIAAAPQAEgKAEgEQADgDAFgBQAHABAHAFIgEAPQgGgDgEAAQgFAAgDADQgDADgCAFQgCAKAAALIAAAyg");
	this.shape_63.setTransform(325.65,439.75);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgqBEIAAiHIAqAAQAPAAAGADQAKADAGAJQAGAKAAAOQAAATgKAKQgJAMgXAAIgcAAIAAA3gAgbgCIAcAAQANAAAHgHQAGgGABgMQAAgIgDgGQgEgFgEgDQgEgCgMAAIgcAAg");
	this.shape_64.setTransform(317.55,438);

	this.pan_txt = new cjs.Text("0.0", "normal 400 33px 'Aldrich'", "#FFFFFF");
	this.pan_txt.name = "pan_txt";
	this.pan_txt.lineHeight = 49;
	this.pan_txt.lineWidth = 100;
	this.pan_txt.parent = this;
	this.pan_txt.setTransform(543.85,261.8);
	if(!lib.properties.webfonts['Aldrich']) {
		lib.webFontTxtInst['Aldrich'] = lib.webFontTxtInst['Aldrich'] || [];
		lib.webFontTxtInst['Aldrich'].push(this.pan_txt);
	}

	this.vol_txt = new cjs.Text("0.0", "normal 400 33px 'Aldrich'", "#FFFFFF");
	this.vol_txt.name = "vol_txt";
	this.vol_txt.lineHeight = 49;
	this.vol_txt.lineWidth = 100;
	this.vol_txt.parent = this;
	this.vol_txt.setTransform(543.85,211.8);
	if(!lib.properties.webfonts['Aldrich']) {
		lib.webFontTxtInst['Aldrich'] = lib.webFontTxtInst['Aldrich'] || [];
		lib.webFontTxtInst['Aldrich'].push(this.vol_txt);
	}

	this.text = new cjs.Text("Volume:\nPan:", "normal 400 33px 'Aldrich'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 49;
	this.text.lineWidth = 134;
	this.text.parent = this;
	this.text.setTransform(537.85,211.8);
	if(!lib.properties.webfonts['Aldrich']) {
		lib.webFontTxtInst['Aldrich'] = lib.webFontTxtInst['Aldrich'] || [];
		lib.webFontTxtInst['Aldrich'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.vol_txt},{t:this.pan_txt},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Layer_2, null, null);


(lib.AnimateLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#260600").s().p("ApCJDIAAyFISFAAIAASFgAE7hnQAWAGAMAMQANAOgBATIAAFhIBxAAIAAlrQAAgTgIgTQgHgTgPgQQgOgQgVgMQgUgNgagIQg2gQhCAEQhHAGhMAfIAAHMIB8AAIAAmMQAZgJAZgCIAOAAQARAAAOADgAh1BwIAxC8IB3AAIjJqeIiHAAIi5KYIBnAGIAzi8gAkhAIIBFkWIBKEWg");
	this.shape.setTransform(62.5,62.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF401F").s().p("ApwJxIAAzhIThAAIAAThgApCJDISFAAIAAyFIyFAAgAFqEtIAAlgQAAgUgNgOQgMgMgVgFQgVgFgZACQgZACgZAIIAAGMIh8AAIAAnMQBMgfBIgFQBCgFA2ARQAZAIAVAMQAUAMAOAQQAPAQAHATQAIATAAAUIAAFqgAhDEsIgyi7IjHAAIgzC7IhngGIC6qYICHAAIDIKegAkhAIICPAAIhJkWg");
	this.shape_1.setTransform(62.475,62.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ApwJxIAAzhIThAAIAAThgApCJDISFAAIAAyFIyFAAg");
	this.shape_2.setTransform(62.475,62.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF401F").s().p("AFoFQIAAlgQAAgUgNgOQgMgMgVgFQgUgFgZACQgZACgZAIIAAGMIh8AAIAAnMQBLgfBIgFQBCgFA2ARQAaAIAUAMQAVAMAOAQQAOAQAIATQAIATAAAUIAAFqgAhFFPIgxi7IjHAAIgzC7IhogGIC6qYICHAAIDJKegAkjArICQAAIhKkWg");
	this.shape_3.setTransform(62.625,58.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#260600").s().p("ApwJxIAAzhIThAAIAAThg");
	this.shape_4.setTransform(62.475,62.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape},{t:this.shape_2}]},1).to({state:[{t:this.shape_4}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.Scene_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA5252").s().p("AkuExQgsg/ANhuQACgYAGgcIAQhHQgZASgPAGQgVAIgWgCQgZgCgOgUQgMgRABgYQBOgzBFhjQAthCAUgxQASgsARgNQATgPAVgBIABAAQAyAAAMA1QAMAygYBWQgiB9gPBGQgSBSAAAuQAAAOACALQAGAtAZAAQAIAAAJgGQAKgGASgXQBBhRBAh7IBci1QAPgfANgMQAPgNAWAAIAHAAQBFAGAACLQAABmAGBLQAFA1AdAAQASAAARgLQAigWAogoQAHABAEAEQAPAMAAAcQAAAqgdAmQgWAegmATQgoAUgrAAQg/AAgigmQgmgsgFhjQgCglACglQhNCyhGBbQhDBWhHASQgUAFgWAAQhEAAgng6g");
	this.shape.setTransform(33.0886,43.3177,0.55,0.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#645A53").s().p("AIgDTIAjhZIhgjoIBRAAIA3CgIA0igIBJAAIh/FBgArDBoQgkgjABhQIAAizIBMAAIAACyQAAArATASQAQAOAhAAQAhAAAPgQQARgTAAgoIAAiyIBNAAIAACzQAABNgjAkQgkAjhLAAQhIAAghghgAmNBpQghggAAg9QAAg8AlgjQAighA2AAQAbAAAVAIIAAhmIBKAAIAAFVIgvAAIgNgSQgfAXgqAAQgzAAgegfgAlUglQgPARABAeQAAAeAOARQAOAQAaAAQAZAAASgNIAAhoQgSgKgXAAQgaAAgQARgAh0BqQglghAAhCQAAg8AjghQAggeA0AAQA3AAAdAmQAaAjAABBIiaAAQAGA1A7ABQAugBAggVIgKA7QgdAWgzAAQg5AAgigdgAg7gwQgOAMgEAYIBdAAQgHgvgnAAQgSAAgLALgAGWCDIAAiBQABgagLgLQgJgKgUAAQgTAAgTAMIABAcIAACIIhJAAIAAiBQAAgagLgLQgKgKgTAAQgVAAgRAMIAACkIhKAAIAAjxIA1AAIAPAVQAggbAjAAQAzAAAWAjQAmgjAnAAQAtAAAWAZQAXAbABA7IAACIg");
	this.shape_1.setTransform(108.3248,46.0538,0.55,0.55);

	this.an_btn = new lib.AnimateLogo();
	this.an_btn.name = "an_btn";
	this.an_btn.parent = this;
	this.an_btn.setTransform(524.05,110.35,1.3899,1.3899,0,0,0,62.5,62.6);
	new cjs.ButtonHelper(this.an_btn, 0, 1, 2, false, new lib.AnimateLogo(), 3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#67A3E0").s().p("EgejAoxMgSLhRhMBhdAAdMAAABREg");
	this.shape_2.setTransform(357.9,240.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.an_btn},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Layer_1, null, null);


// stage content:
(lib.sounds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.vol_txt = this.Layer_2.vol_txt;
		this.pan_txt = this.Layer_2.pan_txt;
		this.an_btn = this.Layer_1.an_btn;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2_obj_
	this.Layer_2 = new lib.Scene_1_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.setTransform(479.6,341.2,1,1,0,0,0,479.6,341.2);
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 0
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.Scene_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(339.2,240.9,1,1,0,0,0,339.2,240.9);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 1
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(328.7,220,341.09999999999997,281.9);
// library properties:
lib.properties = {
	id: 'A2C76879709E4181BB2A4F2261FC7250',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/hit.mp3", id:"hit"},
		{src:"sounds/runLoop.mp3", id:"runLoop"}
	],
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
an.compositions['A2C76879709E4181BB2A4F2261FC7250'] = {
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


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;