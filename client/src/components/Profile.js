import React, {Component} from 'react';
import NavBar from './NavBar.js'
import '../styles/App.css'
import {connect} from 'react-redux';
import {storeTokenUser, getFavs} from '../actions/usersActions';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import urlImages from './constants';
import Image from 'react-bootstrap/Image';
import Logout from './Logout'

//let localStorage = window.localStorage;

let jwtDecode = require('jwt-decode');
const now = (Date.now().valueOf() / 1000)

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
    
  
    decodeToken = (token) => {
        if (token === undefined) {
            console.log('token is undefined')
           
        } else {
            return jwtDecode(token)
        }
    }
      
     async sendUserToState() {  
        if(this.props.match.params.token && typeof this.props.match.params.token =='string') {
            const token=this.props.match.params.token;
            //if there is a token, and if the token is a string (not null or undefined), otherwise it breaks when render
            const decodedToken =  this.decodeToken(token); 
            await this.props.dispatch(storeTokenUser(token, decodedToken)); //store token and decoded info in redux state
                //this.props.dispatch(getFavs(token, decodedToken.id))
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(decodedToken))
                localStorage.setItem('loggedIn', true)
        }
    }

    async componentDidMount() {
        await this.sendUserToState() 
        // Aca falta el fetch a getFavs para tener la info de los itinerarios favs del usuario y renderizarlo
    }

    render() { 
        const favItinsInfo = this.props.favItinsInfo
        if(typeof this.props.match.params.token ==undefined) {
            console.log('redirijo a login al inicio')
            return (<Redirect to='/login'/>)
        } else {
        //check if there is a token and if it's a string:  (ver, validacion no funciona con token undefined) 
        if(this.props.match.params.token && typeof this.props.match.params.token =='string') { 
            const token = this.props.match.params.token
            const decodedToken =  this.decodeToken(token)
            const decodedImage = decodedToken.avatarPicture
            const tokenTimeOut = decodedToken.exp
            //check if the token is still valid:
            //console.log( 'token', tokenTimeOut, 'now', now)
            if ( tokenTimeOut > now) {
                // set user image
                //1. default user image:
                let imageToRender = `${urlImages.urlImages}/images/users/default-avatar.png` 
                if (decodedImage===null || decodedImage===undefined ) {
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
                            <h1 className="h1Title mb-4">My Profile</h1>
                            <div className="text-center">
                                <Image src={imageToRender} roundedCircle className="mb-3 userImg img-responsive center-block"/>
                            </div>
                            <h3> {decodedToken.username}</h3> 
                        </div>
                        <div >
                            <h4>My Favourites:</h4>
                                <p>coming soon</p>
                                {/* Inserte info de favoritos aqui */}
                        </div>
                        <div className="text-center"> 
                            <Logout/>
                        </div>
                </div> )
            } else {
                console.log('redirijo porque expiro el token ', tokenTimeOut, 'ahora:', now)
                return (<Redirect to='/login'/>)
            }
        } else {
            console.log('redrijo porque no paso validacion "si hay token y es string"')
            return (<Redirect to='/login'/>)
        }
    }
}}

const mapStateToProps = (state) => { 
    return {
        //token is obtained by param, user info is obtained by decoding the token
        favItinsInfo: state.userReducer.favItins    
    }
} 

export default connect(mapStateToProps)(Profile); // 
