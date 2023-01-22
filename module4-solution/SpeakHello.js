(function(window) {
	var greeting = "Hello";
	var helloSpeaker ={};
	helloSpeaker.speak = function (name) {
		console.log(greeting + " " + name);
	}
	
	window.helloSpeaker = helloSpeaker;

})(window);
