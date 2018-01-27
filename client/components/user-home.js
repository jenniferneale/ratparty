import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Leaderboard } from './index'

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const {username} = props

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <Leaderboard />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.user.username
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
