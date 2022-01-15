const { verifyToken } = require('./verifyToken');

const userRouter = require('express').Router();

userRouter.get('/usertest', (req, res) => {
	res.send('user test is successfull!');
});

userRouter.post('/userposttest', (req, res) => {
	const username = req.bodu.username;
	res.status(200).send('your username is:' + username);
});

router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
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

module.exports = userRouter;
