let swipes;

class Swipeing {
  contructor() {
    this.x1 = 0;
    this.x2 = 0;
    this.y1 = 0;
    this.y2 = 0;
    this.ang = 0;
    this.dist = 0;
    this.status = 0;
  }

  distance() {
    let a = this.x1 - this.x2;
    let b = this.y1 - this.y2;
    this.dist = Math.sqrt(a * a + b * b);
  }

  angle(cx, cy, ex, ey) {
    let dy = ey - cy;
    let dx = ex - cx;
    let theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    //if (theta < 0) theta = 360 + theta; // range [0, 360)
    this.ang = theta;
  }

  pressed() {
    this.x1 = mouseX;
    this.y1 = mouseY;
    this.status = 0;
  }

  released() {
    this.x2 = mouseX;
    this.y2 = mouseY;
    this.status = 1;
    this.doStuff();
  }

  doStuff() {
    if (this.status > 0) {

      stroke(255); 
      strokeWeight(2); 
      line(this.x1, this.y1, this.x2, this.y2);
      this.angle(this.x1, this.y1, this.x2, this.y2);
      this.distance();
      
      noStroke(); 
      fill (255); 
      if (this.dist >= 50) {
        if (this.ang > -20 && this.ang < 20) {
          text("right", 10, 100);
        } else if (this.ang > 70 && this.ang < 110) {
          text("down", 10, 100);
        } else if (this.ang > 160 || this.ang < -160) {
          text("left", 10, 100);
        } else if (this.ang < -70 && this.ang > -110) {
          text("up", 10, 100);
        } else {
          text("other", 10, 100);
        }
      }

      fill(255);
      text(this.ang, 10, 50);
    }
  }
}
