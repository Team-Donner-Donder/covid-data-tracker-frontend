import React, { Component } from 'react'
import ZipForm from './ZipForm.js'
import Button from 'react-bootstrap/Button'



export default class Main extends Component {
  render() {
    return (
      <div>
        <div className="mainComp">
          <Button />
          <ZipForm id="zipform" />
        </div>
      </div>
    )
  }
}
