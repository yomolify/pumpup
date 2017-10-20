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
import ReadMore from '@expo/react-native-read-more-text'
import Hyperlink from 'react-native-hyperlink'

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

  _handleTextReady () {
    console.log('ready!')
  },

  /**
   * ### Render
   *
   * @return {Component} Display the User Profile
   */
  render() {
    const { profileImage, name, bio } = this.props.userProfile

    return (
      <View style={styles.container}>

        <View style={styles.avatar}>
          {profileImage && <Avatar
            large
            rounded
            source={{uri: profileImage}}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}/>}
        </View>

        <View style={styles.info}>

          <View style={styles.name}>
            <Text>{name}</Text>
          </View>

          <View style={styles.bio}>
            <ReadMore
              numberOfLines={3}
              onReady={this._handleTextReady}>

              <Hyperlink linkDefault={ true }>
                <Text style={ { fontSize: 15 } }>
                  This text will be parsed to check for clickable strings like https://pumpup.com and made clickable.
                </Text>
              </Hyperlink>
              {/* <Hyperlink>
              <Text style={styles.cardText}>
              {bio}
                Lorem ipsum
                dolor sit amet, consectetur adipiscing
                sunt in culpa qui officia d
              </Text>
              </Hyperlink> */}
            </ReadMore>
          </View>

        </View>

      </View>
    )
  }
})

module.exports = UserProfile
