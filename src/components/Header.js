import React from 'react'
import  {Component}  from 'react'
import  {Nav}  from 'react-bootstrap'

export default class Header extends Component {
  render() {
    return (

        <>
        <h1> COVID-19 Tracker</h1>
        <Nav className="justify-content-center" variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Data">Data</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/About">About Us</Nav.Link>
          </Nav.Item>
        </Nav>
        
        </>
    
    )
  }
}
