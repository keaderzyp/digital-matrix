const Main = require('./js/Main.js');
let main = new Main({
	el:'.app',
	opacity:1,
	maxSpeed:2,
	maxDelay:1000,
	wordMaxLength:10
})
main.start();
window.onresize = () => {
	main.resize();
}