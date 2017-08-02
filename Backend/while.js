var num = -10;

console.log("Printing between -10 - 19");

while(num <= 19) {
	console.log(num);
	num++;
}

var num = 10

console.log("Printing evens between 10 - 40");

while(num <= 40) {
	if (num % 2 === 0) {
		console.log(num);
	}
	num++;
}

var num = 300

console.log("Printing odds between 300 - 333")

while(num <= 333) {
	if (num % 2 !== 0) {
		console.log(num);
		num+=2
	} else if (num % 2 === 0) {
		num++;
	}
}

console.log("Number is divisble by 5 and 3 between 5 - 50")

var num = 5 

while(num <= 50) {
	 if (num % 5 === 0 && num % 3 === 0) {
	 	console.log(num)
	 	num++;
	 } else {
	 	num++;
	 }
}