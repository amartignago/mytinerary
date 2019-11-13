import React, {Component} from 'react';

 const CitiesList = ({cities}) =>
   cities.map(city => <li key={city.name}>{city.name}</li>)
 
export default CitiesList