const fetch = require('node-fetch');

const functions = {
	noName: function () {
		let response;
		const body = {
			name: '',
			email: 'moshe@gmail.com',
			note: 'a note exists',
		};
		return fetch('http://localhost:5000/add_contact', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': 'http://localhost:3000',
			},
			mode: 'cors',
		})
			.then(res => res.json())
			.catch(err => console.log(err));
	},
	badEmail: function () {
		let response;
		const body = {
			name: 'Moshe',
			email: 'moshe@',
			note: 'a note exists',
		};
		return fetch('http://localhost:5000/add_contact', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': 'http://localhost:3000',
			},
			mode: 'cors',
		})
			.then(res => res.json())
			.catch(err => console.log(err));
	},
	noNote: function () {
		let response;
		const body = {
			name: 'Moshe',
			email: 'moshe@gmail.com',
			note: '',
		};
		return fetch('http://localhost:5000/add_contact', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': 'http://localhost:3000',
			},
			mode: 'cors',
		})
			.then(res => res.json())
			.catch(err => console.log(err));
	},
	allFields: function () {
		let response;
		const body = {
			name: 'Moshe',
			email: 'moshe@gmail.com',
			note: 'a brief note',
		};
		return fetch('http://localhost:5000/add_contact', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': 'http://localhost:3000',
			},
			mode: 'cors',
		})
			.then(res => res.json())
			.catch(err => console.log(err));
	},
};

functions.noName();

module.exports = functions;
