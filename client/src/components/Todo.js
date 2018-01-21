import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
// import TodoListItems from './TodoListItems'
import API from './../utils/API';

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
				
				<TodoInput potatoes={this.loadTodos}/>

				<TodoList todos={this.state.todos} loadTodos={this.loadTodos}/>


			</div>
		)
	}
}

export default Todo