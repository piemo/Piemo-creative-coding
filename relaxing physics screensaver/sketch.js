var attractors = [];
var particles = [];
var backgroundInterval=10;
var repeller;
var atrNumber= 2;

function setup() {
createCanvas(windowWidth, windowHeight);

  background(0);
  for(var i =0; i<atrNumber; i++){
    attractors.push(new Attractor(random(width),random(height)));
  }

}

function mousePressed() {
  repeller = new Attractor(mouseX,mouseY);
  repeller.vel.mult(0);
  repeller.isRepeller = true;
}

function mouseReleased() {
  repeller = null;
}

//function keyPressed() {
//  var j=0;
//  var maxdis;
//  for(var i = 0; i<attractors.length;i++){
//    var dis=p5.Vector.dist(attractors[i].pos,createVector(mouseX, mouseY));
//    if (maxdis == null )
//      maxdis=dis;
//    if(dis<maxdis){
//      j=i;
//      maxdis=dis;
//    }
//  }
//  attractors.splice(j,1);
//}

function draw() {

  if(frameCount % backgroundInterval==0){
        background(0,0,0,20);
  }

  particles.push(new Particle(random(width), random(height)));

  if (particles.length > 400) {
    particles.splice(0, 1);
  }

  for (var i = 0; i < attractors.length; i++) {
    attractors[i].update();
  }
  for (var i = 0; i < particles.length; i++) {
    var particle = particles[i];
    for (var j = 0; j < attractors.length; j++) {
        if(mouseIsPressed){
          repeller.pos.set(mouseX,mouseY);
          particle.repelled(repeller.pos);
        }
        particle.attracted(attractors[j].pos);
    }
    particle.update();
    particle.show();
  }



}
