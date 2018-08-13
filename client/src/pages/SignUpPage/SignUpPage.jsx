import React, {Component} from 'react'
import SignUpForm from '../../components/SignUpForm';
import {connect} from 'react-redux';
import axios from 'axios';
import { closeModal, openModal } from '../../store/modals/modalActions';

const mapState = state => ({
    signup: state.form.signUpForm
})

const actions = {
    closeModal,
    openModal
}
class SignUpPage extends Component {

    
    handleFormSubmit = (signup) => {
        let newUser = {
            "givenName": signup.givenName,
            "familyName": signup.familyName,
            "email": signup.email,
            "gender": signup.gender,
            "phoneNumber1": "+1" + signup.phoneNumber1,
            "userName": signup.userName,
            // "password": signup.password
        };
        axios.post('https://rkprv2kx5b.execute-api.us-east-1.amazonaws.com/dev/admins/signup',
        newUser ,
        {
            headers: {
                "x-api-key":"RfgackFzlO2IKAhmukniT25ZYIGbSyIH788tvf32",
                "Content-Type":"application/json"
            }
        })
        .then(res => {
            console.log(res)
            this.props.closeModal()
            this.props.openModal("LoginModal")
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
       
        return (
        <div>
          <SignUpForm handleFormSubmit={this.handleFormSubmit}/>
        </div>
        )
    }
}

export default connect(mapState, actions)(SignUpPage);