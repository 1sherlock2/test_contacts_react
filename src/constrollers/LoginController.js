const { LoginModel } = require('../model/Login');
const { Router } = require('express');
const router = Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', (req, res) => {
	try {
		const { nickname, password } = req.body;
		console.log(nickname, password);
		return LoginModel.findOne({ nickname })
			.then((item) => {
				if (item) {
					return res.status(400).json({
						message: 'it user was created'
					});
				}
				bcrypt.hash(password, 12).then((hashPassword) => {
					const login = new LoginModel({
						nickname: nickname,
						password: hashPassword
					});
					console.log(login);
					login.save().then(() => {
						return res.status(200).json({
							nickname: nickname,
							password: hashPassword
						});
					});
				});
			})
			.catch((e) => res.json(e));
	} catch (e) {
		console.log(e.message);
	}
});

router.post('/auth', (req, res) => {
	try {
		const { nickname, password } = req.body;
		console.log(nickname, password);
		return LoginModel.findOne({ nickname }).then((user) => {
			console.log(user);
			if (!user) {
				return res.status(400).json({
					message: 'It user is not found'
				});
			}
			const token = jwt.sign({ userId: user.id }, 'test_contacts_react', { expiresIn: '1h' });
			bcrypt.compare(password, user.password).then((data) => {
				if (!data) {
					return res.status(400).json({
						message: 'Password is not correct'
					});
				}
			});
			return res.status(200).json({ token, userId: user.id });
		});
	} catch (e) {
		console.log(e.message);
	}
});

module.exports = router;
