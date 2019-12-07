import {SEND_USER, REQUEST_USER} from '../actions/usersActions'

const initState= {
  isFetching: false,
  user:{},
  success: false,
  error: false
}

function userReducer(state = initState, action
  ) {
    switch (action.type) {
        case REQUEST_USER:
          return Object.assign({}, state, {
            isFetching: true,
          })
      case SEND_USER: 
        return Object.assign({}, state, {
          isFetching: false,
          user: action.userFormData,
          success: true
        })
      default:
        return state
    }
  }
  export default userReducer;
  