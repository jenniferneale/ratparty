import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Router} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Main, Login, Signup, UserHome, SingleUser, NotFound, FirstBite, Leaderboard, About} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn} = this.props

    return (
      <Router history={history}>
        
        <Main>
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route exact path='/' component={Leaderboard} />
            <Route exact path="/users/:userId" component={SingleUser} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/about" component={About} />
            {
              isLoggedIn &&
                <Switch>
                  {/* Routes placed here are only available after logging in */}
                  <Route path="/home" component={UserHome} />
                </Switch>
            }
            <Route path="/firstbite/:sireId" component={FirstBite} />
            <Route path="/firstbite" component={FirstBite} />
            
            {/* Displays our NotFound component as a fallback */}
            <Route path='*' component={NotFound} />
          </Switch>
        </Main>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
