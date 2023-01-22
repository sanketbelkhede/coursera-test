(function(window) {
	var greeting = "Good Bye";
	var byeSpeaker ={};
	byeSpeaker.speak = function(name) {
  		console.log(greeting + " " + name);
	}

	window.byeSpeaker = byeSpeaker;

})(window);
