const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose
	.connect(
		'mongodb+srv://Arteh:2BothamClose!@golden-shoe.d5une.mongodb.net/golden-shoe?retryWrites=true&w=majority'
	)
	.then(() => console.log('Database connection successful'));

app.listen(5001, () => {
	console.log('Backend server is running!');
});
