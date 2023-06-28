import React from 'react'
import { connect } from 'react-redux'
import Chat from '../../screens/chat/Chat'
import { get_chat, send_message } from '../../actions/message/messgeActions'

const ChatContainer = (props) => {
  return <Chat {...props} />
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    // document: store.document,
    message: store.message,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    get_chat: (login) => {
      dispatch(get_chat(login))
    },
    send_message: (message, login) => {
      dispatch(send_message(message, login))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)
