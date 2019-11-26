import fetch from 'cross-fetch'

export const REQUEST_ACTIVITIES ='REQUEST_ACTIVITIES'    
export function requestActivities(id) {
    return {
        type: REQUEST_ACTIVITIES,
        id
    }
}

export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES'
export function receiveActivities(id, json) {
    return {
        type: RECEIVE_ACTIVITIES,
        id,
        payloadActivities: json.map(activity=>activity),
        receivedAt: Date.now()
    }
}

export function fetchActivities (id) {
    return dispatch => {       
        dispatch(requestActivities(id))
        console.log(id);
        return fetch('http://localhost:5000/activities/' + id)
        .then(
           activitiesResponse => { return activitiesResponse.json()},
            error => console.log('an error ocurred', error)
        )
        .then( json => dispatch(receiveActivities(id, json))
        )
    }
}
