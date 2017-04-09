import React, { Component, PropTypes } from 'react'
import AuthForm from './AuthForm'

class LoginForm extends Component {
  render () {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm />
      </div>
    )
  }
}

export default LoginForm
