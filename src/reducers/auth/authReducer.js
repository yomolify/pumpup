/**
 * # authReducer.js
 *
 * The reducer for all the actions from the various log states
 */
'use strict'
/**
 * ## Imports
 * The InitialState for auth
 */
const InitialState = require('./authInitialState').default

/**
 * ## Auth actions
 */
const {
  SESSION_TOKEN_REQUEST,
  SESSION_TOKEN_SUCCESS,
  SESSION_TOKEN_FAILURE,
} = require('../../lib/constants').default

const initialState = new InitialState()
/**
 * ## authReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export default function authReducer (state = initialState, action) {
  if (!(state instanceof InitialState)) {
    return initialState.mergeDeep(state)
  }

  switch (action.type) {
  /**
   * ### Requests start
   * set the token to fetching and clear any errors
   */
  case SESSION_TOKEN_REQUEST: {
    let nextState = state
      .setIn(['token', 'isFetching'], true)
      .setIn(['token', 'error'], null)
    return nextState
  }

  /**
   * ### Requests end, good or bad
   * Set the fetching flag so the tokens will be enabled
   */
  case SESSION_TOKEN_SUCCESS:
  case SESSION_TOKEN_FAILURE:
    return state.setIn(['token', 'isFetching'], false)

  default:
    return state
  }
}
