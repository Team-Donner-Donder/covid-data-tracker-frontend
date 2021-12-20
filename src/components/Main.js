import React, { Component } from 'react'
import DataTable from './DataTable.js'
import ZipForm from './ZipForm.js'



export default class Main extends Component {
  render() {
    return (
      <div>
        <ZipForm />
        <DataTable />
      
      </div>
    )
  }
}
