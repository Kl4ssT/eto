import { combineReducers } from 'redux';

import search from './search';
import profile from './profile';

const rootReducer = combineReducers({
    search,
    profile
});

export default rootReducer;