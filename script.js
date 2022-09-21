document.body.style.margin   = 0
document.body.style.overflow = `hidden`

let particles = [];// declare variable "particales"
                   // assigning to it an empty array

// let pcolor = [
//   "#0b1b3466",
//   "#33669980",
//   "#3d79c6",
//   "#1e3655",
//   "#286698",
//   "#2a67a5cc",
//   "#3178a6",
//   "#00003373",
// ];

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

// let pcolor = [ 
//   "#495C83",
//   "#7A86B6",
//   "#A8A4CE",
//   "#C8B6E2",
//   "#B1B2FF",
//   "#AAC4FF",
//   "#D2DAFF",
//   "#EEF1FF",
// ];

let tocolor;//create variable "tocolor"
let fromcolor;// create variable "fromcolor"

let amt;

let particleNum = 0;//create variable "particleNum"

//imaginary circle to move around and get sin of angle
let angle = 0;


function setup() { // runs once, at the start
  createCanvas(windowWidth, windowHeight);// creating a canvas
                                          // window pixels wide &
                                          // window pixels tall
  angleMode(DEGREES); 
  // tocolor = color("#cdd6e3");
  // fromcolor = color("#474a4e");
  
  tocolor = color("#FEE3EC"); // set up "tocolor" equal to color"#FEE3EC"
  fromcolor = color("#F2789F"); // set up "tocolor" equal to color"#F2789F"

  // noLoop();
  
  
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
  
//-----Tree setting-----
  translate(width/2,height/2+200);
  branch(100);
//-----end Tree setting------

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
function branch(len){ 
  push();
  if(len>10){
    strokeWeight(map(len,10,100,1,15));
    stroke(70,40,20)
    line(0,0,0,-len)
    translate(0,-len);
    rotate(random(-20,-30));
    branch(len*random(0.7,0.9));
    rotate(random(50,60));
    branch(len*random(0.7,0.9))  
  }else{
    var r = 100 + random(-20,20);
    var g = 150 + random(-20,20);
    var b = 200 + random(-20,20);
    fill(r,g,b);
    noStroke();
    ellipse(0,0,10)
  }
  pop();

}


