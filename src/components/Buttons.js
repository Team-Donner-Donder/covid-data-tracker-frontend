import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import  ButtonGroup  from 'react-bootstrap/ButtonGroup'

export default class Buttons extends Component {
  render() {
    return (
      <div>
        <ButtonGroup vertical>
          <Button>Add City</Button>
          <Button>Delete</Button>

        </ButtonGroup>
      </div>
    )
  }
}
