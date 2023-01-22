(function(window) {
	var greeting = "Hello";
	var helloSpeaker = {
		speak: function (name) {
		console.log(greeting + " " + name);
	}
	};
	window.helloSpeaker = helloSpeaker;

})(window);
