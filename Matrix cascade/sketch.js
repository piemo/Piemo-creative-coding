var symbolsize = 20;
var streams = [];

function setup() {
 createCanvas(window.innerWidth,window.innerHeight);
 for (var i=0; i < width; i += symbolsize + 5 ){
	s = new Stream(i);
 	s.initialize();
 	streams.push(s);
 } 
  textSize(symbolsize);
}

function draw() {
	background(0,150);

	for (var i = 0; i < streams.length; i++){
		streams[i].show();
	}
}

function Symbol(x,y){
	this.x =x;
	this.y=y;
	this.character;
	this.swapInterval = round(random(8,20))

	this.setRandomCharacter= function(){
		if (frameCount % this.swapInterval == 0){
			this.character = String.fromCharCode(0x30A0 + round(random(0,96)));
		}
	}

	this.fallDown = function(speed){
		this.y = (this.y > height) ? this.y =0 : this.y + speed;
	}
}

function  Stream(x){
	this.x = x;
	this.symbols = [];
	this.numSymbols = round(random(20,60));
	this.fallInterval= round(random(1,15));

	this.initialize = function(){
		var y = 0;
		for (var i = 0; i<this.numSymbols; i++){
			var s = new Symbol(this.x,y);
			s.setRandomCharacter();
			this.symbols.push(s);
			y -= symbolsize;
		}
	}
	this.show = function(){
		for (var i = 0; i<this.numSymbols; i++){
			var s = this.symbols[i];
			if(i==0){
				fill(150,225,100);
			}
			else{
				var lum = map(i,0,this.numSymbols,150,10);
				fill(0,255,100,lum);
			}
			text(s.character,s.x,s.y)
			s.setRandomCharacter();
			if (frameCount % this.fallInterval == 0){
				s.fallDown(symbolsize);
			}
		}
	}


}