import React, {Component} from 'react';
import BrowsingMenu from './BrowsingMenu.js';
import Header from './Header.js';


class Home extends Component {
    render() { return ( 
    <div  className="App">
        <div>
            <Header></Header>  
        </div>  
        <div className="nav-section">
            <BrowsingMenu></BrowsingMenu>
        </div>  
    </div>
);
}
}

export default Home;
