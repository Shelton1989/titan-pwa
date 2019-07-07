import { LOGIN_SUCCESSFUL, LOGIN_FAILED, ATTEMPT_LOGIN } from "../actions/auth";

const defaultState = {
    authenticated: false,
    error: '',
    attempting_login: false
}

const auth = (state=defaultState, action) => {
    switch (action.type) {
        case ATTEMPT_LOGIN:
            return {
                ...state,
                attempting_login: action.payload
            }
        case LOGIN_SUCCESSFUL:
            return {
                ...state,
                attempting_login: false,
                authenticated: action.payload
            }
        case LOGIN_FAILED:
            return {
                ...state,
                attempting_login: false,
                authenticated: false,
                error: action.payload
            }
        default:
            return {
                ...state,
            }
    }
}

export default auth;