import React, {Component} from 'react';
import NavBar from './NavBar.js'
import '../styles/App.css'
import {connect} from 'react-redux';
import {fetchLoginGoogle, storeToken} from '../actions/usersActions';
import PropTypes from 'prop-types';


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
    
    async sendUserToState() {     
        const userID = this.props.match.params.userID
        const token = this.props.match.params.token
        await this.props.dispatch(fetchLoginGoogle(userID));
            this.props.dispatch(storeToken(token))
           
    }

    componentDidMount() {

        this.sendUserToState();
       
    }

render() { 
    const user = this.props.user

    return ( <div className="container">
        <NavBar/>
        <div className="text-center">
            <h1 className="h1Title mb-4">Profile Page</h1>
        </div>
</div>
 )}

}
//user.token

const mapStateToProps = (state) => { // state del storage como props para ESTE componente
    console.log(state);
    return {
        user: state.userReducer.user // prop cities que va a ser manejada por X reducer
    }
} 

export default connect(mapStateToProps)(Profile); // 