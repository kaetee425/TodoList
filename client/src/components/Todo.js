import React, { Component } from 'react'
import TodoInput from './TodoInput/TodoInput'
import TodoList from './TodoList/TodoList'
// import Countdown from './Timer/Timer'
import API from './../utils/API'
import './Todo.css'

import moment from 'moment'
// import CountdownTime from 'react-awesome-countdowntimer'

class Todo extends Component {
	state = {
		todos: [],
		text: "",
		dueDate: moment()
	}

	componentDidMount() {
		this.loadTodos();
	}

	loadTodos = () => {
		console.log('im getting called')
		API.getTasks()
			.then(res => this.setState({ todos: res.data }))
			.catch(err => console.error(err))
	}
	
	render() {
		return (
			<div>
				<h1>Do your Shit!</h1>
				
				<TodoInput potatoes={this.loadTodos}/>

				<TodoList todos={this.state.todos} loadTodos={this.loadTodos}/>

			</div>
		)
	}
}

export default Todo
				// <CountdownTime endDate={this.state.dueDate} />