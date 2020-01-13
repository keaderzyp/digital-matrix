const Word = require('./Word.js');
class WordList {
	constructor(arg) {
	   if(arg){
		   this.canvas = arg.canvas;
		   this.maxLength = arg.maxLength;
		   this.length = arg.length;
		   this.color = arg.color||`rgb(67,136,234)`;
		   this.backgroundColor = arg.backgroundColor||`rgb(67,136,234)`;
		   this.x = arg.x||0;
		   this.y = arg.y||0;
		   this.size = arg.size||20;
		   this.maxSpeed = arg.maxSpeed||10;
		   this.speed = Math.floor(Math.random()*this.maxSpeed);
		   this.opacity = arg.opacity;
		   this.down = arg.down||false;
		   this.maxDelay = arg.maxDelay||100;
		   this.delay = Math.floor(Math.random()*this.maxDelay);
		   this.children = this.initWord();
		   return this;
	   } 
	}
	initWord(){
		let arr = [];
		for(let i = 0;i<this.length;i++){
			arr.push(new Word({x:this.x,y:this.y+(i*this.size),size:this.size,opacity:Math.floor(i/this.length*100*this.opacity)/100+0.01,color:this.color,backgroundColor:this.backgroundColor}))
		}
		return arr;
	}
	
	render(ctx){
		if(this.y<=this.canvas.height){
			if(this.delay<=0){
				for(let i = 0;i<this.length;i++){
					this.children[i].down = this.down;
					this.children[i].y = this.y+(i*this.size)
					this.children[i].render(ctx)
				}
				if(this.down){
					this.y+=this.speed;
					this.speed+=0.1;
				}
				
			}else{
				this.delay--;
			}
		}else{
			this.length = Math.floor(Math.random()*this.maxLength)+4
			this.y =0 - this.length*this.size
			this.speed = Math.floor(Math.random()*(this.maxSpeed||10));
			this.delay = Math.floor(Math.random()*this.maxDelay);
			this.children = this.initWord();
		}
	}
}
module.exports = WordList;