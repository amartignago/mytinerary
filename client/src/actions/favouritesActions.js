import fetch from 'cross-fetch'

export const REQ_FAV ='REQ_FAV'    
export function requestFav(itinID) {
    return {
        type: REQ_FAV,
        itinID
    }
}

export const SEND_FAV = 'RECEIVE_FAV'
export function sendFav(favData) {
  return {
      type: SEND_FAV,
      favData
  }
}

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
