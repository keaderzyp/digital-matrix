const WordSource = require('./WordSource.js');
class Word {
	constructor(arg) {
		if(arg){
			this.size = arg.size ||20;
			this.word = this.randomWord();
			this.x = arg.x||0;
			this.y = arg.y||0;
			this.opacity = arg.opacity||1;
			this.color = arg.color||`rgb(67,136,234)`;
			this.backgroundColor = arg.backgroundColor||`rgb(67,136,234)`;
			this.down = arg.down||false;
			this.toggleWordCount = Math.floor(Math.random()*100);
			this.sleep = 0;
		}
		return this;
	}
	randomWord(){
		return WordSource[Math.floor(Math.random()*WordSource.length)]
	}
	render(ctx) {
		if(this.down){
			this.sleep++;
			if(this.sleep >= this.toggleWordCount){
				this.sleep = 0;
				this.word = this.randomWord();
			}
			ctx.beginPath();
			ctx.globalAlpha = this.opacity/5;
			ctx.fillStyle = this.backgroundColor;
			ctx.fillRect(this.x,this.y,this.size/1.2,this.size);
			ctx.beginPath();
			ctx.globalAlpha = this.opacity;
			ctx.fillStyle = this.color;
			ctx.font = `${this.size}px 黑体 `;
			ctx.fillText(this.word,this.x,this.y+this.size);
		}
	}
}
module.exports = Word;
