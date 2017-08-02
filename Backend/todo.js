var input = prompt("What would you like to do?");

var todos = ["test"];

while(input !== "quit") {
	if(input === "list") {
		listTodos();
	} else if(input === "new") {
		addTodos();
	} else if(input === "remove") {
		removeTodos();
	} 


	input = prompt("What would you like to do?");
}

alert("App has been closed out");

function listTodos (){
		//Lists all todos as seperate lines in between stars
		console.log("**********");
		todos.forEach(function(todo, i) {
			console.log(i + ": " + todo);
		});
		console.log("**********");
}

function addTodos(){
		//Adds new todo to list
		var newTodo = prompt("What would you like to add?");
		todos.push(newTodo);
		console.log(newTodo + " has been added");
}

function removeTodos(){
		//asks for index to remove then removes it
		var index = prompt("Which index what you like to delete?");

		todos.splice(index,1);

		console.log(index + " has been deleted");

}