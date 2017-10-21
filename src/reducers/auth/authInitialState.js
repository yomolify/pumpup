/**
 * # authInitialState.js
 *
 * This class is a Immutable object
 * Working *successfully* with Redux, requires
 * state that is immutable.
 * In my opinion, that can not be by convention
 * By using Immutable, it's enforced.  Just saying....
 *
 */
'use strict'
/**
 * ## Import
 */
const {Record} = require('immutable')

/**
 * ## Token
 * This Record contains the state of the session token
 * whether it is being fetched or has erred
 */
const Token = Record({
  error: null,
  isFetching: false,
})

/**
 * ## InitialState
 * The token fields are set
 */
let InitialState = Record({
  token: new Token()
})
export default InitialState

