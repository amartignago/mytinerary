import {SEND_USER, REQUEST_USER, STORE_TOKEN_USER} from '../actions/usersActions'
import { defineState } from 'redux-localstore';

//TO RESET THE STATE:
//import { resetState } from 'redux-localstore';
 
//resetState();

const initState= {
  isFetching: false,
  user:{},
  token: "",
  success: false,
  error: false
}

// const initState = defineState(defaultState)('userReducer')

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
          token: action.userFormData.token,
          success: true
        })
      case STORE_TOKEN_USER:
          return Object.assign({}, state, {
            isFetching: true,
            token: action.token,
            user: action.decodedUser
          })
      default:
        return state
    }
  }
  export default userReducer;
  
