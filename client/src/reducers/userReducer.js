import {SEND_USER, REQUEST_USER, STORE_TOKEN} from '../actions/usersActions'

const initState= {
  isFetching: false,
  user:{},
  token: "",
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
      case STORE_TOKEN:
          return Object.assign({}, state, {
            isFetching: true,
            token: action.token
          })
      default:
        return state
    }
  }
  export default userReducer;
  
