import { GET_USERS, ADD_USERS } from '../constants/actionTypes';

const initialState = {
    searchQuery: '',
    items: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            return Object.assign({}, state, { items: [...action.payload] });
        case ADD_USERS:
            return Object.assign({}, state, { items: [...state.items, ...action.payload] });
        default:
            return state;
    };
};