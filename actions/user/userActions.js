import UNIVERSAL from '../../config/config'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { setLoginData, set_login } from '../login/loginActions'
import { set_current_user_documents } from '../document/documentActions'
import { SET_LANGUAGE } from '../../constants/user/userConstants'

export function upload_profile_pic(doc, login) {
  return (dispatch) => {
    if (doc.file !== '') {
      const storage = getStorage()
      const storageRef = ref(
        storage,
        `${login.user.name}/${doc.file.mimeType.split('/')[1]}`
      )

      uploadBytes(storageRef, doc.blob).then(() => {
        getDownloadURL(storageRef).then((url) => {
          dispatch(upload_profile_pic_api(login, url))
        })
      })
    }
  }
}

export function upload_profile_pic_api(login, url) {
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + '/api/users/updateMe', {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${login.token}`,
      },
      body: JSON.stringify({
        photo: url,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === 'success') {
          const data = { token: login.token, data: { user: responseJson.data } }
          dispatch(set_login(data))

          // dispatch(set_current_user_documents(data.data.user.edocs))
        } else {
          console.log(responseJson)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function update_profile(data, login) {
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + '/api/users/updateMe', {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${login.token}`,
      },
      body: JSON.stringify({
        ...data,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === 'success') {
          const data = { token: login.token, data: { user: responseJson.data } }
          dispatch(set_login(data))

          // dispatch(set_current_user_documents(data.data.user.edocs))
        } else {
          console.log(responseJson)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function set_language(payload) {
  return {
    type: SET_LANGUAGE,
    payload: payload,
  }
}
