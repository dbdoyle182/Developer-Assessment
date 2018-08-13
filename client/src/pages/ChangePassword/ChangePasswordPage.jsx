import React, { Component } from 'react';
import ChangePassword from '../../components/ChangePassword';
import {connect} from 'react-redux';
import axios from 'axios';
import { login } from '../../store/auth/authActions';
import { closeModal } from '../../store/modals/modalActions';

const actions = {
  login,
  closeModal
}

const mapState = state => ({
  password: state.form.changePasswordForm
})


class ChangePasswordPage extends Component {
  handleFormSubmit = (password) => {
    
    const user = {
      userName: password.userName,
      password: password.password,
      newPassword: password.newPassword
    };
    
    axios.post('https://rkprv2kx5b.execute-api.us-east-1.amazonaws.com/dev/admins/auth', user, {
      headers: {
        "x-api-key":"RfgackFzlO2IKAhmukniT25ZYIGbSyIH788tvf32",
        "Content-Type":"application/json",
      }
    }).then(res => {
      console.log(res)
      this.props.closeModal();
      
    }).catch(err => {
      console.log(err)
    })
    
  }
  render() {
    
      return (
      <div>
        <ChangePassword handleSubmit={this.handleFormSubmit}/>
      </div>
      )
  }
}

export default connect(mapState, actions)(ChangePasswordPage);