import {combineReducers} from 'redux';
import citiesReducer from './citiesReducer';
import itinerariesReducer from './itinerariesReducer';
import activitiesReducer from './activitiesReducer';
import userReducer from './userReducer'

const rootReducer = combineReducers({
    citiesReducer,
    itinerariesReducer,
    activitiesReducer,
    userReducer
  })
  
export default rootReducer

