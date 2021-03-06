import config from '../config/config'
import strings from '../resources/translations'
import {Alert} from 'react-native'

export const SEND_STOPREQUEST = 'SEND_STOPREQUEST'
export const RECEIVE_CONFIRM = 'RECEIVE_CONFIRM'
export const REQUEST_ERROR = 'REQUEST_ERROR'
export const SET_STOPREQUEST_REQUEST_ID_FROM = 'SET_STOPREQUEST_REQUEST_ID_FROM'
export const SET_STOPREQUEST_REQUEST_ID_DESTINATION = 'SET_STOPREQUEST_REQUEST_ID_DESTINATION'

const API_ENDPOINT = '/stoprequests'

export let requestStoprequest = function(tripId, stopId, fromVehicle)
{
    return {
        type: SEND_STOPREQUEST,
        stopRequestSent: false,
        trip_id: tripId,
        stop_id: stopId,
        fromVehicle: fromVehicle
    }
}

export let receiveConfirm = function(vehicle, stop, fromVehicle)
{
    return {
        type: RECEIVE_CONFIRM,
        stopRequestSent: true,
        vehicle: vehicle,
        stop: stop,
        fromVehicle: fromVehicle,
        error: false
    }
}

export let requestError = function()
{
    Alert.alert(
        'Error',
        strings.stopRequestError,
        [
            {text: 'OK', onPress: () => console.log('confirmed server error')}
        ],
        {
        cancelable: false
        }
    )

    return {
        type: REQUEST_ERROR,
        error: true
    }
}

export let setStopRequest_requestId = (fromVehicle, requestId) =>
{
        return {
            type: fromVehicle ? SET_STOPREQUEST_REQUEST_ID_FROM : SET_STOPREQUEST_REQUEST_ID_DESTINATION,
            requestId: requestId
        }
}

export let sendStoprequest = function(vehicle, stop, fcmToken, fromVehicle)
{
    return dispatch =>
    {
        dispatch(requestStoprequest(vehicle.trip_id, stop.stopId, fromVehicle))

        let stopRequest = JSON.stringify({
            trip_id: vehicle.trip_id,
            stop_id: stop.stopId,
            device_id: fcmToken
        })

        return fetch(config.API_URL + API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: stopRequest
        })
        .then(response =>
            {
            if (response.ok)
            {
                dispatch(receiveConfirm(vehicle, stop, fromVehicle))

                return response.json()
            }
            else
            {
                dispatch(requestError())
            }
        })
        .then(json =>
        {
                dispatch(setStopRequest_requestId(fromVehicle, json.request_id))
        })
        .catch(error => dispatch(requestError(error)))
    }
}
