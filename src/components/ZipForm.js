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
      dailyData: [],

    }
  }

  handleClick = (e) => {
    e.preventDefault()
    const city = {
      selected_State: e.target.name.value,

    }
    // this.setState({ zip });
    this.getHistoricData()
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
    const url = `${process.env.REACT_APP_SERVER_URL}/coviddata`;
    let result = await axios.get(url)
    this.setState({ historicData: result.data })
    // console.log('Result.data: ', result.data)
  }

  delete = async (id) => {
    console.log(`id:${id}`)

      if (this.props.auth0.isAuthenticated) {
        const response = await this.props.auth0.getIdTokenClaims()
        const jwt = response.__raw;

        const config = {
          method: 'delete',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: `/data/${id}`,
          headers: { "Authorization": `Bearer ${jwt}` }
        }
        try {
          await axios(config)
          let filteredData = this.state.zip.filter(data => data._id !== id);
          this.setState({ dailyData: filteredData })
          console.log(this.state.dailyData);


        } catch (e) {
          console.error(e);
        }
      }
    }
  
  
  
      //   // if (this.props.auth0.isAuthenticated) {
      //     try { 
      //       const res = await this.props.auth0.getIdTokenClaims();

      //       const jwt = res.__raw;

      //       const config = {
      //         headers: { "Authorization": `Bearer ${jwt}` },
      //         method: 'delete',
      //         baseURL: process.env.REACT_APP_SERVER_URL,
      //         url: `coviddata/data`,
      //         data: covoidata
      //       }
      //       const response = await axios(config);
      //       if (response.status === 204) {
      //         this.getHistoricData();
      //       } else {
      //         alert(response.status);
      //       }
      //     }
      //     catch (error) {
      //       alert(error.toString());
      //     }
      //   }

      // }


      getCurrentData = async (input) => {
        let url = `${process.env.REACT_APP_SERVER_URL}/currentData?state=${input}`
        // console.log('input', input.selected_State)
        console.log('url', url)
        try {
          const results = await axios.get(url)
          this.setState({
            selected_State: input,
            dailyData: results.data
          })
          console.log('results', results.data)
          console.log(this.state.dailyData)
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
                  <Form.Label>State/Province</Form.Label>
                  <Form.Control name='name' type="text" placeholder="State or Province here" />
                  <Form.Text className="text-muted">
                    This is to search for the city you want to learn more about!
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Button onClick={this.handleDelete}>
                  Delete</Button>
              </Form>
            </Card>
            <DataTable getCurrentData={this.state.dailyData} handleDelete={this.handleDelete} />
            <Chart historicData={this.state.historicData} />

          </div>
        )
      }
    }
  