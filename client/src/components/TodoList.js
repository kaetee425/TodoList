import React, { Component } from 'react'
import TodoListItems from './TodoListItems'
import API from './../utils/API';
import loadTasks from './../utils/loadTasks'

class TodoList extends Component {

	state = {
		tasks: []
	}

	componentDidMount () {
		this.loadTasks();
	}

	loadTasks = () => {
		API.getTasks()
			.then(res => this.setState ({ tasks: res.data }))
			.catch(err => console.log(err)) 
	}

	render() {
		console.log(this.state.tasks)
		return (
			<div>
				{this.state.tasks.map( task => {
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

