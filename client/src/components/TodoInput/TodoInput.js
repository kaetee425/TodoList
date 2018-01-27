import React, {Component} from 'react';
import './TodoInput.css'
import API from '../../utils/API';

import moment from 'moment'
import CountdownTime from 'react-awesome-countdowntimer'
import * as Datetime from 'react-datetime'
import '../Timer/Timer.css'


class TodoInput extends Component {
	constructor (props) {
		super(props);

		this.state = { todos: [], text: "", dueDate: moment() }
		// dueDate: "" 

		this.onInputChange = this.onInputChange.bind(this)
		this.onDueDateChange = this.onDueDateChange.bind(this)
	}

	onDueDateChange = (event) => {
		// this.setState ({
		// 	dueDate: event.target.value
		// })
		console.log('moment date: ', event._d)

		this.setState({
			dueDate: event._d,
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
			// console.log('form date: ', this.state.dueDate)
			API.saveTasks({
				task: this.state.text,
				dueDate: this.state.dueDate
			})
			.then(res => this.props.potatoes())
			.catch(err => console.log(err))
		}
		this.setState({ text: "", dueDate: moment()})
	}

	render () {
		return (
			<form onSubmit={this.props.onFormSubmit}>
				<input placeholder='add a todo task' value={this.state.text} onChange={this.onInputChange}/>
				<div className="datetime">
					<Datetime value={this.state.dueDate} onChange={this.onDueDateChange} />
				</div>	

				<CountdownTime endDate={this.state.dueDate} />

				<button onClick={this.onFormSubmit}>Submit Your Shit</button>
			</form>
		);
	}
}

export default TodoInput;

				// <input type="date" value={this.state.dueDate} onChange={this.onDueDateChange}/>
			
