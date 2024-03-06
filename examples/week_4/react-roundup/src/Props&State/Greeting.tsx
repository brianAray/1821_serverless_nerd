import React from 'react'
import PropTypes from 'prop-types'

function Greeting(props: any) {
  return (
    <h1>Hello, {props.name}</h1>
  )
}

Greeting.propTypes = {
    name: PropTypes.string.isRequired
}

export default Greeting