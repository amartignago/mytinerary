import React, {Component, Fragment} from 'react';
import Modal from 'react-bootstrap/Modal'


class LoginFailureModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show: false,
          stopShowing: false
        }
    this.handleClose = this.handleClose.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ 
            show: nextProps.loginFailure 
        }) 
      }

    handleClose(){
        this.setState({
            stopShowing: true
        })
    };  
    
    render() {     
        if (this.state.stopShowing) {
            return null
        } else {    
            return ( 
                <div key={this.props.loginFailure}>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login Failed!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Check your username and password and try again
                    </Modal.Body>
                </Modal>
                </div>
            )
       } 
    }   
}

export default LoginFailureModal;