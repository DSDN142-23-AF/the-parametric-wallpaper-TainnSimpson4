//WROTE THIS CODE ON MY OWN, DIDNT REALIZE CODE WOULD BE PROVIDED UNTIL AFTER I FINISHED, DONT HAVE TIME TO CHANGE EVERYTHING

// Define parameters
let size, mouse, baseColor, turtleGreen, distance, motifRotation, randBandanaCol, backgroundColor;

function setup() {
  createCanvas(2000, 1000);
  size = 112;
  backgroundColor = color(1, 50, 32);
  baseColor = color(255, 255, 0);
  turtleGreen = color(138, 154, 91);
  randBandanaCol = false;
  distance = 30;
  mouse = false;

}

function wallpaper_background() {
  background(backgroundColor);
  drawWallpaper();
}

function drawWallpaper() {
  const numTilesX = width / size;
  const numTilesY = height / size;

  for (let i = 0; i < numTilesX; i++) {
    for (let j = 0; j < numTilesY; j++) {
      const x = i * size;
      const y = j * size;
      drawMotif(x + (distance * i), y + (distance * j), size, turtleGreen);
    }
  }
}

function my_symbol(x, y, s, col) {
  fill(col);
  noStroke();

  //FACE
  ellipse(x + s / 2, y + s / 2, s * 0.75, s * 0.75);
  ellipse(x + s / 2, y + s * 0.75, s, s * 0.65);

  //MASK
  if (randBandanaCol) {
    fill(random(255), random(255), random(255));
  } else {
    randNumb = Math.floor(random(0, 4));
    switch (randNumb) {
      case 0:
        fill(178, 34, 34);
        break;
      case 1:
        fill(27, 61, 129);
        break;
      case 2:
        fill(102, 51, 153);
        break;
      case 3:
        fill(255, 165, 0);
        break;
      default:
        fill(0, 0, 0);
        break;
    }
  }
  //fill(backgroundColor);
  beginShape();
  vertex(x + s * 0.1, y + s * 0.55);          // Top-left corner
  vertex(x + s * 0.9, y + s * 0.55);      // Top-right corner
  vertex(x + s * 0.841, y + s / 3);    // Bottom-right corner
  vertex(x + s * 0.159, y + s / 3);    // Bottom-left corner
  endShape(CLOSE);

  fill(255, 255, 255);

  //EYES
  semiCircleRadius = s / 10;
  arc(x + 0.3 * s, y + 0.43 * s, semiCircleRadius * 2, semiCircleRadius * 2, PI * 0.15, PI * 1.15); // Left semi-circle
  arc(x + 0.7 * s, y + 0.43 * s, semiCircleRadius * 2, semiCircleRadius * 2, -PI * 0.15, -PI * 1.15); // Right semi-circle
  pop();
}

// Example function to update parameters
function updateParameters() {
  if (mouse) {
    size = mouseX;
  }
}

// Handle user input or other events
function mouseMoved() {
  updateParameters();
}
