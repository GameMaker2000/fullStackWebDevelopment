var array = [];

function printReverse (array) {
	for (var i = array.length - 1; i >= 0; i--) {
	console.log(array[i]);
	}
}

printReverse(["2","3","4"]);

//isUniform Starts

function isUniform (array) {
	var firstItem = array[0]


	//Loops through and marks false if the index of the position (i) is not equal to the first item
	for (var i = 1; i < array.length; i++) {
		if(array[i] !== firstItem) {
			return false;;
		} 
		return true;
	};
}

//During each iteration, the function adds the element(number in array) to inital total of 0

function sumArray (numbers) {

	var total = 0;

	numbers.forEach(function(element) {
		total += element;
	});

	return total;

}

sumArray([1,1,1]);

//Checks if the index of current place (i) is larger than the initial maximum(index 0), if so then max becomes that index

function maximum (array) {
	var max = array[0];

	// array.forEach(function(element) {
	// 	if(element > max) {
	// 		max = element;
	// 	} else {
	// 		max = array[0];
	// 	}
	// });
	for (var i = 0; i <= array.length; i++) {
		if (array[i] > max) {
			max = array[i];
		} 
	};

	return max;
}

maximum([1,43,5]);
