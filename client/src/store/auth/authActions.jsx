
import { SubmissionError } from 'redux-form';
import axios from 'axios';
import { SIGN_OUT_USER } from './authConstants';
import { closeModal } from '../modals/modalActions';

const loginFunc = (login) => {
    const user = {
        userName: login.userName,
        password: login.password
      };
      console.log(user)
      axios.post('https://rkprv2kx5b.execute-api.us-east-1.amazonaws.com/dev/admins/auth', user, {
        headers: {
          "x-api-key": "RfgackFzlO2IKAhmukniT25ZYIGbSyIH788tvf32"
        }
      }).then(res => {
        console.log(res)
        const validUser =  JSON.parse(res.data.body)
        console.log(validUser)
        
        //window.location.replace(`/user/${validUser.Username}`)
      }).catch(err => {
        console.log(err)
      })
}

export const login = creds => {
    return async (dispatch, getState) => {
        try {
            await loginFunc(creds)
            dispatch(closeModal())
        } catch (error) {
            console.log(error)
            throw new SubmissionError({
                _error: 'Login Failed. Check your username and password for errors'
            })
        }        
    }
}

export const logout = () => {
    return {
        type: SIGN_OUT_USER
    }
}