var r, g, b, w, ralpha, balpha, galpha, fs;
 


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {

  createCanvas(displayWidth, displayHeight); 
ralpha = random(0,255);
galpha = random(0, 255);
balpha = random(255);
  
 
//r = color(255, 0, 0, ralpha);
//g = color(0, 255, 0, galpha);
//b = color(0, 0, 255, balpha);
//w = color(255)
//blendMode(MULTIPLY);
//setGradientR(w, red);
//setGradientG(w, green);
}

function draw() {
//var ralpha = random(0,255);
//var galpha = random(0,255);
//var balpha += 1;
//var r = color(255, 0, 0 ralpha);
//var g = color(0, 255, 0, galpha);
  frameRate(90);
var b = color(0, 0, 255, balpha);
var w = color(255);
blendMode(SCREEN);
fill(255);
rect(-1, -1, displayWidth+1, displayHeight+1);
blendMode(MULTIPLY);
setGradientR(w, r);
setGradientG(w, g);
fill(b);
rect(-1, -1, displayWidth+1, displayHeight+1);
ralpha = ralpha + random(-2, 2);
balpha = balpha + random(-2, 2);
galpha = galpha + random(-2, 2);
//ralpha = ralpha + 5;
if (ralpha >= 255) {
ralpha = ralpha - 100;
}

if (ralpha <= 5) {
ralpha = ralpha + 100;
}
if (galpha >= 255) {
galpha = galpha - 100;
}

if (galpha <= 5) {
galpha = galpha + 100;
}

if (balpha >= 250) {
balpha = balpha -100;
}
if (balpha <= 5) {
balpha = balpha + 100;
}
  
  


}

function setGradientR(w, r){

noFill();
for (var y = 0; y < displayHeight; y++) {
//var ralpha = random(0, 255);
r = color(255, 0, 0, ralpha)
var intery = map(y, 0, displayHeight, 0, 1);
var r1 = lerpColor(w, r, intery);
stroke(r1);

line(0, y, displayWidth, y);
//ralpha += 50;
//ralpha = 1000;
}
}

function setGradientG(w, g){
//var galpha = random (0, 255);
g = color(0, 255, 0, galpha);
for (var x = 0; x < displayWidth; x++) {
var interx = map(x, 0, displayWidth, 1, 0);
var g1 = lerpColor(g, w, interx);
stroke(g1);
line(x, 0, x, displayHeight);
}

  
}
function mousePressed() {
  if (mouseIsPressed) {
  var fs = 
 fullscreen(!fs);

   console.log('pressed');
 }
}

function touchStarted() {
 fs = fullscreen(false);
//  if (!fs) {
      //fullscreen(true);
//}
    console.log('touched');

}


