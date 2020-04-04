import {
    SET_SUBMISSIONS,
    ERROR_SUBMISSIONS
} from '../types'

export const setSubmissions = (submissions) => {
    return {
        type: SET_SUBMISSIONS,
        payload: submissions
    }
}

export const setSubmissionsError = (error) => {
    return {
        type: ERROR_SUBMISSIONS,
        payload: error
    }
}
