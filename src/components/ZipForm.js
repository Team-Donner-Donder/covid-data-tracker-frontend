import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card  from 'react-bootstrap/Card'

export default class ZipForm extends Component {
  render() {
    return (
      <div>
        <Card className="text-center" border="primary" style={{ width: '18rem', marginLeft: '42.5%'}}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Enter Zip Code Here" />
            <Form.Text className="text-muted">
              This is search for the city you want to search!
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Card>
      </div>
    )
  }
}
