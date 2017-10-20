/**
 * # Hapi.js
 *
 * This class interfaces with Hapi.com using the rest api
 * see [http://hapijs.com/api](http://hapijs.com/api)
 *
 * Singleton module see: https://k94n.com/es6-modules-single-instance-pattern
 */
'use strict'

/**
 * ## Imports
 *
 * Config for defaults and lodash for a couple of features
 */
import CONFIG from './config'
import _ from 'lodash'
import Backend from './Backend'

export class PumpUpAPI extends Backend {
  /**
   * ## PumpUpAPI client
   *
   *
   * @throws tokenMissing if token is undefined
   */
  initialize (token) {
    if (!_.isNull(token) && _.isUndefined(token)) {
      throw new Error('TokenMissing')
    }
    this._sessionToken =
      _.isNull(token) ? null : token

    this.API_BASE_URL = CONFIG.backend.PumpUpAPILocal
          ? CONFIG.PumpUpAPI.local.url
          : CONFIG.PumpUpAPI.remote.url
  }

  /**
   * ### getUserProfile
   * Using the sessionToken, we'll get everything about
   * the current user.
   * @return {Object}
   * if good:
   * {bio: "string of 4-5 lines"
   *  birthday: {
   *      __type: "Date"
   *      iso: "1992-02-17T00:00:00.000Z"}
   *  followerCount: "708024"
   *  followingCount: "335"
   *  gender: "2"
   *  lastActiveDate: {
   *      __type: "Date"
   *      iso: "2017-10-17T20:34:28.561Z"}
   *  location: "Toronto, Canada"
   *  name: "pumpup"
   *  postCount: "2942"
   *  profileImage: "image-url"
   *  profileThumbnail: "thumbnail-url"
   *  role: "3"
   *  website: "website-url"
   *  createdAt: "2014-02-03T07:21:44.372Z"
   *  updatedAt: "2017-10-17T20:34:39.453Z"
   *  className: "User"
   *  objectId: "318381"}
   *
   * if error: {code: xxx, error: 'message'}
   */
  async getUserProfile () {

    return await this._fetch({
      method: 'POST',
      url: '/classes/User/318381',
      body: {
        _method: 'GET',
        _version: '5.0.5',
        _SessionToken: this._sessionToken.sessionToken
      }
    })
      .then((res) => {
        console.log('getUserProfile response is', res)

        if ((res.status === 200 || res.status === 201)) {
          return res.json
        } else {
          throw (res.json)
        }
      })
      .catch((error) => {
        console.log('PumpUpAPI Error')
        console.log(error)
        throw (error)
      })
  }

    /**
   * ### getUserPhotos
   * Using the sessionToken, we'll get the
   * user feed photos for the slider
   * @return {Object}
   * if good:
   * {result: {
   *      posts: [{
   *            createdAt: "2016-09-16T22:18:13.091Z",
   *            thumbnail: "http://thumbnail-url1.com",
   *            className: "Post",
   *           objectId: 17517155,
   *          "__type: "Object"},
   *         {createdAt: "2016-03-23T20:42:20.304Z",
   *            thumbnail: "http://thumbnail-url2.com",
   *            className: "Post",
   *           objectId: 16080756,
   *          "__type: "Object"},
   *         ...
   *         ...
   *            ]
   *         }
   * }
   *
   * if error: {code: xxx, error: 'message'}
   */
  async getUserPhotos () {

    return await this._fetch({
      method: 'POST',
      url: '/functions/feed/profile/load-batch',
      body: {
        isThumbnailsOnly: true,
        limit: 5,
        userId: 2707798,
        _method: 'POST',
        _version: '5.0.5',
        _SessionToken: this._sessionToken.sessionToken
      }

    })
      .then((res) => {
        console.log('getUserPhotos response is', res)

        if ((res.status === 200 || res.status === 201)) {
          return res.json
        } else {
          throw (res.json)
        }
      })
      .catch((error) => {
        console.log('PumpUpAPI Error')
        console.log(error)
        throw (error)
      })
  }



    /**
   * ### getPopularPhotos
   * Using the sessionToken, we'll get the
   * popular feed photos for the grid
   * @return {Object}
   * if good:
   * {result: {
   *      posts: [{
   *           createdAt: "2016-09-16T22:18:13.091Z",
   *           thumbnail: "http://thumbnail-url1.com",
   *           className: "Post",
   *           objectId: 17517155,
   *           __type: "Object"},
   *         {createdAt: "2016-03-23T20:42:20.304Z",
   *           thumbnail: "http://thumbnail-url2.com",
   *           className: "Post",
   *           objectId: 16080756,
   *           __type: "Object"},
   *         ...
   *         ...
   *            ]
   *         }
   * }
   *
   * if error: {code: xxx, error: 'message'}
   */
  async getPopularPhotos () {

    return await this._fetch({
      method: 'POST',
      url: '/functions/feed/popular/load-batch',
      body: {
        isThumbnailsOnly: true,
        limit: 18,
        _method: 'POST',
        _version: '5.0.5',
        _SessionToken: this._sessionToken.sessionToken
      }

    })
      .then((res) => {
        console.log('getPopularPhotos response is', res)

        if ((res.status === 200 || res.status === 201)) {
          return res.json
        } else {
          throw (res.json)
        }
      })
      .catch((error) => {
        console.log('PumpUpAPI Error')
        console.log(error)
        throw (error)
      })
  }
  /**
   * ### _fetch
   * A function that prepares the request by
   * adding pumpup specific request options
   * like _method, _version, _SessionToken
   *
   * @returns object:
   *  {code: response.code,
   *   status: response.status,
   *   json: response.json()
   */
  async _fetch (opts) {

    opts = _.extend({
      method: 'GET',
      url: null,

      callback: null
    }, opts)

    let reqOpts = {
      method: 'POST',
      headers: {
      }
    }

    if (opts.method === 'POST' || opts.method === 'PUT') {
      reqOpts.headers.Accept = 'application/json'
      reqOpts.headers['Content-Type'] = 'application/json'
    }

    if (opts.body) {
      reqOpts.body = JSON.stringify(opts.body)
    }

    let url = this.API_BASE_URL + opts.url
    let res = {}

    try {
      let response = await fetch(url, reqOpts)

      res.status = response.status
      res.code = response.code

      return response.json()
      .then((json) => {
        // console.log('response json is', json)
        res.json = json
        return res
      })
    } catch(error) {
      console.error(error)
    }
  }
}
// The singleton variable
export let pumpupAPI = new PumpUpAPI()
