import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';
import {connect} from 'react-redux';
import axios from 'axios';
import { login } from '../../store/auth/authActions';

const actions = {
  login
}


class LoginPage extends Component {
  // handleFormSubmit = (login) => {
  //   const user = {
  //     userName: login.userName,
  //     password: login.password
  //   };
  //   console.log(user)
  //   axios.post('https://rkprv2kx5b.execute-api.us-east-1.amazonaws.com/dev/admins/auth', user, {
  //     headers: {
  //       "x-api-key": "RfgackFzlO2IKAhmukniT25ZYIGbSyIH788tvf32"
  //     }
  //   }).then(res => {
  //     console.log(res)
  //     const validUser =  JSON.parse(res.data.body)
  //     console.log(validUser)
      
  //     window.location.replace(`/user/${validUser.Username}`)
      
  //   }).catch(err => {
  //     console.log(err)
  //   })
  //   console.log(this.props)
  // }
  render() {
    
      return (
      <div>
        <LoginForm handleSubmit={this.props.login}/>
      </div>
      )
  }
}

export default connect(null, actions)(LoginPage);
