import React, { Component } from 'react';

class InvoiceTable extends Component {
	getButtons(status) {
		switch (status) {
			case "In Warehouse":
				return <button class='portalBtn' onClick={this.reschedule}>RESCHEDULE</button>;
				break;
			case "Set for Delivery":
				return <button class='portalBtn' onClick={this.confirm}>CONFIRM</button>;
				break;
			case "Delivered":
				return <button class='portalBtn' onClick={this.refund}>REQUEST REFUND</button>;
				break;
			default:
				return "";
		}
	}

	reschedule = () => {
		alert("Please contact customer service to reschedule your delivery")
	}

	confirm = () => {
		alert("Your delivery appointment has been confirmed")
	}

	refund = () => {
		alert("Please contact customer service to initiate a refund of your order")
	}

	render() {
		return this.props.invoices.map((invoices) => (
			<tr>
			<th>{invoices.invoicenum}</th>
			<th>{invoices.address1}<br/>{invoices.address2}</th>
			<th>{invoices.date}</th><th>{invoices.esttime}</th>
			<th>{invoices.status}</th>
			{this.getButtons(invoices.status)}
			</tr>
		));
	}
}

export default InvoiceTable;