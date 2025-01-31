// Global variables 

let clockPoints = [];

function setup(){
  createCanvas(600, 600);

  // creating locations for clock points
  const radius = width/2.22;
  for (let i = 0; i < 30; i++) {
  let x = cos(radians(188 + (i * 5.77))) * radius;
  let y = sin(radians(188 + (i * 5.77))) * radius;
  clockPoints.push(new ClockPoint(x, y));
  }
}

function draw() {
  background(0);

  const radius = width/2.22; // needs to be declared twice because it depends on the width being set

  //sundial circles
  push();
  translate(width/2, height*1.03);
  stroke(102, 100, 97);
  strokeWeight(10);
  fill(102, 100, 97);
  ellipse(0, 0, width/1.1, height/1.1);
  fill(170, 166, 162);
  ellipse(0, 0, width/1.3, height/1.3);

  // displaying clock points
  for (let i = 0; i < 30; i++) {
    clockPoints[i].display();
  }

  // setting up the mouse dependent clock hand
  let mouseXDegrees = map (mouseX, 0, width, 180, 354);
  let x = cos(radians(mouseXDegrees)) * radius;
  let y = sin(radians(mouseXDegrees)) * radius;
  fill(0);
  triangle(x, y, x + (x * 20), y + (y * 20), x - (x * 20), y - (y * 20));
  ellipse(x, y, 10, 10);

  stroke(50)
  fill(50);
  ellipse(0, (height/20) * -1, 100, 100);
  pop();

  

  // Range for points around circle in degrees: 186 to 354 (a range of 168 degrees)
  // To have 30 stages for that we'd need to increment by 5.6 each time

  console.log("Mouse X: " + mouseX);
  console.log("Mouse Y: " + mouseY);
}


class ClockPoint{

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 20; 
  }

  display(){
    strokeWeight(5);
    stroke(0);
    line(this.x, this.y, this.x / 1.1, this.y / 1.1);
  }
}

// On my computer window width and height when I'm doing it in side by side mode is 708 and 697 respectively