'use strict';

var _require = require('mongoose'),
    Schema = _require.Schema;

var mongoose = require('mongoose');

var ContactsSchema = new Schema({
	name: { type: String, required: true },
	secondName: { type: String, required: true },
	company: { type: String, required: true },
	phone: { type: Number, required: true },
	description: { type: String, required: true }
}, {
	timestamps: true
});

var ContactsModel = exports.ContactsModel = mongoose.model('Contacts', ContactsSchema);