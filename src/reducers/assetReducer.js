import {
    LOADING,
    GET_ASSET_LIST,
    GET_ASSET,
    CREATE_ASSET,
    UPDATE_ASSET,
    FAILED_TO_GET_ASSET_LIST,
    FAILED_TO_GET_ASSET,
    FAILED_TO_CREATE_ASSET,
    FAILED_TO_UPDATE_ASSET,
} from '../actions/assets';

const defaultState = {
    assetList: [],
    loading: false
}

const assets = (state=defaultState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case GET_ASSET_LIST:
            return {
                ...state,
                assetList: action.payload
            }
        case FAILED_TO_GET_ASSET_LIST:
            let message = [action.payload];
            return {
                ...state,
                assetList: message
            }
        default:
            return state
    }
}

export default assets;