import React, {Component} from 'react';
import Routes from '../routes/Routes.js';
import Footer from './Footer.js';
import '../styles/App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() { return ( 
  <Router>
    
      <div className="App"> 
          <Routes></Routes>
        <div className="footer">
          <Footer></Footer>
        </div>   
      </div>
    
  </Router>
  );
}
}

export default App;
