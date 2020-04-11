import React, {useState, useEffect } from 'react';
import '../styles/App.css'
import {
  Link
} from "react-router-dom";
import urlImages from './constants'

const CitiesFilterHooks = (props) => {
   
  let [visibleCities, setVisibleCities] = useState([]);

  let [ citiesFilter, setCitiesFilter] = useState("");

  useEffect(()=>{
    if (props.cities) {
      setVisibleCities(visibleCities=[props.cities.map(city => city)])

    } 
  }, [props.cities]);

  const handleChange = (e) => {
    setCitiesFilter(citiesFilter = e.target.value);
    setVisibleCities (visibleCities = visibleCities.filter(city =>city.name && city.name.toLowerCase().startsWith(e.target.value.toLowerCase())))
  };

  return (<div className="mb-4">
        <div>
          <label htmlFor="filter" className="mt-1 mr-3 mb-4"> City Name... </label>
          <input type="text" id="filter" 
            value={citiesFilter} //cuando este valor cambia ejecuta handlechange)
            onChange={handleChange}/> 
        </div>
          <ul className='nonStyleUl '>
            {console.log(visibleCities)}
            {visibleCities.map(city => 
            <Link to={"/cities/"+ city._id}>
              <div className="container responsiveDiv mb-4 mt-4">
                <li key={city._id}>
                   <img src={`${urlImages.urlImages}/images/cities/${city.img}`} className="img-fluid cityImg" alt=" "/>
                  <span><h2 className="overlayText">{city.name}</h2></span>
                </li>
              </div>
            </Link>
            )}
          </ul>
        </div>
        )
    }
  
export default CitiesFilterHooks
