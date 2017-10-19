import { createSelector } from 'reselect'

export function getUserProfile(state) {
  let userProfile = state.profile.userProfile.userProfile
  return userProfile
}

/**
 * ### Selectors for memoizing the thumbnails for photos,
 * first the array of posts is returned
 * then each post object is replaced by the thumbnail
 */

export function getUserPhotos(state) {
  let userPhotos = null
  userPhotos = state.profile.userPhotos.userPhotos
  return userPhotos
}

export const getUserPhotosThumbnails = createSelector(
  getUserPhotos,
  (userPhotos) => userPhotos.result.posts.map((photo) => photo.thumbnail)
)


export function getPopularPhotos(state) {
  let popularPhotos = null
  popularPhotos = state.profile.popularPhotos.popularPhotos
  return popularPhotos
}

export const getPopularPhotosThumbnails = createSelector(
  getPopularPhotos,
  (popularPhotos) => popularPhotos.result.posts.map((photo) => photo.thumbnail)
)
