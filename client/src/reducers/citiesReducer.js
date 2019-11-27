import {REQUEST_CITIES, RECEIVE_CITIES, REQUEST_CITY, RECEIVE_CITY} from '../actions/citiesActions'

const initState = {
  isFetching: false,
  didInvalidate: false,
}

function citiesReducer( //mepa que esta queda igual
  state = initState,
  action
) {
  switch (action.type) {
    case REQUEST_CITIES:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case REQUEST_CITY:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_CITY:
      return Object.assign({}, state, {
        isFetching: false,
        cities: action.payloadCities,
        lastUpdated: action.receivedAt
      })
    case RECEIVE_CITIES:
      return Object.assign({}, state, {
        isFetching: false,
        cities: action.payloadCities,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export default citiesReducer;



  //return 
//...state,
  // { elemento nuevo}
//con esto ya devuelve el estado + el elemento nuevo