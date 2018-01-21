import React, { Component } from 'react'
import TodoListItems from './TodoListItems'
import API from './../utils/API';
import DeleteBtn from './DeleteBtn/DeleteBtn'

class TodoList extends Component {

	//delete? edit?
	deleteTask = (id) => {
		console.log(id)
		API.deleteTask(id)
			.then(res => this.props.loadTodos())
			.catch(err => console.error(err))
	}


	render() {
		console.log(this.props.todos)
		return (
			<div>
				{this.props.todos.map( task => {
					return (
						<TodoListItems key={task._id}>
							<h3>Task: {task.task}</h3>
							<h3>Due: {task.dueDate}</h3>

						<button onClick={() => this.deleteTask(task._id)}> Delete Me!!! </button>
						</TodoListItems>
					)
				})}
			</div>
		)
	}
}

export default TodoList

