
function Attractor(x, y) {
  this.pos = createVector(x, y);
  this.prev = createVector(x, y);
  this.vel = p5.Vector.random2D();
  this.vel.setMag(random(1, 3));

  this.update = function(){
    this.pos.add(this.vel);

    if (this.pos.x > windowWidth || this.pos.x < 0)  {
      this.vel.x = -this.vel.x;
    }

    if (this.pos.y  > windowHeight || this.pos.y < 0) {
      this.vel.y = -this.vel.y ;
    }
  }

  this.show = function(){
    stroke(0, 255, 0);
    strokeWeight(3);
    point(this.pos.x, this.pos.y);
  }

}