var cols, rows;
var scl = 50;
var rad = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  var w = width;
  var h = height;
  cols = w / scl;
  rows = h / scl;
  frameRate(60);
  background(100);
  dot = new Dot();
}

function draw() {
  background(255);
  var c = abs(sin(rad)*255);
  rad+=0.005;
  fill('hsl('+ parseInt(c) +', 90%,  90%)')
  //translate(width/2, height/2);
  for (j = 0; j < cols; j++){
    for(i = 0; i < rows; i++){
    dot.show(j*scl, i*scl);
    }
  }
}

function Dot(){
this.sym = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  
  this.show = function(x, y){
    this.x = x;
  	this.y = y;
    textSize(30);
  	text(random(this.sym), this.x, this.y);
  }
}
