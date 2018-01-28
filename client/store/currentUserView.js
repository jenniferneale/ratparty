import axios from 'axios'
import history from '../history'
import store from './index'

/**
 * ACTION TYPES
 */
const GET_PROFILE = 'GET_PROFILE'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getProfile = user => ({type: GET_PROFILE, user})

/**
 * THUNK CREATORS
 */
export const fetchProfile = (userId) =>
    dispatch => {
        axios.get(`/api/users/${userId}`)
            .then(res =>
                dispatch(getProfile(res.data || defaultUser)))
            .catch(err => console.log(err))
    }

export const addPoint = (userId) =>
    dispatch => {
        axios.post(`/api/users/${userId}/add`)
        .then(res => {
            dispatch(getProfile(res.data || defaultUser))
            if (!store.user) //if not logged in, redirect to landing page
                history.push('/firstbite')
        })
        .catch(err => console.log(err))
    }

/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_PROFILE:
      return action.user
    default:
      return state
  }
}
