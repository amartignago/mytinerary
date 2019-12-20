import {REQ_FAV, SEND_FAV, SEND_ALL_FAVS} from '../actions/favouritesActions'

const initState= {
  userID: "",
  itinID: "",
  liked: null
}

function favouritesReducer(state = initState, action
) {
  switch (action.type) {
    case REQ_FAV:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case SEND_FAV:
      return Object.assign({}, state, {
        isFetching: false,
        userID: action.favData.userID,
        itinID: action.favData.itinID,
        liked: action.favData.liked
      })
      case SEND_ALL_FAVS:
        return Object.assign({}, state, {
          isFetching: false,
          itinFavs: action.favsData
        })
    default:
      return state
  }
}
export default favouritesReducer;
