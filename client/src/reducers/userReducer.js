import {SEND_USER, REQUEST_NEW_USER} from '../actions/usersActions'

const initState= {
  isFetching: false,
  user:{} 
}

function userReducer(state = initState, action
  ) {
    switch (action.type) {
        case REQUEST_NEW_USER:
          return Object.assign({}, state, {
            isFetching: true,
          })
      case SEND_USER:
        return Object.assign({}, state, {
          isFetching: true,
          user: action.userFormData
        })
      default:
        return state
    }
  }
  export default userReducer;
  