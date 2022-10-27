import {
  LOGIN,
  LOGOUT,
  RELOAD_LOGIN,
  SET_LOGIN_STATUS,
} from '../../constants/login/loginConstants'
import { SET_LANGUAGE } from '../../constants/user/userConstants'

const initial_state = {
  token: '',
  language: 'en',
  login_status: '',
}

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case LOGIN:
      return (state = { ...state, ...action.payload })
    case SET_LANGUAGE:
      return (state = { ...state, language: action.payload })
    case SET_LOGIN_STATUS:
      return (state = { ...state, login_status: action.payload })
    case RELOAD_LOGIN:
      return (state = { ...action.payload })
    case LOGOUT:
      return (state = { token: '', language: 'en', login_status: '' })
    default:
      return state
  }
}
