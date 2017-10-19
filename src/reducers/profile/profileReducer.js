/**
 * # profileReducer.js
 *
 * The reducer user profile actions
 */
'use strict'

/**
 * ## Imports
 *
 */

/**
 * ## Actions
 *
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

  SET_STATE
} = require('../../lib/constants').default

/**
 * ## Initial State
 *
 */
const InitialState = require('./profileInitialState').default
const initialState = new InitialState()

/**
 * ## profileReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export default function profileReducer (state = initialState, action) {
  let nextProfileState = null

  if (!(state instanceof InitialState)) return initialState.mergeDeep(state)

  switch (action.type) {
  /**
   * ### UserProfile Requst
   * fetch user profile and set it on success, error on failure
   */
  case GET_USER_PROFILE_REQUEST:
    return state.setIn(['userProfile', 'isFetching'], true)
    .setIn(['userProfile', 'error'], null)

  case GET_USER_PROFILE_SUCCESS:
    return state.setIn(['userProfile', 'isFetching'], false)
    .setIn(['userProfile', 'error'], null)
    .setIn(['userProfile', 'userProfile'], action.payload)


  case GET_USER_PROFILE_FAILURE:
    return state.setIn(['userProfile', 'isFetching'], false)
    .setIn(['userProfile', 'error'], action.payload)

  /**
   * ### UserPhotos Requst
   * fetch user photos and set them on success, error on failure
   */
  case GET_USER_PHOTOS_REQUEST:
    return state.setIn(['userPhotos', 'isFetching'], true)
    .setIn(['userPhotos', 'error'], null)

  case GET_USER_PHOTOS_SUCCESS:
    return state.setIn(['userPhotos', 'isFetching'], false)
    .setIn(['userPhotos', 'error'], null)
    .setIn(['userPhotos', 'userPhotos'], action.payload)


  case GET_USER_PHOTOS_FAILURE:
    return state.setIn(['userPhotos', 'isFetching'], false)
    .setIn(['userPhotos', 'error'], action.payload)

  /**
   * ### PopularPhotos Requst
   * fetch popular photos and set them on success, error on failure
   */
  case GET_POPULAR_PHOTOS_REQUEST:
    return state.setIn(['popularPhotos', 'isFetching'], true)
    .setIn(['popularPhotos', 'error'], null)

  case GET_POPULAR_PHOTOS_SUCCESS:
    return state.setIn(['popularPhotos', 'isFetching'], false)
    .setIn(['popularPhotos', 'error'], null)
    .setIn(['popularPhotos', 'popularPhotos'], action.payload)


  case GET_POPULAR_PHOTOS_FAILURE:
    return state.setIn(['popularPhotos', 'isFetching'], false)
    .setIn(['popularPhotos', 'error'], action.payload)

  /**
   * ### set the state
   *
   * This is in support of Hot Loading - take the payload
   * and set the values into the state
   *
   */
  case SET_STATE:
    var profile = JSON.parse(action.payload).profile.form
    var next = state.setIn(['form', 'disabled'], profile.disabled)
        .setIn(['form', 'error'], profile.error)
        .setIn(['form', 'isValid'], profile.isValid)
        .setIn(['form', 'isFetching'], profile.isFetching)
        .setIn(['form', 'originalProfile',
                'username'], profile.originalProfile.username)
        .setIn(['form', 'originalProfile',
                'email'], profile.originalProfile.email)
        .setIn(['form', 'originalProfile',
                'objectId'], profile.originalProfile.objectId)
        .setIn(['form', 'originalProfile',
                'emailVerified'], profile.originalProfile.emailVerified)
        .setIn(['form', 'fields',
                'username'], profile.fields.username)
        .setIn(['form', 'fields',
                'usernameHasError'], profile.fields.usernameHasError)
        .setIn(['form', 'fields',
                'email'], profile.fields.email)
        .setIn(['form', 'fields',
                'emailHasError'], profile.fields.emailHasError)
        .setIn(['form', 'fields',
                'emailVerified'], profile.fields.emailVerified)
    return next
  default:

  }// switch
  /**
   * # Default
   */
  return state
}
