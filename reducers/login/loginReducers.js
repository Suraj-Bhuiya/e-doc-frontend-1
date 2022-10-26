import {
  LOGIN,
  LOGOUT,
  RELOAD_LOGIN,
} from '../../constants/login/loginConstants'
import { SET_LANGUAGE } from '../../constants/user/userConstants'

const initial_state = {
  token: '',
  language: 'en',
}

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case LOGIN:
      return (state = { ...action.payload })
    case SET_LANGUAGE:
      return (state = { ...state, language: action.payload })
    case RELOAD_LOGIN:
      return (state = { ...action.payload })
    case LOGOUT:
      return (state = { token: '' })
    default:
      return state
  }
}
