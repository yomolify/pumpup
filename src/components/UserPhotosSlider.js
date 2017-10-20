/**
 * ## UserProfile.js
 *
 * # Display user's avatar, name and a bio snippet with a read more button
 */
'use strict'
/**
 * ## Imports
 *
 */
import React, {PropTypes} from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

// import Carousel from 'react-native-snap-carousel'

// componentWillReceiveProps(nextProps) {
//   // update original states
//   this.setState({
//     latitude: nextProps.latitude,
//   });
// }
/**
 * ## Styles
 */
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  avatar: {
    flex: 1
  },
  info: {
    flex: 3
  }
})


const UserProfile = React.createClass({

  propTypes: {
    userProfile: PropTypes.object,
    profileImage: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    props: PropTypes.object,
  },

  /**
   * ### render
   *
   * @return {Component} Display the Button
   */
  render() {
    // const { profileImage, name, bio } = this.props.userProfile
    // console.log("UserProfile.js profileImage is:")
    // console.log(profileImage)

    return (
      <View style={styles.container}>

      </View>
    )
  }
})

module.exports = UserProfile
