import fetch from 'cross-fetch'

export const REQUEST_USER ='REQUEST_USER'    
export function requestUser(userFormData) {
    return {
        type: REQUEST_USER,
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

export function fetchLogin (userFormData) {
  return dispatch => {
      dispatch(requestUser(userFormData))
      return fetch('http://localhost:5000/login', {
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


export function fetchNewUser (userFormData) {
  return dispatch => {       
      dispatch(requestUser(userFormData))
      console.log(userFormData);
      return fetch('http://localhost:5000/users', {
        method: 'POST', //para mandar imagenes necesito usar formdata, crear un nuevo objeto form data al que le hago append de mi objeto estado
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

