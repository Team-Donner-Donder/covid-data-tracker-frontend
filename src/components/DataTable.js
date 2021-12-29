import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Container} from 'react-bootstrap'
import { ListGroup,ListGroupItem,CardGroup,Row,Col } from "react-bootstrap";


export default class DataTable extends Component {

  render() {

    return (
      <div>
        <Container fluid>
        
        <CardGroup>
        <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col> 
        <Card
          className='text-center'
          border='primary'
          style={{ width: "30rem", marginLeft: "38%" }}
        >

          <Card style={{width: '18rem'}} border="primary">
            {this.props.getCurrentData.data?.map((info, idx) => (
              <Card.Body eventKey='0'>
                <Card.Header>
                  {info.region.province} {info.date}
                </Card.Header>
                <ListGroup className="list-group-flush">
                <ListGroupItem>Active Cases: {info.confirmed}</ListGroupItem>
                  
                  <ListGroupItem>Last Updated: {info.last_update}</ListGroupItem>
                  
                  <ListGroupItem>Total Death: {info.deaths}</ListGroupItem>
                </ListGroup>
                <Button onClick={() => this.props.add(info)}> Add State/Province </Button>
              </Card.Body>
            ))}


          </Card>
          <Card style={{width: '18rem'}} border="danger">
            {this.props.mongoData.map((info, idx) => (
              <Card.Body >
                <Card.Header>
                <ListGroupItem>{info.province} {info.last_update}</ListGroupItem>
                </Card.Header>
                <Card.Body>
                <ListGroupItem>Active Cases: {info.confirmed}</ListGroupItem>
                  
                  <ListGroupItem> Total Death: {info.deaths}</ListGroupItem>
                </Card.Body>
                <Button onClick={() => this.props.delete((info._id))}> Delete </Button>
              </Card.Body>
            ))}
          </Card>




        </Card>
        </Col>
  ))}</Row>
  </CardGroup>
        </Container>
      </div>
    );
    // }
  }
}
