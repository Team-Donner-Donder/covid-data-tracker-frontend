import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import React from 'react';
import Data from './components/Data.js';
import {
  BrowserRouter,
  Routes,
  Route, 
}from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }


 render() {
  return (
    <div>
 <BrowserRouter>
            <Header />
          <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route exact path="/Data" element={<Data/>} />
            <Route exact path="/About" element={<About/>} />
        </Routes>
          <Footer />
      </BrowserRouter>
      </div>
  );
}
}
export default App;





