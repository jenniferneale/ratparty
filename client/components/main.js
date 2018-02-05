import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link, NavLink} from 'react-router-dom'
import {logout} from '../store'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children, handleClick, isLoggedIn, user} = props
  return (
    <div className="main">
    <div className="row">
      <div className="leftPageImage col">
        <img className="img-fluid" src="/images/left_float_v01.png" />
      </div>
      <div className="centerPage col-8 col-lg-5">
        <div className=""><a href="/"><img className="img-fluid" src="/images/signin_middle_v01.png" /></a></div>
        <nav>
          {
            isLoggedIn
              ? <div>
                {/* The navbar will show these links after you log in */}
                <Link to="/home">Home</Link>
                <NavLink to={`/users/${user.id}`} >Profile</NavLink>
                <a className="float-right" href="#" onClick={handleClick}>Logout</a>
              </div>
              : <div>
                {/* The navbar will show these links before you log in */}
                <Link to="/">Home</Link>
                <Link to="/login" className="float-right">Login</Link>
                <Link to="/signup" className="float-right">Sign Up</Link>
              </div>
          }
        </nav>
        <hr />
        {children}
      </div>
      <div className="rightPageImage col">
        <img className="img-fluid" src="/images/right_float_v01.png" />
      </div>
    </div>
    <div class="footer-copyright">
        <div class="container-fluid">
            © 2018 Copyright: <Link to="/about"> Alex Sherman and Jennifer Neale </Link>
        </div>
    </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user,
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
