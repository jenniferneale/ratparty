import axios from 'axios'
import history from '../history'
import store from './index'

/**
 * ACTION TYPES
 */
const GET_RATS = 'GET_RATS'
const GET_HUMANS = 'GET_HUMANS'
const GET_RATPOINTS = 'GET_RATPOINTS'
const GET_HUMANPOINTS = 'GET_HUMANPOINTS'

/**
 * INITIAL STATE
 */
const defaultState = {
    rats: [],
    humans: [],
    ratPoints: null,
    humanPoints: null
}

/**
 * ACTION CREATORS
 */
const getRats = (rats) => ({type: GET_RATS, rats })
const getHumans = (humans) => ({type: GET_HUMANS, humans })
const getRatPoints = (ratPoints) => ({type: GET_RATPOINTS, ratPoints })
const getHumanPoints = (humanPoints) => ({type: GET_HUMANPOINTS, humanPoints })

/**
 * THUNK CREATORS
 */
export const fetchRats = () =>
    dispatch => {
        axios.get(`/api/users/rats`)
            .then(res =>
                dispatch(getRats(res.data || defaultState.rats)))
            .then(() => {
                return axios.get(`/api/users/rats/points`)})
            .then(rps => {
                dispatch(getRatPoints(rps.data || defaultState.ratPoints))})
            .catch(err => console.log(err))
    }

    export const fetchHumans = () =>
    dispatch => {
        axios.get(`/api/users/humans`)
            .then(res =>
                dispatch(getHumans(res.data || defaultState.humans)))
            .then(() => {
                return axios.get(`/api/users/humans/points`)})
            .then(rps => 
                dispatch(getHumanPoints(rps.data || defaultState.humanPoints)))
            .catch(err => console.log(err))
    }

/**
 * REDUCER
 */
export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_RATS:
      return Object.assign({}, state, { rats: action.rats })
    case GET_HUMANS:
      return Object.assign({}, state, { humans: action.humans })
    case GET_RATPOINTS:
      return Object.assign({}, state, { ratPoints: action.ratPoints })
    case GET_HUMANPOINTS:
      return Object.assign({}, state, { humanPoints: action.humanPoints })
    default:
      return state
  }
}
