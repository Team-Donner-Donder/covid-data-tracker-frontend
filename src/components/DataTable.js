import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ZipForm from './ZipForm'
import Chart from './Chart'
import { Accordion } from 'react-bootstrap'


export default class DataTable extends Component {
 
  render() {
    {console.log('datatable', this.props.getCurrentData)}
    {console.log('Date', this.props.getCurrentData)}
    return (
      <div>
        <Card className="text-center" border="primary" style={{ width: '30rem', marginLeft: '38%'}}>
        <Accordion defaultActiveKey='0' >
          {/* <thead>
            <tr>
              <th>State/Province</th>
              <th>Last Updated</th>
              <th>Total Active Cases</th>
              <th>Total Deaths</th>
              <th>{}</th>
            
            </tr>
          </thead>
          <tbody> */}
           
          {
              this.props.getCurrentData.data?.map(( info, idx) =>
             ( <Accordion.Item eventKey='0'>
               <Accordion.Header>{info.region.province} {info.date}</Accordion.Header>
               <Accordion.Body>
               Active Cases: {info.active}
               <br></br>
               Last Updated: {info.last_update}
               <br></br>
               Total Death: {info.deaths}
               </Accordion.Body>
             </Accordion.Item>
             
              )
                
              )
            }
          
            
            {/* <tr> */}
              {/* <td>Some State</td>
              <td>Something Last Updated</td>
              <td>Something Active Cases</td>
              <td>Something Deaths</td> */}
              <Button onClick={this.handleDelete}> Delete </Button>
            {/* </tr>
       
          </tbody>
          { */}
            {/* // this.props.zip.map((zip, idx) => 
            // <ZipForm key={idx} zipData={zip} handleDelete={this.props.handleDelete}
            // />
            //   )
          // } */}

        </Accordion>

        </Card>
        

      </div>
    )
  // }
}
}
