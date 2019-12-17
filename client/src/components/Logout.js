import React, {Component} from 'react';
import '../styles/App.css'
import {Redirect} from "react-router-dom";


class Logout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigate: false
        }
    }

    logout=()=>{
        localStorage.clear();
        this.setState({navigate:true})
    }

    render() { 
        const {navigate} = this.state;

        if (navigate) {
            return <Redirect to="/" push={true}/>;
        } else {
        return <button onClick={this.logout}>Logout</button>;
        }    
    }
}

export default Logout;