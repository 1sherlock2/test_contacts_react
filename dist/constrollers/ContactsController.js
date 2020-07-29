'use strict';

var _require = require('../model/Contacts'),
    ContactsModel = _require.ContactsModel;

var _require2 = require('express'),
    Router = _require2.Router;

var router = Router();

router.get('/:userId/contacts', function (req, res) {
	try {
		console.log(req.params.userId);
		ContactsModel.find({ userId: req.params.userId }).then(function (contacts) {
			if (!contacts) {
				return res.status(400).json({ message: 'It contacts is not defined' });
			}
			res.json(contacts);
		});
	} catch (e) {
		console.log(e.message);
	}
});

router.post('/:userId/set_contact', function (req, res) {
	try {
		var data = req.body;
		console.log(data);
		var contact = new ContactsModel({
			name: data.name,
			secondName: data.secondName,
			company: data.company,
			phone: data.phone,
			description: data.description,
			userId: req.params.userId
		});
		contact.save().then(function () {
			return res.status(200).json({ contact: contact });
		});
	} catch (e) {
		console.log(e.message);
	}
});

router.get('/contact/:id', function (req, res) {
	try {
		return ContactsModel.findById(req.params.id).then(function (contact) {
			if (!contact) {
				res.status(200).json({
					message: 'contact is not found'
				});
			}
			res.status(200).json({ contact: contact });
		});
	} catch (e) {
		console.log(e.message);
	}
});

router.put('/update_contact/:id', function (req, res) {
	try {
		return ContactsModel.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err) {
			if (err) {
				res.send(err);
			}
			res.json({ status: 'contact updated' });
		});
	} catch (e) {
		console.log(e.message);
	}
});

router.delete('/delete_contact/:id', function (req, res) {
	try {
		return ContactsModel.deleteOne({ _id: req.params.id }).then(function (contact) {
			if (contact) {
				res.json({ status: 'contact was deleting' });
			} else {
				res.json({ status: 'Some error' });
			}
		});
	} catch (e) {
		console.log(e.message);
	}
});

module.exports = router;