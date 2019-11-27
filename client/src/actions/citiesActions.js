import fetch from 'cross-fetch'

const CitiesApi = 'http://localhost:5000/cities'


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


export const REQUEST_CITY ='REQUEST_CITY'    
export function requestCity(id) {
    return {
        type: REQUEST_CITY,
        id
    }
}
export const RECEIVE_CITY = 'RECEIVE_CITY'
export function receiveCity(id, json) {
    return {
        type: RECEIVE_CITY,
        id,
        payloadCity: json.map(city=>city),
        receivedAt: Date.now()
    }
}

export function fetchCity (id) {
    return dispatch => {       
        dispatch(requestCity(id))
        console.log(id);
        return fetch('http://localhost:5000/city/' + id)
        .then(
           cityResponse => { return cityResponse.json()},
            error => console.log('an error ocurred', error)
        )
        .then( json => dispatch(receiveCity(id, json))
        )
    }
}