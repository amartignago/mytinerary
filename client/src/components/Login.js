import React, {Component} from 'react';
import NavBar from './NavBar';
import '../styles/App.css'
import {Link} from "react-router-dom";
import LoginForm from './LoginForm';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Login extends Component {
    render() { return ( <div>
        <NavBar></NavBar>
        
        <LoginForm></LoginForm>

        <Button> 
            <Link to="#">Login with Google</Link> 
            {/* add backend route */}
        </Button>      

        <p className="m-4">Don't have a Mytinerary Account yet? You should create one! It's totally free and only takes a minute.</p>
        <Link to="/account">Create Account</Link>
    </div>
);
}
}

export default Login;