import React, {Component} from 'react';
import './Navbar.css';
import { slide as Menu } from 'react-burger-menu';
import Dropdown from 'react-bootstrap/Dropdown'
import NavLogo from './empty_user.png'



class NavBar extends Component {
    render() { return ( <div className="mt-3">
        <Menu right className="bg-light" >
          <a id="home" className="menu-item text-light" href="/">Home</a>
          <a id="about" className="menu-item" href="#">Cities</a>
        </Menu>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            <img src={NavLogo} className= 'nav-user' alt='user menu'></img>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Create Account</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
}
}

export default NavBar;