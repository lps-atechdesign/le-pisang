let r,g,b
let colour

let rad = 30; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

function setup() {
  createCanvas(window.innerWidth-10, window.innerHeight-10);
  noStroke();
  frameRate(60);

  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
  

}

function draw() {
  //background(0);
  textAlign(CENTER)
  textSize(100)
  text ("T-Man", width/2, height/2)
  text ("Chit Chat 247", width/2, height/2+150)
  r=random (255)
  g=random (255)
  b=random (255)

  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
    fill(r,g,b)
    background(r,g,b,100)
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
    fill(r,g,b)
    background(r,g,b,100)
  }

  // Draw the shape
  ellipse(xpos, ypos, rad, rad);
}
