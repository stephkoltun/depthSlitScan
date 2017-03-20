import processing.video.*;
Capture video;

int videoSliceX;
int drawPositionX;

PImage img;
int slice = 10;

String value = "vert";
int counter = 0;

int rand = 5;

int xPos = 0;

// variables for copying pixels from the image
int sx;
int sy;
int sw;
int sh;
int dx;
int dy;
int dw;
int dh;

void setup() {
  size(640,480);
  video = new Capture(this, 640,480);
  video.start();

  frameRate(30);
}

void draw() {
  
    // this should be the closet point (using depth map)
    // but for now use a random position
    sx = xPos;  // where to take the slice from
    sy = 0;
    sw = slice;
    sh = 640;
    dx = sx+round(random(rand)); // where it will be placed, add a little jiggle
    dy = round(random(rand/2));
    dw = slice;
    dh = 640;
    
    if (counter == 0) {
      video.read();
      image(video,0,0);
    }
  
  if (video.available()) {
    // get a frame
    video.read(); 
    // turn it into a PImage
    img = video.get();
    // add a slice on top   
    copy(img, sx, sy, sw, sh, dx, dy, dw, dh);
    counter++;
  }
  
  xPos = xPos + round(random(-2,10));

}