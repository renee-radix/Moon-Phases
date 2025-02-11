// Global variables 
let clockPoints = [], moonPhase = 0, stars = []; numberOfStars = 1000;

function setup(){
  createCanvas(600, 600);

  // Initializing stars array
  for (let i = 0; i < numberOfStars; i++) {
    stars.push(new Star());
  }

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

  //setting width of clock circle
  const radius = width/2.22; 

  //drawing circles for clock
  push();
  translate(width/2, height*1.03);
  stroke(102, 100, 97);
  strokeWeight(10);
  fill(102, 100, 97);
  ellipse(0, 0, width/1.1, height/1.1);
  fill(170, 166, 162);
  ellipse(0, 0, width/1.3, height/1.3);

  // displaying clock points
  let i = 0
  while (i < 30){
    clockPoints[i].display();
    i++;
  }
  

  // setting up the mouse dependent clock hand
  let mouseXDegrees = constrain(mouseX, 0, width + 20);
  mouseXDegrees = map (mouseXDegrees, 0, width, 180, 354);
  let x = cos(radians(mouseXDegrees)) * radius;
  let y = sin(radians(mouseXDegrees)) * radius;
  fill(0);
  triangle(x, y, x + (x * 20), y + (y * 20), x - (x * 20), y - (y * 20));
  ellipse(x, y, 10, 10);

  stroke(50)
  fill(50);
  ellipse(0, (height/20) * -1, 100, 100);
  pop();

    // numerals on clockface
    textFont('Times New Roman');
    textStyle(BOLD);
    textSize(60);
    fill(50);

    push();
    translate(83, 571.5);
    rotate(radians(100));
    text('I', 0, 0);
    pop()
    
    push();
    translate(137, 548);
    rotate(radians(300));
    text('V', 0, 0);
    pop()

    push();
    translate(194, 479);
    rotate(radians(325));
    text('X', 0, 0);
    pop()

    textSize(55);
    push();
    translate(255, 446);
    text('XV', 0, 0);
    pop()

    push();
    translate(349, 452);
    rotate(radians(30));
    text('XX', 0, 0);
    pop()

    textSize(50);
    push();
    translate(428, 510);
    rotate(radians(60));
    text('XXV', 0, 0);
    pop()

  // Connecting mouseXDegrees to the value that is going to be passed to Function
  if (mouseXDegrees >= 185 && mouseXDegrees < 187){
    moonPhase = 1
  }else if (mouseXDegrees >= 187 && mouseXDegrees < 193.3){
      moonPhase = 2
    }else if (mouseXDegrees >= 193.3 && mouseXDegrees < 199.4){
        moonPhase = 3
      }else if (mouseXDegrees >= 199.4 && mouseXDegrees < 205.23){
          moonPhase = 4
        }else if (mouseXDegrees >= 205.23 && mouseXDegrees < 211.03){
            moonPhase = 5
          }else if (mouseXDegrees >= 211.03 && mouseXDegrees < 216.54){
              moonPhase = 6
            }else if (mouseXDegrees >= 216.54 && mouseXDegrees < 222.34){
                moonPhase = 7
              }else if (mouseXDegrees >= 222.34 && mouseXDegrees < 228.14){
                  moonPhase = 8
                }else if (mouseXDegrees >= 228.14 && mouseXDegrees < 233.94){
                    moonPhase = 9
                  }else if (mouseXDegrees >= 233.94 && mouseXDegrees < 239.45){
                      moonPhase = 10
                    }else if (mouseXDegrees >= 239.45 && mouseXDegrees < 245.25){
                        moonPhase = 11
                      }else if (mouseXDegrees >= 245.25 && mouseXDegrees < 251){
                          moonPhase = 12
                        }else if (mouseXDegrees >= 251 && mouseXDegrees < 257.1){
                            moonPhase = 13
                          }else if (mouseXDegrees >= 257.1 && mouseXDegrees < 262.36){
                              moonPhase = 14
                            }else if (mouseXDegrees >= 262.36 && mouseXDegrees < 268.74){
                                moonPhase = 15
                              }else if (mouseXDegrees >= 268.74 && mouseXDegrees < 274.5){
                                  moonPhase = 16
                                }else if (mouseXDegrees >= 274.5 && mouseXDegrees < 280){
                                    moonPhase = 17
                                  }else if (mouseXDegrees >= 280 && mouseXDegrees < 285.1){
                                      moonPhase = 18
                                    }else if (mouseXDegrees >= 285.1 && mouseXDegrees < 291.65){
                                        moonPhase = 19
                                      }else if (mouseXDegrees >= 291.65 && mouseXDegrees < 297.45){
                                          moonPhase = 20
                                        }else if (mouseXDegrees >= 297.45 && mouseXDegrees < 303.25){
                                            moonPhase = 21
                                          }else if (mouseXDegrees >= 303.25 && mouseXDegrees < 309.05){
                                              moonPhase = 22
                                            }else if (mouseXDegrees >= 309.05 && mouseXDegrees < 314.85){
                                                moonPhase = 23
                                              }else if (mouseXDegrees >= 314.85 && mouseXDegrees < 320.65){
                                                  moonPhase = 24
                                                }else if (mouseXDegrees >= 320.65 && mouseXDegrees < 326.45){
                                                    moonPhase = 25
                                                  }else if (mouseXDegrees >= 326.45 && mouseXDegrees < 332.25){
                                                      moonPhase = 26
                                                    }else if (mouseXDegrees >= 332.25 && mouseXDegrees < 338.05){
                                                        moonPhase = 27
                                                      }else if (mouseXDegrees >= 338.05 && mouseXDegrees < 343.56){
                                                          moonPhase = 28
                                                        }else if (mouseXDegrees >= 343.56 && mouseXDegrees < 349.36){
                                                            moonPhase = 29
                                                          }else if (mouseXDegrees >= 349.36 && mouseXDegrees < 355.15){
                                                              moonPhase = 30
                                                            }

  //Drawing the moon 
  fill(209, 174, 0, 190);
  ellipse(300, 125, 200, 200);


  fill(90 , 90, 90, 100);
  noStroke();
  ellipse(322, 75, 30, 30);
  ellipse(228, 160, 25, 25);
  ellipse(372, 123, 30, 30);

  fill(90, 90, 90, 110);
  ellipse(250, 65, 35, 35);
  ellipse(320, 177, 40, 40);

  fill(90 , 90, 90, 80);
  ellipse(372, 174, 10, 10);
  ellipse(220, 120, 10, 10);
  ellipse(370, 88, 10, 10);
  ellipse(280, 93, 10, 10);
  ellipse(276, 153, 10, 10);
  ellipse(278, 203, 10, 10);

  //obscuring ellipse down here, position changes depending on clockhand
  obscureMoon(moonPhase);

  // displaying stars[]
  for (let i = 0; i <numberOfStars; i++) {
    stars[i].display();
  }
}

//function for the moon to cycle through its phases
function obscureMoon(phase){
  fill(0, 255);
  if(phase < 15){
    let ellipsePos = map(phase, 0, 15, 315, 87);
    ellipse(ellipsePos, 125, 200, 200);
  }
  if(phase > 15){
    let ellipsePos = map(phase, 15, 30, 503, 301);
    ellipse(ellipsePos, 125, 200, 200);
  }



}

// clockpoint class
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

//star class
class Star{
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.rotation = random(360);
    this.alpha = random (100, 250);
    this.glowFact = random(10);
    this.bright = true;
  }

  display(){

    //If the star generates in a space occupied by the clock or moon make it totally trasparent
    if((this.x > 22 && this.x < 578 && this.y > 500) || (this.x > 41 && this.x < 550 && this.y > 480)
    || (this.x > 51 && this.x < 530 && this.y > 460) || (this.x > 71 && this.x < 510 && this.y > 440)
    || (this.x > 91 && this.x < 490 && this.y >420) || (this.x > 111 && this.x < 460 && this.y > 400)
    || (this.x > 131 && this.x < 440 && this.y > 380) || (this.x > 151 && this.x < 420 && this.y > 360)
    || (this.x > 171 && this.x < 400 && this.y > 340)) {
      this.alpha = 0
    }
    
    fill(255, this.alpha);
    noStroke();
    push();
    translate(this.x, this.y);
    rotate(radians(this.rotation));
    triangle(0, 0, 2, 0, 2, 2);
    pop();

    // brightness (alpha value) dependant on moon phase (less bright when the moon is fuller)
    let upperBrightnessLeft = map(moonPhase, 1, 15, 255, 50);
    let upperBrightnessRight = map(moonPhase, 16, 30, 50, 255);

    // Logic to make the stars blink
    if(this.bright == true){
      this.alpha = this.alpha - this.glowFact;
    }

    if(this.bright == false){
      this.alpha = this.alpha + this.glowFact;
    }

    if(this.alpha < 30 && this.alpha > 5){
      this.bright = false;
    }

    if(moonPhase <= 15){
      if(this.alpha > upperBrightnessLeft){
        this.bright = true;
      }
    }else{
      if(this.alpha > upperBrightnessRight){
        this.bright = true;
      }
    }
  }
}