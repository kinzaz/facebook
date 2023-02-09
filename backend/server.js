const express = require('express');

const cors = require('cors');

const app = express();

var corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
	res.send('Welcome from home');
});

app.get('/page', (req, res) => {
	res.send('Welcom from another page');
});

app.listen(8000, () => {
	console.log('Server is working...');
});
