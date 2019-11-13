import React, { Component } from 'react'

//import { poets } from '../test/data' aca deberia poner mi cities list?

import Poets from './Poets' //esto no se que es
import FilterForm from './FilterForm'

class VisibleCities extends Component {
  constructor() {
    super()
    this.state = {
      cities: [],
      filteredCities: []
    }
  }

  componentWillMount() {
    this.setState({
      cities,
      filteredCities: cities
    })
  }

  filterCities = (citiesFilter) => {
    let filteredCities = this.state.cities
    filteredCities = filteredCities.filter((city) => {
      let cityName = cities.name.toLowerCase()
      return cityName.indexOf(
        citiesFilter.toLowerCase()) !== -1
    })
    this.setState({
      filteredCities
    })
  }
//// match={this.props.match}
   render() {
     return (
      <FilterForm cities={this.state.filteredCities} onChange={this.filterCities}/>  //para cities list la prop/evento "onChange" es la func filterCities
   )
  }
 }

export default VisibleCities