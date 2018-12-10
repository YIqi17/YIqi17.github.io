// -----SPATIAL-----

// PFont f;
var gap = 46;
  var counter = 10;

function setup() {
  //size(640, 360);
  createCanvas(windowWidth, windowHeight);
  
  background(255);

  // Create the font
  //printArray(PFont.list());
  // f = createFont("Verdana", 24);
  // textFont(f);
  textAlign(CENTER, CENTER);
} 

function draw() {
  frameRate (10);
  
  fill(255,100);
  rect(-10,-10,width+100,height+100);
  
  // Set the left and top margin
  //int margin = 10;
  //translate(margin*4, margin*4);

 
  
       //stroke(255,255,0);
       
      var letter = char(counter);
      textSize(random(50,200));
      
      var x = width/2;
      var y = height/2;
      
      var x1 = random(100,width-100);
      var y1 = random(100,height-100);
      
      stroke(random(200,255),0,random(225,250));
      
      //strokeWeight(1);
      var rell = random(50,200);
      ellipse (random(width),random(height),rell, rell);
      
      
      strokeWeight(random(1,20));
      
      
      
      bezier(x,y,random(width),random(height),random(width),random(height),x1, y1 );
      
      
       fill(random(155,255),0,random(25,150));
      //text(letter, x,y);
      text(letter, x1,y1);

      // Increment the counter
      counter++;
    }
