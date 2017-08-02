var secretNumber = Math.floor((Math.random() * 10) + 1);

console.log(secretNumber);

var guess = Number(prompt("Guess a number"));
alert(guess);


if (guess === secretNumber) {
	alert("You got it right!");
} else if (guess < secretNumber) {
	alert("Incorrect, too low");
} else {
	alert("Incorrect, too high");
}