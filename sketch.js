// global variables namespace

var whatShape;

function setup() {
  createCanvas(800,600);
  // createCanvas(displayWidth,displayHeight);
  noStroke();
  whatShape = 0;
  
}

function draw() {
  if (mouseIsPressed) {
    fill(127,200,180);
  } 
  else {
    fill(220,180,100);
  }
  // fill(random(0,255),random(0,255),random(0,255));
  // ellipse(mouseX,mouseY,100,100);
  
  if (whatShape == 0) {
    ellipse(mouseX,mouseY,100,100);
  } 
  if (whatShape == 1)  {
    rect(mouseX,mouseY,100,100);
  }
}

function keyTyped(){
  if(key == ' '){
    background(255);
  }
  if(key == '2') {
    stroke(random(0,255),random(0,255),random(0,255));
    strokeWeight(5);
  }
  
  if (key == 'c') {
    whatShape = 0;
  }
  else if (key == 's') {
    whatShape = 1;
  }
  
}