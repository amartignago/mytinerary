import {REQUEST_ACTIVITIES, RECEIVE_ACTIVITIES} from '../actions/activitiesActions'

const initState= {
  isFetching: false,
  didInvalidate: false,
  activities:[], 
}

function activitiesReducer(state = initState, action
) {
  switch (action.type) {
    case REQUEST_ACTIVITIES:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_ACTIVITIES:
      return Object.assign({}, state, {
        isFetching: false,
        activities: action.payloadActivities,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}
export default activitiesReducer;
