import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const {name, displayName, handleSubmit, error} = props  
      
  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
      {
          (name === 'signup') &&           
            <div>
              <label htmlFor="username"><small>Username</small></label>
              <input name="username" type="text" required />
            </div>
      }
        <div>
          <label htmlFor="email"><small>Email</small></label>
          <input name="email" type="text" required />
        </div>
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" required />
        </div>
        {
          (name === 'signup') && 
          <div className="form-group">            
            <label>But exactly how traumatic is this for you?</label>
            <div className="form-check">
              <label className="form-check-label" htmlFor="optionsRadios1">
                <input className="form-check-input" name="speciesRadio" id="optionsRadios1" value="human" type="radio" required />
                I'm only human! I better load up on vaccines. We can beat this stupid plague once and for all.
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="optionsRadios2">
                <input className="form-check-input" name="speciesRadio" id="optionsRadios2" value="rat" type="radio" />
                Aw, man, I'm just a rat. Wait, do infected humans really taste like chicken? Let's get biting!
              </label>
            </div>
          </div>
        }
        <div>
          <button className="btn btn-primary" type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      {/*<a href="/auth/google">{displayName} with Google</a>*/}
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      let username = null;
      if (evt.target.username) username = evt.target.username.value
      let isRat = null;
      if(evt.target.speciesRadio) isRat = (evt.target.speciesRadio.value === 'rat')
      let sireId = null;
      if(ownProps.sireId) sireId = ownProps.sireId;
      dispatch(auth(email, password, formName, username, isRat, sireId))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
