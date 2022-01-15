const router = require('express').router();

router.get('/usertest', (req, req) => {
	res.send('user test is successfull!');
});

router.post('/userposttest', (req, res) => {
	const username = req.bodu.username;
	res.send('your username is:' + username);
});
