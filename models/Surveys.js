const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveysSchema = new Schema({
	title: String,
	subject: String,
	body: String,
	recipients: [RecipientSchema],
	yes: { type: Number, default: 0 },
	no: { type: Number, default: 0 },
	_user: { type: Schema.Types.ObjectId, ref: 'Users' },
	dateSent: Date,
	lastResponded: Date
});

mongoose.model('surveys', surveysSchema);
