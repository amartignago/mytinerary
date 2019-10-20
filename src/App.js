import React, {Component} from 'react';
import logo from './MYtineraryLogo.png'; //se podria obviar este import y poner el link en src?
import homeIcon from './homeIcon.png';
import BrowsingMenu from './BrowsingMenu.js';
import './App.css';

class App extends Component {
  render() { return ( <div>
      <head>
        <title>MYtinerary</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
        integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
        crossorigin="anonymous"></link>
      </head>
      <header>
        <img src={logo} className="App-logo" alt="logo"/>
      <div>
        <span>Find your perfect trip, designed by insiders who know and love their cities.</span>
      </div>
      </header>
      <div>
        <BrowsingMenu></BrowsingMenu>
      </div>
      <footer>
        <img src={homeIcon} alt="homeIcon"/>
      </footer>
    </div>
  );
}
}

export default App;
