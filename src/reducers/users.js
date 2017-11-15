import { GET_USERS, ADD_USERS } from '../constants/actionTypes';

/*const initialState = [
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
];*/

const initialState = {
    count: 0,
    items: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            return Object.assign({}, state, {items: action.payload });
        case ADD_USERS:
            return Object.assign({}, state, { items: [...state.items, ...action.payload] });
        default:
            return state;
    };
};