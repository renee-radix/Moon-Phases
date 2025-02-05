// Global variables 

let clockPoints = [];
let moonPhase = 0;

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

    // riv: numerals on clockface
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
    translate(423, 500);
    rotate(radians(60));
    text('XXV', 0, 0);
    pop()

  // Connecting mouseXDegrees to the value that is going to be passed to Function
  if (mouseXDegrees >= 185 && mouseXDegrees < 187){
    moonPhase = 1
  }else{
    if (mouseXDegrees >= 187 && mouseXDegrees < 193.3){
      moonPhase = 2
    }else{
      if (mouseXDegrees >= 193.3 && mouseXDegrees < 199.4){
        moonPhase = 3
      }else{
        if (mouseXDegrees >= 199.4 && mouseXDegrees < 205.23){
          moonPhase = 4
        }else{
          if (mouseXDegrees >= 205.23 && mouseXDegrees < 211.03){
            moonPhase = 5
          }else{
            if (mouseXDegrees >= 211.03 && mouseXDegrees < 216.54){
              moonPhase = 6
            }else{
              if (mouseXDegrees >= 216.54 && mouseXDegrees < 222.34){
                moonPhase = 7
              }else{
                if (mouseXDegrees >= 222.34 && mouseXDegrees < 228.14){
                  moonPhase = 8
                }else{
                  if (mouseXDegrees >= 228.14 && mouseXDegrees < 233.94){
                    moonPhase = 9
                  }else{
                    if (mouseXDegrees >= 233.94 && mouseXDegrees < 239.45){
                      moonPhase = 10
                    }else{
                      if (mouseXDegrees >= 239.45 && mouseXDegrees < 245.25){
                        moonPhase = 11
                      }else{
                        if (mouseXDegrees >= 245.25 && mouseXDegrees < 251){
                          moonPhase = 12
                        }else{
                          if (mouseXDegrees >= 251 && mouseXDegrees < 257.1){
                            moonPhase = 13
                          }else{
                            if (mouseXDegrees >= 257.1 && mouseXDegrees < 262.36){
                              moonPhase = 14
                            }else{
                              if (mouseXDegrees >= 262.36 && mouseXDegrees < 268.74){
                                moonPhase = 15
                              }else{
                                if (mouseXDegrees >= 268.74 && mouseXDegrees < 274.5){
                                  moonPhase = 16
                                }else{
                                  if (mouseXDegrees >= 274.5 && mouseXDegrees < 280){
                                    moonPhase = 17
                                  }else{
                                    if (mouseXDegrees >= 280 && mouseXDegrees < 285.1){
                                      moonPhase = 18
                                    }else{
                                      if (mouseXDegrees >= 285.1 && mouseXDegrees < 291.65){
                                        moonPhase = 19
                                      }else{
                                        if (mouseXDegrees >= 291.65 && mouseXDegrees < 297.45){
                                          moonPhase = 20
                                        }else{
                                          if (mouseXDegrees >= 297.45 && mouseXDegrees < 303.25){
                                            moonPhase = 21
                                          }else{
                                            if (mouseXDegrees >= 303.25 && mouseXDegrees < 309.05){
                                              moonPhase = 22
                                            }else{
                                              if (mouseXDegrees >= 309.05 && mouseXDegrees < 314.85){
                                                moonPhase = 23
                                              }else{
                                                if (mouseXDegrees >= 314.85 && mouseXDegrees < 320.65){
                                                  moonPhase = 24
                                                }else{
                                                  if (mouseXDegrees >= 320.65 && mouseXDegrees < 326.45){
                                                    moonPhase = 25
                                                  }else{
                                                    if (mouseXDegrees >= 326.45 && mouseXDegrees < 332.25){
                                                      moonPhase = 26
                                                    }else{
                                                      if (mouseXDegrees >= 332.25 && mouseXDegrees < 338.05){
                                                        moonPhase = 27
                                                      }else{
                                                        if (mouseXDegrees >= 338.05 && mouseXDegrees < 343.56){
                                                          moonPhase = 28
                                                        }else{
                                                          if (mouseXDegrees >= 343.56 && mouseXDegrees < 349.36){
                                                            moonPhase = 29
                                                          }else{
                                                            if (mouseXDegrees >= 349.36 && mouseXDegrees < 355.15){
                                                              moonPhase = 30
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }    
  console.log("Mouse Y: " + mouseY);
  console.log("Mouse X: " + mouseX);

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


  //underneath that there are stars, create some logic that means they can't spawn in the bounding box of the moon and make sure they're all above the clock
  // (so like "if X is less than blank and more than blank, and Y is less than blank and more than blank, make 100% transparent")
  // the stars in general are more transparent if the moon is "brighter", so as a whole they have a colour that's hooked up to the alpha value of the stars
  // there should also be a way to make the stars blink 
}

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

// class Star{
//   constructor(){
//     this.x = random(width);
//     this.y = random(335);
//   }

// }
