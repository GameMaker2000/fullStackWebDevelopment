var playerOneButton = document.getElementById("playerOne");
var playerTwoButton = document.getElementById("playerTwo");
var p1Display = document.querySelector("#scoreP1");
var p2Display = document.querySelector("#scoreP2");
var resetButton = document.querySelector("#reset");
var scoreInput = document.querySelector("input[type='number']");
var scorePlayedTo = 5;
var paragraph = document.querySelector("p span");
var gameOver = false;

var playerOneScore = 0;
var playerTwoScore = 0;

paragraph.textContent = scorePlayedTo

playerOneButton.addEventListener("click", function(){
	if(!gameOver) {
		playerOneScore++;
		if(playerOneScore === scorePlayedTo) {
			gameOver = true
			p1Display.style.color = "green";
		}
		p1Display.textContent = playerOneScore;
	}
});

playerTwoButton.addEventListener("click", function(){
	if(!gameOver) {
		playerTwoScore++;
		if(playerTwoScore === scorePlayedTo) {
			gameOver = true
			p2Display.style.color = "green";
		}
		p2Display.textContent = playerTwoScore;
	}
});

resetButton.addEventListener("click", function() {
	reset();
})

function reset () {
	playerOneScore = 0;
	playerTwoScore = 0;
	p1Display.textContent = playerOneScore;
	p2Display.textContent = playerTwoScore;
	document.getElementById("scoreP1").style.color = "black";
	document.getElementById("scoreP2").style.color = "black";
	gameOver = false;
}

scoreInput.addEventListener("change", function() {
	scorePlayedTo = Number(scoreInput.value);
	paragraph.textContent = scoreInput.value;
	reset();
});