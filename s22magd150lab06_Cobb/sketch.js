/*
 * CONTROLS: 
 * Click or press SPACE to jump
 * UP_ARROW and DOWN_ARROW to change size of the sun
 * LEFT_ARROW and RIGHT_ARROW to rotate the sun
*/

var pixelSize = 10;
var charPosX = 300, charPosY = 180, groundY = 180;
var charVelY = 0;
var gravity = -1;
var sunScale = 4;
var sunRotation = 0;

let backgroundColorsR = [];
let backgroundColorsG = [];
let backgroundColorsB = [];

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 3600; i++) {
    if (i < 2400) {
      let colorHue = random(0, 100);
      backgroundColorsR[i] = colorHue;
      backgroundColorsG[i] = colorHue / 5;
      backgroundColorsB[i] = 255;
    }
    else if (i < 2580) {
      backgroundColorsR[i] = 0;
      backgroundColorsG[i] = random(75, 100)
      backgroundColorsB[i] = 7;
    }
    else {
      let colorHue = random(50, 100);
      backgroundColorsR[i] = colorHue;
      backgroundColorsG[i] = colorHue * 4 / 5;
      backgroundColorsB[i] = 0;
    }
  }
  drawBackground();
  drawCharacter();
}

function update() {
  charPosY -= charVelY;
  if (charPosY === groundY) {
    charVelY = 0;
  }
  else {
    charVelY += gravity;
  }
}

function draw() {
  update();
  drawBackground();
  drawCharacter();
}

function drawBackground() {
  /* Loop through the arrays of Red, Green, and Blue color components
   * Color each "Pixel" based on the color components found
   * Translate the next rectangle to the next pixel slot
  */
  noStroke();
  for (let i = 0; i < 3600; i++) {
    if (i % 60 === 0 && i != 0) {
      translate(-600, 10);
    }
    fill(backgroundColorsR[i], backgroundColorsG[i], backgroundColorsB[i]);
    rect(0, 0, pixelSize, pixelSize);
    translate(10, 0);
  }
  //Set translation back to default of 0, 0
  translate(-610, -600);

  //Draw sun in corner
  push();
  scale(sunScale, sunScale);
  rotate(sunRotation);
  rectMode(CENTER);
  fill(252, 232, 3);
  rect(0, 0, 20, 20);
  pop();
}

//This function draws the character you can control in the middle of the screen
function drawCharacter() {
  noStroke();
  //Draws the face of the character using rectangles
  fill(214, 173, 120);
  rect(charPosX - 3 * pixelSize, charPosY, 7 * pixelSize, 7 * pixelSize);
  //Eyes
  fill(255,255,255);
  rect(charPosX - 2 * pixelSize, charPosY + 2 * pixelSize, pixelSize, pixelSize);
  rect(charPosX + 2 * pixelSize, charPosY + 2 * pixelSize, pixelSize, pixelSize);
  fill(41, 135, 217);
  rect(charPosX - 1 * pixelSize, charPosY + 2 * pixelSize, pixelSize, pixelSize);
  rect(charPosX + 1 * pixelSize, charPosY + 2 * pixelSize, pixelSize, pixelSize);
  //Mouth
  fill(201,130,118);
  rect(charPosX - 1 * pixelSize, charPosY + 5 * pixelSize, 3 * pixelSize, pixelSize);

  //Draws the hair of the character using rectangles
  fill(33, 25, 0);
  rect(charPosX - 3 * pixelSize, charPosY, 7 * pixelSize, pixelSize);
  rect(charPosX - 3 * pixelSize, charPosY + pixelSize, pixelSize, pixelSize);
  rect(charPosX + 3 * pixelSize, charPosY + pixelSize, pixelSize, pixelSize);

  //Draws the torso of the character using a rectangle
  fill(30, 117, 26);
  rect(charPosX - 2 * pixelSize, charPosY + 7 * pixelSize, 5 * pixelSize, 10 * pixelSize);

  //Draws the arms of the character using rectanges
  fill(22, 89, 19);
  rect(charPosX - 4 * pixelSize, charPosY + 7 * pixelSize, 2 * pixelSize, 7 * pixelSize);
  rect(charPosX + 3 * pixelSize, charPosY + 7 * pixelSize, 2 * pixelSize, 7 * pixelSize);
  fill(214, 173, 120);
  rect(charPosX - 4 * pixelSize, charPosY + 14 * pixelSize, 2 * pixelSize, 2 * pixelSize);
  rect(charPosX + 3 * pixelSize, charPosY + 14 * pixelSize, 2 * pixelSize, 2 * pixelSize);

  //Draws the legs of the character using rectangles
  fill(0, 10, 117);
  rect(charPosX - 2 * pixelSize, charPosY + 17 * pixelSize, 5 * pixelSize, 7 * pixelSize);
  fill(0,0,0);
  rect(charPosX - 2 * pixelSize, charPosY + 24 * pixelSize, 5 * pixelSize, 2 * pixelSize);
}

function mousePressed() {
  //Jump if the character is on the ground
  if(charPosY === groundY) {
    jump();
  }
}

function jump() {
  charVelY = 15;
}

function keyPressed() {
  //Change sun scale up
  if (keyCode === UP_ARROW && sunScale < 10) {
    changeSunScale(1);
  }
  //Change sun scale down
  else if (keyCode === DOWN_ARROW && sunScale > 1) {
    changeSunScale(-1);
  }
  //Rotate sun counter-clockwise
  else if (keyCode === LEFT_ARROW) {
    rotateSun(-1);
  }
  //Rotate sun clockwise
  else if (keyCode === RIGHT_ARROW) {
    rotateSun(1);
  }
  //Jump if the character is on the ground
  else if (keyCode === 32) {
    if(charPosY === groundY) {
      jump();
    }
  }
}

function changeSunScale(scale) {
  sunScale += scale;
}

function rotateSun(rotation) {
  angleMode(DEGREES)
  sunRotation += rotation * 5;
}