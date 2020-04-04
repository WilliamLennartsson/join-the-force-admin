import {
    SET_SUBMISSIONS,
    ERROR_SUBMISSIONS
} from '../types'

const initialState = {
    submissions: [],
    errors: []
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUBMISSIONS:
            return {...state, submissions: action.payload}
        case ERROR_SUBMISSIONS: 
            return {...state, errors: [...state.errors, action.payload]}
        default:
            return state
    }
}

export default dataReducer