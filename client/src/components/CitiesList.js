import React from 'react';

 const CitiesList = ({cities}) =>
   cities.map(city => <li key={city.id}>{city.name}</li>)
 
export default CitiesList