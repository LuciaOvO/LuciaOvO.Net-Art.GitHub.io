document.body.style.margin   = 0
document.body.style.overflow = `hidden`

let particles = [];// declare variable "particales"
                   // assigning to it an empty array

// declare variable "pcolor",assigning to 8 colors array
let pcolor = [ 
  "#F65A83",
  "#FF87B2",
  "#FFE898",
  "#FFF8BC",
  "#FFEBAD",
  "#FFB200",
  "#FFF4CF",
  "#F2D1D1",
];

let tocolor;//create variable "tocolor"
let fromcolor;// create variable "fromcolor"

let season; // create variable"season"
            
let particleNum = 0;//create variable "particleNum"

//imaginary circle to move around and get sin of angle
let angle = 0;

// Tree Canvas
// create a new variable "extraCanvas"
// using this canvas for static object 
let extraCanvas;

function setup() { // runs once, at the start
  windowResized ();

  createCanvas(window.innerWidth, window.innerHeight);// creating a canvas
                                          // window pixels wide &
                                          // window pixels tall
  angleMode(DEGREES); 
  
  tocolor = color("#FEE3EC"); // set up "tocolor" equal to color"#FEE3EC"
  fromcolor = color("#F2789F"); // set up "tocolor" equal to color"#F2789F"
  
  extraCanvas = createGraphics(window.innerWidth, window.innerHeight);
 
  // setting the angle mode in the graphics object
  extraCanvas.angleMode(DEGREES);
  
  // translating in the graphics object 
  // Created tree in the middle of the screen near the bottom
  extraCanvas.translate(window.innerWidth/2,window.innerHeight/2+400);
  
  // Call function branch to create the tree and extracanvas
  branch(130,extraCanvas);
}

function draw() { // loops, after setup has run
  
//----Background color setting-------
    let tocolorbg = color("#ffb830"); // create variable "tocolorbg"
                                     // let "tocolorbg" equal to color"#ffb830"
  
  let fromcolorbg = color("#f9561a");// create variable "fromcolorbg"
                                     // let "fromcolorbg" equal to color"#f9561a

  let fromcolorwinter = color("#3F51B526");// create variable "fromcolorwinter"
                                // let "fromcolorwinter" equal to color"#3F51B526"
  
  let tocolorwinter = color("#3D2C8D30");// create variable "tocolorwinter"
                                  // let "tocolorwinter" equal to color"#8BC34A2B"


  // abs() returns an absolute number (no negative values)
  season = ((sin(angle*2))+1)*0.5;
  
  // console.log(season);

  angle += random(); //Random starting Angle

  // create variable "summerbg"
  // interpolate from "fromcolorbg" this color 
  //  interpolate to "tocolorbg" this color
  // Alternative Minimum Tax is control by "season" equal to 0.1
  let summerbg = lerpColor(fromcolorbg, tocolorbg, season); 
  
  // create variable "winterbg"
  // interpolate from "fromcolorwinter" this color 
  //  interpolate to "tocolorwinter" this color
  // Alternative Minimum Tax is control by "season" equal to 0.1
  let winterbg = lerpColor(fromcolorwinter, tocolorwinter, season);

  // if If mouse x-axis greater than 288 
  // and the mouse y-axis greater than 162
  if (mouseX > windowWidth / 2 && mouseY > (3 * windowHeight) / 5) { 
    background(winterbg); // then show background "winterbg" this color
  } else {
    background(summerbg); //otherwise show background "summerbg" this color
  }
  
//----End Background color setting-------
  
  
//-----load Tree canvas -----
    
  image (extraCanvas, 0, 0);

//-----end setting------


  
//----Particles Part------
  
  particleNum++;// The particleNum is equal to the particleNum plus 1
  // console.log( particleNum);
      
  // IF the number of ParticleNum self-increased multiple 2 equals 0
  // in the array assigned to the variable "particles"
  if (++particleNum % 2.5 == 0) {
    
    // add to the "particles" array
    // a new Particle object (see class in Particles.js)
    // with a X position of random width, a Y position of 0
    particles.push(new Particle(random(width), 0));
  }
  
  // for each object in the "particles" array
  // call the 'moveParticle()' method
  // and 'drawParticle()'method
  for (i = particles.length - 1; i >= 0; i--) {
    particles[i].drawParticle();
    particles[i].moveParticle();
  } 
//------end Particles Part-------

}

//set up a new function 'mouseMoved'
function mouseMoved() {
  //if mouse x postion greater than 1/2 windowWidth and mouse y position greater than 3 times window height divided by 5
  //in the array assigned to the variable "particles"
  if (mouseX > windowWidth / 2 && mouseY > (3 * windowHeight) / 5) {
    
    // aad to the 'particles' array
    // run a new Particle object 
    //with a X position of mouse x position minus random position
    // The range is 30-50
    //with a Y position of mouse Y position minus random position
    // The range is 250-300
    particles.push(new Particle(mouseX - random(30, 50), mouseY - random(250, 300)));
  } else { 
    //otherwise 
    // run this new Particle object
    // with a X position of mouse x position 
    //with a Y position of mouse Y position minus 100
    particles.push(new Particle(mouseX, mouseY - 100));
  }
}

//----Tree function-------
// the graphics object is passed in as the second argument
// it will assign to the parameter 'cnv'
function branch(len, cnv){ 
  
  // push context on the graphics object
  cnv.push();
  
  //if len greater than 10
  if(len>10){
    
    // set stroke weight on the graphics object
    // map len property from 10-100 Corresponding values 1-15
    cnv.strokeWeight(map(len,10,100,1,15));
    
    // set stroke colour on the graphics object
    cnv.stroke(70,40,20);
    
    // draw a line to the graphics object
    // x1,x2,y1 equal to 0 
    //the y-coordinate of the second point value equal to -len
    cnv.line(0,0,0,-len);
    
    // translate in the graphics object
    cnv.translate(0,-len);
    
    // rotate in the graphics object
    // rotate value control by Random values in the range of 20 to 30
    cnv.rotate(random(-20,-30));
    
    // pass the graphics object to the next recursive call
    branch(len*random(0.7,0.9), cnv);
    
    // rotate in the graphics object
    cnv.rotate(random(50,60));
    
    // pass the graphics object to the next recursive call
    branch(len*random(0.7,0.9), cnv)  
  }else{
    var r = 100 + random(-20,20);
    var g = 150 + random(-20,20);
    var b = 200 + random(-20,20);
    
    // set fill colour on graphics object
    cnv.fill(r,g,b,200);
    
    // set no stroke mode on graphics object
    cnv.noStroke();
    
    // draw a circle to the graphics object
    cnv.ellipse(0,0,random(15));
  }
  
  // pop context in graphics object
  cnv.pop();
}

// -----key pressed function set------
function keyPressed() { //create a new function "KeyPressed"
  
   // if press key "q"
   // then take a screengrab from this canvas 
   // and save as an image called "Lucia.jpg"
   if (key === "q") {   
    saveCanvas("Lucia", "jpg");
    // console.log("screenshotSave");
  }
}

//background resize fuction set up
function windowResized () {
  resizeCanvas (window.innerWidth, window.innerHeight)
}