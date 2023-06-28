import { SET_CHATS } from '../../constants/message/messageConstants'

const initial_state = {
  chats: [],
}

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_CHATS:
      return (state = { ...state, chats: action.payload })

    default:
      return state
  }
}
