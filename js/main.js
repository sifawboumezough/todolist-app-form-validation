const creds = [
	{
		username : 'sifawbxumezough',
		email : 'sifawbxumezough24@gmail.com',
		password : 'sifawbxumezough123'

	},
	{
		username : 'waeleverkerss',
		email : 'waelwael@gmail.com',
		password : 'waelwael'

	},
]
const button = document.getElementById("button");
button.addEventListener('click', (e) => {
	e.preventDefault();
	checkInputs();
	loginFunction();
});



function loginFunction () {
	let username = document.getElementById("username").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
let currentUser = creds.filter( credit=> credit.username == username && credit.password == password && credit.email == email)
currentUser.length ? window.location.href="home.html" + "?" + "username=" + username : console.log('Wrong data');
}


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');



function checkInputs() {
	const Username = username.value.trim();
	const Email = email.value.trim();
	const Password = password.value.trim();
	
	if(Username === '') {
		setErrorFor(username, 'Username cannot be blank !');
	}else {
			setSuccessFor(username);
		}
		
		
		
	if(Email === '') {
		setErrorFor(email, 'Email cannot be blank !');
	} else if (!(isEmail(Email))) {
		setErrorFor(email, 'Not a valid email !');
	} else {
		setSuccessFor(email);
	}
	
	if(Password === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else if ((Password.length) < 8){
		setErrorFor(password, 'Password length must be atleast 8 characters');
	}
	else {
		setSuccessFor(password);
	}	
	
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}








// function loginFunction() {
// 	const Username = username.value;
// 	const Email = email.value;
// 	const Password = password.value;
	
// 	for(i= 0 ; i< creds.length ; i++) {
// 		if(Username == creds[i].username && Password == creds[i].password && Email == creds[i].email) {
// 			console.log( username + "is logged in !!");
// 		}
// 	}
// }




// form.addEventListener('submit', e => {
	// e.preventDefault();
	
// 	checkInputs();

// });

