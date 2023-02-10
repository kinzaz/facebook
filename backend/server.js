const express = require('express');
const cors = require('cors');
const { readdirSync } = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

readdirSync('./routes').map(r => app.use('/', require('./routes/' + r)));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}...`);
});
