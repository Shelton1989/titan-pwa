import {combineReducers} from 'redux';

import auth from './authReducer';
import assets from './assetReducer';
import sites from './sitesReducer';

const reducer = combineReducers({
    auth,
    assets,
    sites
})

export default reducer;