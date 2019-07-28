import axios from '../api/axios';

// constants
export const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILED = 'LOGIN_FAILED';


// actions

export const login = (formData, props, handleModalTitle) => {
    return (dispatch) => {
        dispatch(attempting_to_login());
        axios.post('api-token-auth/', formData)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            dispatch(successfully_logged_in());
            setTimeout(()=>{
                props.history.push('/sites');
            }, 300)
        })
        .catch(err => {
            handleModalTitle()
            if (err.response.data.non_field_errors[0]) {
                dispatch(failed_to_authenticate(err.response.data.non_field_errors[0]))
            } else {
                return err
            }
        })
    }
}

export const logout = (props) => {
    return (dispatch) => {
        localStorage.removeItem('token')
        dispatch(failed_to_authenticate('user has logged out'))
        props.history.push('/login')
    }
}

// dispatch
export const attempting_to_login = () => {
    return {
        type: ATTEMPT_LOGIN,
        payload: true
    }
}

export const successfully_logged_in = () => {
    return {
        type: LOGIN_SUCCESSFUL,
        payload: true
    }
}

export const failed_to_authenticate = (res) => {
    return {
        type: LOGIN_FAILED,
        payload: res
    }
}