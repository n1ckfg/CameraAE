
String aeFileName = "AEscript";
String aeFilePath = "scripts";
String aeFileType = "jsx";
Data dataAE;
PVector AEoffsetP = new PVector(0,0,-1866.6967);
PVector AEoffsetR = new PVector(1,1,1);
PVector AEoffsetLA = new PVector(sW/2,sH/2,0);

void AEkeysMain() {
  AEkeysBegin();
  for (int j=0;j<counter;j++) {
    AEkeyPos(j);
    AEkeyRot(j);
    AEkeyLookAt(j);
  }
  AEkeysEnd();
}

float AEkeyTime(int frameNum) {
  return (float(frameNum)/float(counter)) * (float(counter)/float(fps));
}

void AEkeyPos(int frameNum) {

  PVector lower, upper, centerNum, w, s;

  centerNum = (PVector) lookAt.get(frameNum);

  if (applySmoothing && frameNum>smoothNum && frameNum<counter-smoothNum) {
    w = new PVector(weight, weight, weight);
    s = new PVector(scaleNum, scaleNum, scaleNum);
    lower = (PVector) lookAt.get(frameNum-smoothNum);
    upper = (PVector) lookAt.get(frameNum+smoothNum);
    centerNum.mult(w);
    lower.add(upper);
    centerNum.add(lower);
    centerNum.mult(scaleNum);
  }

  if (frameNum%smoothNum==0||frameNum==0||frameNum==counter-1) {
    dataAE.add("\t\t" + "p.setValueAtTime(" + AEkeyTime(frameNum) + ", [" + (centerNum.x+AEoffsetP.x) + ", " + (centerNum.y+AEoffsetP.y) + ", " + (centerNum.z+AEoffsetP.z) +"]);" + "\r");
  }
}

void AEkeyRot(int frameNum) {

  PVector lower, upper, centerNum, w, s;

  centerNum = (PVector) lookAt.get(frameNum);

  if (applySmoothing && frameNum>smoothNum && frameNum<counter-smoothNum) {
    w = new PVector(weight, weight, weight);
    s = new PVector(scaleNum, scaleNum, scaleNum);
    lower = (PVector) lookAt.get(frameNum-smoothNum);
    upper = (PVector) lookAt.get(frameNum+smoothNum);
    centerNum.mult(w);
    lower.add(upper);
    centerNum.add(lower);
    centerNum.mult(scaleNum);
  }

  if (frameNum%smoothNum==0||frameNum==0||frameNum==counter-1) {
    dataAE.add("\t\t" + "r.setValueAtTime(" + AEkeyTime(frameNum) + ", [" + (centerNum.x*AEoffsetR.x) + ", " + (centerNum.y*AEoffsetR.y) + ", " + (centerNum.z*AEoffsetR.z) +"]);" + "\r");
  }
}

void AEkeyLookAt(int frameNum) {

  PVector lower, upper, centerNum, w, s;

  centerNum = (PVector) lookAt.get(frameNum);

  if (applySmoothing && frameNum>smoothNum && frameNum<counter-smoothNum) {
    w = new PVector(weight, weight, weight);
    s = new PVector(scaleNum, scaleNum, scaleNum);
    lower = (PVector) lookAt.get(frameNum-smoothNum);
    upper = (PVector) lookAt.get(frameNum+smoothNum);
    centerNum.mult(w);
    lower.add(upper);
    centerNum.add(lower);
    centerNum.mult(scaleNum);
  }

  if (frameNum%smoothNum==0||frameNum==0||frameNum==counter-1) {
    dataAE.add("\t\t" + "la.setValueAtTime(" + AEkeyTime(frameNum) + ", [" + (centerNum.x+AEoffsetLA.x) + ", " + (centerNum.y+AEoffsetLA.y) + ", " + (centerNum.z+AEoffsetLA.z) +"]);" + "\r");
  }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

void AEkeysBegin() {
  dataAE = new Data();
  dataAE.beginSave();
  dataAE.add("{  //start script" + "\r");
  dataAE.add("\t" + "app.beginUndoGroup(\"foo\");" + "\r");
  dataAE.add("\r");
  dataAE.add("\t" + "// create project if necessary" + "\r");
  dataAE.add("\t" + "var proj = app.project;" + "\r");
  dataAE.add("\t" + "if(!proj) proj = app.newProject();" + "\r");
  dataAE.add("\r");
  dataAE.add("\t" + "// create new comp named 'Comp 1'" + "\r");
  dataAE.add("\t" + "var compW = " + dW + "; // comp width" + "\r");
  dataAE.add("\t" + "var compH = " + dH + "; // comp height" + "\r");
  dataAE.add("\t" + "var compL = " + (counter/fps) + ";  // comp length (seconds)" + "\r");
  dataAE.add("\t" + "var compRate = " + fps + "; // comp frame rate" + "\r");
  dataAE.add("\t" + "var compBG = [0/255,0/255,0/255] // comp background color" + "\r");
  dataAE.add("\t" + "var myItemCollection = app.project.items;" + "\r");
  dataAE.add("\t" + "var myComp = myItemCollection.addComp('Comp 1',compW,compH,1,compL,compRate);" + "\r");
  dataAE.add("\t" + "myComp.bgColor = compBG;" + "\r");
  dataAE.add("\r");
  dataAE.add("\t" + "var camera = myComp.layers.addCamera(\"Camera 1\",["+(sW/2)+","+(sH/2)+"]);" + "\r");
  dataAE.add("\r");
  dataAE.add("\t" + "var p = camera.property(\"Position\");" + "\r");
  dataAE.add("\t" + "var r = camera.property(\"Orientation\");" + "\r");
  dataAE.add("\t" + "var la = camera.property(\"Point of Interest\");" + "\r");
  dataAE.add("\r");
}

void AEkeysEnd() {
  dataAE.add("\r");
  dataAE.add("\t" + "app.endUndoGroup();" + "\r");
  dataAE.add("}  //end script" + "\r");
  dataAE.endSave(aeFilePath + "/" + aeFileName + "." + aeFileType);
}


