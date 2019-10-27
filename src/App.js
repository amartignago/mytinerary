import React, {Component} from 'react';
import Login from './Login.js';
import Cities from './Cities.js';
import Account from './Account.js';
import Home from './Home.js';
import Footer from './Footer.js';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class App extends Component {
  render() { return ( 
  <Router>
    <div className="App"> 
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/cities">
          <Cities />
        </Route>
      </Switch>
      <div className="footer">
        <Footer></Footer>
      </div>   
    </div>
  </Router>
  );
}
}

export default App;
