const { LoginModel } = require('../model/Login');
const { Router } = require('express');
const router = Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', (req, res) => {
	try {
		const { email, password } = req.body;
		return LoginModel.findOne({ email })
			.then((item) => {
				if (item) {
					return res.status(400).json({
						message: 'it user was created'
					});
				}
				bcrypt.hash(password, 12).then((hashPassword) => {
					const login = new LoginModel({
						email: email,
						password: hashPassword
					});
					console.log(login);
					login.save().then(() => {
						return res.status(200).json({
							email: email,
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
		const { email, password } = req.body;
		console.log(email, password);
		return LoginModel.findOne({ email }).then((user) => {
			console.log(user);
			if (!user) {
				return res.status(400).json({
					message: 'It user is not found'
				});
			}
			const token = jwt.sign({ userId: user.id }, 'express_study', { expiresIn: '1h' });
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
