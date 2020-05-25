let tableContainer = document.querySelector('table');

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

// let handlers = {
// 	displayContacts: function() {
// 		interface.populateTable();
// 	},
// 	// toggleAll: function() {
// 	// 	todoList.toggleAll();
// 	// },
// 	addContact: function() {
// 		const todoText = document.querySelector('.addTodoText').value;
// 		contactList.addContact(todoText);
// 	},
// 	deleteTodo: function(position) {
// 		todoList.deleteTodo(position);
// 		position = '';
// 	},
// 	changeTodo: function() {
// 		var changeTodoPosition = document.querySelector('.changeTodoPosition').value;
// 		var changeTodoText = document.querySelector('.changeTodoText').value;
// 		todoList.changeTodo(changeTodoPosition - 1, changeTodoText);
// 		changeTodoPosition = '';
// 		changeTodoText = '';
// 	},
// 	toggleCompleted: function() {
// 		var toggleCompletedPosition = document.querySelector('.toggleCompletedPosition').value;
// 		todoList.toggleCompleted(toggleCompletedPosition - 1);
// 	}
// }

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
		console.log('event')
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
	const note = document.getElementById('new-contact-form').elements[
		'note'
	].value;

	let body = {
		name,
		email,
		note,
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
				console.log('error')
			} else {
				contactList.addContact(body);
			}
		});
}

interface.setUpEventListeners();
interface.populateTable();