import React, { Component } from 'react'
import Buttons from './Buttons.js'
import DataTable from './DataTable.js'
import ZipForm from './ZipForm.js'



export default class Main extends Component {
  render() {
    return (
      <div>
        <div class="mainComp">
          <Buttons />
          <ZipForm id="zipform" />
        </div>
        <DataTable />
      </div>
    )
  }
}
