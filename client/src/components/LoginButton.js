import React, {Component} from 'react';
import '../styles/App.css'
import {Link} from "react-router-dom";


class LoginButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            href: `/login`
        }
    }

    checkLogin=()=> {
  
        if ((localStorage.token)) {
        const jwtDecode = require('jwt-decode');
         if  (new Date(jwtDecode(localStorage.token).exp*20000).toLocaleString("es-AR") > new Date().toLocaleString("es-AR")) {
            
            this.setState({
              href: `/profile/${localStorage.token}`
            })
         
            console.log(this.state)
            }  else {
            console.log('token vencido')
            } 
        }
    }
      
    componentDidMount() {
        this.checkLogin()
    }
    

    render() 
        { return ( 
            <div className="text-center mt-4">
                 <Link to={this.state.href}>Login</Link>
                 {/* agregar codigo para mostrar "login" o "profile" dependiendo de token valido si o no */}
            </div>
);
}
}

export default LoginButton;