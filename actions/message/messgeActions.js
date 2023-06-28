import UNIVERSAL from '../../config/config'
import { SET_CHATS } from '../../constants/message/messageConstants'

export function send_message(message, login) {
  console.log(login, message, 'LOGIN')
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + `/api/message/send`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${login.token}`,
      },
      body: JSON.stringify({
        toGovernment: true,
        text: message,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === 'success') {
          dispatch(get_chat(login))
        } else {
          //   dispatch(set_get_document_status('error'))
        }
      })
      .catch((error) => {
        console.log(error)
        // dispatch(set_get_document_status('error'))
      })
  }
}

export function get_chat(login) {
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + `/api/message/get_chat`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${login.token}`,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === 'success') {
          dispatch(set_chat(responseJson.data))
        } else {
          //   dispatch(set_get_document_status('error'))
        }
      })
      .catch((error) => {
        console.log(error)
        // dispatch(set_get_document_status('error'))
      })
  }
}

export function set_chat(payload) {
  return {
    type: SET_CHATS,
    payload: payload,
  }
}
