import UNIVERSAL from '../../config/config'
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import {
  SET_USER_DOCUMENTS,
  SET_CURRENT_USER_DOCUMENTS,
} from '../../constants/document/documentConstants'

export function get_user_documents(uid, login, other = false) {
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + `/api/edocs/${uid}`, {
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
          if (other) {
            dispatch(set_user_documents(responseJson.data.edocs))
          } else {
            dispatch(set_current_user_documents(responseJson.data.edocs))
          }
        } else {
          console.log(responseJson)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function upload_document(doc, login) {
  return (dispatch) => {
    if (doc.file !== '') {
      const storage = getStorage()
      const storageRef = ref(storage, `${login.user.name}/doc.name`)

      // 'file' comes from the Blob or File API
      uploadBytes(storageRef, doc.file).then((url) => {
        dispatch(upload_document_api(doc, login, url))
      })
    }
  }
}

export function upload_document_api(doc, login, url) {
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + '/api/edocs/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${login.token}`,
      },
      body: JSON.stringify({
        name: doc.name,
        url: url,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === 'success') {
          // dispatch(set_user_documents(responseJson.data))
          dispatch(get_user_documents(login.user.uid, login))
        } else {
          console.log(responseJson)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function delete_document(doc_id, login) {
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + `/api/edocs/${doc_id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${login.token}`,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === 'success') {
          dispatch(get_user_documents(login.user.uid, login))
        } else {
          console.log(responseJson)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function set_user_documents(payload) {
  return {
    type: SET_USER_DOCUMENTS,
    payload: payload,
  }
}

export function set_current_user_documents(payload) {
  return {
    type: SET_CURRENT_USER_DOCUMENTS,
    payload: payload,
  }
}
