import React, {Component} from 'react';
import circledRight from '../images/circled-right-2.png';
import '../styles/App.css';
import LoginButton from './LoginButton'
import {
  Link
} from "react-router-dom";

class BrowsingMenu extends Component {
  render() { return ( 
      <div className="text-center">
        <h1>Start Browsing</h1>
        <div className="container responsiveDiv">
          <Link to="/cities">
            <img src={circledRight} className="browsing-icon" alt="browsing logo"></img>
          </Link>
        </div>
        <div>
          <span>Want to build your own Mytinerary?</span>
        </div>
        <div className="d-flex justify-content-around">
          <LoginButton></LoginButton>
          <Link to="/Account">Account</Link> 
          {/* crear componente para account button */}
        </div>
      </div>

  );
}
}

export default BrowsingMenu;
