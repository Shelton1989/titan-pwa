import {combineReducers} from 'redux';

import auth from './authReducer';

export const reducer = combineReducers({
    auth
})