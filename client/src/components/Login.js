import React, {Component} from 'react';
import NavBar from './NavBar';
import '../styles/App.css'
import {Link} from "react-router-dom";
import LoginForm from './LoginForm';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {GoogleLogin} from 'react-google-login';


const port = 'http://localhost:5000'

const responseGoogle = (response) => {
    console.log(response);
  }

class Login extends Component {
    render() { return ( <div>
        <NavBar></NavBar>
        
        <LoginForm></LoginForm>

        {/* <Button> 
            <a  href="http://localhost:5000/auth/google">Login with Google</a> 
            {/* add backend route */}
        {/* </Button>       */} 

        <GoogleLogin
        clientId="719773766003-k4nbpjqs5t4arpuo285br1hcrniv4kmb.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        />,
       {document.getElementById('googleButton')}


        <p className="m-4">Don't have a Mytinerary Account yet? You should create one! It's totally free and only takes a minute.</p>
        <Link to="/account">Create Account</Link>
    </div>
);
}
}

export default Login;