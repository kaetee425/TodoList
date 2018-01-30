import React, {Component} from 'react';
import './TodoInput.css'
import API from '../../utils/API';

// import moment from 'moment'
// import CountdownTime from 'react-awesome-countdowntimer'
// import * as Datetime from 'react-datetime'
// import '../Timer/Timer.css'


class TodoInput extends Component {
	constructor (props) {
		super(props);

		this.state = { todos: [], text: "", dueDate: ""}
		// dueDate: moment()

		this.onInputChange = this.onInputChange.bind(this)
		this.onDueDateChange = this.onDueDateChange.bind(this)
	}

	onDueDateChange = (event) => {
		// if (event.target.value != "") {
				console.log("event:", event.target.value)
			var deadline = new Date(event.target.value);
				console.log('deadline: ', deadline)
			var myTime = deadline.toString();
				console.log('myTime: ', myTime)

			this.setState ({
				dueDate: myTime
			})
			
		// } 
		// else {
		// 	console.error("errrooorrrr")
		// } 
		//if date is empty string, do not run it 
		// duedate is saving as undefined when i use myTime ..
		// why???
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
			.then(res => {
				this.setState({ text: "", dueDate: ""})
				this.props.potatoes()
			})
			.catch(err => console.log(err))
		}
	}

	render () {
		return (
			<form onSubmit={this.props.onFormSubmit}>
				<input 
					placeholder='add a todo task' 
					value={this.state.text} 
					onChange={this.onInputChange}
				/>
				<input 
					type="date" 
					placeholder='pick a due date' 
					value={this.state.dueDate} 
					onChange={this.onDueDateChange}
				/>
				<br />
				<button onClick={this.onFormSubmit}>Submit Your Shit</button>
				
			</form>
		);
	}
}

export default TodoInput;

