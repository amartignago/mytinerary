import React, {useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'


const LoginFailureModalHooks = (props) => {
    let [show, setShow] = useState(false);
    
    useEffect(()=>{
        setShow(show=props.loginFailure)
    }, [props.loginFailure]);

    const handleClose = () => setShow(false);
   
    //Render:
    if (show===true) {
        return ( 
            <div key={props.loginFailure}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login Failed!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Check your username and password and try again
                </Modal.Body>
            </Modal>
            </div>
        );
    } else {
        return null
    }          
}

export default LoginFailureModalHooks ;
