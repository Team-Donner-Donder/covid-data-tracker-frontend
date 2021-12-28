import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";



export default class DataTable extends Component {

  render() {

    return (
      <div>

        <Card
          className='text-center'
          border='primary'
          style={{ width: "30rem", marginLeft: "38%" }}
        >

          <Accordion defaultActiveKey='0'>
            {this.props.getCurrentData.data?.map((info, idx) => (
              <Accordion.Item eventKey='0'>
                <Accordion.Header>
                  {info.region.province} {info.date}
                </Accordion.Header>
                <Accordion.Body>
                  Active Cases: {info.confirmed}
                  <br></br>
                  Last Updated: {info.last_update}
                  <br></br>
                  Total Death: {info.deaths}
                </Accordion.Body>
                <Button onClick={() => this.props.delete(info._id)}> Delete </Button>
              </Accordion.Item>
            ))}


          </Accordion>
          <Accordion defaultActiveKey='0'>
            {this.props.mongoData.map((info, idx) => (
              <Accordion.Item eventKey={idx}>
                <Accordion.Header>
                  {info.province} {info.last_update}
                </Accordion.Header>
                <Accordion.Body>
                  Active Cases: {info.confirmed}
                  <br></br>
                  Total Death: {info.deaths}
                </Accordion.Body>
                <Button onClick={() => this.props.delete((info._id))}> Delete </Button>
              </Accordion.Item>
            ))}
          </Accordion>




        </Card>
      </div>
    );
    // }
  }
}
