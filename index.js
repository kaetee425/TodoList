const express = require("express");
const mongoose = require('mongoose');
require('./models/Todo.js')
// const is ES6 syntax

const app = express();

mongoose.connect('mongodb://localhost/TodoList')

app.get('/', (req, res) => {
	res.send({message: 'hello you'});
});

require('./routes/todoRoutes')(app);

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
	console.log('app listening on port:', PORT)
})


