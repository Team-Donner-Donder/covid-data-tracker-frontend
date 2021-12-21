import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card  from 'react-bootstrap/Card'
import axios from 'axios'

export default class ZipForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      zip: {},

    }
  }
  handleClick = (e) => {
    e.preventDefault()
    // this.setState({ zip });
    this.get()
  };

  get = async () => { 
    const url = `http://localhost:3001/covidData`
    let result = await axios.get(url)

    console.log('Result.data: ', result.data)
  }

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
          <Button onClick={this.handleClick} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Card>
      </div>
    )
  }
}
