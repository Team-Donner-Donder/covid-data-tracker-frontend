import React, { Component } from "react";
import ZipForm from "./ZipForm.js";






export default class Main extends Component {
  
  render() {
    return (
      <div>
        <div className='mainComp'>
          <ZipForm id='zipform' />
        </div>
      </div>
    );
  }
}
