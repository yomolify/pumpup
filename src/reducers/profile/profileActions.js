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
  GET_POPULAR_PHOTOS_FAILURE,

  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAILURE,

  ON_PROFILE_FORM_FIELD_CHANGE
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
/**
 * ## State actions
 * controls which form is displayed to the user
 * as in login, register, logout or reset password
 */
export function profileUpdateRequest () {
  return {
    type: PROFILE_UPDATE_REQUEST
  }
}
export function profileUpdateSuccess () {
  return {
    type: PROFILE_UPDATE_SUCCESS
  }
}
export function profileUpdateFailure (json) {
  return {
    type: PROFILE_UPDATE_FAILURE,
    payload: json
  }
}
/**
 * ## updateProfile
 * @param {string} userId -  objectId
 * @param {string} username - the users name
 * @param {string} email - user's email
 * @param {Object} sessionToken - the sessionToken
 *
 * The sessionToken is provided when Hot Loading.
 *
 * With the sessionToken, the server is called with the data to update
 * If successful, get the profile so that the screen is updated with
 * the data as now persisted on the serverx
 *
 */
export function updateProfile (userId, username, email, sessionToken) {
  return dispatch => {
    dispatch(profileUpdateRequest())
    return appAuthToken.getSessionToken(sessionToken)
      .then((token) => {
        return BackendFactory(token).updateProfile(userId,
          {
            username: username,
            email: email
          }
        )
      })
      .then(() => {
        dispatch(profileUpdateSuccess())
        dispatch(getUserProfile())
      })
      .catch((error) => {
        dispatch(profileUpdateFailure(error))
      })
  }
}
/**
 * ## onProfileFormFieldChange
 *
 */
export function onProfileFormFieldChange (field, value) {
  return {
    type: ON_PROFILE_FORM_FIELD_CHANGE,
    payload: {field: field, value: value}
  }
}
