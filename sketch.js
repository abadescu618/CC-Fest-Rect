var xPosition=150;
var yPosition=500;
var xSpeed=5;
var ySpeed=5;
var diameter=25;
var rainbowColors;
var xAxis= 10;
var yAxis=10;

function setup() {
  createCanvas(550,570);
  rainbowColors=color(0);
}

function draw() {
  background(170, 20, 100);
  fill(rainbowColors);
  noStroke();
  diameter=mouseX;
  rect(xPosition, yPosition, xAxis, yAxis );
  xAxis= mouseX;
  yAxis= mouseY;
  if ((xPosition + 50 >=width)||(xPosition-50<=0)){
    xSpeed*=-1;
  }
  
  if ((yPosition + 50>=height) ||(yPosition-50<=0)){
    ySpeed*=-1;
  }
  
  yPosition+=ySpeed;
  xPosition+=xSpeed;
}

function mouseClicked(){
  rainbowColors= color(random(255), random(255), random(255));
}