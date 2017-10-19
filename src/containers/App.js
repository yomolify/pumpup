/**
 * # app.js
 *  Display startup screen and
 *  getSessionTokenAtStartup which will navigate upon completion
 *
 *
 *
 */
'use strict'
/*
 * ## Imports
 *
 * Imports from redux
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/**
 * Project actions
 */
import * as authActions from '../reducers/auth/authActions'
import * as deviceActions from '../reducers/device/deviceActions'
import * as globalActions from '../reducers/global/globalActions'

import CONFIG from '../lib/config'

/**
 * The components we need from ReactNative
 */
import React from 'react'
import
{
    StyleSheet,
    View,
    Text
}
from 'react-native'

/**
 *  Save that state
 */
function mapStateToProps (state) {
  return {
    deviceVersion: state.device.version,
    auth: {
      form: {
        isFetching: state.auth.form.isFetching
      }
    },
    global: {
      currentState: state.global.currentState,
      showState: state.global.showState
    }
  }
}

/**
 * Bind all the actions from authActions, deviceActions and globalActions
 */
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...authActions, ...deviceActions, ...globalActions }, dispatch)
  }
}

var styles = StyleSheet.create({
  container: {
  }
})

/**
 * ## App class
 */
var reactMixin = require('react-mixin')
import TimerMixin from 'react-timer-mixin'
/**
 * ### Translations
 */
var I18n = require('react-native-i18n')
import Translations from '../lib/Translations'
I18n.translations = Translations

let App = React.createClass({
    /**
     * See if there's a sessionToken from a previous login
     *
     */
  componentDidMount () {
        // Use a timer so App screen is displayed
    this.setTimeout(
            () => {
              this.props.actions.getSessionToken(CONFIG.SESSION_TOKEN)
            },
            1
        )
  },

  render () {
    return (
      <View style={styles.container}>

      </View>
    )
  }
})
// Since we're using ES6 classes, have to define the TimerMixin
reactMixin(App.prototype, TimerMixin)
/**
 * Connect the properties
 */
export default connect(mapStateToProps, mapDispatchToProps)(App)
