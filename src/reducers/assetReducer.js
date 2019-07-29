import {
    LOADING,
    GET_ASSET_LIST,
    GET_ASSET,
    DELETE_ASSET,
    CREATE_ASSET,
    UPDATE_ASSET,
    FAILED_TO_GET_ASSET_LIST,
    FAILED_TO_GET_ASSET,
    FAILED_TO_DELETE_ASSET,
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
    asset: {},
    updateResult: '',
    deleteResult: ''
}

const assets = (state=defaultState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case GET_ASSET_LIST:
            return {
                ...state,
                assetList: action.payload,
                loading: false,
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
                assetFormOptions: {},
                loading: false,
            }
        case CREATE_ASSET:
            return {
                ...state,
                createResult: action.payload,
                loading: false,
            }
        case FAILED_TO_CREATE_ASSET:
            return {
                ...state,
                createResult: action.payload,
                loading: false,
            }
        case GET_ASSET:
            return {
                ...state,
                asset: action.payload,
                loading: false,
            }
        case FAILED_TO_GET_ASSET:
            return {
                ...state,
                asset: action.payload,
                loading: false,
            }
        case UPDATE_ASSET:
            return {
                ...state,
                updateResult: action.payload,
                loading: false,
            }
        case FAILED_TO_UPDATE_ASSET:
            return {
                ...state,
                updateResult: action.payload,
                loading: false,
            }
        case DELETE_ASSET:
            return {
                ...state,
                deleteResult: action.payload,
                loading: false,
            }
        case FAILED_TO_DELETE_ASSET:
            return {
                ...state,
                deleteResult: action.payload,
                loading: false
            }
        default:
            return {...state}
    }
}

export default assets;