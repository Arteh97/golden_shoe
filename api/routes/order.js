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

//UPDATE
orderRouter.put('/:id', async (req, res) => {
	try {
		const updatedOrder = await Order.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedOrder);
	} catch (err) {
		res.status(500).json(err);
	}
});

//DELETE
orderRouter.delete('/:id', async (req, res) => {
	try {
		await Order.findByIdAndDelete(req.params.id);
		res.status(200).json('Order has been deleted...');
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET USER ORDERS
orderRouter.get('/find/:userId', async (req, res) => {
	try {
		const orders = await Order.find({ userId: req.params.userId });
		res.status(200).json(orders);
	} catch (err) {
		res.status(500).json(err);
	}
});

// //GET ALL

orderRouter.get('/', verifyTokenAndAdmin, async (req, res) => {
	try {
		const orders = await Order.find();
		res.status(200).json(orders);
	} catch (err) {
		res.status(500).json(err);
	}
});
