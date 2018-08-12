import { LOGIN_USER, SIGN_OUT_USER } from './authConstants';
import { createReducer } from '../util/reducerUtil';

const initialState = {
    currentUser: {},
    authenticated: false
}

export const loginUser = (state = initialState, payload) => {
    return {
        ...state,
        authenticated: true,
        currentUser: payload
    }
}

export const signedOutUser = (state, payload) => {
    return {
        ...state,
        authenticated: false,
        currentUser: {}
    }
}

export default createReducer(initialState, {
    [LOGIN_USER]: loginUser,
    [SIGN_OUT_USER]: signedOutUser
})