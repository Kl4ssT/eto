import { SET_QUERY, SET_PAGE } from '../constants/actionTypes';

const initialState = {
    query: '',
    page: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_QUERY:
            return Object.assign({}, state, { query: action.payload });
        case SET_PAGE:
            return Object.assign({}, state, { page: action.payload });
        default:
            return state;
    }
};