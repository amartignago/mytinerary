import React, {Component} from 'react';
import NavBar from './NavBar.js'
import CitiesList from './CitiesList.js'
const CitiesApi = 'http://localhost:5000/cities'


class Cities extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cities:[]
        }
    };

fetchCities = () => {
    let that = this;
    fetch(CitiesApi)
        .then(response => response.json())
        .then(result => that.setState({cities: result }))
        .catch(e => console.log(e));
    }

componentDidMount() {
    this.fetchCities();
  }


render() { return ( <div className="container">
    <NavBar/>
    <h1>Cities Page</h1>
    <ul>
    <CitiesList cities={this.state.cities}/>
    </ul>
</div>
)}
}

export default Cities;