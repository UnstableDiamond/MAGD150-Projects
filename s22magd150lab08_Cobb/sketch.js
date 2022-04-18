/* 
 * Controls:
 * Click to change font color
 * Press ENTER to save as pdf
 */



//Initialize variables needed in later functions
var font;
var count = 1;
var pdf;

//Load fonts, strings, and images before setup and draw are called
function preload() {
  font = loadFont('assets/RubikGlitch-Regular.ttf');
  line1 = loadStrings('assets/line1.txt');
  line2 = loadStrings('assets/line2.txt');
  line3 = loadStrings('assets/line3.txt');
  line4 = loadStrings('assets/line4.txt');
  devil = loadImage('assets/devil.jpg');
  door = loadImage('assets/door.jpg');
}

//Initialize canvas with background and default fill color
function setup() {
  createCanvas(600, 800, P2D);
  background(0);
  fill(138, 0, 106);
  tint(0,0,0);
  pdf = createPDF();
  pdf.beginRecord();
}

function draw() {
  textFont(font);
  strokeWeight(0);
  textSize(50);
  textAlign(CENTER);
  text(line1, width / 2, 500);
  text(line2, width / 2, 550);
  text(line3, width / 2, 600);
  text(line4, width / 2, 650);
  image(devil, 10, 10, 250, 250);
  door.filter(GRAY);
  image(door, 500, 10, 100, 200);

  
}

//Change font color when user clicks
function mousePressed() {
  count++;
  if (count % 2 === 1) {
    fill(138, 0, 106);
    tint(0,0,0);
  }
  if (count % 2 === 0) {
    fill(204, 227, 0);
    tint(255,0,0);
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
        pdf.save();
  }
}