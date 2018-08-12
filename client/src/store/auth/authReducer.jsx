import { LOGIN_USER, SIGN_OUT_USER } from './authConstants';
import { createReducer } from '../util/reducerUtil';

const initialState = {
    currentUser: {}
}

export const loginUser = (state, payload) => {
    console.log(payload)
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