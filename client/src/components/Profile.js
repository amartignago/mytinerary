import React, {Component} from 'react';
import NavBar from './NavBar.js'
import '../styles/App.css'
import {connect} from 'react-redux';
import {storeTokenUser} from '../actions/usersActions';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import urlImages from './constants';
import Image from 'react-bootstrap/Image';


// import { resetState } from 'redux-localstore';

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
    
    //sacar la validacion del tipo de token a esta funcion
    // validateTokenType (token) {
    //     if(this.props.match.params.token && typeof this.props.match.params.token =='string') {
        
    //     }  
    // }
    decodeToken = (token) => {
       return jwtDecode(token)
    }
      
    async sendUserToState() {  
        if(this.props.match.params.token && typeof this.props.match.params.token =='string') {
            //if there is a token, and if the token is a string (not null or undefined), otherwise it breaks when render
            const token = this.props.match.params.token
            const decodedToken =  this.decodeToken(token) 
            this.props.dispatch(storeTokenUser(token, decodedToken)) //store token and decoded info in redux state
        }
    }

    componentDidMount() {
        this.sendUserToState() 
    }

    render() { 
        //check if there is a token and if it's a string:  (ver, validacion no funciona con token undefined) 
        if(this.props.match.params.token && typeof this.props.match.params.token =='string') { 
            const token = this.props.match.params.token
            const decodedToken =  this.decodeToken(token)
            const decodedImage = decodedToken.avatarPicture
            //check if the token is still valid:
            if (new Date(decodedToken.exp*5000).toLocaleString("es-AR") > new Date().toLocaleString("es-AR")) {
                // set user image
                //1. default user image:
                let imageToRender = `${urlImages.urlImages}/images/users/default-avatar.png` 
                if (decodedImage==null || decodedImage==undefined ) {
                    //2. avoid nulls & undefined:
                    imageToRender = imageToRender
                } else if  (decodedImage && decodedImage.toLowerCase().startsWith("images")) {
                    //3. local server image:
                    imageToRender = `${urlImages.urlImages}/${decodedImage}`    
                } else if (decodedImage.toLowerCase().includes("google")) {
                    //4. google image:
                    imageToRender = decodedImage
                }
                //render profile:
                return (
                    <div className="container">
                        <NavBar/>
                        <div className="text-center">
                            <h1 className="h1Title mb-4">Profile Page</h1>
                            <div className="text-center">
                                <Image src={imageToRender} roundedCircle className="mb-3 userImg img-responsive center-block"/>
                            </div>
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
        //token is obtained by param, user info is obtained by decoding the token    
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