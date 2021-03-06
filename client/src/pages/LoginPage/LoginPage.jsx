import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';
import {connect} from 'react-redux';
import axios from 'axios';
import { login } from '../../store/auth/authActions';
import { closeModal } from '../../store/modals/modalActions';

const actions = {
  login,
  closeModal
}

const mapState = state => ({
  userLogin: state.form.loginForm
})


class LoginPage extends Component {
  handleFormSubmit = (userLogin) => {
    
    const user = {
      userName: userLogin.userName,
      password: userLogin.password
    };
    
    axios.post('https://rkprv2kx5b.execute-api.us-east-1.amazonaws.com/dev/admins/auth', user, {
      headers: {
        "x-api-key":"RfgackFzlO2IKAhmukniT25ZYIGbSyIH788tvf32",
        "Content-Type":"application/json"
      }
    }).then(res => {
      console.log(res)
      const userInfo = JSON.parse(res.config.data);
      console.log(userInfo.userName)
      this.props.login(userInfo.userName);
      this.props.closeModal();
      
    }).catch(err => {
      console.log(err)
    })
    
  }
  render() {
    
      return (
      <div>
        <LoginForm handleSubmit={this.handleFormSubmit}/>
      </div>
      )
  }
}

export default connect(mapState, actions)(LoginPage);
