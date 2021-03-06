import {REQUEST_ITINERARIES, RECEIVE_ITINERARIES} from '../actions/itinerariesActions'

const initState= {
  isFetching: false,
  didInvalidate: false,
  itineraries:[], 
  city:[]
}


function itinerariesReducer(state = initState, action
) {
  switch (action.type) {
    case REQUEST_ITINERARIES:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_ITINERARIES:
      return Object.assign({}, state, {
        isFetching: false,
        itineraries: action.payloadItineraries,
        city: action. payloadCity,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}
export default itinerariesReducer;



  //return 
//...state,
  // { elemento nuevo}
//con esto ya devuelve el estado + el elemento nuevo