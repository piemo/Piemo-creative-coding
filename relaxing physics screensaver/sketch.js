var attractors = [];
var particles = [];
var k=0;
var cir;
var tempSpeed;
function setup() {
createCanvas(windowWidth, windowHeight);

  // for (var i = 0; i < 10; i++) {
  //   attractors.push(createVector(random(width), random(height)));
  // }
  background(0);
  cir = createVector(50,50);
  tempSpeed = p5.Vector.random2D();
  tempSpeed.setMag(random(2,5));
  attractors.push(new Attractor(random(width),random(height)));
  attractors.push(new Attractor(random(width),random(height)));

}

//function mousePressed() {
//  attractors.push(new Attractor(mouseX,mouseY));
//}

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
  k=k+1;
  if(k>10){
    k=-0;
    background(0,0,0,20);
  }

  particles.push(new Particle(random(width), random(height)));

  if (particles.length > 400) {
    particles.splice(0, 1);
  }

  for (var i = 0; i < attractors.length; i++) {
    attractors[i].update();
    //attractors[i].show();
  }
  for (var i = 0; i < particles.length; i++) {
    var particle = particles[i];
    for (var j = 0; j < attractors.length; j++) {
      particle.attracted(attractors[j].pos);
    }
    particle.update();
    particle.show();
  }



}
