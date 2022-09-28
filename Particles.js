/* 
  creating class "Particle" to make bubbles that
  fade into the background as they go up the screen
*/
class Particle {
  
  //constructor takes two arguments
  // x position, y position
  constructor(x_pos,y_pos){ 
    
  let sz = random(4, 20); // create a varibale "sz" equal to "random(4, 20)"
                          // random range is 4 to 20
    
  let s = random(1, 5); // create a varibale "s" equal to "random(1, 5)"
                        // random range is 1 to 5
    
  let s2 = random(-1, 2); // create a varibale "s2" equal to "random(-1, 2)"
                          // random range is -1 to 2

  let outline = random(); // create a varibale "outline" equal to "random()"
                        
  let size = random(1, 5); //create a varibale "s" equal to "random(1, 5)"
                          // random range is 1 to 5
    
  //create a varibale "c" equal to "lerpColor"
  // random range is tocolor to fromcolor，amt is range of 0 to 1
  let c = lerpColor(tocolor, fromcolor, random(0,1)); 
    
    // the argument x_pos, is assigned
    // to the property x 
    this.x = x_pos;
    
    // the argument y_pos, is assigned
    // to the property y 
    this.y = y_pos;
    
    // random pcolor value are assigned to
    // the color properties 
    this.color = color(random(pcolor));
    
    // sz value are assigned to
    // the sz properties 
    this.sz = sz;
    
    // s and s2 value are assigned to
    // the speed_y and speed_x properties 
    this.speed_y = s;
    this.speed_x = s2;
    
    // outline value are assigned to
    // the chance properties
    this.chance = outline;
    
    // size value are assigned to
    // the stroke properties
    this.stroke = size;
    
    // c value are assigned to
    // the lerp properties
    this.lerp = c;
    
  }
  
  // the Particles movement lives in
  // this moveParticle method
  moveParticle(){ 
    
    //value y equel to value y plus value speed_y
    this.y += this.speed_y;
    
    //if mouse x postion greater and equal than 1/2 windowWidth or mouse y position greater than 3 times window height divided by 5
  //then x value equal to x value minus speed_x value
    if(mouseX <= (2*windowWidth)/5 || mouseY <= (3*windowHeight)/5){
      this.x -= this.speed_x;  
    }
    
    // remove particles 
    // If the value of y is less than 0 or 
    // if the value of y is greater than the height of the screen
    // then make the particle disappear 
    if (this.y < 0 || this.y > height) {
    particles.splice(i, 1);
   }    
  }
  
  // the Particles style lives in
  // this drawParticle method
  drawParticle(){
    
    // if value chance less than 0.85 
    if (this.chance < 0.85) {
     
    //then fill color properties
    fill(this.color);
      
    //no stroke
    noStroke();
  } else { //otherwise
    
    // fill stroke in lerp properties
    stroke(this.lerp);
    
    //strokesize control by stroke properties
    strokeWeight(this.stroke);
    
    // no color fill
    noFill();
  }

    //particles are ellipes
  ellipse(this.x, this.y, this.sz, this.sz);
     
  }

  
}