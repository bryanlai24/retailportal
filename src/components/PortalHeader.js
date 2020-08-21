import React, { Component } from 'react';

class PortalHeader extends Component {
	render() {
		return this.props.info.map((info) => (
			<h1 style={style}>Welcome, {info.name}</h1>
		));
	}
}

const style = {
	marginleft: "5%"
}

export default PortalHeader;