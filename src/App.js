import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import React from 'react';
import Data from './components/Data.js';
import Login from './components/Login.js';
import NotFound from './components/404.js'
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';

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



// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" component={Login}/>
//         <Route index component={Main} />
//         <Route path="/data" component={Data} />
//         <Route path="/about" component={AboutUs} />
//         <Route path="/*" component={NoPage} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));



// app.get("/covidData", covidData);
// app.get("/currentData", getCurrentData);
// app.get("/test", (request, response) => {
//   response.send("test request received");



// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/covidData">Covid Data</Link>
//             </li>
//             <li>
//               <Link to="/currentData">Current Data</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }



