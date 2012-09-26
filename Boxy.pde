class Boxy{
  PVector p;
  
  Boxy(){
    p = new PVector(random(sW)/10,random(sH)/10,random(sD)-(sD/2));
  }
  
  void update(){
  pushMatrix();
  rotateX(-.5);
  rotateY(-.5);
  fill(255,0,0);
  translate(p.x,p.y,p.z);
  box(30);
  translate(0,0,18);
  fill(0,0,255);
  box(5);
  popMatrix();
  }
}

