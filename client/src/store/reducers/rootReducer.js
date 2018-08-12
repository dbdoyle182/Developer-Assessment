import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr';
import modalsReducer from '../modals/modalReducer'
import authReducer from '../auth/authReducer';

const rootReducer = combineReducers({
    form: FormReducer,
    toastr: toastrReducer,
    modals: modalsReducer,
    auth: authReducer
})

export default rootReducer;