import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import React from 'react';

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
      <Header />
      <Main />
      <Footer />
      
    </div>
  );
}
}
export default App;
