// JavaScript Document
document.addEventListener("DOMContentLoaded", function(event){
    const c = document.getElementById("game");
	const ctx = c.getContext("2d");
	
	const flowerImage = new Image();
	flowerImage.src = "flower.png";
	flowerImage.onload = function(){	
		const flower = new Sprite({
			context: ctx,
			width: 64,
			height: 64,
			image: flowerImage
		});

		flower.render();
	}
	
	class Sprite {
		
		constructor(options){
			this.context = options.context;
			this.width = options.width;
			this.height = options.height;
			this.image = options.image;
		}
		
		render() {
			// Draw the animation
			this.context.drawImage(
			   this.image,
			   200,
			   100);
		};
	
	}
});





