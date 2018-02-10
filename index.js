const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport')
const cookieSession = require('cookie-session');
require('./models/Todo')
require('./models/gAuth')
require('./middleware/passport')(passport)
// const is ES6 syntax

//twilio
const http = require('http');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const sessions = require('express-session')

const app = express();

const MONGODB_URI = keys.mongoURI || 'mongodb://localhost/TodoList';
// const MONGODB_URI = 'mongodb://localhost/TodoList';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

//twilio
app.use(sessions({secret: 'twilio-secret' }));

app.post('/sms', (req, res) => {
	// const smsCount = req.session.counter || 0

	const twiml = new MessagingResponse();

	twiml.message("Make sure you finish your tasks or you will kill a kitty!");
	// if (smsCount > 1) {
	// 	twiml.message("Add some tasks, save some kitties, and get stuff done!")
	// } 

	// req.session.counter = smsCount + 1

	res.writeHead(200, {'Content-Type': 'text/xml'});
	res.end(twiml.toString());
});

//passport stuff
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		//30 days turned in milliseconds
		keys: [keys.cookieKey]
		//encrypt cookies
	})
);

//auth routes
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);

// app.get('/', (req, res) => {
// 	res.send({message: 'hello you'});
// });

//task routes
require('./routes/todoRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
	console.log('app listening on port:', PORT)
})


