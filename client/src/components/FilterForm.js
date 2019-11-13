import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
      
    //  this.props.onChange(event.target.value) // onChange seria filtercities de citiesfilter, event.target.value el valor con el cual va a filtrar
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
           {this.state.visibleCities.map(city => <li key={city.name}>{city.name}</li>)}
        </ul>
        </div>
        )
    }
  }
  
  FilterForm.propTypes= {
    onChange: PropTypes.func.isRequired
  }

  export default FilterForm