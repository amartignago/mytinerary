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
import Image from 'react-bootstrap/Image';
import { Redirect } from 'react-router-dom'

class AccountForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          avatarImage: [], 
          tempURL:null,
          terms: false,
          username:"",
          password:"",
          email:"",
          firstName:"",
          lastName:"",
          redirect: false
        };

        this.createNewUser = this.createNewUser.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    static propTypes = {
        dispatch: PropTypes.func,
        };

    async createNewUser() {     
        await this.props.dispatch(fetchNewUser(this.state));
        if (this.props.success) {
            //manejar la respuesta para que redirija solo si lo creo ok
            this.setState({redirect: true })
            console.log("success!")
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

    handleImageChange = e => {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                avatarImage: file,
                tempURL: reader.result
            })
        }
        reader.readAsDataURL(file)
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
        
    this.createNewUser();
    }
  
    


    render() { 
        const redirect  = this.state.redirect;
        if (redirect) {
            return <Redirect to={`/login`}/>;
        } else {         
            return (<div className="text-center">

                    <h3 className="mb-5">Create Account</h3>
                        <Form className="w-100 text-center" onSubmit={(e)=>{this.handleForm(e)}}> 
                        <Form.Group as={Row} controlId="avatarImg" className="inlineForm text-center">
                                <Col xs={6} className="ml-3"></Col>
                                <Col xs={4} className="pr-0 mr-0 text-center">
                                    <Image src={this.state.tempURL} roundedCircle fluid className="mb-3 userImg d-block"/> 
                                    <input 
                                        id= "avatarImgInput"
                                        name = "avatarImage"
                                        type="file"
                                        className="itinText text-center mb-5 mr-0 d-block"
                                        value={null}
                                        onChange={this.handleImageChange}/>  
                                </Col>
                                <Col xs={3} className="pr-0 mr-0"></Col>
                        </Form.Group> 
                        <Form.Group as={Row} controlId="username" className="inlineForm">
                            <Col xs={3}></Col>
                            <Form.Label column xs={3} className="text-right"><span className="itinText font-weight-bold">Username:</span></Form.Label>
                            <Col xs={3}>
                                <input
                                    className="col-xs-4 text-left itinText"
                                    name="username"
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleInputChange} />
                            </Col>
                            <Col xs={3}></Col>
                        </Form.Group> 
                        <Form.Group as={Row} controlId="password" className="inlineForm">
                            <Col xs={3} className="pr-0 mr-0"></Col>
                            <Form.Label column xs={3} className="text-right"><span className="itinText font-weight-bold">Password:</span></Form.Label>
                            <Col xs={3}>
                                <input
                                    className="col-xs-4 text-left itinText"
                                    name="password"
                                    type="text"
                                    value={this.state.password}
                                    onChange={this.handleInputChange} />
                            </Col>
                            <Col xs={3} className="pr-0 mr-0"></Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="email" className="inlineForm">
                            <Col xs={3} className="pr-0 mr-0"></Col>
                            <Form.Label column xs={3} className="text-right"><span className="itinText font-weight-bold">Email:</span></Form.Label>
                            <Col xs={3}>
                                <input
                                    className="col-xs-4 text-left itinText"
                                    name="email"
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.handleInputChange} />
                            </Col>
                            <Col xs={3} className="pr-0 mr-0"></Col>
                        </Form.Group>     
                        <Form.Group as={Row} controlId="firstName" className="inlineForm">
                            <Col xs={3} className="pr-0 mr-0"></Col>
                            <Form.Label column xs={3} className="text-right"><span className="itinText font-weight-bold">First Name:</span></Form.Label>
                            <Col xs={3}>
                                <input
                                    className="col-xs-4 text-left itinText"
                                    name="firstName"
                                    type="text"
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange} />
                            </Col>
                            <Col xs={3} className="pr-0 mr-0"></Col>
                        </Form.Group> 
                        <Form.Group as={Row} controlId="lastName" className="inlineForm">
                            <Col xs={3} className="pr-0 mr-0"></Col>
                            <Form.Label column xs={3} className="text-right"><span className="itinText font-weight-bold">Last Name:</span></Form.Label>
                            <Col xs={3}>
                                <input
                                    className="col-xs-4 text-left itinText"
                                    name="lastName"
                                    type="text"
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange} />
                            </Col>
                            <Col xs={3} className="pr-0 mr-0"></Col>
                        </Form.Group>  
                        <Form.Group as={Row} controlId="country" className="inlineForm">
                            <Col xs={3} className="pr-0 mr-0"></Col>
                            <Form.Label column xs={3} className="text-right"><span className="itinText font-weight-bold">Country:</span></Form.Label>
                            <Col xs={3}>
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
                            <Col xs={3} className="pr-0 mr-0"></Col>
                        </Form.Group>
                        <Form.Group>
                    <Col xs={7} className="pr-0 mr-0"></Col>
                        <input
                            className="col-xs-3 text-right itinText"
                            name="terms"
                            type="checkbox"
                            checked={this.state.terms}
                            onChange={this.handleInputChange} />
                        <Form.Label column xs={5} className="ml-3">
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
}   

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        success: state.userReducer.success,
        error: state.userReducer.error
    }
}

export default connect(mapStateToProps)(AccountForm); 