import KinectPV2.*;

import java.util.ArrayList;
import KinectPV2.KJoint;

KinectPV2 kinect;

PImage img;
int slice = 20;

int rand = 5;
int counter=0;

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
  size(1920, 1440);

  frameRate(25);

  kinect = new KinectPV2(this);
  kinect.enableDepthImg(true);
  kinect.enableColorImg(true);
  kinect.enablePointCloud(true);

  kinect.init();
}

void draw() {

  sx = round(random(width));  // where to take the slice from
  sy = 0;
  sw = slice;
  sh = height;
  dx = sx+round(random(rand)); // where it will be placed, add a little jiggle
  dy = round(random(rand/2));
  dw = slice;
  dh = height;

  if (counter == 0) {
    // draw just the basic image
    PImage colorImg = kinect.getColorImage();
    image(colorImg, 0, 0);
    counter++;
  }

  img = kinect.getColorImage();

  copy(img, sx, sy, sw, sh, dx, dy, dw, dh);
}