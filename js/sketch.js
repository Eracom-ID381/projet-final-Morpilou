let platform = {
  x: window.innerWidth,
  y: window.innerHeight,
  height: 300
}
var GRAVITY = 2;
var JUMP = 30;
var nbrJump = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);

  //create a sprite with a placeholder rectangle as visual component
  characterSprite = createSprite(100, windowHeight / 2 - 50, 50, 50);
  //change the color of the placeholder
  characterSprite.shapeColor = color(100, 100, 40);
  //create a sprite with a placeholder rectangle as visual component
  boxSprite = createSprite(windowWidth / 2, windowHeight - (platform.height) / 2, windowWidth, platform.height);
  //change the color of the placeholder
  boxSprite.shapeColor = color(255, 0, 255);
}

function draw() {
  background(248, 29, 15);
  // characterSprite.addSpeed(GRAVITY, 90);
  characterSprite.velocity.y += GRAVITY;

  if (characterSprite.collide(boxSprite)) {
    characterSprite.velocity.y = 0;
    nbrJump = 0;
  }

  //keyDown returns true for a cycle if the key was just pressed
  //during this cycle. Useful to capture instant events in the draw cycle
  //without moving game logic to the mousePressed() function
  //mouseWentDown works the same way with mouse input
  if (keyWentDown('space')) {
    nbrJump += 1;
    if (nbrJump < 3) {
      characterSprite.velocity.y = -JUMP;
    }
  }
  console.log(characterSprite.collide(boxSprite));
  drawSprites();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}