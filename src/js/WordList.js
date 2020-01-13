const Word = require('./Word.js');
class WordList {
	constructor(arg) {
	   if(arg){
		   this.canvas = arg.canvas;
		   this.length = arg.length||10;
		   this.color = arg.color||`rgb(67,136,234)`;
		   this.backgroundColor = arg.backgroundColor||`rgb(67,136,234)`;
		   this.x = arg.x||0;
		   this.y = arg.y||0;
		   this.size = arg.size||20;
		   this.children = this.initWord();
		   this.maxSpeed = Math.floor(Math.random()*(arg.maxSpeed||20));
		   this.speed = this.maxSpeed+5;
		   this.down = arg.down||false
		   return this;
	   } 
	}
	initWord(){
		let arr = [];
		for(let i = 0;i<this.length;i++){
			arr.push(new Word({x:this.x,y:this.y+(i*this.size),size:this.size,opacity:Math.floor(i/this.length*100)/100+0.01,color:this.color,backgroundColor:this.backgroundColor}))
		}
		return arr;
	}
	
	render(ctx){
		if(this.y<=this.canvas.height){
			if(this.down){
				this.y+=this.speed;
				this.speed+=0.1;
			}
			for(let i = 0;i<this.length;i++){
				this.children[i].down = this.down;
				this.children[i].y = this.y+(i*this.size)
				this.children[i].render(ctx)
			}
		}else{
			this.length = Math.floor(Math.random()*20+5)
			this.y =0 - this.length*this.size
			this.speed = Math.floor(Math.random()*(this.maxSpeed||20))+5;
			this.children = this.initWord();
		}
	}
}
module.exports = WordList;