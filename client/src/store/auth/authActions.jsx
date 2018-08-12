
import { SIGN_OUT_USER, LOGIN_USER } from './authConstants';
import { closeModal } from '../modals/modalActions';



export const login = creds => {
    closeModal();
    return {
        type: LOGIN_USER,
        payload: {
            creds
        }
    }
}

export const logout = () => {
    return {
        type: SIGN_OUT_USER
    }
}