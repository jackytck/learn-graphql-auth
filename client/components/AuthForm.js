import React, { Component, PropTypes } from 'react'

class AuthForm extends Component {
  static propTypes = {
    errors: PropTypes.array,
    onSubmit: PropTypes.func
  }

  state = {
    email: '',
    password: ''
  }

  _onEmail = this.onEmail.bind(this)
  _onPassword = this.onPassword.bind(this)
  _onSubmit = this.onSubmit.bind(this)

  onEmail (e) {
    this.setState({ email: e.target.value })
  }

  onPassword (e) {
    this.setState({ password: e.target.value })
  }

  onSubmit (event) {
    event.preventDefault()
    const { email, password } = this.state
    this.props.onSubmit({ email, password })
  }

  render () {
    return (
      <div className='row'>
        <form className='col s6' onSubmit={this._onSubmit}>

          <div className='errors'>
            {this.props.errors.map(error => <div key={error}>{error}</div>)}
          </div>

          <div className='input-field'>
            <input
              placeholder='Email'
              value={this.state.email}
              onChange={this._onEmail}
            />
          </div>
          <div className='input-field'>
            <input
              placeholder='Password'
              type='password'
              value={this.state.password}
              onChange={this._onPassword}
            />
          </div>
          <button className='btn'>Submit</button>
        </form>
      </div>
    )
  }
}

export default AuthForm
