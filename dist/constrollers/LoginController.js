'use strict';

var _require = require('../model/Login'),
    LoginModel = _require.LoginModel;

var _require2 = require('express'),
    Router = _require2.Router;

var router = Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.post('/register', function (req, res) {
	try {
		var _req$body = req.body,
		    email = _req$body.email,
		    password = _req$body.password;

		return LoginModel.findOne({ email: email }).then(function (item) {
			if (item) {
				return res.status(400).json({
					message: 'it user was created'
				});
			}
			bcrypt.hash(password, 12).then(function (hashPassword) {
				var login = new LoginModel({
					email: email,
					password: hashPassword
				});
				console.log(login);
				login.save().then(function () {
					return res.status(200).json({
						email: email,
						password: hashPassword
					});
				});
			});
		}).catch(function (e) {
			return res.json(e);
		});
	} catch (e) {
		console.log(e.message);
	}
});

router.post('/auth', function (req, res) {
	try {
		var _req$body2 = req.body,
		    email = _req$body2.email,
		    password = _req$body2.password;

		console.log(email, password);
		return LoginModel.findOne({ email: email }).then(function (user) {
			console.log(user);
			if (!user) {
				return res.status(400).json({
					message: 'It user is not found'
				});
			}
			var token = jwt.sign({ userId: user.id }, 'express_study', { expiresIn: '1h' });
			bcrypt.compare(password, user.password).then(function (data) {
				if (!data) {
					return res.status(400).json({
						message: 'Password is not correct'
					});
				}
			});
			return res.status(200).json({ token: token, userId: user.id });
		});
	} catch (e) {
		console.log(e.message);
	}
});

module.exports = router;