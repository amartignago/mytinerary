import React, {Component} from 'react';
import logo from './MYtineraryLogo.png'; //se podria obviar este import y poner el link en src?
import './App.css';



class Header extends Component {
  render() { return ( <div className="header">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo"/>
        <div className="subtitle, margin-browse"> 
          <h4>Find your perfect trip, designed by insiders who know and love their cities.</h4>
        </div>         
      </header>
  </div>
  );
}
}

export default Header;
