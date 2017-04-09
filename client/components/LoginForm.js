import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import AuthForm from './AuthForm'
import mutation from '../mutations/Login'

class LoginForm extends Component {
  static propTypes = {
    mutate: PropTypes.func
  }
  _onSubmit = this.onSubmit.bind(this)

  onSubmit ({ email, password }) {
    this.props.mutate({
      variables: { email, password }
    })
  }

  render () {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm onSubmit={this._onSubmit} />
      </div>
    )
  }
}

export default graphql(mutation)(LoginForm)
