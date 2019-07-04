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
} from '../actions/sites';

const defaultState = {
    loading: false,
    siteList: [],
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
                siteList: action.payload
            }
        default:
            return {...state}
    }
};

export default sites;