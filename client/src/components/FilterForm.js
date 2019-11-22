import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";

class FilterForm extends Component {
    constructor(props) {
      super(props) //la lista de ciudades que le paso como props en Cities
      this.state = {
        visibleCities: [], //estoy haciendo una "copia" del store aca o estoy accediendo al orishinal?
        citiesFilter: "" //el value que toma el input en linea 24, cuando el value cambie aplicar handleChange al state
        }
    }
    
    handleChange = e => {
      this.setState({
        citiesFilter: e.target.value,
        visibleCities: this.props.cities.filter(city => city.name.toLowerCase().startsWith(e.target.value.toLowerCase())), //  
      })
    }
    
    render() {
      return (<div>
        <div>
          <label htmlFor="filter">Filter by City Name: </label>
          <input type="text" id="filter" 
            value={this.state.citiesFilter} //cuando este valor cambia ejecuta handlechange)
            onChange={this.handleChange}/> 
        </div>
          <ul className='nonStyleUl'>
            {this.state.visibleCities.map(city => 
            <Link to={"/cities/"+ city._id}>
              <li key={city._id}>{city.name}</li>
            </Link>
            )}
          </ul>
        </div>
        )
    }
  }


  export default FilterForm