import React, { Component } from 'react'

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
					<h2>Days: {days}</h2>
					<h2>Hours: {hours}</h2>
					<h2>Minutes: {minutes}</h2>
					<h2>Seconds: {seconds}</h2>
				</div>
			)
	}

	render(){
		return (
			<div>
				<h1>Clock</h1>
				{this.getDiff()}
			</div>
		);
	};
}

export default Clock;