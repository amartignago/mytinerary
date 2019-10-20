import React, {Component} from 'react';
import circledRight from './circled-right-2.png';
//import './App.css';

class BrowsingMenu extends Component {
  render() { return ( <div>
      <div>
        <h1>Start Browsing</h1>
        <div>
          <img src={circledRight} alt="browsing logo"></img>
        </div>
        <div>
          <span>Want to build your own Mytinerary?</span>
        </div>
        <div className="float-left">
          <a href="#">Log in</a>
        </div>
        <div className="float-right">
          <a href="#">Create Account</a>
        </div>
      </div>
    </div>
  );
}
}

export default BrowsingMenu;
