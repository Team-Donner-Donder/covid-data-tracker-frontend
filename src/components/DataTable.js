import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ZipForm from './ZipForm'

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
            <tr>
              <td>2</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <Button onClick={() => this.props.handleDelete()}>Delete</Button>
              {/* Not sure on what is suppose to go inside handleDelete */}
            </tr>
          </tbody>
          {
            this.props.zip.map((zip, idx) => 
            <ZipForm key={zip} zipData={zip} handleDelete={this.props.delete}
            />
            )
          }

        </Table>

        </Card>

      </div>
    )
  }
}
