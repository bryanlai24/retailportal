import React, { Component } from 'react';

import logo from './bl logo.png';

class Header extends Component {
	render() {
		const headerstyle = {
			position:"fixed",
			overflowY: "none",
			top: "0px",
			height: "97.5px",
			backgroundColor: "#18453B"
		}
		const logostyle = {
			float: "middle"
		}
		return (
			<div style={headerstyle}><img style={logostyle} src={logo}></img></div>
		)
	}
}

export default Header