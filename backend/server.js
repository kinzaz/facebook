const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Welcome from home');
});

app.get('/page', (req, res) => {
	res.send('Welcom from another page');
});

app.listen(8000, () => {
	console.log('Server is working...');
});
