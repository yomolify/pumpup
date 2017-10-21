/**
 * # Backend.js
 *
 * Abstract Base class for Backend support
 *
 */
'use strict'
/**
 * ## Async support
 *
 */
require('regenerator-runtime/runtime')

export default class Backend {

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
  getUserProfile () {}


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
  getUserPhotos () {}

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
  getPopularPhotos() {}

}

