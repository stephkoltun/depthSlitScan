var img;
var imgHeight = 500;
var imgWidth = 500;
var slice = 3;

var value = "vert";
var counter = 0;

// variables for copying pixels from the image
var sx;
var sy;
var	sw;
var	sh;
var	dx;
var	dy;
var	dw;
var	dh;

// load three images, one of which is randomly selected
function preload() {
  img1 = loadImage("yes.jpg");
	img2 = loadImage("plant.png");
	img3 = loadImage("cabin.jpg");
}

function setup() {
	createCanvas(imgWidth,imgHeight);
	var thisImg = round(random(2));
	if (thisImg === 0) {
  	image(img1, 0, 0);
    img = img1;
	} else if (thisImg == 1) {
		image(img2, 0, 0);
    img = img2;
	} else {
		image(img3, 0, 0);
    img = img3;
	}
}

function draw() {
  //added random numbers to give it a bit of wiggle)
	copy(img, sx, sy, sw, sh, dx, dy, dw,dh);
  
  if (value === "hor") {
    sx = 0;
		sy = mouseY;
		sw = imgWidth;
		sh = slice;
		dx = round(random(10));
		dy = mouseY+round(random(10));
		dw = imgWidth;
		dh = slice;
  }
  
  if (value == "vert") {
  	sx = mouseX;
		sy = 0;
		sw = slice;
		sh = imgHeight;
		dx = mouseX+round(random(10));
		dy = round(random(10));
		dw = slice;
		dh = imgHeight;
  }
  
  counter++;
  
  // draw solid bar periodically 
  if ((counter % 20) === 0) {
  	solidSlice();
  }
}

function keyPressed() {
	if (key == 'V' || key == 'v') {
    value = "vert";
  }
  
  if (key == 'H' || key == 'h') {
    value = "hor";
  }
  
  if (key =='R' || key == 'r') {
    var thisImg = round(random(2));
		if (thisImg === 0) {
  		image(img1, 0, 0);
    	img = img1;
		} else if (thisImg == 1) {
			image(img2, 0, 0);
    	img = img2;
		} else {
			image(img3, 0, 0);
    	img = img3;
		}
  }
}

function solidSlice() {
  
  var c = get(mouseX, mouseY);
  fill(c);
  noStroke();
  
  if (value == "hor") {
  	rect(0, mouseY+round(random(10)), imgWidth, 9);
  } else {
    rect(mouseX+round(random(10)), 0, 9, imgHeight);
  }
  
}
