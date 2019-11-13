import {REQUEST_CITIES, RECEIVE_CITIES} from '../actions/citiesActions'

function citiesReducer( //mepa que esta queda igual
  state = {
    isFetching: false,
    didInvalidate: false,
    cities: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_CITIES:
      return Object.assign({}, state, {
        isFetching: true,
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