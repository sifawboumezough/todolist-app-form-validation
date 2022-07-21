console.log("window location", window.location);
const myKeyValue = window.location.search;
console.log("Key & Value :", myKeyValue);

const urlParams = new URLSearchParams(myKeyValue);

const loggedUser = urlParams.get('username');
 // display the name of logged user + greeting message
const userName = document.querySelector("h3");
// userName.innerText =" WA FEEEN A ABANA " + loggedUser;
// userName.innerText = "AZFAFAZFAFA";

const today = new Date(); 
const hours = today.getHours();

	if(hours <=12) {
		userName.innerText = 'Good Morning ' + loggedUser + " !";
	}else {
		userName.innerText = 'Welcome ' + loggedUser + " !";
	}




	let input = document.querySelector('.input');
	let addBtn = document.querySelector('.add-btn');
	let tasks  = document.querySelector('.tasks');




addBtn.addEventListener('click', () => {
	if(input.value.trim() !== 0) {
		let newTask = document.createElement('div');
		newTask.classList.add('item');
		newTask.innerHTML = `
		<p>${input.value}</p>
		<div class="item-btn">
			<i class="fa fa-trash delete-btn" aria-hidden="true"></i>
		</div>
		`
		tasks.appendChild(newTask);
		input.value = '';
	
	}else {
		alert('iw iw ! please enter a task');
	}
	var date = new Date()
	todos.push( {
		title : `${input.value}`,
		date : date
	});
	


});

tasks.addEventListener('click' , (e) => {
	if(e.target.classList.contains('delete-btn')) {
		e.target.parentElement.parentElement.remove();
	}
});
let todos = [];
console.log(todos);

 //Display all the tasks 

// function displayTasks(todos) {
// 	tasks.innerHTML = ""; 
// 	todos.forEach((todo) => {
// 		if (todo.completed === true) {
// 			div.className = "task done";
// 		}

// 		div.setAttribute("data-id", todo.id);
// 		div.appendChild(document.createTextNode(todo.title));



// 	});
// }










// function to calc tasks 
// function calcTasks {
// 	tasks.
// }

// function save () {
// 	let input = document.querySelector('.input');
// 	localStorage.setItem("storedItem", input);
// }





// empty arrat to store (todos)


// let input = document.querySelector(".input");
// let addButton = document.getElementById("add-btn");
// let tasksDiv = document.querySelector(".tasks");


// addButton.onclick = () => {
// 	if(input.value !== "") {
// 		addTask(input.value);
// 		input.value = "";
// 	}
// }

// function addTask(tasktodo) {
// 	const todo = {
// 		id: Date.now(),
// 		title: tasktodo,
// 		completed: false,
// 	};	// push

// 	todos.push(todo);
// 	// console.log(todos);
// 	displayTasks(todos);

// }




