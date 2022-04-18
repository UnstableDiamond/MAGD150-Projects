let flowers = [];
let petals = [];

function setup() {
  createCanvas(700, 600);
  //Create a new array of 5 flowers
  flower1 = new Flower(15, 50, 150, color(219, 57, 57), 100);
  flower2 = new Flower(20, 40, 250, color(3, 44, 252), 225);
  flower3 = new Flower(15, 45, 175, color(106, 181, 60), 350);
  flower4 = new Flower(15, 35, 200, color(150, 3, 72), 450);
  flower5 = new Flower(20, 55, 300, color(3, 129, 171), 550);
  flowers = [flower1, flower2, flower3, flower4, flower5];
}

function draw() {
  noStroke();
  background(51, 190, 255);
  fill(19, 128, 0);
  rect(0, 550, 700, 50);
  //Loop through and show all flowers
  for (let i = 0; i < 5; i++) {
    flowers[i].show();
  }
}

class Flower {
  constructor(petalSize, pistilSize, stemLength, color, xLocation) {
    this.petalSize = petalSize;
    this.pistilSize = pistilSize;
    this.stemLength = stemLength;
    this.color = color;
    this.x = xLocation;
  }

  show() {
    push();

    //Create the stem of the flower
    fill(12, 84, 0);
    rect(this.x-3, 600 - this.stemLength, 6, this.stemLength - 25);
    triangle(this.x, 600 - (0.6 * this.stemLength), this.x+(0.5*this.pistilSize), 600 - (0.6 * this.stemLength) + 10, this.x+(0.5*this.pistilSize), 600 - (0.6 * this.stemLength) - 10);
    arc(this.x+(0.5*this.pistilSize) - 0.5, 600 - (0.6 * this.stemLength), 20, 20, -HALF_PI, HALF_PI);
    
    //Create the pistil of the flower
    fill(219, 173, 57);
    ellipse(this.x, 600 - this.stemLength, this.pistilSize, this.pistilSize);
    
    //Create the petals of the flower
    push();
      translate(this.x, 600 - this.stemLength);
      for(let i = 0; i < 10; i++) {
        push();
          rotate(i * PI / 5);
          fill(this.color);
          triangle((0.5*this.pistilSize) - 5, 0, this.pistilSize, this.petalSize, this.pistilSize, -this.petalSize);
          arc(this.pistilSize - 0.5, 0, 2 * this.petalSize, 2 * this.petalSize, -HALF_PI, HALF_PI);
        pop();
      }
    pop();
  }
}