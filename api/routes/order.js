const Order = require('../models/Order');
const {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require('./verifyToken');

const orderRouter = require('express').Router();

//CREATE

orderRouter.post('/', verifyToken, async (req, res) => {
	const newOrder = new Order(req.body);

	try {
		const savedOrder = await newOrder.save();
		res.status(200).json(savedOrder);
	} catch (err) {
		res.status(500).json(err);
	}
});
