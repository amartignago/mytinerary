import fetch from 'cross-fetch'

export const REQUEST_NEW_USER ='REQUEST_NEW_USER'    
export function requestNewUser(userFormData) {
    return {
        type: REQUEST_NEW_USER,
        userFormData
    }
}

export const SEND_USER = 'SEND_USER'
export function sendUser(userFormData) {
  return {
      type: SEND_USER,
      userFormData

  }
}

export function fetchNewUser (userFormData) {
  return dispatch => {       
      dispatch(requestNewUser(userFormData))
      console.log(userFormData);
      return fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userFormData: userFormData
        })
      })
      .then(
          userResponse => { return userResponse.json()},
          error => console.log('an error ocurred', error)
      )
      .then( userJson => dispatch(sendUser(userJson))
      )
  }
}
