import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
	// constructor(props){
	// 	super(props);

	// 	this.state = {
	// 		users: [],
	// 		email: '',
	// 		password: ''
	// 	}
	// }

	// onEmailChange = (event) => {
	// 	this.setState({
	// 		email: event.target.value
	// 	})
	// }

	// onPasswordChange = (event) => {
	// 	this.setState({
	// 		password: event.target.value
	// 	})
	// }

	// onFormSubmit = (event) => {
	// 	event.preventDefault();

	// 	if (this.state.email && this.state.password) {

	// 	}
	// }

	render() {
		return (
			<div className="login">
				<h1>Welcome to the Purrrfect List!</h1>

				<div className="auth">
					<h3>Login in with Google!</h3>

					<button className="authLog">
						<a href='/auth/google'>Login</a>
					</button>
				</div>
			</div>
		)
	}
}

export default Login
				// <input 
				// 	placeholder='Email: ' 
				// 	value={this.state.email} 
				// 	onChange={this.onEmailChange}
				// />
				// <input 
				// 	placeholder='Password: ' 
				// 	type='password' 
				// 	value={this.state.password} 
				// 	onChange={this.onPasswordChange}
				// />
				// <br />
				// <button>Profile Login</button>