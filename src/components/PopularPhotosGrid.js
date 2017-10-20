/**
 * ## popularPhotos.js
 *
 * # Display Popular Feed Photos as a grid
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

import _ from 'lodash'

/**
 * ## Styles
 */
const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  placeholder: {
    backgroundColor: '#DDDDDD'
  },
  row: {
    flexDirection: 'row'
  },
  item: {
    marginRight:2,
    marginTop:2
  }

})

const windowWidth = Dimensions.get('window').width

const popularPhotosGrid = React.createClass({


  propTypes: {
    popularPhotos: PropTypes.array,
    photos: PropTypes.array,
    props: PropTypes.object,
  },

  /**
   * ### Render
   *
   * @return {Component} Display the popular feed photos grid
   */
  render() {
    const { popularPhotos } = this.props
    const size = {width: windowWidth, height: windowWidth}

    const placeholder = [0].map(
      (photo, i) => {
        return (
        <View key={i} style={[styles.placeholder, size]}>
        </View>
        )
      }
    )

    const photosRecieved = Boolean(popularPhotos[0])

    const IMAGES_PER_ROW = 3

    const calculatedSize = function(){
      const size = windowWidth / IMAGES_PER_ROW
      return {width: size, height: size}
    }

    const renderRow = function(images) {
      return images.map((uri,i) =>{
        return(
          <Image key={i} style={[styles.item, calculatedSize()]} source={{uri: uri}} />
        )
      })
    }

    const renderImagesInGroupsOf = function(count) {
      return _.chunk(popularPhotos, IMAGES_PER_ROW).map((imagesForRow, i) => {
        return (
          <View style={styles.row} key={i}>
            {renderRow(imagesForRow)}
          </View>
        )
      })
    }

    let images = renderImagesInGroupsOf(3)

    return (
      <View style={styles.container}>
        {photosRecieved ? images : placeholder}
      </View>
    )
  }
})

module.exports = popularPhotosGrid
