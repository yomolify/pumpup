/**
 * ## UserPhotos.js
 *
 * # Display User Feed Photos
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
  Dimensions,
  Image
} from 'react-native'

import Carousel from 'react-native-looped-carousel'

/**
 * ## Styles
 */
const styles = StyleSheet.create({
  container: {
  },
  placeholder: {
    backgroundColor: '#DDDDDD'
  },
  photoSlides: {
    backgroundColor: 'transparent'
  },
  bulletsContainerStyle: {
    marginBottom: -100
  },
  chosenBulletStyle: {
    backgroundColor: '#767676'
  },
  bulletStyle: {
    backgroundColor: '#DDDDDD'
  },

})

const { width } = Dimensions.get('window')

const UserProfile = React.createClass({


  propTypes: {
    userPhotos: PropTypes.array,
    photos: PropTypes.array,
    props: PropTypes.object,
  },

  /**
   * ### Render
   *
   * @return {Component} Display the sliding user feed photos
   */
  render() {
    const { userPhotos } = this.props
    let size = {width: width, height: width}

    let placeholder = [0].map(
      (photo, i) => {
        return (
        <View key={i} style={[styles.placeholder, size]}>
        </View>
        )
      }
    )

    let photosRecieved = Boolean(userPhotos[0])

    let photoSlides = userPhotos.map(
      (photo, i) => {
        return (
        <View key={i} style={[styles.photoSlides, size]}>
          <Image key={'image-' + i} source={{uri: photo}} style={size}/>
        </View>
        )
      }
    )

    return (
      <View style={styles.container}>
        <Carousel
            style={size}
            autoplay={false}
            bullets={true}
            bulletsContainerStyle={styles.bulletsContainerStyle}
            chosenBulletStyle={styles.chosenBulletStyle}
            bulletStyle={styles.bulletStyle}
          >
          {photosRecieved ? photoSlides : placeholder}
        </Carousel>
      </View>
    )
  }
})

module.exports = UserProfile
