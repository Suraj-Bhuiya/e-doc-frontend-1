import { combineReducers } from 'redux'

import login from './login/loginReducers'
import document from './document/documentReducers'
import message from './message/messageReducers'

export default combineReducers({
  login,
  document,
  message,
})
