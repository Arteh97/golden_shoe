const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('Database connection successful'))
	.catch(err => {
		console.log(err);
	});

app.use(express.json());

app.use('/api/auth', authRouter);

app.use('/api/users', userRouter);

app.use('/api/product/', productRouter);

app.listen(process.env.PORT || 5001, () => {
	console.log('Backend server is running!');
});
