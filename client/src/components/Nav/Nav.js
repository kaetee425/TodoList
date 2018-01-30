import React, { Component } from 'react'

class Nav extends Component {
	render() {
		return(
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbr-header">
						<button className="btn btn-warning"><a className="logo" href="#">Hi</a></button>

						<button className="btn btn-danger"><a href='/api/logout'>Google Logout!</a></button>
					</div>
				</div>
			</nav>
		)
	}
}

export default Nav