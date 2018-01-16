const express = require("express");
// const is ES6 syntax

const app = express();

app.get('/', (req, res) => {
	res.send({message: 'hello you'});
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
	console.log('app listening on port:', PORT)
})