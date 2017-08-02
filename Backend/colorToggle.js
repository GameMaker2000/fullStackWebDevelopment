var button = document.querySelector("button");
var body = document.querySelector("body")
var isPurple = false;
button.addEventListener("click", function() {
	if(isPurple) {
		body.style.backgroundColor = "white";
	} else {
		body.style.backgroundColor = "purple";
	}
	isPurple = !isPurple;
})
