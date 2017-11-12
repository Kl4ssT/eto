import { GET_USER } from '../constants/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_USER:
            return action.payload;
        default:
            return state;
    }
}