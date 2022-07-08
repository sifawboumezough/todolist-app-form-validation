console.log("window location", window.location);
const myKeyValue = window.location.search;
console.log("Key & Value :", myKeyValue);

const urlParams = new URLSearchParams(myKeyValue);

const loggedUser = urlParams.get('username');


const userName = document.querySelector('small');
userName.innerText =" WA FEEEN A ABANA " + loggedUser;



// const greetingMessage = document.querySelector("div.greeting-message > h2").textContent;

// greetingMessage.innerHtml = "AZFAFAZFAFA";
// const today = new Date(); 
// const hours = today.getHours();

	// if(hours <=12) {
// 		greetingMessage.innerText = 'Good Morning', + username + "!";
// 	}else {
// 		greetingMessage.innerText = 'wa sir T7WA a ', + username + "!";

// 	}
// }