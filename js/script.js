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
		userName.innerText = 'Good Morning' + loggedUser + " !";
	}else {
		userName.innerText = 'Welcome ' + loggedUser + " !";
	}
