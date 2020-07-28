const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const auth = require('./src/constrollers/LoginController');
const contacts = require('./src/constrollers/ContactsController');
const app = express();
const config = require('config');
const path = require('path');
const e = require('express');

const PORT = config.get('port');

let urlencodedFalse = bodyParser.urlencoded({ extended: false });
let bodyParserJsonTrue = bodyParser.json({
	inflate: true,
	strict: true
});

app.use(cors({ credentials: true, origin: true }));

// routers
app.use('/api', urlencodedFalse, bodyParserJsonTrue, auth);
app.use('/api/app', urlencodedFalse, bodyParserJsonTrue, contacts);

// if (process.env.NODE_ENV === 'production') {
// 	app.use('/', express.static(path.join(__dirname, 'test_contacts_app', 'build')));
// 	app.get('*', (req, res) => {
// 		res.sendFile(path.resolve(__dirname, 'test_contacts_app', 'build', 'index.html'));
// 	});
// }

mongoose
	.connect(config.get('mongoUri'), {
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
	.then(() => {
		console.log('Mongodb connected...');
	});

app.listen(PORT, () => {
	console.log(`server was started in ${PORT} port`);
});
