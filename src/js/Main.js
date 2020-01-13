const WordList = require('./WordList.js');
//更新页面用requestAnimationFrame替代setTimeout
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
	window.msRequestAnimationFrame;
class Main {
	constructor(arg) {
		if (arg) {
			this.arg = arg
			try {
				this.container = document.querySelector(arg.el);
				this.initData(arg)
			} catch (e) {
				throw (e)
			}
		}
		return this;
	}
	initData(arg) {
		this.container.innerHTML = '';
		this.canvas = document.createElement('canvas');
		this.canvas.width = this.container.offsetWidth;
		this.canvas.height = this.container.offsetHeight;
		this.container.appendChild(this.canvas);
		this.ctx = this.canvas.getContext('2d');
		this.runing = false;
		this.wordList = [];
		this.fontSize = arg.fontSize || 20;
		this.maxSpeed = arg.maxSpeed || 20;
		this.wordMaxLength = arg.wordMaxLength || 10
		this.color = arg.color||`rgb(67,136,234)`;
		this.opacity = arg.opacity||1;
		this.maxDelay = arg.maxDelay||100;
		this.backgroundColor = arg.backgroundColor||`rgb(67,136,234)`;
		this.wordListLength = Math.round(this.canvas.width / this.fontSize);
		for (let i = 0; i < this.wordListLength; i++) {
			let length = Math.round(Math.random() * this.wordMaxLength + 5)
			let obj = {
				length: length,
				maxLength :this.wordMaxLength,
				size: this.fontSize,
				x: i * this.fontSize,
				y: 0 - (this.fontSize * length),
				canvas: this.canvas,
				color:this.color,
				backgroundColor:this.backgroundColor,
				maxSpeed:this.maxSpeed,
				opacity:this.opacity,
				maxDelay:this.maxDelay
			}
			this.wordList.push(new WordList(obj))
		}
	}
	resize() {
		this.initData(this.arg);
	}
	run() {
		if(this.running){
			let _this = this;
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
			for (let item of this.wordList) {
				if (item.down == false) {
					item.down = true;
				}
				item.render(this.ctx);
			}
			requestAnimationFrame(() => {
				_this.run();
			})
		}
	}
	start(){
		this.running = true;
		this.run();
	}
	stop(){
		this.running = false;
	}
}

module.exports = Main;
global.PMatrix = Main;