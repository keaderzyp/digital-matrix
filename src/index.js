const Main = require('./js/Main.js');
let main = new Main({
	el:'.app',
})
main.start();
window.onresize = () => {
	main.resize();
}