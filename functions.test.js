const fetch = require('node-fetch');

const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
	expect(functions.add(2, 2)).toBe(4);
});

test('star wars api returns object', () => {
	expect.assertions(1);
	return functions.test().then(data => {
		expect(data).toHaveProperty('name');
	});
});