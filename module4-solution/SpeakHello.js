(function(window) {
	var greeting = "Hello";
	var helloSpeaker = function (name) {
		console.log(greeting + " " + name);
	}
	
	window.helloSpeaker = helloSpeaker;

})(window);
