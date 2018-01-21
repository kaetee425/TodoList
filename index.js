const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Todo.js')
// const is ES6 syntax

const app = express();

const MONGODB_URI = keys.mongoURI || 'mongodb://localhost/TodoList';
// const MONGODB_URI = 'mongodb://localhost/TodoList';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

app.get('/', (req, res) => {
	res.send({message: 'hello you'});
});

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


