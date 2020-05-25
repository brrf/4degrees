const fetch = require('node-fetch');

const functions = {
	add: function (num1, num2) {
		return num1 + num2;
	},
	test: function test() {
		return fetch('https://swapi.dev/api/people/1')
			.then(res => res.json())
			.catch(err => console.log(err));
	},
};

module.exports = functions;
