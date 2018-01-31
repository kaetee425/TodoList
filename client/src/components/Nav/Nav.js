import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
	render() {
		return(
			<nav className="navbar navbar-default">
				<div className="container-fluid">
						<button className="logo btn-primary-spacing"><a href="#">Hi</a></button>

						<button className="oauth btn-primary-spacing"><a href='/api/logout'>Google Logout!</a></button>
					</div>
			</nav>
		)
	}
}

export default Nav