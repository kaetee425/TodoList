import React, { Component } from 'react'
import './Clock.css'

class Clock extends Component {
	constructor(props) {
		super(props);

		this.state = {
			startDate: Date.now(),
			endDate: this.props.dueDate,
			time: {
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
			}
			}
		}

	componentDidMount() {
		this.interval = setInterval(() => this.setState({
			startDate: Date.now()
			}), 1000);	
	}

	getDiff() {

		console.log('startDate: ', this.state.startDate);
		let diff = this.state.endDate - this.state.startDate
		diff = new Date(diff);
		console.log('different: ', diff )


		let seconds = Math.floor(diff / 1000)
		// console.log(seconds)
		let minutes = Math.floor(seconds / 60)
		// console.log(minutes)
		let hours = Math.floor(minutes / 60)
		// console.log(hours)
		let days = Math.floor(hours / 24)

		return (
				<div className="time">
					<ul className="timer">
						<li><span id='days'>{days}</span>Days</li>
						<li><span id='hours'>{hours}</span>Hours</li>
						<li><span id='minutes'>{minutes}</span>Minutes</li>
						<li><span id='seconds'>{seconds}</span>Seconds</li>
					</ul>
				</div>
			)
	}

	render(){
		return (
			<div>
				{this.getDiff()}
			</div>
		);
	};
}

export default Clock;