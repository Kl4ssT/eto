import api from '../api';

import { GET_USERS, ADD_USERS, SET_PAGE, SET_QUERY } from '../constants/actionTypes';

export const getUsers = (page) => {
    return async (dispatch, getState) => {
        try
        {
            const { query, count, items } = getState().search;
            const users = await api.post(api.defaults.baseURL + '/users', {
                query: query,
                page: page + 1
            });

            dispatch(setPage(page + 1));

            return dispatch(addUsers(page));
        }
        catch (err)
        {
            console.log(err);
        }
    }
};

export const setQuery = query => {
    return {
        type: SET_QUERY,
        payload: query
    };
}

const setPage = page => {
    return {
        type: SET_PAGE,
        payload: page 
    };
};

const addUsers = page => {
    return {
        type: page > 0 ? ADD_USERS: GET_USERS,
        payload: {
            items: users.data.items,
            count: users.data.count
        }
    }
}