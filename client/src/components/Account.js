import React, {Component} from 'react';
import AccountForm from './AccountForm';
import NavBar from './NavBar';



class Account extends Component {
    constructor(props) {
        super(props) 
        this.state = {
          }
      };

   render() { return ( <div className= "w-100 pr-4 pl-4">
        <NavBar></NavBar>
 
        <AccountForm></AccountForm>

    </div>
);
}
}

export default Account;