import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Container} from 'react-bootstrap'
import { ListGroup,ListGroupItem } from "react-bootstrap";


export default class DataTable extends Component {

  render() {

    return (
      <>
        <Container>
        
        <>
          
        <Card
          className='text-center'
          border='primary'
          style={{marginLeft:'22%', color: 'red', backgroundColor:'red'}}
        >

          <Card style={{width: '38rem', marginLeft:'22%'}} border="primary">
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
          {/* historic cards */}
          <Card style={{width: '65rem',display: 'flex', flexDirection: 'row'}} border="danger">
            {this.props.mongoData.map((info, idx) => (
              <Card style={{flex: 1}}>
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
              </Card>
              ))}
          </Card>




        </Card>
        </>
        </Container>
      </>
    );
    // }
  }
}
