// import React from 'react';
import { combineReducers } from 'redux';

const messageReducer = (state, action) => {
    if (!state) {
        state = {
            message: 'hello'
        }
    }
    switch (action.type) {
        case 'changeMessage':
            return state = {
                ...state,
                message: action.message
            }
        default:
            return state = {
                ...state
            }
    }
}

export default combineReducers({
    messageReducer: messageReducer,
})
