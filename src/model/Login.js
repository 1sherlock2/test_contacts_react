const unique = require('mongoose-beautiful-unique-validation');

const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const LoginSchema = new Schema({
	nickname: { type: String, required: true, unique: true },
	password: { type: String, required: true, minlength: 8 }
});
LoginSchema.plugin(unique);

var LoginModel = (exports.LoginModel = mongoose.model('Login', LoginSchema));
