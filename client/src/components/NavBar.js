import React, {Component} from 'react';
import '../styles/Navbar.css';
import { slide as Menu } from 'react-burger-menu';
import Dropdown from 'react-bootstrap/Dropdown'
import NavLogo from '../images/empty_user.png'


//mi navbar deberia recibir como props el state de redux, si hay usuario, mostrar su info

class NavBar extends Component {
    render() { return ( <div className="ml-4 mr-4 mb-4 mt-0 pt-4">
        <Menu right className="bg-light" >
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/cities">Cities</a>
        </Menu>
        <Dropdown left>
          <Dropdown.Toggle id="dropdown-basic">
            <img src={NavLogo} className= 'nav-user' alt='user menu'></img>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item  href="/login">Login</Dropdown.Item>
            <Dropdown.Item  href="/account">Create Account</Dropdown.Item>
            {/* <Dropdown.Item  href="/profile">Profile</Dropdown.Item>  */}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
}
}

export default NavBar;