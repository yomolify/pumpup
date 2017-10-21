/**
 * # authReducer-test.js
 *
 * Test the authReducer's only function, like all reducers, where the
 * state and action are passed in.
 *
 * This will confirm that given a specific action with a type and
 * payload, that the state object is modified accordingly.
 *
 * *Note*: in this app,```state``` is an Immutable.js object
 *
 */
'use strict'

/**
 * ## Imports
 *
 * These actions are sufficient to test the reducer as many of the
 * case statements are shared amongst the actions.
 */
const {
  SESSION_TOKEN_REQUEST,
  SESSION_TOKEN_SUCCESS,
  SESSION_TOKEN_FAILURE,
} = require('../../../lib/constants').default

/**
 * ## Class under test
 */
const authReducer = require('../authReducer').default
/**
 * ## Tests
 *
 * authReducer
 */
describe('authReducer', () => {
  /**
   * ### SessionToken ...all requests in general
   *
   * In general, all requests will have fetching true before
   * actually pertokening the request,and followed
   * by either a success or failure action that signals the request
   * has ended and the fetching flag can be toggled.
   *
   * *Note*: these tests call the ```authReducer``` with an
   * ```undefined``` state so that the reducer will return a valid state.
   *
   */
  describe('SESSION-TOKEN-REQUEST', () => {
    it('starts fetching', () => {
      const action = {
        type: SESSION_TOKEN_REQUEST
      }
      let next = authReducer(undefined, action)

      expect(next.token.isFetching).toBe(true)
      expect(next.token.error).toBe(null)
    })

    it('finishes fetching on success', () => {
      const action = {
        type: SESSION_TOKEN_SUCCESS
      }
      let next = authReducer(undefined, action)

      expect(next.token.isFetching).toBe(false)
      expect(next.token.error).toBe(null)
    })

    it('finishes fetching on failure', () => {
      const action = {
        type: SESSION_TOKEN_FAILURE
      }
      let next = authReducer(undefined, action)

      expect(next.token.isFetching).toBe(false)
      expect(next.token.error).toBe(null)
    })
  })// Session-token-request
})// authReducer
