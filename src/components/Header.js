import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1> COVID-19 Tracker</h1>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Locations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Saved Locations</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    )
  }
}
