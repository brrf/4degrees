let tableContainer = document.querySelector('table');

let contacts = [
	{
		name: 'Moshe',
		email: 'moshe@g',
		note: 'hello there',
	},
	{
		name: 'Moshe1',
		email: 'moshe@g',
		note: 'hello there',
	},
	{
		name: 'Moshe2',
		email: 'moshe@g',
		note: 'hello there',
	},
];

// contacts.forEach(contact => {
// 	tableContent += contact.name;
// });

// console.log(tableContent);

// let contactList = {

// 	contacts: [],

// 	addContact: function ({name, email, note}) {
// 		this.contacts.push({
// 			name,
// 			email,
// 			note
// 		});
// 		interface.displayContacts();
// 	},
// 	// changeTodo: function (position, todoText) {
// 	// 	this.todos[position].todoText = todoText;
// 	// 	interface.displayContacts();
// 	// },
// 	deleteContact: function(position) {
// 		this.contacts.splice(position, 1);
// 		interface.displayContacts();
// 	},

// 	// toggleCompleted: function(position) {
// 	// 	this.todos[position].completed = !this.todos[position].completed;
// 	// 	interface.displayContacts();

// 	// },
// 	// toggleAll: function() {
// 	// 	let items = this.todos;
// 	// 	let allChecked = true;

// 	// 	items.forEach (function(item) {
// 	// 		if (!item.completed) {
// 	// 			allChecked = false;
// 	// 		}
// 	// 	});
// 	// 	items.forEach(function(item) {
// 	// 		if (!allChecked) {
// 	// 			item.completed = true;
// 	// 		}
// 	// 		else {
// 	// 			item.completed = false;
// 	// 		}
// 	// 	})
// 	// 	interface.displayContacts();
// 	// },
// }

// let handlers = {
// 	displayContacts: function() {
// 		interface.displayContacts();
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

		//remove all current table fields and populate with new data
		tableContainer.innerHTML = '';
		tableContainer.innerHTML +=
			'<tr><th>Name</th><th>Email</th><th>Note</th></tr>';

		contacts.forEach((contact, position) => {
			let newRow = document.createElement('tr');
			newRow.innerHTML = `<td>${contact.name}</td><td>${contact.email}</td><td>${contact.note}</td>`;
			newRow.id = position;
			tableContainer.appendChild(newRow);

			tableContainer.childNodes[position + 1].appendChild(
				this.createDeleteButton()
			);
		}, this);
	},
	// displayContacts: function () {
	// 	let entireList = document.querySelector('.entire-list');
	// 	entireList.innerHTML = '';

	// 	if (todoList.todos.length === 0) {
	// 		entireList.innerHTML = 'Your To-do list is empty!';
	// 	}
	// 	todoList.todos.forEach(function(todo, position) {
	// 		var newLi  = document.createElement('li');
	// 		newLi.id = position;
	// 		entireList.appendChild(newLi);

	// 		if (todo.completed) {
	// 			newLi.textContent = `(x) ${todo.todoText}`
	// 		} else {
	// 			newLi.textContent = `( ) ${todo.todoText}`
	// 		}

	// 		entireList.childNodes[position].appendChild( this.createDeleteButton() );
	// 	}, this)
	// },
	// 	setUpEventListeners: function () {
	// 		var entireList = document.querySelector('.entire-list')
	// 		entireList.addEventListener('click', function(event) {

	// 		if (event.target.nodeName !== 'BUTTON') {
	// 			return;
	// 		}
	// 		handlers.deleteTodo(event.target.parentNode.id);
	// 		});
	// 	},

	createDeleteButton: function () {
		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},

	// 	populate: function populate(n) {
	// 		for (let i = 0; i <= n; i++) {
	// 			todoList.addTodo(`item: ${i+1}`);
	// 		}
	// 	}
};

// interface.populate(4)
// interface.setUpEventListeners();

interface.populateTable();
