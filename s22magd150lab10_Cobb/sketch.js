/* Use Arrow Keys to Move Camera
 * Move Mouse to Move Point Light
 * Click to change the name of the City
 */
let count = 0;
let road, building1, building2;
let table;
let camX = 0, camY = 0;
let xLoc, yLoc;
let randNameIndex;
let randName;
let textW = 200;

function preload() {
  road = loadImage('ROAD.jpg');
  building1 = loadImage('building1.jpg');
  building2 = loadImage('building2.jpg');
  table = loadTable('worldcities.csv');
  font = loadFont('Roboto-Regular.ttf');
}

function setup () {
  createCanvas(400, 400, WEBGL);
  randNameIndex = int(random(table.getRowCount() - 1) + 1);
  randName = table.get(randNameIndex, 0);
}

function draw () {
  background(100);
  noStroke();

  camera(camX, camY, (height/2) / (tan(Math.PI/6)), camX/2, camY, 0, 0, 1, 0);
  rotateX(20);

  ambientLight(100);
  xLoc = mouseX - width / 2;
  yLoc = mouseY - height / 2;
  pointLight(255,255,255, xLoc, yLoc, 50);

  push();
  translate(0,0,1);
  texture(road);
  plane(2000, 200);
  pop();

  //Building 1
  push();
  texture(building1);
  translate(-200,-150, 100);
  box(75, 75, 200);
  translate(0,0,100.5);
  ambientMaterial(200);
  plane(75, 75);
  pop();

  //Building 2
  push();
  texture(building2);
  translate(-25, -200, 235);
  box(175, 175, 470);
  translate(0,0,235.5);
  ambientMaterial(200);
  plane(175, 175);
  pop();

  //Building 3
  push();
  texture(building1);
  translate(175,-160, 135);
  box(100, 100, 270);
  translate(0,0,135.5);
  ambientMaterial(200);
  plane(100, 100);
  pop();

  //Background buildings
  push();
  ambientMaterial(54, 54, 54);
  translate(-300,-600, 300);
  box(175, 175, 600);

  ambientMaterial(54, 54, 54);
  translate(250, 0, 0);
  box(175, 175, 600);

  ambientMaterial(54, 54, 54);
  translate(250,0, 0);
  box(175, 175, 600);

  ambientMaterial(54, 54, 54);
  translate(250,0, 0);
  box(175, 175, 600);
  pop();

  //Ground
  push();
  ambientMaterial(71, 71, 71);
  plane(2000,2000);
  pop();

  push();
  textSize(15);
  textAlign(CENTER, CENTER);
  translate(0, 150, 1);
  fill(250);
  plane(textW + 10, 20);
  textFont(font);
  fill(0);
  translate(0, 0, 1);
  text('Welcome to ' + randName, 0, 0);
  textW = textWidth('Welcome to ' + randName);
  print(textW);
  pop();
}

function keyPressed() {
  let inc = 15;
  if (keyCode === LEFT_ARROW && camX > -100) {
    camX -= inc;
  }
  else if (keyCode === RIGHT_ARROW && camX < 100) {
    camX += inc;
  }
  if (keyCode === UP_ARROW && camY > -200) {
    camY -= inc;
  }
  else if (keyCode === DOWN_ARROW && camY < 100) {
    camY += inc;
  }
}

function nameTown() {
  randNameIndex = int(random(table.getRowCount() - 1) + 1);
  randName = table.get(randNameIndex, 0);
}

function mousePressed() {
  nameTown();
}