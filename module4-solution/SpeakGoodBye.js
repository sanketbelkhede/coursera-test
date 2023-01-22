(function(window) {
	var greeting = "Good Bye";
	var byeSpeaker = function(name) {
  		console.log(greeting + " " + name);
	}

	window.byeSpeaker = byeSpeaker;

})(window);
