void keyPressed() {
  if(!recording){
    recording=true;
  }else{
    writeHandler();
  }
}

void writeHandler() {
  AEkeysMain();
  exit();
}

