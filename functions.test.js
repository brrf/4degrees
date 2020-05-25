const fetch = require('node-fetch');

const functions = require('./functions');

test('post without name returns error', () => {
	return functions.noName().then(data => {
		expect(data.error).toBe('Please fill out required fields');
	});
});

test('post with invalid email returns error', () => {
	return functions.badEmail().then(data => {
		expect(data.error).toBe('Please submit a valid email');
	});
});

test('post without note works fine', () => {
	return functions.noNote().then(data => {
		expect(data.error).toBeFalsy();
	});
});

test('post with all fields works fine', () => {
	return functions.allFields().then(data => {
		expect(data.error).toBeFalsy();
	});
});
