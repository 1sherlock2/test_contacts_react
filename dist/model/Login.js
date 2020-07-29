'use strict';

var unique = require('mongoose-beautiful-unique-validation');

var _require = require('mongoose'),
    Schema = _require.Schema;

var mongoose = require('mongoose');

var LoginSchema = new Schema({
	nickname: { type: String, required: true, unique: true },
	password: { type: String, required: true, minlength: 8 }
});
LoginSchema.plugin(unique);

var LoginModel = exports.LoginModel = mongoose.model('Login', LoginSchema);