const fetch = require('node-fetch');

const functions = require('./functions');

test('post without name returns error', () => {
	expect.assertions(1);
	return functions.noName().then(data => {
		expect(data).toHaveProperty('name');
	});
});
