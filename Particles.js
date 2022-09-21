/* 
  creating class "Particle" to make bubbles that
  fade into the background as they go up the screen
*/
class Particle{
  
    //constructor takes two arguments
    // x position, y position
    constructor(x_pos,y_pos){ 
      
    let sz = random(8, 25);
    let s = random(1, 5);
    let s2 = random(-1, 2);
  
    let outline = random();
    let size = random(1, 5);
      
    let c = lerpColor(tocolor, fromcolor, random(0,1));
    
      this.x = x_pos;
      this.y = y_pos;
      this.color = color(random(pcolor));
      this.sz = sz;
      this.speed_y = s;
      this.speed_x = s2;
      this.chance = outline;
      this.stroke = size;
      this.lerp = c;
      
    }
    
    moveParticle(){
      this.y += this.speed_y;
      if(mouseX <= (2*windowWidth)/5 || mouseY <= (3*windowHeight)/5){
        this.x -= this.speed_x;  
      }
      
      if (this.y < 0 || this.y > height) {
      particles.splice(i, 1);
    }
      
    }
    
    drawParticle(){
      if (this.chance < 0.85) {
      fill(this.color);
      noStroke();
    } else {
      stroke(this.lerp);
      strokeWeight(this.stroke);
      noFill();
    }
  
    ellipse(this.x, this.y, this.sz, this.sz);
      
    }
    
  }