/**
 * # profileActions.js
 *
 * The actions to support the users profile
 */
'use strict'
/**
 * ## Imports
 *
 * The actions for profile
 */
const {
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,

  GET_USER_PHOTOS_REQUEST,
  GET_USER_PHOTOS_SUCCESS,
  GET_USER_PHOTOS_FAILURE,

  GET_POPULAR_PHOTOS_REQUEST,
  GET_POPULAR_PHOTOS_SUCCESS,
  GET_POPULAR_PHOTOS_FAILURE
} = require('../../lib/constants').default

/**
 * BackendFactory - base class for server implementation
 * AppAuthToken for localStorage sessionToken access
 */
const BackendFactory = require('../../lib/BackendFactory').default
import {appAuthToken} from '../../lib/AppAuthToken'

/**
 * ## retreiving user profile actions
 */
export function getUserProfileRequest () {
  return {
    type: GET_USER_PROFILE_REQUEST
  }
}
export function getUserProfileSuccess (json) {
  return {
    type: GET_USER_PROFILE_SUCCESS,
    payload: json
  }
}
export function getUserProfileFailure (json) {
  return {
    type: GET_USER_PROFILE_FAILURE,
    payload: json
  }
}

/**
 * ## retreiving user photos actions
 *
 */
export function getUserPhotosRequest () {
  return {
    type: GET_USER_PHOTOS_REQUEST
  }
}
export function getUserPhotosSuccess (json) {
  return {
    type: GET_USER_PHOTOS_SUCCESS,
    payload: json
  }
}
export function getUserPhotosFailure (json) {
  return {
    type: GET_USER_PHOTOS_FAILURE,
    payload: json
  }
}

/**
 * ## retreiving popular photos actions
 *
 */
export function getPopularPhotosRequest () {
  return {
    type: GET_POPULAR_PHOTOS_REQUEST
  }
}
export function getPopularPhotosSuccess (json) {
  return {
    type: GET_POPULAR_PHOTOS_SUCCESS,
    payload: json
  }
}
export function getPopularPhotosFailure (json) {
  return {
    type: GET_POPULAR_PHOTOS_FAILURE,
    payload: json
  }
}

/**
 * ## Make API call
 * getUserProfile
 *
 */
export function getUserProfile (sessionToken) {
  return dispatch => {
    dispatch(getUserProfileRequest())
    // store or get a sessionToken
    return appAuthToken.getSessionToken(sessionToken)
      .then((token) => {
        return BackendFactory(token).getUserProfile()
      })
      .then((json) => {
        dispatch(getUserProfileSuccess(json))
      })
      .catch((error) => {
        dispatch(getUserProfileFailure(error))
      })
  }
}

/**
 * ## Make API call
 * getUserPhotos
 *
 */
export function getUserPhotos (sessionToken) {
  return dispatch => {
    dispatch(getUserPhotosRequest())
    // store or get a sessionToken
    return appAuthToken.getSessionToken(sessionToken)
      .then((token) => {
        return BackendFactory(token).getUserPhotos()
      })
      .then((json) => {
        dispatch(getUserPhotosSuccess(json))
      })
      .catch((error) => {
        dispatch(getUserPhotosFailure(error))
      })
  }
}
/**
 * ## Make API call
 * getPopularPhotos
 *
 */
export function getPopularPhotos (sessionToken) {
  return dispatch => {
    dispatch(getPopularPhotosRequest())
    // store or get a sessionToken
    return appAuthToken.getSessionToken(sessionToken)
      .then((token) => {
        return BackendFactory(token).getPopularPhotos()
      })
      .then((json) => {
        dispatch(getPopularPhotosSuccess(json))
      })
      .catch((error) => {
        dispatch(getPopularPhotosFailure(error))
      })
  }
}
