import fetch from 'cross-fetch'

const CitiesApi = 'http://localhost:5000/cities'


// export const getCities = payload=>({
//         type: 'GET_CITIES' ,
//         payload:payload
// } ) 

export const REQUEST_CITIES ='REQUEST_CITIES'    
export function requestCities() {
    return {
        type: REQUEST_CITIES
    }
}

export const RECEIVE_CITIES = 'RECEIVE_CITIES'
export function receiveCities(json) {
    return {
        type: RECEIVE_CITIES,
        payloadCities: json.map(city=>city), //aca iria mi filtro?
        receivedAt: Date.now()
    }
}


export function fetchCities () {
    return function (dispatch) {       
        dispatch(requestCities())
        return fetch(CitiesApi)
        .then(
            citiesResponse => citiesResponse.json(),
            error => console.log('an error ocurred', error)
        )
        .then( json => dispatch(receiveCities(json))
        )
    }
}

