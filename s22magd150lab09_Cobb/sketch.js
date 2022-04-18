/*
 * Accept Microphone and Camera permissions, and click on the canvas to begin audio input
 * Program displays a loop of mirror images of the video input
 * Audio input amplitude effects tint of the mirrors
 * Click the "Flip!" button to flip the video playback
 */

var count = 500;
let mirrors = [];
var greenShift = 0;
var redShift = 0;
let mic, amp, level;
let capture;
let button;
let flipCount = 0;

function setup() {
  let canvas = createCanvas(500, 1000);
  canvas.mousePressed(userStartAudio);
  //Create an array of 20 mirrors
  for (let i = 0; i < 10; i++) {
    mirrors.push(new Mirror());
  }
  //Set up audio input and new amplitude variable
  mic = new p5.AudioIn();
  mic.start();
  amp = new p5.Amplitude();
  amp.setInput(mic);

  capture = createCapture(VIDEO);
  capture.hide();

  button = createButton('Flip!');
  button.position(width / 2, height - 100);
  button.mousePressed(flipCountUp);
}

function draw() {
  background(100);
  let level = amp.getLevel();
  //change color of each mirror based on the amplitude level
  for (let i = 0; i < mirrors.length; i++) {
    mirrors[i].color = color(255-mirrors[i].green, 255-(level * 1000), 255-mirrors[i].green - (level * 1000));
  }

  for (let i = 0; i < mirrors.length; i++) {
    mirrors[i].show();
  }
}

//Mirror object to instantiate to create each mirror with its own set of variables
class Mirror {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.width = count;
    this.height = 2 * count;
    count -= 40;
    greenShift+= 10;
    this.green = greenShift;
    this.color = color(255 - greenShift, 255, 255 - greenShift);
  }

  show() {
    //fill(this.color);
    rectMode(CENTER);
    imageMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    tint(this.color);
    if (flipCount % 2 == 0) {
      push();
      scale(-1, 1);
      translate(-(capture.width / 1.28), 0);
        push();
        imageMode(CENTER);
        image(capture, this.x, this.y, this.width, this.height);
        pop();
      pop();
    }
    else {
      push();
      scale(1, 1);
      translate(0, 0);
        push();
        imageMode(CENTER);
        image(capture, this.x, this.y, this.width, this.height);
      pop();
    pop();
    }
  }
}

function flipCountUp() {
  flipCount++;
}