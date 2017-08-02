console.log("All numbers between -10 - 19");
for (var i = -10; i <= 19; i++) {
	console.log(i);
}

console.log("All even numbers between 10 - 40");
for (var i = 10; i <= 40; i++) {
	if (i % 2 === 0) {
		console.log(i);
	} 
}
console.log("All odd numbers between 300 - 333");
for (var i = 300; i <= 333; i++) {
	if (i % 2 !== 0) {
		console.log(i);
	}
}
console.log("All numbers divisible by 3 and 5 between 5 - 50");
for (var i = 5; i <= 50; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(i);
	}
}
function doSomething () {
	console.log("DONE!");
}
doSomething();
doSomething();
doSomething();