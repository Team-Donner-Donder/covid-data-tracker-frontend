import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import DataTable from './DataTable'
import Chart from './Chart'
export default class ZipForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      zip: {},
      historicData: {},
      selected_State: '',

    }
  }
  handleClick = (e) => {
    e.preventDefault()
    const city = {
      selected_State: e.target.name.value,

}
    // this.setState({ zip });
    this.getHistoricData(city)
    this.getCurrentData(city.selected_State)
  };

  handleDelete = () => {
    // this.setState({ zip });
    this.delete();
    console.log('hey its deleted');
  }

  handleCurrentCityClick = () => {
    
  }

  componentDidMount() {
    this.getHistoricData();
  }

  getHistoricData = async () => {
    const url = `http://localhost:3001/coviddata`;
    let result = await axios.get(url)
    this.setState({ historicData: result.data })
    // console.log('Result.data: ', result.data)
  }

  delete = async () => {
    const url = `${process.env.REACT_APP_SERVER_URL}`;
    try {
      await axios.delete(url);
      let filteredData = this.state.zip.filter(zip => zip);
      this.setState({ zip: filteredData });
    } catch (e) {
      console.error(e);
    }
  }


  getCurrentData = async (input) => {
    let url = `${process.env.REACT_APP_SERVER_URL}/currentData?state=${input}`
    // console.log('input', input.selected_State)
    console.log('url',url)
    try {
      const results = await axios.get(url)
      this.setState({ selected_State: input })
      console.log('results', results.data)
    } catch (e) {
      console.error(e.message);
    }

  }

  Chart = async () => {

    axios.get("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => {
        // console.log(res);
      })
      .catch(err => {
        // console.log(err);
      })
  }




  render() {
    
    return (
      <div>
        <Card className="text-center" border="primary" style={{ width: '18rem', marginLeft: '42.5%' }}>

          <Form onSubmit={this.handleClick}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control name='name' type="text" placeholder="Enter Zip Code Here" />
              <Form.Text className="text-muted">
                This is search for the city you want to search!
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button  onClick={this.handleDelete}>
              Delete</Button>
          </Form>
        </Card>
        <DataTable handleDelete={this.handleDelete} />
        <Chart historicData={this.state.historicData} />

      </div>
    )
  }
}
