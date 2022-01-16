const express = require('express');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');
const cors = require('cors');

dotenv.config();

const uri =
	'mongodb+srv://Arteh97:2BothamClose!@golden-shoe.d5une.mongodb.net/golden-shoe?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

client.connect(err => {
	const collection = client.db('golden-shoe').collection('users');
	console.log(collection);
	client.close();
});

// mongoose
// 	.connect(process.env.MONGO_URL)
// 	.then(() => console.log('Database connection successful'))
// 	.catch(err => {
// 		console.log(err);
// 	});
app.use(cors);
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);

app.listen(process.env.PORT || 5000, () => {
	console.log('Backend server is running!');
});
