import React, {Component} from 'react';
import circledRight from './circled-right-2.png';
import './App.css';
import {
  Link
} from "react-router-dom";

class BrowsingMenu extends Component {
  render() { return ( 
      <div>
        <h1>Start Browsing</h1>
        <div>
          <img src={circledRight} className="browsing-icon" alt="browsing logo"></img>
          <div></div>
          <Link to="/cities">Cities</Link>
        </div>
        <div>
          <span>Want to build your own Mytinerary?</span>
        </div>
        <div className="float-left">
          <Link to="/login">Log in</Link>
        </div>
        <div className="float-right">
          <Link to="/Account">Account</Link>
        </div>
      </div>

  );
}
}

export default BrowsingMenu;
