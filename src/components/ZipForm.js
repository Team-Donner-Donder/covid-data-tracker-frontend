import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import DataTable from './DataTable'
import Chart from './Chart'
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton'


class ZipForm extends Component {
  

  
  constructor(props) {
    super(props)
    this.state = {
      zip: [],
      historicData: {},
      selected_State: '',
      dailyData: [],
      zipcode: {},
      mongoData: [],


    }
  }

  handleClick = (e) => {
    e.preventDefault()
    const city = {
      city: e.target.name.value,
      zipcode: e.target.zipCode.value,
    }
    this.getCurrentData(city.city)
    this.getHistoricData(city.zipcode)

    
  }


  handleDelete = () => {
    
    this.deleteState();
    console.log('hey its deleted');
  }

  handleAddCityClick = () => {
    this.addData(this.state.dailyData.data[0])
  }
  

  componentDidMount() {
    this.getHistoricData();
    // this.props.isAuthenticated && this.getMongoData();
    this.getMongoData();
  }

  getHistoricData = async (zipcode) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/coviddata?zipcode=${zipcode}`;
    console.log(url)
    try {
      const results = await axios.get(url)
      this.setState({ historicData: results.data })

    } catch (e) {
      console.error(e.message);
    }
    // console.log('Result.data: ', result.data)
  }

  deleteState = async (id) => {
    console.log(`id:${id}`)

    if (this.props.auth0.isAuthenticated) {
      const response = await this.props.auth0.getIdTokenClaims()
      
      const jwt = response.__raw;

      const config = {
        method: 'delete',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/mongoData/${id}`,
        headers: { "Authorization": `Bearer ${jwt}` }
      }
      try {
        await axios(config)
        let newData = this.state.mongoData.filter(data => data._id !== id);
        this.setState({ mongoData: newData })


      } catch (e) {
        console.error(e);
      }
    }
  }


  getCurrentData = async (input) => {
    let url = `${process.env.REACT_APP_SERVER_URL}/currentData?state=${input}`
    console.log('url', url)
    try {
      const results = await axios.get(url)
      this.setState({
        selected_State: input,
        dailyData: results.data
      })

    } catch (e) {
      console.error(e.message);
    }


  }
  getMongoData = async () => {
    let url = `${process.env.REACT_APP_SERVER_URL}/mongoData`

    console.log('url', url)
    try {
      const results = await axios.get(url)
      console.log(results);
      this.setState({
        mongoData: results.data
        // dailyData: results.data,

      })
      console.log('results', results.data)
      console.log('mongo data', this.state.mongoData)
    } catch (e) {
      console.error(e.message);
    }
    

  }
  addData = async (data) => {


    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();

      const jwt = res.__raw;
      // axios npm
      const config = {
        method: 'post',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/mongoData',
        data: data,
        headers: { "Authorization": `Bearer ${jwt}`}
      }
    try {
      const dataResponse = await axios(config)
      console.log('Data Response ' + dataResponse.data)
      this.setState({ mongoData: [...this.state.mongoData, dataResponse.data ] });
    } catch (e) {
      console.error(e);
    }
  };
}

  render() {
    const {  isAuthenticated } = this.props.auth0;
    return (
      <div>
        
        
        
        <Card className="text-center" border="primary" style={{ width: '18rem', marginLeft: '42.5%' }}>
        
{        isAuthenticated ? (
      <Card style={{ width: '6rem' }}>

       
        
         
      </Card>
    ) : <LoginButton />}
        {isAuthenticated &&
          <Form onSubmit={this.handleClick}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>State/Province</Form.Label>
              <Form.Control name='name' type="text" placeholder="State or Province here" />
              <Form.Text className="text-muted">
                This is to search for the city you want to learn more about!
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="zipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="text" placeholder="98121" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>}
        </Card>
        {isAuthenticated &&
        <Card>
        <DataTable getCurrentData={this.state.dailyData} 
        delete={this.deleteState} 
        mongoData={this.state.mongoData}
        add={this.handleAddCityClick} />
        <Chart historicData={this.state.historicData} />
        </Card>
        }
      </div>
    )
  }
  }


export default withAuth0(ZipForm);
