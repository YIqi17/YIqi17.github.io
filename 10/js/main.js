
// var font,
// fontsize = 100

var txt = ['S', 'Y','N','E','S','T','H','E','S','I','A']
// function setup() {
// createCanvas(window.innerWidth,window.innerHeight );
// textSize(fontsize);
// textAlign(CENTER, CENTER);
// }

// function draw() {
// background(255);
// textAlign(CENTER);
// for(var i= 0; i < txt.length; i++){
//   drawWords(txt[i],  i * 80 + 100 );
// }

// }

// function drawWords(letter, x) {
//   fill(0);
//   text(letter, x, 200);
// }

$(document).ready(function(){
  for(var i= 0; i < txt.length; i++){
    $('#text-container').append("<div class='letter'>" + txt[i] + "</div>")
  // drawWords(txt[i],  i * 80 + 100 ); 
}
})


window.onload = function(){
  const doSomething = function() {
  console.log('did something');
};

inView('h1')
    .on('enter', el => {
    
    el.style.color ='white';
    })
    .on('exit',el =>{
      el.style.color ='black';
    })
  inView('#section-1 p')
    .on('enter', el => {
    
    })
    .on('exit',el =>{
     
    })
};


var sketch = function(p) {
  var N = 8;
  p.setup = function(){
    p.createCanvas(1400,1400);
    p.background(0);
  }
  p.draw = function() {
      p.colorMode(p.RGB, 255, 255, 255, 255);
      p.background(0, 0, 0, 8);
  
      p.translate(p.width / 2.0, p.height / 2.0);
  
      p.colorMode(p.HSB, 180, 255, 255, 255);
      p.noStroke();
  
      var r = 500 + 50 * p.sin(p.frameCount * p.PI / 180.0 * 5.0);
      for (var k = 0; k < N; k++) {
          p.fill(180.0 / N * k, 128, 255, 255);
          var x = r * p.cos(p.frameCount * p.PI / 180.0 * 2.0 + p.TWO_PI / N * k);
          var y = r * p.sin(p.frameCount * p.PI / 180.0 * 2.0 + p.TWO_PI / N * k);
          p.ellipse(x, y, 32, 32);
      }
  };
}
new p5(sketch, 'section-2');



//p5 Stuff that are related to the syndrome
var cols, rows;
var scl = 50;

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
  fill('black')
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




//------PERSONIFY-----
// var nb_r;
// var all_diam;
// var average_diam;

// var r = [];

// var img = [];
// var pg1;
// var pg2;

// var current_img;

// function preload() { // We have to load image before setup()
//   for (var i = 1; i <= 5; i++) {
//       img[i] = loadImage("merle_"+[i]+".jpg");
//   }
// }

// function setup() {
//   createCanvas(500, 500);
//   pixelDensity(1); // Set 1 because it's too slow on firefox
//   colorMode(HSB, 360, 100, 100, 100);
//   noStroke();

//   nb_r = random(12, 18);
//   for (var i = 0; i <= nb_r; i++) {
//     r.push(new root());
//   }  

//   current_img = 1;
//   pg1 = createGraphics(width, height);
//   pg2 = createGraphics(width, height);
//   pg1.background('#FFFFFF');
// }

// function draw() {
// 	//image(img, 0, 0, width, height);

// 	for (var i = 0; i < r.length; i++) {
//     r[i].update();
//    }
   
//    //pg1.noStroke();
//    pg1.noFill();
//    for(var j = 0; j < r.length; j++) {
//    	//pg1.fill(r[j].c);
//     pg1.stroke(r[j].c);
//     pg1.strokeWeight(width/750);
//    	//pg1.ellipse(r[j].loc.x, r[j].loc.y, 10, 10);

//    	pg1.beginShape();
//    	for (var k = 1; k <= 3; k++) {
//    		pg1.vertex(r[j].loc.x + sin(r[j].angle+(radians(120)*k)) * r[j].diam, r[j].loc.y + cos(r[j].angle+(radians(120)*k)) * r[j].diam);
//    	}
//    	pg1.endShape(CLOSE);
//    	r[j].angle+=0.1;
//    }
  
//    //image(pg1, 0, 0, width, height);


//   pg2.clear(); // On efface les pixels précédents
//   //pg2.blendMode(ADD);
//   //pg2.blendMode(LIGHTEST);
//   pg2.blendMode(SCREEN);
//   pg2.image(img[current_img], 0, 0, width, height);
//   pg2.image(pg1, 0, 0, width, height);

//   image(pg2, 0, 0, width, height);


//   for (var j = 0; j < r.length; j++) {
//     all_diam += r[j].diam;
//   }
//   average_diam = all_diam/r.length-1;
//   all_diam = 0;

//   if (average_diam <= .5) {
//     pg1.background('#FFFFFF');


//     for (var i = 0; i <= nb_r; i++) {
//       r.pop();
//     }

//     nb_r = random(12, 18);
//     for (var j = 0; j <= nb_r; j++) {
//       r.push(new root());
//     }
//     for (var k = 0; k < r.length; k++) {
//       r[k].init();
//    } 

//     current_img += 1; 
//     if (current_img > 5) {
//       current_img = 1;
//     }
//   }
// }

// function root() {

//   this.loc = createVector(width/2, height/2);
//   this.speed = createVector();
//   this.speed = p5.Vector.random2D();
//   this.bam = createVector();
//   this.diam = width/20;
//   this.angle = random(TAU); // TAU = TWO_PI (btw)
//   this.c = color(random(360), 100, 50, 30);

//   this.init = function() {
//     this.loc.set(width/2, height/2);
//     this.diam = width/20;
//     this.angle = random(TAU);
//     this.c = color(random(360), 100, 50, 30);
//   }

//   this.update = function() {
//   	this.diam -= random(0.01, 0.05);
//     this.diam = constrain(this.diam, 0.5, width/20); 

//     if (this.diam >= .5) {
//       this.bam = p5.Vector.random2D(); // movement will be a bit erractic
//       this.bam.mult(0.85);
//       this.speed.add(this.bam);
//       this.speed.normalize();
//       this.speed.mult(1.5);
//       this.loc = this.loc.add(this.speed);
//     }
//   } // End of update()
// } // End of class




