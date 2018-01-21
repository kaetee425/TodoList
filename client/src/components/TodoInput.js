import React, {Component} from 'react';
import API from './../utils/API';


class TodoInput extends Component {
	constructor (props) {
		super(props);

		this.state = { todos: [], text: "", dueDate: "" }

		this.onInputChange = this.onInputChange.bind(this)
		this.onDueDateChange = this.onDueDateChange.bind(this)
	}

	onDueDateChange = (event) => {
		this.setState ({
			dueDate: event.target.value
		})
	}

	onInputChange = (event) => {

		console.log(event.target.value)

		this.setState({
			text: event.target.value
		});
	}

	onFormSubmit = (event) => {
		event.preventDefault();

		if (this.state.text && this.state.dueDate) {
			API.saveTasks({
				task: this.state.text,
				dueDate: this.state.dueDate
			})
			.then(res => this.props.potatoes())
			.catch(err => console.log(err))
		}
		this.setState({ text: "", dueDate: ""})
	}

	render () {
		return (
			<form onSubmit={this.props.onFormSubmit}>
				<input placeholder='add a todo task' value={this.state.text} onChange={this.onInputChange}/>
				<input type="date" value={this.state.dueDate} onChange={this.onDueDateChange}/>
				<button onClick={this.onFormSubmit}>Submit Your Shit</button>
			</form>
		);
	}
}

export default TodoInput;