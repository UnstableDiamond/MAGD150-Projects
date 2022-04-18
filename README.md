## Welcome to my MAGD150 Project Repository

Contained below are the descriptions and links for 5 of my MAGD150 Projects.

### Lab Assignment 6

[Lab Assignment 6 Project Folder](https://github.com/UnstableDiamond/MAGD150-Projects/tree/gh-pages/s22magd150lab06_Cobb)

This project was made to experiment with the use of functions. The project theme is that of an 8-bit video game. The project itself displays character, background, and ground beneath the character. The project allows you to move the character using SPACE, the mouse, and the arrow keys. Some of the main components of the code are the functions created:
```
function drawBackground() {...}
function drawCharacter() {...}
function jump() {...}
...
```

### Lab Assignment 7

[Lab Assignment 7 Project Folder](https://github.com/UnstableDiamond/MAGD150-Projects/tree/gh-pages/s22magd150lab07_Cobb)

This project was made to experiment with creating classes/objects. Also contained in this project are multiple arrays. This project has a springtime theme, so I chose to create flower objects. 

The flower class had a constructor of:
```
constructor(petalSize, pistilSize, stemLength, color, xLocation) {...}
```
Allowing me to create new flower objects such as:
```
flower1 = new Flower(15, 50, 150, color(219, 57, 57), 100);
flower2 = new Flower(20, 40, 250, color(3, 44, 252), 225);
flower3 = new Flower(15, 45, 175, color(106, 181, 60), 350);
```

### Lab Assignment 8

[Lab Assignment 8 Project Folder](https://github.com/UnstableDiamond/MAGD150-Projects/tree/gh-pages/s22magd150lab08_Cobb)

This project was made to utilize the loading of text fonts as well as images. The project was themed after a movie poster, yet still designed to be interactive as well. Also within this project is the ability to save the screen as a .pdf file. 
I used the preload() function for loading the font, some strings, and images:
```
function preload() {
  font = loadFont('assets/RubikGlitch-Regular.ttf');
  line1 = loadStrings('assets/line1.txt');
  line2 = loadStrings('assets/line2.txt');
  line3 = loadStrings('assets/line3.txt');
  line4 = loadStrings('assets/line4.txt');
  devil = loadImage('assets/devil.jpg');
  door = loadImage('assets/door.jpg');
}
```

### Lab Assignment 9

[Lab Assignment 9 Project Folder](https://github.com/UnstableDiamond/MAGD150-Projects/tree/gh-pages/s22magd150lab09_Cobb)

### Lab Assignment 10

[Lab Assignment 10 Project Folder](https://github.com/UnstableDiamond/MAGD150-Projects/tree/gh-pages/s22magd150lab10_Cobb)

