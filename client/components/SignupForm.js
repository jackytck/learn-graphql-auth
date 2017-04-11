import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import AuthForm from './AuthForm'
import query from '../queries/CurrentUser'
import mutation from '../mutations/Signup'

class SignupForm extends Component {
  static propTypes = {
    mutate: PropTypes.func
  }
  state = {
    errors: []
  }
  _onSubmit = this.onSubmit.bind(this)

  onSubmit ({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    }).catch(res => {
      const errors = res.graphQLErrors.map(error => error.message)
      this.setState({ errors })
    })
  }

  render () {
    return (
      <div>
        <h3>Signup</h3>
        <AuthForm errors={this.state.errors} onSubmit={this._onSubmit} />
      </div>
    )
  }
}

export default graphql(mutation)(SignupForm)
