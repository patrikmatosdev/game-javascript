let sceneryPicture;

function preload() {
  sceneryPicture = loadImage("assets/img/cenario/floresta.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(sceneryPicture);
  circle(mouseX, mouseY, 200);
  console.log("draw");
}
