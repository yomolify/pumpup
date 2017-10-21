/**
 * # authActions.js
 *
 * All the request actions have 3 variations, the request, a success
 * and a failure. They all follow the pattern that the request will
 * set the ```isFetching``` to true and the whether it's successful or
 * fails, setting it back to false.
 *
 */
'use strict'

/**
 * ## Imports
 *
 * The actions supported
 */
const {
  SESSION_TOKEN_REQUEST,
  SESSION_TOKEN_SUCCESS,
  SESSION_TOKEN_FAILURE,
} = require('../../lib/constants').default

/**
 * Project requirements
 */
import {Actions} from 'react-native-router-flux'

import {appAuthToken} from '../../lib/AppAuthToken'

const _ = require('lodash')

/**
 * ## SessionToken actions
 */
export function sessionTokenRequest () {
  return {
    type: SESSION_TOKEN_REQUEST
  }
}
export function sessionTokenRequestSuccess (token) {
  return {
    type: SESSION_TOKEN_SUCCESS,
    payload: token
  }
}
export function sessionTokenRequestFailure (error) {
  console.error('No session token')
  console.log(error)
  return {
    type: SESSION_TOKEN_FAILURE,
    payload: _.isUndefined(error) ? null : error
  }
}

/**
 * ## getSessionToken
 */
export function getSessionToken (sessionToken) {
  return dispatch => {
    dispatch(sessionTokenRequest())
    return appAuthToken.getSessionToken(sessionToken)

      .then((token) => {
        if (token) {
          dispatch(sessionTokenRequestSuccess(token))
          Actions.Tabbar()
        } else {
          dispatch(sessionTokenRequestFailure())
        }
      })

      .catch((error) => {
        dispatch(sessionTokenRequestFailure(error))
      })
  }
}
