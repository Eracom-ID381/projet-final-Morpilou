let platform = {
  x: window.innerWidth,
  y: window.innerHeight,
  height: 300
}
var GRAVITY = 2;
var JUMP = 30;
var nbrJump = 0;
var left, right;

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
  characterSprite.velocity.y += GRAVITY;

  if (characterSprite.collide(boxSprite)) {
    characterSprite.velocity.y = 0;
    nbrJump = 0;
  }

  if (keyWentDown('space')) {
    nbrJump += 1;
    if (nbrJump < 3) {
      characterSprite.velocity.y = -JUMP;
    }
  }

  moveCharacter(left, -20);
  moveCharacter(right, 20);
  drawSprites();

}

function moveCharacter(_key, _x) {
  if (_key == true) {
    characterSprite.position.x += _x;
  }
}

function keyPressed() {
  truefalse(true);
}

function keyReleased() {
  truefalse(false);
}

function truefalse(value) {
  if (keyCode == '65') {
    left = value;
  }
  if (keyCode == '68') {
    right = value;
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}