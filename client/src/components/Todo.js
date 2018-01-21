import React, { Component } from 'react'
// import TodoInput from './TodoInput'
// import TodoList from './TodoList'
import TodoListItems from './TodoListItems'
import API from './../utils/API';
import DeleteBtn from './DeleteBtn/DeleteBtn'


class Todo extends Component {
	state = {
		todos: [],
		text: "",
		dueDate: ""
	}

	componentDidMount() {
		this.loadTodos();
	}

	loadTodos = () => {
		API.getTasks()
			.then(res => this.setState({ todos: res.data }))
			.catch(err => console.error(err))
	}

	onInputChange = (event) => {

		console.log(event.target.value)

		this.setState({
			text: event.target.value
		});
	}

	onDueDateChange = (event) => {
		this.setState ({
			dueDate: event.target.value
		})
	}

	onFormSubmit = (event) => {
		event.preventDefault();

		if (this.state.text && this.state.dueDate) {
			API.saveTasks({
				task: this.state.text,
				dueDate: this.state.dueDate
			})
			.then(res => this.loadTodos())
			.catch(err => console.log(err))
		}
		this.setState({ text: "", dueDate: ""})
	}

	deleteTask = (id) => {
		API.deleteTask(id)
			.then(res => this.loadTodos())
			.catch(err => console.error(err))
	}

	render() {
		return (
			<div>
				<h1>Do your Shit!</h1>
				
				<form onSubmit={this.onFormSubmit}>
					<input placeholder='add a posttodo task' value={this.state.text} onChange={this.onInputChange}/>
					<input type="date" value={this.state.dueDate} onChange={this.onDueDateChange}/>
					<button onClick={this.onFormSubmit}>Submit Your Shit</button>
				</form>

				<div>
					{this.state.todos.map( task => {
						return (
							<TodoListItems key={task._id}>
								<h3>Task: {task.task}</h3>
								<h3>Due: {task.dueDate}</h3>
							<DeleteBtn onClick={() => this.deleteTask(task._id)} />
							</TodoListItems>
						);
					})}
				</div>

			</div>
		)
	}
}

export default Todo