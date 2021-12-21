import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
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

  handleDelete = () => {
    this.setState({ zip });
    this.delete()
  }

  componentDidMount() {
    this.get();
  }

  get = async () => {
    const url = `${process.env.SERVER_URL}`;
    let result = await axios.get(url)

    console.log('Result.data: ', result.data)
  }

  delete = async () => {
    try {
      const url = `${process.env.SERVER_URL}`;
      let result = await axios.get(url);
      let filteredData = this.state.zip.filter(zip => zip);
      this.setState({ zip: updatedChart });
    } catch (e) {
      console.error(e);
    }
  }

  Chart = async () => {

    axios.get("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }


  render() {
    return (
      <div>
        <Card className="text-center" border="primary" style={{ width: '18rem', marginLeft: '42.5%' }}>
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
            <Button onClick={this.handleDelete}>
              Delete</Button>
          </Form>
        </Card>
      </div>
    )
  }
}
