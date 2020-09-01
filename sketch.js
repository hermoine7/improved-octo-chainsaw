var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(displayHeight,displayWidth);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
  }

function draw() {
  background(255,255,0); 

  translate(200,200)
  rotate(-90)

  hr=hour();
  mn=minute();
  sc=second();
  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr,0,24,0,360);

  push();
    rotate(scAngle);
    stroke(175,238,238);
    strokeWeight(5);
    line(0,0,100,0);
  pop()

  push();
    rotate(mnAngle);
    stroke(64,224,208);
    strokeWeight(5);
    line(0,0,75,0);
  pop()

    
  push();
    rotate(hrAngle);
    stroke(0,206,209);
    strokeWeight(5);
    line(0,0,50,0);
  pop()

  stroke(238,130,238);
  point(0,0)

   
  strokeWeight(7);
  noFill();
    
  stroke(230,230,250);
  arc(0,0,300,300,0,scAngle);
   
  stroke(238,130,238);
  arc(0,0,280,280,0,mnAngle);
    
  stroke(221,160,221);
  arc(0,0,260,260,0,hrAngle);

  drawSprites();
}