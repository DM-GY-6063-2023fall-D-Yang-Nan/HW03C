let pairs = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(240,128,128);
  strokeWeight(3);
  stroke(147,112,219);

  randomSeed(0);
  for(i=0; i < pairs; i++){
  let x1 = random(width);
  let x2 = random(width);
  let y1 = random(height);
  let y2 = random(height);
  line(x1,y1,x2,y2);
  }

}
