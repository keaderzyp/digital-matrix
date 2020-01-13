const Main = require('./js/main');
let main = new Main({
	el:'.app',
})
main.start();
window.onresize = () => {
	main.resize();
}