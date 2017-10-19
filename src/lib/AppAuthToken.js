/**
 * # AppAuthToken.js
 *
 * A thin wrapper over the react-native-simple-store
 *
 * Singleton module see https://k94n.com/es6-modules-single-instance-pattern
 */
'use strict'
/**
 * ## Imports
 *
 * Redux  & the config file
 */
import store from 'react-native-simple-store'
import CONFIG from './config'

export class AppAuthToken {
  /**
   * ## AppAuthToken
   *
   * set the key from the config
   */
  constructor () {
    this.SESSION_TOKEN = CONFIG.SESSION_TOKEN
  }

  /**
   * ### storeSessionToken
   * Store the session key
   */
  storeSessionToken (sessionToken) {
    return store.save(this.SESSION_TOKEN, {
      sessionToken: sessionToken
    })
  }
  /**
   * ### getSessionToken
   * @param {Object} sessionToken the currentUser object
   *
   * When Hot Loading, the sessionToken  will be passed in, and if so,
   * it needs to be stored on the device.  Remember, the store is a
   * promise so, have to be careful.
   */
  getSessionToken (sessionToken) {
    if (sessionToken) {
      return store.save(this.SESSION_TOKEN, {
        sessionToken: sessionToken
      }).then(() => {
        return store.get(this.SESSION_TOKEN)
      })
    }
    return store.get(this.SESSION_TOKEN)
  }
  /**
   * ### deleteSessionToken
   * Deleted during log out
   */
  deleteSessionToken () {
    return store.delete(this.SESSION_TOKEN)
  }
}
// The singleton variable
export let appAuthToken = new AppAuthToken()
