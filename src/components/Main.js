import React, { Component } from "react";
import ZipForm from "./ZipForm.js";
// import Profile from "./Profile.js";





export default class Main extends Component {
  
  render() {
    return (
      <div>
        <div className='mainComp'>
          {/* <Profile /> */}
          <ZipForm id='zipform' />
        </div>
      </div>
    );
  }
}
