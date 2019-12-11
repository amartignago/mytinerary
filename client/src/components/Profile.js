import React, {Component} from 'react';
import NavBar from './NavBar.js'
import '../styles/App.css'
import {connect} from 'react-redux';
import {storeTokenUser} from '../actions/usersActions';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'

import { resetState } from 'redux-localstore';


let jwtDecode = require('jwt-decode');

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    this.sendUserToState = this.sendUserToState.bind(this);
  
    }
  
    static propTypes = {
        dispatch: PropTypes.func,
      }
    
    //sacar la validacion del tipo de token a esta funcion!
    // validateTokenType (token) {
    //     if(this.props.match.params.token && typeof this.props.match.params.token =='string') {
        
    //     }  
    // }
      
   
    
    async sendUserToState() {     //store token and decoded info in redux state
        if(this.props.match.params.token && typeof this.props.match.params.token =='string') {
            const token = this.props.match.params.token
            const decodedToken = jwtDecode(token)    
            this.props.dispatch(storeTokenUser(token, decodedToken))
        }
    }

    componentDidMount() {
        this.sendUserToState() //agregar reduz local storage para persistir
    }

    render() { 
        //check if there is a valid token:   
        if((this.props.match.params.token && typeof this.props.match.params.token =='string') || (this.props.localToken && typeof this.props.match.params.token =='string'))
        { 
            const token = this.props.match.params.token || this.props.localToken
            const decodedToken = jwtDecode(token,  { header: true }) 
                if (new Date(decodedToken.exp*60).toLocaleString("es-AR") > new Date().toLocaleString("es-AR")) {
                    return (
                        <div className="container">
                            <NavBar/>
                            <div className="text-center">
                                <h1 className="h1Title mb-4">Profile Page</h1>
                                <span> hola soy {decodedToken.username}</span>
                                {/* <div>
                                    <button onClick = {this.logoutUser} >
                                        Logout
                                    </button>
                                </div> */}
                            </div>
                    </div> )
                } else {
                    return (<Redirect to='/login'/>)
                }
        } else {
            return (<Redirect to='/login'/>)
        }
    }
}

const mapStateToProps = (state) => { 
    return {
        // localUser: userReducer.user.user, //ESTO NO ME ESTA FUNCIONANDO!
        // localToken: userReducer.user.token 

        //google token is obtained by param, user info is obtained by decoding the token    
    }
} 

export default connect(mapStateToProps)(Profile); // 


//clean local storage:
//const storedToken = localStorage.getItem("token");
// if (storedToken){
//     let decodedData = decode(storedToken, { header: true });
//     let expirationDate = decodedData.exp;
//      var current_time = Date.now() / 1000;
//      if(expirationDate < current_time)
//      {
//          localStorage.removeItem("token");
//      }
//   }