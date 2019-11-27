import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../styles/App.css'
import {Link} from "react-router-dom";


class AccountForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          terms: true,
          username:"",
          password:"",
          email:"",
          firstName:"",
          lastName:"",
          submitBtn:true

        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  

    render() { return ( <div className="text-center">

    <h3 className="mb-5">Create Account</h3>
    <Form className="w-100"> 
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
        <Form.Group as={Row} controlId="email" className="inlineForm">
            <Form.Label column xs={3} className="ml-3"><span className="itinText font-weight-bold">Email:</span></Form.Label>
            <Col xs={8}>
                <input
                    className="col-xs-4 text-right"
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
                    className="col-xs-4 text-right"
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
                    className="col-xs-4 text-right"
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
                className="col-xs-4 text-right"
                name="terms"
                type="checkbox"
                checked={this.state.terms}
                onChange={this.handleInputChange} />
            <Form.Label column xs={10} className="ml-3 text-left">
                <span className="itinText">I agree to MYtinerary's <Link>Terms & Conditions</Link></span>
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

export default AccountForm;