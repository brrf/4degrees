//object that manages contacts array;
let contactList = {

	contacts: [],

	addContact: function ({name, email, note}) {
		this.contacts.push({
			name,
			email,
			note
		});
		interface.populateTable();
	},
	deleteContact: function(position) {
		this.contacts.splice(position, 1);
		interface.populateTable();
	},
};

//object that updates interface when contacts change
let interface = {
	populateTable: function () {
		let tableContainer = document.querySelector('table');
		let emptyList = document.getElementById('empty');

		//remove all current table fields and populate with new data
		tableContainer.innerHTML = '';
		tableContainer.innerHTML +=
			'<tr><th>Name</th><th>Email</th><th>Note</th></tr>';
		emptyList.innerHTML = '';

		if (contactList.contacts.length === 0) {
			emptyList.innerHTML = 'Your contact list is empty!';
		}	

		contactList.contacts.forEach((contact, position) => {
			let newRow = document.createElement('tr');
			newRow.innerHTML = `<td>${contact.name}</td><td>${contact.email}</td><td>${contact.note}</td>`;
			newRow.id = position;
			tableContainer.appendChild(newRow);

			tableContainer.childNodes[position + 1].appendChild(
				this.createDeleteButton()
			);
		}, this);
	},
	setUpEventListeners: function () {
		let entireList = document.querySelector('table')
		entireList.addEventListener('click', function(event) {
		
		if (event.target.nodeName !== 'BUTTON') {
			return;
		}
		contactList.deleteContact(event.target.parentNode.id);
		});
	},
	createDeleteButton: function () {
		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
};

////API validation section (can be moved to new file eventually)

//add event listener for the new contact button
let submitButton = document.querySelector('form button');
submitButton.addEventListener('click', function (event) {
	event.preventDefault();
	if (event.target.nodeName !== 'BUTTON') {
		return;
	} else {
		newContact(event);
	}
});

//API request to validate form
function newContact(event) {
	event.preventDefault();
	const name = document.getElementById('new-contact-form').elements[
		'name'
	].value;
	const email = document.getElementById('new-contact-form').elements['email']
		.value;
	const note = document.getElementById('new-contact-form').elements['note']
		.value;

	const flashMessage = document.getElementById('flash');
	flashMessage.innerHTML = '';

	const body = {
		name,
		email,
		note,
	};

	let http = new XMLHttpRequest();
	http.open('POST', 'http://localhost:5000/new_contact', true);
	http.setRequestHeader('Content-type', 'application/json');
	http.onreadystatechange = function () {
		if (http.readyState == 4) {
			const response = JSON.parse(http.responseText)
			if (response.error) {
				
				flashMessage.innerHTML = response.error
			} else {
				contactList.addContact(body);
			}
		}
	};
	
	http.send(JSON.stringify(body));
	return false;
}


//initial function calls
interface.setUpEventListeners();
interface.populateTable();