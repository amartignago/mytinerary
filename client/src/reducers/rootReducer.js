import {combineReducers} from 'redux';
import citiesReducer from './citiesReducer';
import itinerariesReducer from './itinerariesReducer';
import activitiesReducer from './activitiesReducer'

const rootReducer = combineReducers({
    citiesReducer,
    itinerariesReducer,
    activitiesReducer
  })
  
export default rootReducer

