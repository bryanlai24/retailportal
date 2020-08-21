import React, { Component } from 'react';

class Footer extends Component {
	render() {
		const footerstyle = {
			position:"fixed",
			overflowY: "none",
			bottom: "0px",
			height: "67.5px",
			backgroundColor: "#18453B"
		}
		const pstyle = {
			fontFamily:"Calibri",
			color:"white",
			padding:"5px"
		}
		return (
			<div style={footerstyle}><p style={pstyle}> * This is where I'd put a footer message</p></div>
		)
	}
}

export default Footer