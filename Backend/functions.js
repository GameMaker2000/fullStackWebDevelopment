function isEven (num) {
	return num % 2 === 0;
}

console.log(isEven(2));

function factorial (num) {
	//Result starts with one since the factorial of 0 is 1
	var result = 1
	//The loop starts "i" with 1 and it can't surpass the actual number variable
	//Each instance adds 1 more and the result is multiplied by i
	for (var i = 2; i <= num; i++) {
		result *= i;
	}
	//Returns the result
	return result;
}

console.log(factorial(3));

function kebabToSnake (str) {
	for (var i = 0; i <= str.length; i++) {
		if (str[i] === "-") {
			var newStr = str.replace(/-/g , "_");
		} 
	}
	return newStr;
}

console.log(kebabToSnake("kebab-case"));
