/**
 * # BackendFactory
 *
 * This class sets up the backend by checking the config.js
 *
 */
'use strict'

import CONFIG from './config'
import {pumpupApi} from './PumpupApi'

export default function BackendFactory (token = CONFIG.SESSION_TOKEN) {
  if (CONFIG.backend.PumpupApiLocal || CONFIG.backend.PumpupApiRemote) {
    pumpupApi.initialize(token)
    return pumpupApi
  }
}
