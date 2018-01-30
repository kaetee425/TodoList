import React, { Component } from 'react'
import TodoInput from './TodoInput/TodoInput'
import TodoList from './TodoList/TodoList'
import Nav from './Nav/Nav'
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
		API.getTasks()
			.then(res => this.setState({ todos: res.data }))
			.catch(err => console.error(err));
	}
	
	render() {
		return (
			<div>
				<Nav />

				<h1>Do your Shit!</h1>

				<TodoInput potatoes={this.loadTodos}/>

				<TodoList todos={this.state.todos} loadTodos={this.loadTodos}/>

			</div>
		)
	}
}

export default Todo
				// <CountdownTime endDate={this.state.dueDate} />