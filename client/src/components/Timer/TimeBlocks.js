import React, { Component } from 'react'
import TimeBlocks from 'react-awesome-countdowntimer'
import './Timer.css'

class Timeblocks extends Component {

	// constructor(props){
	// 	super(props);

	// 	this.state = {
	// 		dateTime: moment(),
	// 	}
	// }

	render () {
		return (
			<TimeBlocks endDate={this.props.endDate} />
		)
	}
}

export default Timeblocks