import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import query from '../queries/CurrentUser'
import mutation from '../mutations/Logout'

class Header extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.boolean,
      user: PropTypes.object
    }),
    mutate: PropTypes.func
  }

  _onLogoutClick = this.onLogoutClick.bind(this)

  onLogoutClick () {
    this.props.mutate({
      refetchQueries: [{ query }]
    })
  }

  renderButtons () {
    const { loading, user } = this.props.data
    if (loading) {
      return <div />
    }
    if (user) {
      return (
        <li>
          <a onClick={this._onLogoutClick}>Logout</a>
        </li>
      )
    } else {
      return (
        <div>
          <li>
            <Link to='/signup'>Signup</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </div>
      )
    }
  }

  render () {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo left'>
            Home
          </Link>
          <ul className='right'>
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    )
  }
}

export default graphql(mutation)(
  graphql(query)(Header)
)
