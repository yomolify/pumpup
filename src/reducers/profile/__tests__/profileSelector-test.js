/**
 * # profileSelectors-test.js
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
 * ## Class under test
 *
 */
const profileSelectors = require('../profileSelectors')
/**
 * ## Tests
 *
 * profileSelectors
 */
describe('profileSelectors', () => {
  /**
   * ### Profile Request
   */
  describe('getUserProfile', () => {

    it('gets user profile', () => {
      let currentState = {
        profile: {
          userProfile: {
            userProfile: {
              profileImage: 'https://d1m37qdzmw041i.cloudfront.net/photos/users/profile/image/318381-1505247817263.jpg',
              name: 'Amol',
              bio: 'Hey guys, how are you doing today?',
            }
          }
        }
      }
      let next = profileSelectors.getUserProfile(currentState)

      expect(next).toBe(currentState.profile.userProfile.userProfile)
    })
  })

  describe('getUserPhotosThumbnails', () => {

    it('gets user feed photos', () => {
      let currentState = {
        profile: {
          userPhotos: {
            userPhotos: {
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
                  }
                ]
              }
            }
          }
        }
      }
      let expectedState = ['https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/17517155-1474064295274.jpg',
                          'https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/16080756-1458765641755.jpg']
      let next = profileSelectors.getUserPhotosThumbnails(currentState)

      expect(next[0]).toBe(expectedState[0])
      expect(next[1]).toBe(expectedState[1])
    })
  })

  describe('getPopularPhotosThumbnails', () => {

    it('gets popular feed photos', () => {
      let currentState = {
        profile: {
          popularPhotos: {
            popularPhotos: {
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
                  }
                ]
              }
            }
          }
        }
      }
      let expectedState = ['https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/17517155-1474064295274.jpg',
                          'https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/16080756-1458765641755.jpg']
      let next = profileSelectors.getPopularPhotosThumbnails(currentState)

      expect(next[0]).toBe(expectedState[0])
      expect(next[1]).toBe(expectedState[1])
    })
  })
})
