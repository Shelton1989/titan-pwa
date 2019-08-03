import {
    LOADING,
    GET_SITE_LIST,
    GET_SITE,
    CREATE_SITE,
    UPDATE_SITE,
    FAILED_TO_GET_SITE_LIST,
    FAILED_TO_GET_SITE,
    FAILED_TO_CREATE_SITE,
    FAILED_TO_UPDATE_SITE,
    GET_SITE_FORM_OPTIONS,
    FAILED_TO_GET_SITE_FORM_OPTIONS,
    GET_SITE_OPTIONS,
    FAILED_TO_GET_SITE_OPTIONS,
    DELETE_SITE,
    FAILED_TO_DELETE_SITE,
} from '../actions/sites';

const defaultState = {
    loading: false,
    siteList: [],
    siteFormOptions: {},
    createResult: '',
    siteOptions: [],
    site: {},
    deleteResult: '',
    updateResult: ''
}

const sites = (state=defaultState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case GET_SITE_LIST:
            return {
                ...state,
                loading: false,
                siteList: action.payload
            }
        case FAILED_TO_GET_SITE_LIST:
            return {
                ...state,
                loading: false,
            }
        case GET_SITE_FORM_OPTIONS:
            return {
                ...state,
                loading: false,
                siteFormOptions: action.payload
            }
        case FAILED_TO_GET_SITE_FORM_OPTIONS:
            return {
                ...state,
                loading: false,
            }
        case CREATE_SITE:
            return {
                ...state,
                loading: false,
                createResult: action.payload
            }
        case FAILED_TO_CREATE_SITE:
            return {
                ...state,
                loading: false,
                createResult: action.payload
            }
        case GET_SITE_OPTIONS:
            return {
                ...state,
                loading: false,
                siteOptions: action.payload
            }
        case FAILED_TO_GET_SITE_OPTIONS:
            return {
                ...state,
                loading: false,
                siteFormOptions: action.payload
            }
        case GET_SITE:
            return {
                ...state,
                loading: false,
                site: action.payload
            }
        case FAILED_TO_GET_SITE:
            return {
                ...state,
                loading: false,
                site: action.payload
            }
        case UPDATE_SITE:
            return {
                ...state,
                loading: false,
                updateResult: action.payload
            }
        case FAILED_TO_UPDATE_SITE:
            return {
                ...state,
                loading: false,
                updateResult: action.payload
            }
        case DELETE_SITE:
            return {
                ...state,
                loading: false,
                deleteResult: action.payload
            }
        case FAILED_TO_DELETE_SITE:
            return {
                ...state,
                loading: false,
                deleteResult: action.payload
            }
        default:
            return {...state}
    }
};

export default sites;