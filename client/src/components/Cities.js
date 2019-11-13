import React, {Component} from 'react';
import NavBar from './NavBar.js'
import CitiesList from './CitiesList.js'
import '../styles/App.css'
import {connect} from 'react-redux';
import FilterForm from './FilterForm.js';
import {fetchCities} from '../actions/citiesActions';
import PropTypes from 'prop-types';


class Cities extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    };
    static propTypes = {
        dispatch: PropTypes.func,
      }
    
    componentDidMount() {
       this.props.dispatch(fetchCities())
       .then(() => console.log('hola, funciono!'))
    }

// render() { return ( <div className="container">
//     <NavBar/>
//     <h1>Cities Page</h1>
//     <ul className='nonStyleUl'>
//    // <FilterForm cities={this.state.cities}/>
//     </ul>
// </div>
// )}

render() { 
    const cities = this.props.cities

    return ( <div className="container">
    <NavBar/>
    <h1>Cities Page</h1>
    <ul className='nonStyleUl'>
     <CitiesList cities = {cities}/>
    </ul>
</div>
 )}

}


const mapStateToProps = (state) => { // aca estoy pasando el state del storage como props para ESTE componente
    console.log(state);
    return {
        cities: state.citiesReducer.cities // aca le digo que va a tener una prop cities que va a ser manejada por X reducer
    }
}

export default connect(mapStateToProps)(Cities); // 