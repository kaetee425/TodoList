import React, { Component } from 'react'
import TodoListItems from './TodoListItems'
import API from '../../utils/API';
import DeleteBtn from '../DeleteBtn/DeleteBtn'
import Clock from '../Clock/Clock'
import './TodoList.css'

// import moment from 'moment'
// import CountdownTime from 'react-awesome-countdowntimer'
// import * as Datetime from 'react-datetime'

class TodoList extends Component { 
	state = {
		completeClicked: false,
	}

	secondTime(potato) {
	  const newDate = Date.parse(potato)
	  return newDate
	}

	prettyTime(chickens) {
		const prettyTime = new Date(chickens).toString()
		return prettyTime
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

	render() {
		console.log(this.state.completeClicked)
		return (
			<div className="taskList">
				{this.props.todos.map( task => {
					return (
						<TodoListItems key={task._id}>
							<h3 id="taskdata">Task: {task.task}</h3>
							<h3 id="duedate">Due: {this.prettyTime(task.dueDate)} </h3>	

							<Clock dueDate={this.secondTime(task.dueDate)}/> 
						
							<button id="deleteBtn" onClick={() => this.deleteTask(task._id)}> Delete </button>
							<button 
							id="doneBtn"
							onClick={
								() => {
									{this.state.completeClicked? this.setState({completeClicked: false}) : this.setState({completeClicked: true})}
									this.editTask(task._id, task.complete)
								}
							}

								> 
								Done!!! 
							</button>
							<hr />
						</TodoListItems>
					)
				})}
			</div>
		)
	}
}

export default TodoList

