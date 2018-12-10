//SOUND-COLOR

// var mic, fft;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
  
//   mic = new p5.AudioIn();
//   mic.start();
//   fft = new p5.FFT();
//   fft.setInput(mic);
//   colorMode(HSB, 360);
//   //strokeWeight(5);
// }

// function draw() {
//   background(0);
//   var spectrum = fft.analyze();
//   var circRad = 300;
//   var circThick = 25;
//   var maxSpectrum = 128; //spectrum.length
  
//   for(i = 0; i < maxSpectrum; i+=1) {
//     var circi = map(i, 0, maxSpectrum, 0, 360);
//     var dist = spectrum[i]; //map(spectrum[i/2], 0, 255, 0, 360);
//     stroke(spectrum[i], 360, 360);
//     line(width/2 - CircleX(circi, circRad+dist+circThick), height/2 + CircleY(circi, circRad+dist+circThick), width/2 - CircleX(circi, circRad-dist-circThick), height/2 + CircleY(circi, circRad-dist-circThick));
//   }  
// }


var balls=[]
var s
var mic
function setup() {
	createCanvas(windowWidth, windowHeight,WEBGL);
	mic = new p5.AudioIn()
	mic.start()
}

function draw() {
	background(10)
	var vol = mic.getLevel()
	s = map(vol,0,0.5,1,10)
	
	for(b of balls){
		b.update()	
	}
}

function mouseDragged(){
	balls.push(new Ball(mouseX,mouseY))
}

class Ball{
	constructor(x,y){
		this.x=x-width/2
		this.y=y-height/2
		this.z=random(-30,30)
		this.dx=random(-5,5)
		this.dy=random(-5,5)
		this.dz=random(-10,4)
		this.c=color(random(255),random(255),random(255))
		this.size=random(20,50)
	}
	
	update(){
		this.x+=this.dx
		this.y+=this.dy
		this.z+=this.dz
		push()
		translate(this.x,this.y, this.z)
  	rotateX(frameCount * 0.01);
  	rotateY(frameCount * 0.01);
		fill(this.c)
  	box(this.size*s, this.size*s, this.size*s);
		pop()
	}
}


