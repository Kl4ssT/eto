import { combineReducers } from 'redux';

import users from './users';
import profile from './profile';
import search from './search';

const rootReducer = combineReducers({
    users,
    profile,
    search
});

export default rootReducer;