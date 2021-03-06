import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import { hashHistory } from 'react-router'
import AuthForm from './AuthForm'
import query from '../queries/CurrentUser'
import mutation from '../mutations/Login'

class LoginForm extends Component {
  static propTypes = {
    mutate: PropTypes.func,
    user: PropTypes.object,
    data: PropTypes.object
  }
  state = {
    errors: []
  }
  _onSubmit = this.onSubmit.bind(this)

  componentWillUpdate (nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
      hashHistory.push('/dashboard')
    }
  }

  onSubmit ({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    })
    .catch(res => {
      const errors = res.graphQLErrors.map(error => error.message)
      this.setState({ errors })
    })
  }

  render () {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm errors={this.state.errors} onSubmit={this._onSubmit} />
      </div>
    )
  }
}

export default graphql(query)(
  graphql(mutation)(LoginForm)
)
