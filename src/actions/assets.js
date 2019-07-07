import axios from '../api/axios';

const TOKEN = localStorage.getItem('token');

let headers = {
    "Authorization": `Token ${TOKEN}`
};

export const LOADING = 'LOADING';
export const GET_ASSET_LIST = 'GET_ASSET_LIST';
export const GET_ASSET = 'GET_ASSET';
export const CREATE_ASSET = 'CREATE_ASSET';
export const UPDATE_ASSET = 'UPDATE_ASSET';
export const FAILED_TO_GET_ASSET_LIST = 'FAILED_TO_GET_ASSET_LIST';
export const FAILED_TO_GET_ASSET = 'FAILED_TO_GET_ASSET';
export const FAILED_TO_CREATE_ASSET = 'FAILED_TO_CREATE_ASSET';
export const FAILED_TO_UPDATE_ASSET = 'FAILED_TO_UPDATE_ASSET';
export const GET_ASSET_FORM_OPTIONS = 'GET_ASSET_FORM_OPTIONS';
export const FAILED_TO_GET_ASSET_FORM_OPTIONS = 'FAILED_TO_GET_ASSET_FORM_OPTIONS';

// Actions
export const getAssetList = () => {
    return (
        dispatch => {
            dispatch(loading())
            axios.get('api/assets/', {
                headers: headers
            })
            .then(res => {
                dispatch(populate_asset_list(res.data))
            })
            .catch(err => {
                dispatch(failed_to_populate_asset_list())
            })
        }
    )
}

/* Get form options */

export const getAssetFormOptions = () => {
    return dispatch => {
        dispatch(loading());
        axios.options('api/assets/', {
            headers: headers
        })
        .then(res => {
            dispatch(populate_asset_form_options(res.data.actions.POST))
        })
        .catch(err => {
            console.log(err)
            dispatch(failed_to_populate_asset_form_options())
        })
    }
}

// Dispatch
const loading = () => {
    return {
        type: LOADING,
        payload: true
    }
}
const populate_asset_list = (res) => {
    return {
        type: GET_ASSET_LIST,
        payload: res
    }
}

const failed_to_populate_asset_list = () => {
    return {
        type: FAILED_TO_GET_ASSET_LIST,
        payload: 'Failed to get asset list'
    }
}

/* Populate from options */

const populate_asset_form_options = (res) => {
    return {
        type: GET_ASSET_FORM_OPTIONS,
        payload: res
    }
}

const failed_to_populate_asset_form_options = () => {
    return {
        type: FAILED_TO_GET_ASSET_FORM_OPTIONS,
        payload: 'Unable to get form at this time'
    }
}