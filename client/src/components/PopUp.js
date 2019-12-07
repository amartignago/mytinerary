import React, { Component } from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  // minified version is also included
  // import 'react-toastify/dist/ReactToastify.min.css';
 
 export default function PopUpFunction () {class PopUp extends Component {
    notify = () => toast("Wow so easy !");
 
    render(){
      return (
        <div>
          <button onClick={this.notify}>Notify !</button>
          <ToastContainer />
        </div>
      );
    }
  }
  }
//   export default PopUp;