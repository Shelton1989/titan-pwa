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
    GET_ASSET_FORM_OPTIONS,
    FAILED_TO_GET_ASSET_FORM_OPTIONS
} from '../actions/assets';

const defaultState = {
    loading: false,
    assetList: [],
    assetFormOptions: {},
    createResult: '',
    siteOptions: []
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
                loading: false,
                assetList: action.payload
            }
        case FAILED_TO_GET_ASSET_LIST:
            return {
                ...state,
                loading: false,
            }
        case GET_ASSET_FORM_OPTIONS:
            return {
                ...state,
                assetFormOptions: action.payload,
                loading: false
            }
        case FAILED_TO_GET_ASSET_FORM_OPTIONS:
            return {
                ...state,
                loading: false,
                assetFormOptions: {}
            }
        case CREATE_ASSET:
            return {
                ...state,
                loading: false,
                createResult: action.payload
            }
        case FAILED_TO_CREATE_ASSET:
            return {
                ...state,
                loading: false,
                createResult: action.payload
            }
        default:
            return {...state}
    }
}

export default assets;