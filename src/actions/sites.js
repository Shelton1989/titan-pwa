import axios from '../api/axios';

const TOKEN = localStorage.getItem('token');

let headers = {
    "Authorization": `Token ${TOKEN}`
};

export const LOADING = 'LOADING';
export const GET_SITE_LIST = 'GET_SITE_LIST';
export const GET_SITE = 'GET_SITE';
export const CREATE_SITE = 'CREATE_SITE';
export const UPDATE_SITE = 'UPDATE_SITE';
export const FAILED_TO_GET_SITE_LIST = 'FAILED_TO_GET_SITE_LIST';
export const FAILED_TO_GET_SITE = 'FAILED_TO_GET_SITE';
export const FAILED_TO_CREATE_SITE = 'FAILED_TO_CREATE_SITE';
export const FAILED_TO_UPDATE_SITE = 'FAILED_TO_UPDATE_SITE';

// Actions
export const getSiteList = () => {
    return dispatch => {
        dispatch(loading_data());
        axios.get('api/garages/', {
            headers: headers
        })
        .then(res => {
            console.log(res.data)
            dispatch(populate_site_list(res.data));
        })
        .catch(err => {
            dispatch(failed_to_populate_site_list());
            return err;
        });
    };
};


// Dispatch

const loading_data = () => {
    return {
        type: LOADING,
        payload: true
    }
}
const populate_site_list = (res) => {
    return {
        type: GET_SITE_LIST,
        payload: res
    }
}

const failed_to_populate_site_list = () => {
    return {
        type: FAILED_TO_GET_SITE_LIST,
        payload: 'Unable to get data'
    }
}