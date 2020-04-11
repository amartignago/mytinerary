import React, {Component} from 'react';
import '../styles/Navbar.css';
import { slide as Menu } from 'react-burger-menu';
import Dropdown from 'react-bootstrap/Dropdown'
import NavLogo from '../images/empty_user.png'
import LoginButton from './LoginButton'




//mi navbar deberia recibir como props el state de redux, si hay usuario, mostrar su info

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
        
    }
  }
    render() { return (
      
      <div className="ml-4 mr-4 mb-4 mt-0 pt-4">
        <Menu right className="bg-light" >
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/cities">Cities</a>
        </Menu>
        <Dropdown left>
          <Dropdown.Toggle id="dropdown-basic">
            <img src={NavLogo} className= 'nav-user' alt='user menu'></img>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <LoginButton></LoginButton>
            </Dropdown.Item>
            <Dropdown.Item  href="/account">Create Account</Dropdown.Item>
            {/* crear componente para accountButton  */}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
}
}

export default NavBar;