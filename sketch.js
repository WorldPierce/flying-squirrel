var bg;
var squrriel;
var obsticals = [];
function setup() {
	squrriel = new Squrriel(); 
	bg = loadImage("images/background3.png");
    createCanvas(window.innerWidth, window.innerHeight);
    obsticals.push(new Obstical(Math.floor((Math.random() * 4))));
}

function draw() {
	background(bg);
	squrriel.update();
	squrriel.show();

	if(frameCount % 65 == 0) {
		obsticals.push(new Obstical(Math.floor((Math.random() * 4))));
	}

	for(var i = obsticals.length - 1 ; i >= 0; i--) {
		obsticals[i].show();
		obsticals[i].update();
		if(obsticals[i].offScreen()) {
			obsticals.splice(i, 1);
		}
	}

  // if (mouseIsPressed) {
  //   fill(0);
  // } else {
  //   fill(255);
  // }
  // ellipse(mouseX, mouseY, 80, 80);
}

function keyPressed() {
	if(key == ' ') {
		squrriel.up();
		//console.log("space");
	}
}

