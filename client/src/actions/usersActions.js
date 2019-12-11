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

export const STORE_TOKEN_USER = 'STORE_TOKEN_USER'
export function storeTokenUser(token, decodedUser) { //stores token and decoded token user info 
  return {
      type: STORE_TOKEN_USER,
      token,
      decodedUser
  }
}

//register user action
export function fetchNewUser (userFormData) {
  return dispatch => {   
      let formData = new FormData();
      let fileField = document.querySelector("input[type='file']");    
      // dispatch(requestUser(userFormData))
      // console.log(userFormData);
        formData.append('username',userFormData.username);
        formData.append('password',userFormData.password);
        formData.append('email',userFormData.email);
        formData.append('firstName',userFormData.firstName);
        formData.append('lastName',userFormData.lastName)
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
export function fetchLogin (userFormData) { //user y pass
  return dispatch => {
      dispatch(requestUser(userFormData)) //user y pass
      return fetch('http://localhost:5000/auth/login', {
        method: 'POST', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userFormData: userFormData //user y pass
        })
      })
      .then(
          userResponse => { return userResponse.json()}, //user info returned
          error => console.log('an error ocurred', error)
      )
      .then( userJson => dispatch(sendUser(userJson)) //send that user info to redux
      )
  }
}




// export function fetchLoginGoogle (id) {
//   return dispatch => {
//       dispatch(requestUser(id))
//       return fetch(`http://localhost:5000/auth/google/${id}`)
//       .then(
//           userResponse => userResponse.json(),
//           error => console.log('an error ocurred', error)
//       )
//       .then( userJson => dispatch(sendUser(userJson))
//       )
//   }
// }

