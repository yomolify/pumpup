/**
 * # Profile.js
 *
 * This component
 */
'use strict'
/**
* ## Imports
*
* Redux
*/
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/**
 * The actions needed
 */
import * as profileActions from '../reducers/profile/profileActions'
import * as globalActions from '../reducers/global/globalActions'

import {getUserProfile, getUserPhotosThumbnails, getPopularPhotosThumbnails} from '../reducers/profile/profileSelectors'


/**
 * The necessary React components
 */
import React, {PropTypes, Component} from 'react'
import
{
  StyleSheet,
  View
}
from 'react-native'
import { Header, Divider } from 'react-native-elements'

import UserProfile from '../components/UserProfile'
import UserPhotosSlider from '../components/UserPhotosSlider'
import PopularPhotosGrid from '../components/PopularPhotosGrid'


/**
 * ## Styles
 */
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'transparent'
  },
  divider: {
    backgroundColor: '#ddd'
  },
  userProfile: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },
  userPhotosSlider: {
  }
})

/**
* ## Redux boilerplate
* Map state via reselect selectors to props
*/

function mapStateToProps (state) {
  return {
    userProfile: getUserProfile(state),
    userPhotos: getUserPhotosThumbnails(state),
    popularPhotos: getPopularPhotosThumbnails(state),
    profile: state.profile,
    global: {
      currentUser: state.global.currentUser,
      currentState: state.global.currentState,
      showState: state.global.showState
    }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...profileActions, ...globalActions }, dispatch)
  }
}
/**
 * ### Translations
 */
const I18n = require('react-native-i18n')
import Translations from '../lib/Translations'
I18n.translations = Translations

class Profile extends Component {
  /**
   * ### componentDidMount
   * Fetch from API
   * user profile - profileImage, name and bio
   * user photos - array of thumbnail urls
   * popular photos - array of thumbnail urls
   */
  componentDidMount () {
    this.props.actions.getUserProfile()
    this.props.actions.getUserPhotos()
    this.props.actions.getPopularPhotos()
  }

  /**
   * ### Render
   * Display the components:
   * 1. UserProfile: {profileImage, name, bio}
   * 2. UserPhotosSlider: [thumbnail]
   * 3. PopularPhotosGrid: [thumbnail]
   */
  render () {
    const { userProfile, userPhotos, popularPhotos } = this.props

    return (
      <View style={styles.container}>
        <Header
        centerComponent={{ text: 'PumpUp', style: { color: '#333' } }}
        outerContainerStyles={{position: 'relative'}}/>

        <Divider style={styles.divider} />

        {/* User Profile(Bio) */}
        <View style={styles.userProfile}>
          <UserProfile userProfile={userProfile}/>
        </View>

        <Divider style={styles.divider} />

        {/* User Feed  Photos  (Slider) */}
        <View style={styles.userPhotosSlider}>
          <UserPhotosSlider userPhotos={userPhotos}/>
        </View>

        <Divider style={styles.divider} />

        {/* Popular Feed  Photos  (Grid) */}
        <View style={styles.popularPhotosGrid}>
          <PopularPhotosGrid popularPhotos={popularPhotos}/>
        </View>

        <Divider style={styles.divider} />
      </View>
    )
  }
}

Profile.propTypes = {
  actions: PropTypes.object.isRequired,
  userProfile: PropTypes.object,
  userPhotos: PropTypes.array,
  popularPhotos: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
