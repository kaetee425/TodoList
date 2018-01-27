import React, { Component } from 'react'
import TodoListItems from './TodoListItems'
import API from '../../utils/API';
import DeleteBtn from '../DeleteBtn/DeleteBtn'

import moment from 'moment'
import Timer from 'react-awesome-countdowntimer'

class TodoList extends Component { 
	state = {
		completeClicked: false,
		dueDate: moment()
	}

	//delete? edit?
	deleteTask = (id) => {
		console.log(id)
		API.deleteTask(id)
			.then(res => this.props.loadTodos())
			.catch(err => console.error(err))
	}

	editTask = (id) => {
		console.log('HERE: ', !this.state.completeClicked)
		API.editTask(id, {complete: !this.state.completeClicked})
		//taskdata = object that was completed to true (hardcoded)
			.then(res => this.props.loadTodos())
			.catch(err => console.error(err))
	}

							// <Timer endDate={this.state.dueDate._d} />
	render() {
		console.log(this.state.completeClicked)
		console.log('dueDate: ', this.state.dueDate._d)
		return (
			<div>
				{this.props.todos.map( task => {
					return (
						<TodoListItems key={task._id}>
							<h3>Task: {task.task}</h3>
							<h3>Due: {task.dueDate} </h3>

						<button onClick={() => this.deleteTask(task._id)}> Delete </button>
						<button 
						onClick={
							() => {
								{this.state.completeClicked? this.setState({completeClicked: false}) : this.setState({completeClicked: true})}
								this.editTask(task._id, task.complete)
							}
						}

							> 
							Done!!! 
						</button>
						
						</TodoListItems>
					)
				})}
			</div>
		)
	}
}

export default TodoList

