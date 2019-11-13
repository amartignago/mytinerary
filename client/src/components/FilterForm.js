// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// class FilterForm extends Component {
//     constructor(props) {
//       super(props) //la lista de ciudades que le paso como props en Cities
//       this.state = {
//         citiesFilter: "" //el value que toma el input en linea 24, cuando el value cambie aplicar handleChange al state
//       }
//     }
    
//     handleChange = (e) => {
//       this.setState({
//         citiesFilter: e.target.value
//       })
//      this.props.onChange(e.target.value) // onChange seria filtercities de citiesfilter, event.target.value el valor con el cual va a filtrar
//     }
    
//     render() {
//       return (
//         <div>
//           <label htmlFor="filter">Filter by City Name: </label>
//           <input type="text" id="filter" 
//             value={this.state.citiesFilter} 
//             onChange={this.handleChange}/> 
//         </div>
//         )
//     }
//   }
  
//   FilterForm.propTypes= {
//     onChange: PropTypes.func.isRequired
//   }

//   export default FilterForm