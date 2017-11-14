import { GET_USERS, ADD_USERS } from '../constants/actionTypes';

const initialState = [
    {
        id: 123124124,
        last_name: 'Зайка',
        first_name: 'Александр',
        has_photo: 0
    },
    {
        id: 123124124,
        last_name: 'Зайка',
        first_name: 'Александр',
        has_photo: 0
    },
    {
        id: 123124124,
        last_name: 'Зайка',
        first_name: 'Александр',
        has_photo: 0
    },
    {
        id: 123124124,
        last_name: 'Зайка',
        first_name: 'Александр',
        has_photo: 0
    },
    {
        id: 123124124,
        last_name: 'Зайка',
        first_name: 'Александр',
        has_photo: 0
    },
    {
        id: 123124124,
        last_name: 'Зайка',
        first_name: 'Александр',
        has_photo: 0
    },
    {
        id: 123124124,
        last_name: 'Зайка',
        first_name: 'Александр',
        has_photo: 0
    },
    {
        id: 123124124,
        last_name: 'Зайка',
        first_name: 'Александр',
        has_photo: 0
    },
    {
        id: 123124124,
        last_name: 'Зайка',
        first_name: 'Александр',
        has_photo: 0
    }
];

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            return action.payload;
        case ADD_USERS:
            return [...state, action.payload];
        default:
            return state;
    };
};