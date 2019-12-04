import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../styles/App.css'
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {fetchNewUser} from '../actions/usersActions'
import {connect} from 'react-redux';
import ImageUploader from 'react-images-upload'

class AccountForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          avatarImage: [],  
          terms: false,
          username:"",
          password:"",
          email:"",
          firstName:"",
          lastName:""
        };

        this.createNewUser = this.createNewUser.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    static propTypes = {
        dispatch: PropTypes.func,
        };

    createNewUser() {
        this.props.dispatch(fetchNewUser(this.state));
      }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleImageChange = event => {
        this.setState({
            avatarImage: event.target.files[0]
        });
      } 
    

    handleForm(e){
        if(
            !this.state.terms ||
            this.state.username =="" ||
            this.state.password =="" ||
            this.state.email =="" ||
            this.state.firstName =="" ||
            this.state.lastName =="" 
        ){
            e.preventDefault()
        }
        e.preventDefault();
        
    this.createNewUser()    
    }
  

    render() { return ( <div className="text-center">

    <h3 className="mb-5">Create Account</h3>
    <Form className="w-100" onSubmit={(e)=>{this.handleForm(e)}}> 
        <Form.Group as={Row} controlId="username" className="inlineForm">
            <Form.Label column xs={3} className="ml-3"><span className="itinText font-weight-bold">User Image</span></Form.Label>
                <input 
                    type="file"
                    className="itinText"
                    value={null}
                    onChange={this.handleImageChange}/>        
        </Form.Group> 
        <Form.Group as={Row} controlId="username" className="inlineForm">
            <Form.Label column xs={3} className="ml-3"><span className="itinText font-weight-bold">Username:</span></Form.Label>
            <Col xs={8}>
                <input
                    className="col-xs-4 text-left itinText"
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
                    className="col-xs-4 text-left itinText"
                    name="password"
                    type="text"
                    value={this.state.password}
                    onChange={this.handleInputChange} />
            </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="email" className="inlineForm">
            <Form.Label column xs={3} className="ml-3"><span className="itinText font-weight-bold">Email:</span></Form.Label>
            <Col xs={8}>
                <input
                    className="col-xs-4 text-left itinText"
                    name="email"
                    type="text"
                    value={this.state.email}
                    onChange={this.handleInputChange} />
            </Col>
        </Form.Group>     
        <Form.Group as={Row} controlId="firstName" className="inlineForm">
            <Form.Label column xs={3} className="ml-3"><span className="itinText font-weight-bold">First Name:</span></Form.Label>
            <Col xs={8}>
                <input
                    className="col-xs-4 text-left itinText"
                    name="firstName"
                    type="text"
                    value={this.state.firstName}
                    onChange={this.handleInputChange} />
            </Col>
        </Form.Group> 
        <Form.Group as={Row} controlId="lastName" className="inlineForm">
            <Form.Label column xs={3} className="ml-3"><span className="itinText font-weight-bold">Last Name:</span></Form.Label>
            <Col xs={8}>
                <input
                    className="col-xs-4 text-left itinText"
                    name="lastName"
                    type="text"
                    value={this.state.lastName}
                    onChange={this.handleInputChange} />
            </Col>
        </Form.Group>  
        
        <Form.Group as={Row} controlId="country" className="inlineForm">
            <Form.Label column xs={3} className="ml-3"><span className="itinText font-weight-bold">Country:</span></Form.Label>
            <Col xs={2}>
                <Form.Control name="country" as="select">
                    <option>Choose...</option>
                    <option>England</option>
                    <option>France</option>
                    <option>Germany</option>
                    <option>Holland</option>
                    <option>Ireland</option>
                    <option>Spain</option>
                    <option>USA</option>
                </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group>
            <input
                className="col-xs-4 text-right itinText"
                name="terms"
                type="checkbox"
                checked={this.state.terms}
                onChange={this.handleInputChange} />
            <Form.Label column xs={10} className="ml-3 text-left">
                <span className="itinText">I agree to MYtinerary's <Link to="#">Terms & Conditions</Link></span>
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

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    }
}

export default connect(mapStateToProps)(AccountForm); 