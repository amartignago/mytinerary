import React, {Component} from 'react';
import NavBar from './NavBar.js'
import '../styles/App.css'
import {connect} from 'react-redux';
import CitiesFilter from './CitiesFilter.js';
import {fetchCities} from '../actions/citiesActions';
import PropTypes from 'prop-types';
import CitiesFilterHooks from './CitiesFilterHooks.js';


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

    render() { 
        const cities = this.props.cities
        return ( <div className="container">
            <NavBar/>
            <div className="text-center">
                <h1 className="h1Title mb-4">Find your City!</h1>
                <div>
                    <CitiesFilter cities = {cities}/>
                </div>
            </div>
        </div>
    )}

}

const mapStateToProps = (state) => { // state del storage como props para ESTE componente
    return {
        cities: state.citiesReducer.cities // prop cities que va a ser manejada por X reducer
    }
}

export default connect(mapStateToProps)(Cities); // 