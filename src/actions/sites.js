import axios from '../api/axios';

const TOKEN = localStorage.getItem('token');

let headers = {
    "Authorization": `Token ${TOKEN}`
};

export const LOADING = 'LOADING';
export const GET_SITE_LIST = 'GET_SITE_LIST';
export const GET_SITE = 'GET_SITE';
export const GET_SITE_OPTIONS = 'GET_SITE_OPTIONS';
export const FAILED_TO_GET_SITE_OPTIONS = 'FAILED_TO_GET_SITE_OPTIONS';
export const CREATE_SITE = 'CREATE_SITE';
export const UPDATE_SITE = 'UPDATE_SITE';
export const FAILED_TO_GET_SITE_LIST = 'FAILED_TO_GET_SITE_LIST';
export const FAILED_TO_GET_SITE = 'FAILED_TO_GET_SITE';
export const FAILED_TO_CREATE_SITE = 'FAILED_TO_CREATE_SITE';
export const FAILED_TO_UPDATE_SITE = 'FAILED_TO_UPDATE_SITE';
export const GET_SITE_FORM_OPTIONS = 'GET_SITE_FORM_OPTIONS';
export const FAILED_TO_GET_SITE_FORM_OPTIONS = 'FAILED_TO_GET_SITE_FORM_OPTIONS';

// Actions
export const getSiteList = () => {
    return dispatch => {
        dispatch(loading_data());
        axios.get('api/garages/', {
            headers: headers
        })
        .then(res => {
            dispatch(populate_site_list(res.data));
        })
        .catch(err => {
            dispatch(failed_to_populate_site_list());
            return err;
        });
    };
};

export const createSite = (formData, route) => {
    return dispatch => {
        dispatch(loading_data());
        axios.post('api/garages/', formData, {
            headers: headers
        })
        .then(res => {
            dispatch(create_new_site(res));
            route.push('/sites')
        })
        .catch(err => {
            console.log(err.response.data)
            dispatch(failed_to_create_new_site(err.response.data))
        })
    }
}

export const getSiteFormOptions = () => {
    return dispatch => {
        dispatch(loading_data());
        axios.options('api/garages/', {
            headers: headers
        })
        .then(res => {
            dispatch(populate_site_form_options(res.data.actions.POST))
        })
        .catch(err => {
            dispatch(failed_to_populate_site_form_options())
        })
    }
}

export const getSiteOptions = () => {
    return dispatch => {
        axios.get('api/garages/?asset=None', {
            headers: headers
        })
        .then(res => {
            dispatch(get_site_options(res.data))
        })
        .catch(err => {
            failed_to_get_site_options(err)
        })
    }
}

// ************Dispatch***************

/*  Populate the client site table or catch errors. 
    This stores api list items in the sites.siteList array within the app state i.e. redux store
*/
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

/*  Populate the create form that the users use to add a new site.
*/

const populate_site_form_options = (res) => {
    return {
        type: GET_SITE_FORM_OPTIONS,
        payload: res
    }
}

const failed_to_populate_site_form_options = () => {
    return {
        type: FAILED_TO_GET_SITE_FORM_OPTIONS,
        payload: 'Unable to get form options at this time'
    }
}

/* Create new site 
 */

 const create_new_site = (res) => {
     return {
         type: CREATE_SITE,
         payload: res
     }
 }

 const failed_to_create_new_site = (err) => {
     return {
         type: FAILED_TO_CREATE_SITE,
         payload: err
     }
 }

 /* Get options for dropdown */
 const get_site_options = (res) => {
     return {
         type: GET_SITE_OPTIONS,
         payload: res
     }
 }

 const failed_to_get_site_options = (err) => {
     return {
         type: FAILED_TO_GET_SITE_OPTIONS,
         payload: err
     }
 }