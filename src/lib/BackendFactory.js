/**
 * # BackendFactory
 *
 * This class sets up the backend by checking the config.js
 *
 */
'use strict'

import CONFIG from './config'
import {pumpupAPI} from './PumpupAPI'

export default function BackendFactory (token = CONFIG.SESSION_TOKEN) {
  if (CONFIG.backend.PumpUpAPILocal || CONFIG.backend.PumpUpAPIRemote) {
    pumpupAPI.initialize(token)
    return pumpupAPI
  }
}
