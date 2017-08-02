//All variable declarations
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1Display = document.querySelector('h1');
var newGameButton = document.querySelector('#newGameButton');

//Creates function for New Colors button
newGameButton.addEventListener("click", function(){
	//Makes h1Display back to body background
	h1Display.style.backgroundColor = "#232323";
	//Makes button back to say New Colors
	newGameButton.textContent = "New Colors";
	//Generates new colors
	colors = generateRandomColors(6);
	//Pickes new colors from array to be correct one
	pickedColor = pickColor();
	//Changes colors of squares
	for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	//Changes colorDisplay to new correct color
	colorDisplay.textContent = pickedColor;
}
})

//Changes colorDisplay to the picked color
colorDisplay.textContent = pickedColor;

//Makes the squares different colors
for (var i = 0; i < squares.length; i++) {
	//Adds initial colors
	squares[i].style.backgroundColor = colors[i]

	//Adds click listener
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor
		/*If the color picked is right then the message shows "Correct"
		and the colors all change to the correct color, otherwise,
		it says "Try Again!"*/
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);	
			h1Display.style.background = clickedColor;
			newGameButton.textContent = "Play Again?";

		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
};

//Changes all of the squares' color into the color provided
function changeColors(color) {
	//Made sure to changes the squares array, not color
	//Changes all squares to the corresponding color in array
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	};
}

//Function to pick the correct color from array randomly
function pickColor() {
	/*Generates random number based on the array length
	wanted*/
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]
}

//Function to generate the colors based on array length
function generateRandomColors(num) {
	//Create an array
	var arr = []
	//Repeats num times
	for(var i = 0; i < num; i++) {
		//Gets random color and puts into array
		arr.push(randomColor());
	}
	return arr;
}

//Function to create random colors
function randomColor() {
	//Pick a "red" 0 - 255
	var r = Math.floor(Math.random() * 256);
	//Pick a "green" 0 - 255
	var g = Math.floor(Math.random() * 256);
	//Pick a "blue" 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}