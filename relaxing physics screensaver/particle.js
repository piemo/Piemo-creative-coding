
function Particle(x, y) {
  this.pos = createVector(x, y);
  this.prev = createVector(x, y);
  this.vel = createVector(); //p5.Vector.random2D();
  //this.vel = p5.Vector.random2D();
  //this.vel.setMag(random(2, 5));
  this.acc = createVector();
  this.currentAlpha= 0;
  this.desiredAlpha =80;

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
    if(this.currentAlpha<this.desiredAlpha)
      this.currentAlpha=this.currentAlpha+1;
  } 

  this.show = function() {
    stroke(color(map(this.vel.mag(),0,4,0,255),0,map(this.vel.mag(),3,5,255,0),this.currentAlpha));
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);

    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;

  }

  this.attracted = function(target) {
    var force = p5.Vector.sub(target, this.pos);
    var d = force.mag();
    d = constrain(d, 15, 25);
    var G = 150;
    var strength = G / (d*d);
    force.setMag(strength);
    
    this.acc.add(force);
  }

}
