import api from '../api';

import { GET_USERS, ADD_USERS } from '../constants/actionTypes';

export const getUsers = (query, page) => {
    return async dispatch => {
        try
        {
            const users = await api.post('http://localhost:3000/users', {query, page});

            return dispatch({
                type: GET_USERS,
                payload: users.data.items
            });
        }
        catch (err)
        {
            console.log(err);
        }
    }
};