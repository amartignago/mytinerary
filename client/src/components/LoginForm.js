import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../styles/App.css'
import {fetchLogin} from '../actions/usersActions';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username:"",
          password:"",
          remember:false,
          redirect: false
        };

        this.loginUser = this.loginUser.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }
  

    async loginUser() {
        await this.props.dispatch(fetchLogin(this.state));
            if (this.props.success) { //
                this.setState({
                    redirect: true
                })    
            }        
      }
  

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

     handleForm(e){
            if(
                this.state.username =="" ||
                this.state.password =="" 
            ){
                e.preventDefault()
            }
            e.preventDefault();
         this.loginUser()
    }

    render() { 
        const redirect  = this.state.redirect;
        if (redirect) {
            return <Redirect to={`/profile/${this.props.token}`}/>;
        } else {         
            return ( <div className="text-center">

                <h3 className="mb-5">Login</h3>
                <Form className="w-100" onSubmit={(e)=>{this.handleForm(e)}}> 
                    <Form.Group as={Row} controlId="username" className="inlineForm">
                        <Form.Label column xs={3} className="ml-3"><span className="itinText font-weight-bold">Username:</span></Form.Label>
                        <Col xs={8}>
                            <input
                                className="col-xs-4 text-right"
                                name="username"
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInputChange} />
                        </Col>
                    </Form.Group> 
                    <Form.Group as={Row} controlId="password" className="inlineForm">
                        <Form.Label column xs={3} className="ml-3"><span className="itinText font-weight-bold">Password:</span></Form.Label>
                        <Col xs={8}>
                            <input
                                className="col-xs-4 text-right"
                                name="password"
                                type="text"
                                value={this.state.password}
                                onChange={this.handleInputChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <input
                            className="col-xs-4 text-right"
                            name="remember"
                            type="checkbox"
                            checked={this.state.remember}
                            onChange={this.handleInputChange} />
                        <Form.Label column xs={10} className="ml-3 text-left">
                            <span className="itinText">Remember Me</span>
                        </Form.Label>
                    </Form.Group>   
                    <Button variant="secondary" type="submit" name="submitBtn">
                        OK
                    </Button>
                    
                </Form>
                </div>
            );
        }    
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.userReducer.token,
        success: state.userReducer.user.success
    }
}

export default connect(mapStateToProps)(LoginForm); 