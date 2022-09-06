import { combineReducers } from 'redux'

import login from './login/loginReducers'
import document from './document/documentReducers'

export default combineReducers({
  login,
  document,
})
