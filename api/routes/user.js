const { verifyToken, verifyTokenAndAuthorization } = require('./verifyToken');

const userRouter = require('express').Router();

userRouter.get('/usertest', (req, res) => {
	res.send('user test is successfull!');
});

userRouter.post('/userposttest', (req, res) => {
	const username = req.body.username;
	res.status(200).send('your username is:' + username);
});

userRouter.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
	if (req.body.password) {
		req.body.password = CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASS_SEC
		).toString();
	}

	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET ALL USER
userRouter.get('/', verifyToken, async (req, res) => {
	const query = req.query.new;
	try {
		const users = query
			? await User.find().sort({ _id: -1 }).limit(5)
			: await User.find();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = userRouter;
