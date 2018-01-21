import React, { Component } from 'react'
import TodoListItems from './TodoListItems'
import API from './../utils/API';

class TodoList extends Component {

	state = {
		todos: []
		//complete? not complete?
	}

	// componentDidMount () {
	// 	this.loadTodos();
	// }

	// loadTodos = () => {
	// 	API.getTasks()
	// 		.then(res => this.setState({ todos: res.data }))
	// 		.catch(err => console.log(err))
	// }

	//delete? edit?

	render() {
		console.log(this.state.todos)
		return (
			<div>
				{this.state.todos.map( task => {
					return (
						<TodoListItems key={task._id}>
							<h3>Task: {task.task}</h3>
							<h3>Due: {task.dueDate}</h3>
						</TodoListItems>
					)
				})}
			</div>
		)
	}
}

export default TodoList

