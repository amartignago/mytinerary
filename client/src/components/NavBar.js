import React, {Component} from 'react';
import '../styles/Navbar.css';
import { slide as Menu } from 'react-burger-menu';
import Dropdown from 'react-bootstrap/Dropdown'
import NavLogo from '../images/empty_user.png'



class NavBar extends Component {
    render() { return ( <div className="m-4 mt-0">
        <Menu right className="bg-light" >
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/cities">Cities</a>
        </Menu>
        <Dropdown left>
          <Dropdown.Toggle id="dropdown-basic">
            <img src={NavLogo} className= 'nav-user' alt='user menu'></img>
          </Dropdown.Toggle>
        </Dropdown>
      </div>
    )
}
}

export default NavBar;