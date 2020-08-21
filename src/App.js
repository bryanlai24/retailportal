import React, { Component } from 'react';
import PortalHeader from './components/PortalHeader';
import InvoiceTable from './components/InvoiceTable';

import styles from './portal.css';
import logo from './logo.svg';

class App extends Component {
  state = {
    info: [
      {
        name: "Bryan Lai"
      }
    ],
    invoices: [
      {
        invoicenum: "240820IWFG",
        address1:"12345 Main Street",
        address2:"San Diego, CA 92128",
        date: "08/31/2020",
        esttime: "N/A",
        status: "In Warehouse"
      },
      {
        invoicenum: "180820MXIR",
        address1:"12345 Main Street",
        address2:"San Diego, CA 92128",
        date: "08/25/2020",
        esttime: "10am",
        status: "Set for Delivery"
      },
      {
        invoicenum: "060520KLOM",
        address1:"12345 Main Street",
        address2:"San Diego, CA 92128",
        date: "05/13/2020",
        esttime: "10am",
        status: "Delivered"
      }
    ]
  }
  render() {
    const maindiv = {
      position:"absolute",
      overflowY:"auto",
      backgroundColor: "white",
      padding: "20px",
      top:"97.5px",
      height:"720px"
    }
    return (
      <div style={maindiv}>
        <PortalHeader info={this.state.info}/>
        <table>
          <tr style={{backgroundColor:"#f4f4f4"}}>
            <th style={{width:"290px"}}>Invoice #</th>
            <th style={{width:"317px"}}>Shipping Address</th>
            <th style={{width:"290px"}}>Scheduled Date</th>
            <th style={{width:"290px"}}>Estimated Time</th>
            <th style={{width:"290px"}}>Status</th>
            <th style={{width:"290px"}}>Actions</th>
          </tr>
          <InvoiceTable invoices={this.state.invoices}/>
        </table>
      </div>
    )
  }
}

export default App;
