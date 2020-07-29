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
		    nickname = _req$body.nickname,
		    password = _req$body.password;

		return LoginModel.findOne({ nickname: nickname }).then(function (item) {
			if (item) {
				return res.status(400).json({
					message: 'it user was created'
				});
			}
			bcrypt.hash(password, 12).then(function (hashPassword) {
				var login = new LoginModel({
					nickname: nickname,
					password: hashPassword
				});
				console.log(login);
				login.save().then(function () {
					return res.status(200).json({
						nickname: nickname,
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
		    nickname = _req$body2.nickname,
		    password = _req$body2.password;

		console.log(nickname, password);
		return LoginModel.findOne({ nickname: nickname }).then(function (user) {
			console.log(user);
			if (!user) {
				return res.status(400).json({
					message: 'It user is not found'
				});
			}
			var token = jwt.sign({ userId: user.id }, 'test_contacts_react', { expiresIn: '1h' });
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