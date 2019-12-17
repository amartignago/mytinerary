import {combineReducers} from 'redux';
import citiesReducer from './citiesReducer';
import itinerariesReducer from './itinerariesReducer';
import activitiesReducer from './activitiesReducer';
import userReducer from './userReducer'
import favouritesReducer from './favouritesReducer'

const rootReducer = combineReducers({
    citiesReducer,
    itinerariesReducer,
    activitiesReducer,
    userReducer,
    favouritesReducer
  })
  
export default rootReducer

