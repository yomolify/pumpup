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
  Text,
  Alert
} from 'react-native'

import {Avatar} from 'react-native-elements'
import ReadMore from '@expo/react-native-read-more-text'
import Hyperlink from 'react-native-hyperlink'
import linkify from '../lib/linkify'

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
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  bio: {
    marginTop: 10
  },
  link: {
    color: '#2980b9'
  }
})
let alertUrl = function (url) {
  return Alert.alert(
    'Hyperlink',
    url + ' pressed',
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]
  )
}

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

    let placeholder = <Text>Hi there buddy,
      Fetching the user profile fresh from the oven, only for you!
      Alrighty it's almost here now, here we go!</Text>

    return (
      <View style={styles.container}>

        <View style={styles.avatar}>
          {profileImage && <Avatar
            large
            rounded
            source={{uri: profileImage}}
            onPress={() => console.log('Show full screen avatar')}
            activeOpacity={0.7}/>}
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>

          <View style={styles.bio}>
            <Hyperlink onPress={ url => alertUrl(url) }
                linkify={linkify}
                linkStyle={styles.link}>
              <ReadMore
                  numberOfLines={3}
                  onReady={this._handleTextReady}>
                  <Text style={ { fontSize: 15 } }>
                    {bio ? bio : placeholder}
                  </Text>
              </ReadMore>
            </Hyperlink>
          </View>

        </View>

      </View>
    )
  }
})

module.exports = UserProfile
