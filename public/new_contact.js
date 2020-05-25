import { addContact } from './index.js';

//add event listener for new contact button
let submitButton = document.querySelector('form button');
submitButton.addEventListener('click', function (event) {
	event.preventDefault();
	if (event.target.nodeName !== 'BUTTON') {
		return;
	} else {
		newContact(event);
	}
});

function newContact(event) {
	event.preventDefault();
	const name = document.getElementById('new-contact-form').elements['name']
		.value;
	const email = document.getElementById('new-contact-form').elements['email']
		.value;
	const message = document.getElementById('new-contact-form').elements[
		'message'
	].value;

	let body = {
		name,
		email,
		message,
	};
	fetch('http://localhost:5000/new_contact', {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then(function (res) {
			return res.json();
		})
		.then(function (resObject) {
			if (resObject.error) {
				console.log('error');
			} else {
				addContact(body);
			}
		});
}

// function newContact(event) {
// 	event.preventDefault();
// 	const firstName = document.getElementById('new-contact-form').elements[
// 		'firstName'
// 	].value;
// 	const email = document.getElementById('new-contact-form').elements['email']
// 		.value;
// 	const message = document.getElementById('new-contact-form').elements[
// 		'message'
// 	].value;

// 	let http = new XMLHttpRequest();
// 	// let params =
// 	// 	'&first_name=' +
// 	// 	encodeURIComponent(firstName) +
// 	// 	'&email=' +
// 	// 	encodeURIComponent(email) +
// 	// 	'&message=' +
// 	// 	encodeURIComponent(message);
// 	http.open('POST', 'http://localhost:5000/new_contact', true);
// 	http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
// 	http.onreadystatechange = function () {
// 		if (http.readyState == 4) {
// 			console.log('ready state?');
// 			//document.getElementById('loading_overlay').style.display = 'none';
// 			if (
// 				http.status != 200 ||
// 				(http.status == 200 && http.response != 'okay')
// 			) {
// 				return;
// 				//js_flash("There was an error - we'll fix it ASAP", 'error');
// 			} else {
// 				console.log('request done');
// 				// let contact = {
// 				// 	name,
// 				// 	email,
// 				// 	message,
// 				// };
// 				// document.getElementById(
// 				// 	'contact_name_span'
// 				// ).innerHTML = newName;

// 				// Display success message
// 				//js_flash('Name changed to ' + newName, 'success');
// 			}
// 		}
// 	};

// 	http.send({
// 		firstName,
// 		email,
// 		message,
// 	});
// 	return false;
// }
