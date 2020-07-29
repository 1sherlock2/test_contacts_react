const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const ContactsSchema = new Schema(
	{
		name: { type: String, required: true },
		secondName: { type: String },
		company: { type: String },
		phone: { type: Number, required: true },
		description: { type: String },
		userId: { type: Schema.Types.ObjectId, ref: 'Login' }
	},
	{
		timestamps: true
	}
);

var ContactsModel = (exports.ContactsModel = mongoose.model('Contacts', ContactsSchema));
