import processing.opengl.*;
import peasy.*;

PeasyCam cam;
int sW = 1280;
int sH = 720;
int sD = 200;
int fps = 24;
int dW = 1920;
int dH = 1080;
int dD = 200;
int numBoxy = 20;
Boxy[] boxy = new Boxy[numBoxy];
int counter=0;
int counterMax;
ArrayList pos, rot, lookAt, frames;
boolean applySmoothing = true;
int smoothNum = 6;
float weight = 18;
float scaleNum  = 1.0 / (weight + 2);
boolean recording=false;

void setup() {
  size(sW, sH, OPENGL);
  frameRate(fps);
  for (int i=0;i<boxy.length;i++) {
    boxy[i] = new Boxy();
  }
  cam = new PeasyCam(this, 100);
  //cam.setMinimumDistance(50);
  //cam.setMaximumDistance(500);
  pos = new ArrayList();
  rot = new ArrayList();
  lookAt = new ArrayList();
}

void draw() {
  if(!recording){
  background(0);
  }else{
  background(30,0,0);
  }
  for (int i=0;i<boxy.length;i++) {
    boxy[i].update();
  }
  if(recording){
    pos.add(new PVector((cam.getPosition()[0]/sW)*dW, (cam.getPosition()[1]/sH)*dH, (cam.getPosition()[2]/sD)*dD));
    rot.add(new PVector((cam.getRotations()[0]), (cam.getRotations()[1]), (cam.getRotations()[2])));
    lookAt.add(new PVector((cam.getLookAt()[0]/(sW/2))*(dW/2), (cam.getLookAt()[1]/(sH/2))*(dH/2), 0));
    println("pos: " + (PVector) pos.get(counter) + "   rot: " + (PVector) rot.get(counter) + "   lookAt: " + (PVector) lookAt.get(counter));
    counter++;
  }
}

