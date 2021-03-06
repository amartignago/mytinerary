import fetch from 'cross-fetch'

export const REQUEST_ITINERARIES ='REQUEST_ITINERARIES'    
export function requestItineraries(id) {
    return {
        type: REQUEST_ITINERARIES,
        id
    }
}

export const RECEIVE_ITINERARIES = 'RECEIVE_ITINERARIES'
export function receiveItineraries(id, json) {
    return {
        type: RECEIVE_ITINERARIES,
        id,
        payloadCity: json,
        payloadItineraries: json.itineraries.map(itinerary=>itinerary),
        receivedAt: Date.now()
    }
}

export function fetchItineraries (id) {
    return dispatch => {       
        dispatch(requestItineraries(id))
        return fetch('http://localhost:5000/cities/' + id)
        .then(
           itinerariesResponse => { return itinerariesResponse.json()},
            error => console.log('an error ocurred', error)
        )
        .then( json => dispatch(receiveItineraries(id, json))
        )
    }
}


