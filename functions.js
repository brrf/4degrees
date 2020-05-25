const fetch = require('node-fetch');

const functions = {
	noName: function () {
		let response;
		const body = {
			name: '',
			email: 'moshe@gmail.com',
			note: 'a note exists',
		};
		return fetch('https://swapi.dev/api/people/1', {
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

module.exports = functions;
