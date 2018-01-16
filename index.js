const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Todo.js')
// const is ES6 syntax

const app = express();

const MONGODB_URI = keys.mongoURI || 'mongodb://localhost/TodoList'

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

app.get('/', (req, res) => {
	res.send({message: 'hello you'});
});

require('./routes/todoRoutes')(app);

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
	console.log('app listening on port:', PORT)
})


