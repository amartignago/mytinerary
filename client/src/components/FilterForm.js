import React, { Component } from 'react'
import '../styles/App.css'
import {
  Link
} from "react-router-dom";
import urlImages from './constants'


class FilterForm extends Component {
    constructor(props) {
      super(props) //la lista de ciudades que le paso como props en Cities
      this.state = {
        visibleCities: [], //estoy haciendo una "copia" del store aca o estoy accediendo al orishinal?
        citiesFilter: "" //el value que toma el input en linea 24, cuando el value cambie aplicar handleChange al state
        }
    };    

    handleChange = e => {
      this.setState({
        citiesFilter: e.target.value,
        visibleCities: this.props.cities.filter(city =>city.name && city.name.toLowerCase().startsWith(e.target.value.toLowerCase()))//  
      })
    }
    
    render() {
      return (<div className="mb-4">
        <div>
          <label htmlFor="filter" className="mt-1 mr-3 mb-4">Find City by Name: </label>
          <input type="text" id="filter" 
            value={this.state.citiesFilter} //cuando este valor cambia ejecuta handlechange)
            onChange={this.handleChange}/> 
        </div>
          <ul className='nonStyleUl p-0'>
            {this.state.visibleCities.map(city => 
            <Link to={"/cities/"+ city._id}>
              <div className="container responsiveDiv mb-4 mt-4">
                <li key={city._id}>
                  {city.img && <img src={`${urlImages.urlImages}/images/cities/${city.img}`} className="img-fluid cityImg" alt=" "/>}
                  <span><h2 className="overlayText">{city.name}</h2></span>
                </li>
              </div>
            </Link>
            )}
          </ul>
        </div>
        )
    }
  }


  export default FilterForm