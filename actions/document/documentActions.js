import UNIVERSAL from '../../config/config'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import {
  SET_USER_DOCUMENTS,
  SET_CURRENT_USER_DOCUMENTS,
  SET_CURRENT_DOCUMENT,
  SET_UPLOAD_STATUS,
  RESET_USER_DOCUMENTS,
  SET_GET_DOCUMENT_STATUS,
} from '../../constants/document/documentConstants'

export function get_user_documents(uid, login, other) {
  return (dispatch) => {
    dispatch(set_get_document_status('loading'))
    return fetch(UNIVERSAL.BASEURL + `/api/edocs/uid/${uid}`, {
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
          console.log(responseJson.data)
          if (other) {
            dispatch(set_user_documents(responseJson.data.edocs))
          } else {
            dispatch(set_current_user_documents(responseJson.data.edocs))
          }
          dispatch(set_get_document_status('loaded'))
        } else {
          console.log(responseJson)
          dispatch(set_get_document_status('error'))
        }
      })
      .catch((error) => {
        console.log(error)
        dispatch(set_get_document_status('error'))
      })
  }
}

export function upload_document(doc, login) {
  return (dispatch) => {
    dispatch(set_upload_status('uploading'))
    if (doc.file !== '') {
      const storage = getStorage()
      const storageRef = ref(
        storage,
        `${login.user.name}/${doc.name}.${doc.file.mimeType.split('/')[1]}`
      )
      console.log

      // const blob = getBlob(doc.file.uri)
      // console.log(blob)

      // 'file' comes from the Blob or File API
      // console.log(blob)
      uploadBytes(storageRef, doc.blob)
        .then(() => {
          getDownloadURL(storageRef).then((url) => {
            console.log('URL', url)
            dispatch(upload_document_api(doc, login, url))
          })
        })
        .catch((err) => {
          console.log(err)
          dispatch(set_upload_status('error'))
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
          console.log('SUCESS')
          dispatch(get_user_documents(login.user.uid, login))
          dispatch(set_upload_status('uploaded'))
        } else {
          console.log(responseJson)
        }
      })
      .catch((error) => {
        console.log(error)
        dispatch(set_upload_status('error'))
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

export function set_current_document(payload) {
  return {
    type: SET_CURRENT_DOCUMENT,
    payload: payload,
  }
}

export function set_upload_status(payload) {
  return {
    type: SET_UPLOAD_STATUS,
    payload: payload,
  }
}

export function set_get_document_status(payload) {
  return {
    type: SET_GET_DOCUMENT_STATUS,
    payload: payload,
  }
}

export function reset_user_documents() {
  return {
    type: RESET_USER_DOCUMENTS,
  }
}
