import React from 'react'
import  {Component}  from 'react'
import  {Nav}  from 'react-bootstrap'
import Profile from "./Profile.js";
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';

export default class Header extends Component {
  render() {
    return (

        <>

        {/* <h1> COVID-19 Tracker</h1>
        <div className='profile tag'>
        <Profile />
        </div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        {/* <Nav className="justify-content-center" variant="tabs" defaultActiveKey="/home"> */}
         {/* <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem>{this.props.auth0.isAuthenticated && <Link to="/Data" className="nav-link">Data</Link>} </NavItem>
          <Nav.Item>
            <Nav.Link href="/About">About Us</Nav.Link>
          </Nav.Item>
        </Navbar> */} */}
{/* 
      //   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      //   <Navbar.Brand>My Favorite Books</Navbar.Brand>
      //   <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
      //   <NavItem>{this.props.auth0.isAuthenticated && <Link to="/profile" className="nav-link">Profile</Link>} </NavItem>
      //   <NavItem>{this.props.auth0.isAuthenticated && <LogoutButton />}</NavItem>
      // </Navbar>
        </> */}
        </>
    
    )
  }
}
