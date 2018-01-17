import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'


class Todo extends Component {
	render() {
		return (
			<div>
				<h1>Do your Shit!</h1>
				<TodoInput />
				<TodoList />
			</div>
		)
	}
}

export default Todo