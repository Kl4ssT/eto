import axios from 'axios';

import * as types from '../constants/actionTypes';

export const getUsers = (query, page) => {
    return async dispatch => {
        try
        {
            const users = await axios.post('http://localhost:3000/users', {query, page});
            return dispatch({
                type: types.GET_USERS,
                payload: users.data.items
            });
        }
        catch (err)
        {
            console.log(err);
        }
        
    }
};