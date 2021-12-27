import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import LoginButon from "./LoginButon.js";
import ZipForm from "./ZipForm.js";

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className='mainComp'>
          <LoginButon />
          <Button />
          <ZipForm id='zipform' />
        </div>
      </div>
    );
  }
}
