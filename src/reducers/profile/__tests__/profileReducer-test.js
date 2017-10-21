/**
 * # profileReducer-test.js
 *
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
 * These actions of the users profile
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

} = require('../../../lib/constants').default

/**
 * ## Class under test
 *
 */
const profileReducer = require('../profileReducer').default
/**
 * ## Tests
 *
 * profileReducer
 */
describe('profileReducer', () => {
  /**
   * ### Profile Request
   *
   * *Note*: these tests call the ```profileReducer``` with an
   * ```undefined``` state so that the reducer will return a valid state.
   *
   */
  describe('USER_PROFILE_REQUEST', () => {
    /**
     * #### starts fetching
     */
    it('starts fetching', () => {
      const action = {
        type: GET_USER_PROFILE_REQUEST
      }
      let next = profileReducer(undefined, action)

      expect(next.userProfile.isFetching).toBe(true)
      expect(next.userProfile.error).toBe(null)
    })
    /**
     * #### it finishes fetching on success
     *
     * We set the action to simulate valid data returning from
     * the server
     *
     * We validate that after success, the values
     * are set.
     */
    it('finishes fetching on success', () => {
      const action = {
        type: GET_USER_PROFILE_SUCCESS,
        payload: {
          profileImage: 'https://d1m37qdzmw041i.cloudfront.net/photos/users/profile/image/318381-1505247817263.jpg',
          name: 'Amol',
          bio: 'Hey guys, how are you doing today?',
        }
      }
      let next = profileReducer(undefined, action)

      expect(next.userProfile.isFetching).toBe(false)
      expect(next.userProfile.error).toBe(null)
      expect(next.userProfile.userProfile.profileImage).toEqual(action.payload.profileImage)
      expect(next.userProfile.userProfile.name).toEqual(action.payload.name)
      expect(next.userProfile.userProfile.bio).toBe(action.payload.bio)
    })
    /**
     * #### finishes fetching on failure
     *
     * On failure, toggle the fetching flag and provide the error so
     * the use can see it
     */
    it('finishes fetching on failure', () => {
      const action = {
        type: GET_USER_PROFILE_FAILURE,
        payload: {error: 'error'}
      }
      let next = profileReducer(undefined, action)
      expect(next.userProfile.isFetching).toBe(false)
      expect(next.userProfile.error).toBe(action.payload)
    })
  })

  describe('USER_PHOTOS_REQUEST', () => {
    /**
     * #### starts fetching
     */
    it('starts fetching', () => {
      const action = {
        type: GET_USER_PHOTOS_REQUEST
      }
      let next = profileReducer(undefined, action)

      expect(next.userPhotos.isFetching).toBe(true)
      expect(next.userPhotos.error).toBe(null)
    })
    /**
     * #### it finishes fetching on success
     *
     * We set the action to simulate valid data returning from
     * the server
     *
     * We validate that after success, the values
     * are set.
     */
    it('finishes fetching on success', () => {
      const action = {
        type: GET_USER_PHOTOS_SUCCESS,

        payload: {
          result: {
            posts: [
              {
                createdAt: '2016-09-16T22:18:13.091Z',
                thumbnail: 'https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/17517155-1474064295274.jpg',
                className: 'Post',
                objectId: '17517155',
                __type: 'Object'
              },
              {
                createdAt: '2016-03-23T20:42:20.304Z',
                thumbnail: 'https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/16080756-1458765641755.jpg',
                className: 'Post',
                objectId: '16080756',
                __type: 'Object'
              },
            ]
          }
        }
      }
      let next = profileReducer(undefined, action)

      expect(next.userPhotos.isFetching).toBe(false)
      expect(next.userPhotos.error).toBe(null)
      expect(next.userPhotos.userPhotos.result.posts).toEqual(action.payload.result.posts)
    })
    /**
     * #### finishes fetching on failure
     *
     * On failure, toggle the fetching flag and provide the error so
     * the use can see it
     */
    it('finishes fetching on failure', () => {
      const action = {
        type: GET_USER_PHOTOS_FAILURE,
        payload: {error: 'error'}
      }
      let next = profileReducer(undefined, action)
      expect(next.userPhotos.isFetching).toBe(false)
      expect(next.userPhotos.error).toBe(action.payload)
    })
  })

  describe('POPULAR_PHOTOS_REQUEST', () => {
    /**
     * #### starts fetching
     *
     */
    it('starts fetching', () => {
      const action = {
        type: GET_POPULAR_PHOTOS_REQUEST
      }
      let next = profileReducer(undefined, action)

      expect(next.popularPhotos.isFetching).toBe(true)
      expect(next.popularPhotos.error).toBe(null)
    })
    /**
     * #### it finishes fetching on success
     *
     * We set the action to simulate valid data returning from
     * the server
     *
     * We validate that after success, the values
     * are set.
     */
    it('finishes fetching on success', () => {
      const action = {
        type: GET_POPULAR_PHOTOS_SUCCESS,
        payload: {
          result: {
            posts: [
              {
                createdAt: '2016-09-16T22:18:13.091Z',
                thumbnail: 'https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/17517155-1474064295274.jpg',
                className: 'Post',
                objectId: '17517155',
                __type: 'Object'
              },
              {
                createdAt: '2016-03-23T20:42:20.304Z',
                thumbnail: 'https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/16080756-1458765641755.jpg',
                className: 'Post',
                objectId: '16080756',
                __type: 'Object'
              },
            ]
          }
        }
      }
      let next = profileReducer(undefined, action)

      expect(next.popularPhotos.isFetching).toBe(false)
      expect(next.popularPhotos.error).toBe(null)
      expect(next.popularPhotos.popularPhotos.result.posts).toEqual(action.payload.result.posts)
    })

    /**
     * #### finishes fetching on failure
     *
     * On failure, toggle the fetching flag and provide the error so
     * the use can see it
     */
    it('finishes fetching on failure', () => {
      const action = {
        type: GET_POPULAR_PHOTOS_FAILURE,
        payload: {error: 'error'}
      }
      let next = profileReducer(undefined, action)
      expect(next.popularPhotos.isFetching).toBe(false)
      expect(next.popularPhotos.error).toBe(action.payload)
    })
  })
})
