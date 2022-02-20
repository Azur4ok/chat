import {UPDATE_NEW_MESSAGE_TEXT} from "../actions/actionTypes"

const initialState = {
    newMessageText: ""
}

const updateTextReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.payload
            }
    
        default:
            return state;
    }
}

export default updateTextReducer;