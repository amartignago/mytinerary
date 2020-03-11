import fetch from 'cross-fetch'

export const REQUEST_USER ='REQUEST_USER'    
export function requestUser(userData) {
    return {
        type: REQUEST_USER,
        userData
    }
}

export const SEND_USER = 'SEND_USER'
export function sendUser(userData) {
  return {
      type: SEND_USER,
      userData

  }
}

export const STORE_TOKEN_USER = 'STORE_TOKEN_USER'
export function storeTokenUser(token, decodedUser) { //stores token and decoded token user info 
  return {
      type: STORE_TOKEN_USER,
      token,
      decodedUser
  }
}

export const STORE_USER_FAVS = 'STORE_USER_FAVS'
export function storeUserFavs(userData) { //stores token and decoded token user info 
  return {
      type: STORE_USER_FAVS,
      userData
  }
}


//register user action
export function fetchNewUser (userData) {
  return dispatch => {   
      let formData = new FormData();
      let fileField = document.querySelector("input[type='file']");    
      // dispatch(requestUser(userFormData))
      // console.log(userFormData);
        formData.append('username',userData.username);
        formData.append('password',userData.password);
        formData.append('email',userData.email);
        formData.append('firstName',userData.firstName);
        formData.append('lastName',userData.lastName)
        formData.append('avatarImage', fileField.files[0]);

        return fetch('http://localhost:5000/users', {
          method: 'POST',
          body: formData
        })
        .then(
          userResponse => { return userResponse.json()},
          error => console.log('an error ocurred', error)
        )
        .then(userJson => dispatch(sendUser(userJson))
      )
  }
}

//local login Action
export function fetchLogin (userData) { //user y pass
  return dispatch => {
      dispatch(requestUser(userData)) //user y pass
      return fetch('http://localhost:5000/auth/login', {
        method: 'POST', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userData: userData //user y pass
        })
      })
      .then(
          userResponse => { 
            if(userResponse.ok) {
              return userResponse.json()} 
            else {
              console.log('resp de login no ok')
              return userResponse
            }}, 
          //returns: { user: {db user info object}, "success", "token"}
          error => console.log('an error ocurred', error)
      )
      .then( userJson => dispatch(sendUser(userJson)) //send user token to redux
      )
  }
}

//local login Action


export function getFavs (token, userID) { 
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
          response => { return response.json()},
          error => console.log('an error ocurred', error)
      )
      .then( userJson => dispatch(storeUserFavs(userJson)) 
      )
  }
}

