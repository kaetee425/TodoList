import React, {Component} from 'react'
import moment from 'moment'
import CountdownTime from 'react-awesome-countdowntimer'
// import TimeBlocks from './TimeBlocks'
import * as Datetime from 'react-datetime'
import './Timer.css'

class Countdown extends Component {
	constructor(props){
		super(props);

		this.state = {
			dateTime: moment(),
		}
	}

	onChangeDatetime(evt) {
		this.setState({
			dateTime: evt._d
		})
	}

	render(){
		return (
			<div>
				<div className="datetime">
					<Datetime value={this.state.dateTime} onChange={this.onChangeDatetime.bind(this)} />
				</div>	

				<CountdownTime endDate={this.state.dateTime} />
			</div>	
		)
	}
}

export default Countdown
