import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ZipForm from './ZipForm'
import Chart from './Chart'


export default class DataTable extends Component {
  render() {
    return (
      <div>
        <Card className="text-center" border="primary" style={{ width: '30rem', marginLeft: '38%'}}>
        <Table responsive="sm" size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <Button onClick={this.handleDelete}> Delete </Button>
       
          </tbody>
          {/* { */}
            {/* // this.props.zip.map((zip, idx) => 
            // <ZipForm key={idx} zipData={zip} handleDelete={this.props.handleDelete}
            // />
            //   )
          // } */}

        </Table>

        </Card>
        

      </div>
    )
  // }
}
}
