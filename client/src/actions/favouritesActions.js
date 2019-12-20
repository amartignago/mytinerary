import fetch from 'cross-fetch'

export const REQ_FAV ='REQ_FAV'    
export function requestFav(itinID) {
    return {
        type: REQ_FAV,
        itinID
    }
}
export const SEND_FAV = 'SEND_FAV'
export function sendFav(favData) {
  return {
      type: SEND_FAV,
      favData
  }
}

//to find all the user's favs
export const SEND_ALL_FAVS = 'SEND_ALL_FAVS'
export function sendAllFavs(favsData) {
  return {
      type: SEND_ALL_FAVS,
      favsData
  }
}

//handle favourite update (like / dislike)
export function fetchFav (token, itinID) { 
    return dispatch => {
        // dispatch(requestUser(userFormData)) 
        return fetch(`http://localhost:5000/users/favs/${itinID}`, {
          method: 'POST', 
          headers: {
            'Authorization': `bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              token: token
          })
        })
        .then(
            favResponse => { return favResponse.json()},
            error => console.log('an error ocurred', error)
        )
        .then( favJson => dispatch(sendFav(favJson))
        )
    }
  }

//get a list of all likes by user
export function fetchUserFavs (token, userID) { 
  return dispatch => {
      // dispatch(requestUser(userFormData)) 
      return fetch(`http://localhost:5000/users/favs/${userID}`, {
        method: 'GET', 
        headers: {
          'Authorization': `bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then(
          favResponse => { return favResponse.json()},
          error => console.log('an error ocurred', error)
      )
      .then( favJson => dispatch(sendAllFavs(favJson))
      )
  }
}

//handle itin fav by
export function checkIsFav (token, userID, itinID) {
  return dispatch => {
    // dispatch(requestUser(userFormData)) 
    return fetch(`http://localhost:5000/users/${userID}/favs/${itinID}`, {
      method: 'GET', 
      headers: {
        'Authorization': `bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(
        favResponse => { return favResponse.json()},
        error => console.log('an error ocurred', error)
    )
    .then( favJson => dispatch(sendFav(favJson))
    )
  }
}