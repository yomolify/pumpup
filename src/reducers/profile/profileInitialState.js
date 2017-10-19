/**
 * # profileInitialState.js
 *
 * This class is a Immutable object
 * Working *successfully* with Redux, requires
 * state that is immutable.
 * In my opinion, that can not be by convention
 * By using Immutable, it's enforced.  Just saying....
 *
 */
'use strict'

const {Record} = require('immutable')

/**
 * ## User Profile
 * This Record contains the state of the
 * user information - image, name, bio.
 *
 */
const UserProfile = Record({
  userProfile: new (Record({
    profileImage: null,
    name: null,
    bio: null,
  }))(),
  error: null,
  isFetching: false,
})

/**
 * ## User Photos for Slider
 * This Record contains the state of the
 * user photos to be displayed in the slider.
 *
 */
const UserPhotos = Record({
  userPhotos: new (Record({
    posts: null,
  }))(),
  error: null,
  isFetching: false,
})

/**
 * ## Popular Photos for Grid
 * This Record contains the state of the
 * popular photos to be displayed in the grid.
 *
 */
const PopularPhotos = Record({
  popularPhotos: new (Record({
    posts: null,
  }))(),
  error: null,
  isFetching: false,
})

let InitialState = Record({
  userProfile: new UserProfile(),
  userPhotos: new UserPhotos(),
  popularPhotos: new PopularPhotos()
})

export default InitialState
