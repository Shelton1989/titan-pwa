import {combineReducers} from 'redux';

import auth from './authReducer';
import assets from './assetReducer';

const reducer = combineReducers({
    auth,
    assets
})

export default reducer;