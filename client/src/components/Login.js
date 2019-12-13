import React, {Component} from 'react';
import NavBar from './NavBar';
import '../styles/App.css'
import {Link} from "react-router-dom";
import LoginForm from './LoginForm';


class Login extends Component {
    render() { return ( <div>
        <NavBar></NavBar>
        
        <LoginForm></LoginForm>

        <div className="text-center mt-4">
            <a  href="http://localhost:5000/auth/google" className="text-center">Login with Google</a> 
            <p className="m-4">Don't have a Mytinerary Account yet? You should create one! It's totally free and only takes a minute.</p>
            <Link to="/account">Create Account</Link>
        </div>
    </div>
);
}
}

export default Login;