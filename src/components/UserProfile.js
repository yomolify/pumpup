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

  // propTypes: {
  //   userProfile: PropTypes.object,
  //   profileImage: PropTypes.string,
  //   name: PropTypes.string,
  //   bio: PropTypes.string,
  //   props: PropTypes.object,
  // },

  _handleTextReady () {
    console.log('ready!')
  },

  // _renderTruncatedFooter (handlePress) {
  //   return (
  //     <View style={{color: "blue", marginTop: 5}} onPress={handlePress}>
  //       Read more
  //     </View>
  //   )
  // },

  // _renderRevealedFooter (handlePress) {
  //   return (
  //     <View style={{color: "blue", marginTop: 5}} onPress={handlePress}>
  //       Show less
  //     </View>
  //   )
  // },


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
            <ReadMore
              numberOfLines={3}
              onReady={this._handleTextReady}>
              <Text style={styles.cardText}>
              {bio}
                Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </Text>
            </ReadMore>
          </View>

        </View>

      </View>
    )
  }
})

module.exports = UserProfile
