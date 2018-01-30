const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport')
const cookieSession = require('cookie-session');
require('./models/Todo')
require('./models/gAuth')
require('./middleware/passport')(passport)
// const is ES6 syntax

const app = express();

// const MONGODB_URI = keys.mongoURI || 'mongodb://localhost/TodoList';
const MONGODB_URI = 'mongodb://localhost/TodoList';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
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


