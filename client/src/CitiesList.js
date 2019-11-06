import React from 'react'


const CitiesList = ({cities}) =>
  cities.map(city => <li key={city._id}>{city.name}</li>)
 
export default CitiesList

