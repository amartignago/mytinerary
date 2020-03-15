import React, {Component} from 'react';
import '../styles/App.css'
import {Link} from "react-router-dom";

const now = new Date().toLocaleString("es-AR")

//This button is NOT the login button inside the login form, is the login NAV button

class LoginButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Login",
            href: `/login`
        }
    }

    checkLogin=()=> {
  
        if ((localStorage.token)) {
        const jwtDecode = require('jwt-decode');
            if  (new Date(jwtDecode(localStorage.token).exp*20000).toLocaleString("es-AR") > now) {
            
                this.setState({
                name: 'Profile',
                href: `/profile/${localStorage.token}`
                
                })
            }  else {
            // console.log('token vencido')
            } 
        }
        // console.log('no hay token')
    }
      
    componentDidMount() {
        this.checkLogin()
    }
    

    render() 
        { return ( 
            <div className="text-center mt-4">
                 <Link to={this.state.href}>
                     {this.state.name}
                 </Link>
            </div>
        )}
}

export default LoginButton;