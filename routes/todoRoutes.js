const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const Todo = mongoose.model('todos');

module.exports = (app) => {
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	app.get('/api/tasks', (req, res) => {
		Todo
			.find({}).exec( (err, tasks) => {
				//.exec() = .then() + .catch()
				if (err || !tasks) {
					return res.status(404).send({ message: 'tasks not found '})
				}
				res.send(tasks);
			})
	});

	app.post('/api/tasks', (req, res) => {
		const newTodo = new Todo ({
			task: req.body.task,
			dueDate: req.body.dueDate
		});

		newTodo.save(( err, task ) => {
			if ( err || !task ) {
				res.send(err);
			}
			// res.json({ message: 'save successful' });
			res.send(task)
		});
	});

	app.get('/api/tasks/:id', (req, res) => {
		Todo
			.findById(req.params.id).exec( (err, task) => {
				//.exec() = .then() + .catch()
				if (err || !task) {
					return res.status(404).send({ message: 'task not found '})
				}
				res.send(task);
			})
	});

	 app.put('/api/tasks/:id', function(req, res) {
	    Todo.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }).then(function(todo) {
	      res.json(todo);
	    });
	 });

	app.delete('/api/tasks/:id', function(req, res) {
	    Todo.remove({ _id: req.params.id }).then(function(todo) {
	      res.json(todo);
	    });
	 });
};

