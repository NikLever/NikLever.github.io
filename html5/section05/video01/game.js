class Game{
	constructor(){
		this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
		
		this.sfx1 = new SFX({
			context: this.audioContext,
			src:{mp3:"quick_swish.mp3", webm:"quick_swish.webm"},
			loop: false,
			volume: 0.3
		});
		
		this.music = new SFX({
			context: this.audioContext,
			src:{mp3:"music.mp3", webm:"music.webm"},
			loop: true,
			autoplay: true,
			volume: 0.1
		})
		
		const btn1 = document.getElementById("playSndBtn");
		const game = this;
		btn1.addEventListener('click', function(){ game.sfx1.play(); });
		const btn2 = document.getElementById("stopSndBtn");
		btn2.addEventListener('click', function(){ game.sfx1.stop(); });
		const btn3 = document.getElementById("stopMusicBtn");
		btn3.addEventListener('click', function(){ game.music.stop(); });
		const range = document.getElementById("volumeRng");
		range.addEventListener('change', function(){
			const vol = this.value;
			game.sfx1.volume = vol;
		});
		const loop = document.getElementById("loopChk");
		loop.addEventListener('click', function(){
			const checked = this.checked;
			game.sfx1.loop = checked;
		})
	}
}

class SFX{
	constructor(options){
		this.context = options.context;
		const volume = (options.volume!=undefined) ? options.volume : 1.0;
		this.gainNode = this.context.createGain();
		this.gainNode.gain.setValueAtTime(volume, this.context.currentTime);
		this.gainNode.connect(this.context.destination);
		this._loop = (options.loop==undefined) ? false : options.loop;
		this.fadeDuration = (options.fadeDuration==undefined) ? 0.5 : options.fadeDuration;
		this.autoplay = (options.autoplay==undefined) ? false : options.autoplay;
		this.buffer = null;
		
		let codec;
		for(let prop in options.src){
			if (prop=="webm" && SFX.supportsVideoType(prop)){
				codec = prop;
				break;
			}
			if (prop=="mp3" && SFX.supportsVideoType(prop)){
				codec = prop;
			}
		}
		
		if (codec!=undefined){
			this.url = options.src[codec];
			this.load(this.url);
		}else{
			console.warn("Browser does not support any of the supplied audio files");
		}
	}
	
	static supportsVideoType(type) {
		let video;
	  	// Allow user to create shortcuts, i.e. just "webm"
	  	let formats = {
			ogg: 'video/ogg; codecs="theora"',
			h264: 'video/mp4; codecs="avc1.42E01E"',
			webm: 'video/webm; codecs="vp8, vorbis"',
			vp9: 'video/webm; codecs="vp9"',
			hls: 'application/x-mpegURL; codecs="avc1.42E01E"'
		};

		if(!video) video = document.createElement('video');

	  	return video.canPlayType(formats[type] || type);
	}
	
	load(url) {
  		// Load buffer asynchronously
  		const request = new XMLHttpRequest();
  		request.open("GET", url, true);
  		request.responseType = "arraybuffer";

  		const sfx = this;

  		request.onload = function() {
			// Asynchronously decode the audio file data in request.response
    		sfx.context.decodeAudioData(
      			request.response,
      			function(buffer) {
					if (!buffer) {
						console.error('error decoding file data: ' + sfx.url);
						return;
					}
					sfx.buffer = buffer;
					if (sfx.autoplay) sfx.play();
				},
				function(error) {
					console.error('decodeAudioData error', error);
				}
    		);
  		}

  		request.onerror = function() {
    		console.error('SFX Loader: XHR error');
  		}

  		request.send();
	}
	
	set loop(value){
		this._loop = value;
		if (this.source!=undefined) this.source.loop = value;
	}
	
	play(){
		if (this.source!=undefined) this.source.stop();
		this.source = this.context.createBufferSource();
		this.source.loop = this._loop;
	  	this.source.buffer = this.buffer;
	  	this.source.connect(this.gainNode);
		this.source.start(0);
	}
	
	set volume(value){
		this._volume = value;
		this.gainNode.gain.setTargetAtTime(value, this.context.currentTime + this.fadeDuration, 0);
	}
	
	pause(){
		this.source.stop();
	}
	
	stop(){
		this.source.stop();
	}
}


