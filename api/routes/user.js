const userRouter = require('express').Router();

userRouter.get('/usertest', (req, res) => {
	res.send('user test is successfull!');
});

userRouter.post('/userposttest', (req, res) => {
	const username = req.bodu.username;
	res.status(200).send('your username is:' + username);
});

module.exports = userRouter;
