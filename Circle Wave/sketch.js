//my p5 implementation of the circle wave done in d3 by mike bostock https://bl.ocks.org/mbostock/2d466ec3417722e3568cd83fc35338e3
var angleIncrement = 0.01;
var r = 350;
var l =0;
var c =255;

function setup() {
 createCanvas(900,900);


}

function draw() {
	l = l+ 0.02;
	background(20);
	translate (width/2,height/2);
	strokeWeight(20);
	noFill()
	for(var k =0 ; k<3; k++){
		beginShape();
		stroke(c);
	  	for(var angle =0; angle< 2* Math.PI; angle= angle + angleIncrement){
	  		var radius  = r + cos(angle*8 + 2*k*Math.PI/3 ) * pow((1 + cos(angle+l)) / 2, 3) * 60;
	  		vertex(radius*cos(angle),radius*sin(angle));
	  	}
	  	endShape()
	  	c = c/2;
	}
	c=255;
}