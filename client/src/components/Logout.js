import React, {Component} from 'react';
import '../styles/App.css'
import {Redirect} from "react-router-dom";
import {userLogout} from '../actions/usersActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


class Logout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigate: false
        }
    }
    static propTypes = {
        dispatch: PropTypes.func,
        };


    logout=()=>{
        localStorage.clear();
        this.props.dispatch(userLogout());
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

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    }
}

export default connect(mapStateToProps)(Logout); 
