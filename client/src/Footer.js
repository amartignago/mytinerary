import React, {Component} from 'react';
import homeIcon from './homeIcon.png';
import './App.css';
import {
  Link
} from "react-router-dom";

//agregar css pointer-events: none css. 

class Footer extends Component {
  render() { return ( <div>
      <Link to="/"> 
        <img src={homeIcon}  className="footer-icon" alt="homeIcon"/> 
      </Link> 
  </div>
  );
}
}

export default Footer;