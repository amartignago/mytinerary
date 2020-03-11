import {SEND_USER, REQUEST_USER, STORE_TOKEN_USER, STORE_USER_FAVS} from '../actions/usersActions'

const initState= {
  isFetching: false,
  user:{},
  userFavs: [],
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
          user: action.userData, //esto es lo que viene con la res de la api
          token: action.userData.token,
          success: action.userData.ok 
        })
      case STORE_TOKEN_USER:
          return Object.assign({}, state, {
            isFetching: false,
            token: action.token,
            user: action.decodedUser
          })
      case STORE_USER_FAVS:
        return Object.assign({}, state, {
          isFetching: false,
          userFavs: action.userData
        })
      default:
        return state
    }
  }
  export default userReducer;
  
