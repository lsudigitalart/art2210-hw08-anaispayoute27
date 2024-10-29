function setup() {
  createCanvas(400, 400);
  background(255);

  for (let i = 0; i < 3; i++) {
    let x = random(50, 350);
    let y = random(50, 350);
    let size = random(20, 50);
    drawSusuwatari(x, y, size);
  }
}

function drawSusuwatari(x, y, size) {
  fill(0);
  noStroke();
  
  ellipse(x, y, size * 1.5, size);
  
  fill(255);
  ellipse(x - size * 0.2, y - size * 0.1, size * 0.4, size * 0.4);
  ellipse(x + size * 0.2, y - size * 0.1, size * 0.4, size * 0.4);
  
  fill(0);
  ellipse(x - size * 0.2, y - size * 0.1, size * 0.2, size * 0.2);
  ellipse(x + size * 0.2, y - size * 0.1, size * 0.2, size * 0.2);
  
  drawStar(x, y + size, size * 0.5);
}

function drawStar(x, y, radius) {
  fill(random(255), random(255), random(255));
  noStroke();
  beginShape();
  for (let i = 0; i < 5; i++) {
    let angle = TWO_PI / 5 * i;
    let xOffset = cos(angle) * radius;
    let yOffset = sin(angle) * radius;
    vertex(x + xOffset, y + yOffset);
    angle += PI / 5;
    xOffset = cos(angle) * radius * 0.5;
    yOffset = sin(angle) * radius * 0.5;
    vertex(x + xOffset, y + yOffset);
  }
  endShape(CLOSE);
}

 //when refreshed do it at random, but dont overlap//
