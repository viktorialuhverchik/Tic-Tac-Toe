import {
    AppActionTypes,
    AppState,
    TOGGLE_USER_FIRST
} from '../types';

const initialState: AppState = {
    isUserFirst: true
};

export const appReducer = (state = initialState, action: AppActionTypes) => {
    switch (action.type) {
        case TOGGLE_USER_FIRST:
            return { ...state, isUserFirst: action.isUserFirst };
        default: 
            return state;
    };
};
