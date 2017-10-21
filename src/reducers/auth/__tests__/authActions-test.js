/**
 * # authActions-test.js
 *
 * This test is for authActions
 *
 */
'use strict'

/**
 * ## Mocks
 *
 * We don't want to use the devices storage, nor actually call
 * the server
 *
 * Need to mock router so the "keys" are available (see src/__mocks__)
 */
jest.mock('../../../lib/AppAuthToken')
jest.mock('../../../lib/BackendFactory')
jest.mock('react-native-router-flux')

/**
 * ## Mock Store
 *
 * The ```mockStore``` confirms the all the actions are dispatched and
 * in the correct order
 *
 */
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)
/**
 * ## Class under test
 *
 */
const actions = require('../authActions')

/**
 * ## Imports
 *
 * actions under test
 */
const {
  SESSION_TOKEN_REQUEST,
  SESSION_TOKEN_SUCCESS,
  SESSION_TOKEN_FAILURE,
} = require('../../../lib/constants').default

/**
 * ## Tests
 *
 * authActions
 */
describe('authActions', () => {
  /**
   * ### simple tests that prove the actions have the specific type
   */

  it('should set sessionTokenRequest', () => {
    expect(actions.sessionTokenRequest()).toEqual({type: SESSION_TOKEN_REQUEST})
  })

  it('should set sessionTokenRequestSuccess', () => {
    let token = {token: 'thisisthetoken'}
    expect(actions.sessionTokenRequestSuccess(token)).toEqual({
      type: SESSION_TOKEN_SUCCESS, payload: token})
  })

  it('should set sessionTokenRequestFailure', () => {
    let error = {error: 'thisistheerror'}
    expect(actions.sessionTokenRequestFailure(error)).toEqual({
      type: SESSION_TOKEN_FAILURE, payload: error })
  })

  /**
   * ### async tests
   *
   * the following tests describe the actions that should be
   * dispatched the function is invoked
   *
   * *Note*: these tests are run with ```it``` because they are async
   *
   */

  it('should getSessionToken', () => {
    const expectedActions = [
      {type: SESSION_TOKEN_REQUEST},
        {type: SESSION_TOKEN_SUCCESS,
          payload: {sessionToken:
                  {sessionToken: 'token'}}}
    ]

    const store = mockStore({})
    return store.dispatch(actions.getSessionToken())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions[0].type)
        expect(store.getActions()[1].type).toEqual(expectedActions[1].type)
        expect(store.getActions()[1].payload.sessionToken.sessionToken).toEqual(expectedActions[1].payload.sessionToken.sessionToken)
      })
  })
})
