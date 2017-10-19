/**
 * # Profile.js
 *
 * This component provides an interface for a logged in user to change
 * their username and email.
 * It too is a container so there is boilerplate from Redux similar to
 * ```App``` and ```Login```
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
 * The actions we need
 */
import * as profileActions from '../reducers/profile/profileActions'
import * as globalActions from '../reducers/global/globalActions'

/**
 * The necessary React components
 */
import React, {Component} from 'react'
import
{
  StyleSheet,
  View
}
from 'react-native'
import { Header, Divider } from 'react-native-elements'

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
*/

function mapStateToProps (state) {
  return {
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
   * ## Profile class
   * Set the initial state and prepare the errorAlert
   */
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  /**
   * ### componentWillReceiveProps
   *
   */
  componentWillReceiveProps (props) {
    this.setState({
    })
  }
  /**
   * ### componentDidMount
   * We need to fetch the user profile -
   * profileImage, name and bio
   */
  componentDidMount () {
    this.props.actions.getUserProfile()
  }

  /**
   * ### render
   * display the form wrapped with the header and button
   */
  render () {

    return (
      <View style={styles.container}>
        <Header
        centerComponent={{ text: 'PumpUp', style: { color: '#333' } }}
        outerContainerStyles={{position: 'relative'}}/>

        <Divider style={styles.divider} />

        {/* User Profile(Bio) */}
        {/* <View style={styles.userProfile}>
          <UserProfile userProfile={userProfile}/>
        </View> */}

        <Divider style={styles.divider} />

        {/* User Feed  Photos  (Slider) */}
        {/* <View style={styles.userPhotosSlider}>
          <UserPhotosSlider props={userPhotosSlider}/>
        </View> */}

        <Divider style={styles.divider} />

        {/* Popular Feed  Photos  (Grid) */}
        {/* <View style={styles.popularPhotosGrid}>
          <PopularPhotosGrid props={popularPhotosGrid}/>
        </View> */}

       <Divider style={styles.divider} />
 </View>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
