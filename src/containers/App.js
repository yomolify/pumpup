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
import React, {PropTypes} from 'react'
import
{
    View
}
from 'react-native'

/**
 * ## App class
 */
let reactMixin = require('react-mixin')
import TimerMixin from 'react-timer-mixin'
/**
 * ### Translations
 */
let I18n = require('react-native-i18n')
import Translations from '../lib/Translations'
I18n.translations = Translations


/**
 *  Save that state
 */
function mapStateToProps (state) {
  return {
    deviceVersion: state.device.version,
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

let App = React.createClass({
  propTypes: {
    actions: PropTypes.object.isRequired
  },


  componentDidMount () {
        // Mimicking an authenticated session
        // Use a timer so session token is obtained and profile screen is displayed
    this.setTimeout(
            () => {
              this.props.actions.getSessionToken(CONFIG.SESSION_TOKEN)
            },
            1
        )
  },

  render () {
    return (
      <View></View>
    )
  }
})



// Since we're using ES6 classes, have to define the TimerMixin
reactMixin(App.prototype, TimerMixin)
/**
 * Connect the properties
 */
export default connect(mapStateToProps, mapDispatchToProps)(App)
