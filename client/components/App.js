import React, { PropTypes } from 'react'
import Header from './Header'

const App = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node
}

export default App
