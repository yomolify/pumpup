/**
 * # Backend.js
 *
 * This class mocks Backend
 *
 */
'use strict'
/**
 * ## Async
 *
 * Need to still treat as async
 */
require('regenerator-runtime/runtime')

export default class Backend {
  /**
   *
   * ### constructor
   * prepare the response for all the methods
   */
  constructor () {
    let _bodyInit = JSON.stringify({
      code: 200
    })
    this.response = {
      'status': 201
    }
    this.response._bodyInit = _bodyInit
  }
  /**
   * ### getUserProfile
   * @returns {Object} response
   */
  async getUserProfile () {
    return await this.response
  }
  /**
   * ### getUserPhotos
   * @returns {Object} response
   */
  async getUserPhotos () {
    return await this.response
  }
    /**
   * ### getPopularPhotos
   * @returns {Object} response
   */
  async getPopularPhotos () {
    return await this.response
  }

}

