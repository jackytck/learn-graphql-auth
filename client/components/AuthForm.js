import React, { Component, PropTypes } from 'react'

class AuthForm extends Component {
  state = {
    email: '',
    password: ''
  }
  _onEmail = this.onEmail.bind(this)
  _onPassword = this.onPassword.bind(this)

  onEmail (e) {
    this.setState({ email: e.target.value })
  }

  onPassword (e) {
    this.setState({ password: e.target.value })
  }

  render () {
    return (
      <div className='row'>
        <form className='col s6'>
          <div className='input-field'>
            <label>Email</label>
            <input
              value={this.state.email}
              onChange={this._onEmail}
            />
          </div>
          <div className='input-field'>
            <label>Password</label>
            <input
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
