function Obstical(pic) {
	this.top = random(window.innerHeight/2);
	this.bottom = random(window.innerHeight/2);
	this.x = window.innerWidth;
	this.w = 200;
	this.h = 200;
	this.speed = 5;
	this.img;

	switch(pic) {
		case 0:
	        this.img = loadImage("images/forest1.png");
	        break;
	    case 1:
	        this.img = loadImage("images/forest2.png");
	        break;
	    case 2:
	        this.img = loadImage("images/forest3.png");
	        break;
	    case 3:
	        this.img = loadImage("images/forest4.png");
	        break;
	    case 4:
	        this.img = loadImage("images/forest248.png");
	        break;
	}

	this.show = function() {

		//fill(255);
		// rect(this.x, 0, this.w, this.top);
		// rect(this.x, window.innerHeight - this.bottom, this.w, this.bottom);
		image(this.img, this.x, this.top, this.w, this.h);
		image(this.img, this.x, window.innerHeight - this.bottom, this.w, this.h);
	}

	this.update = function() {
		this.x -= this.speed;
	}

	this.offScreen = function() {
		return (this.x < -this.w);
		// if(this.x < -w) {
		// 	return true;
		// } else {
		// 	return false;
		// }
	}
}