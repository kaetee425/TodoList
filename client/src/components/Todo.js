import React, { Component } from 'react'
import TodoInput from './TodoInput/TodoInput'
import TodoList from './TodoList/TodoList'
import Countdown from './Timer/Timer'
import API from './../utils/API'
import './Todo.css'

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
		console.log('im getting called')
		API.getTasks()
			.then(res => this.setState({ todos: res.data }))
			.catch(err => console.error(err))
	}
	
	render() {
		return (
			<div>
				<h1>Do your Shit!</h1>

				<Countdown />
				
				<TodoInput potatoes={this.loadTodos}/>

				<TodoList todos={this.state.todos} loadTodos={this.loadTodos}/>


			</div>
		)
	}
}

export default Todo