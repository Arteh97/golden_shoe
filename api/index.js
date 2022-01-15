const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('Database connection successful'))
	.catch(err => {
		console.log(err);
	});

app.get('/api/test', () => {
	console.log('test is successful');
});

app.listen(process.env.PORT || 5001, () => {
	console.log('Backend server is running!');
});
