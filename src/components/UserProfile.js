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

import {Avatar} from 'react-native-elements'

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
        {/* <View style={styles.avatar}>
          <Avatar
            large
            rounded
            source={{uri: profileImage}}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}/>
        </View>
        <View style={styles.info}>
          <View style={styles.name}>
            <Text>{name}</Text>
          </View>

          <View style={styles.bio}>
            <Text>{bio}</Text>
          </View>
        </View> */}
      </View>
    )
  }
})

module.exports = UserProfile
