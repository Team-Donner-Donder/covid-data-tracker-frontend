import React from 'react'
import  {Component}  from 'react'
import  {Nav}  from 'react-bootstrap'
import Profile from "./Profile.js";

export default class Header extends Component {
  render() {
    return (

        <>

        <h1> COVID-19 Dashboard</h1>
        <div className='profile tag'>
        <Profile />
        </div>
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
