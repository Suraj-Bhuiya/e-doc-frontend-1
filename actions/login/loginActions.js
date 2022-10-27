// import {
//   SET_USER_CONFIRM_PASSWORD,
//   SET_USER_PASSWORD,
//   SET_USER_CONTACT_NUM,
//   SET_USER_OLD_IMG,
//   SET_USER_IMG,
//   SET_USER_EMAIL,
//   SET_USER_NAME,
//   SET_USER_CURRENT_PASSWORD,
//   RESET_USER,
// } from '../../constants/user/userConst'
// import { set_login_loader, unset_login_loader } from '../loader/loaderActions'
// import { set_snackbar } from '../snackbar/snackbarActions'
import {
  RELOAD_LOGIN,
  LOGIN,
  LOGOUT,
  LOGIN_STATUS,
  SET_LOGIN_STATUS,
} from '../../constants/login/loginConstants'
import UNIVERSAL from '../../config/config'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { set_current_user_documents } from '../document/documentActions'

// export function signup(user) {
//   return (dispatch) => {
//     // dispatch(set_login_loader())
//     if (user.password !== user.confirm_password) {
//       dispatch(
//         set_snackbar("Confirm password doesn't match password", true, 'warning')
//       )
//       dispatch(unset_login_loader())
//       return
//     }
//     if (user.img !== '') {
//       var storageRef = firebase.storage().ref()
//       var uploadTask = storageRef
//         .child('users/' + user.name + '.png')
//         .put(user.img)
//       uploadTask.on(
//         'state_changed',
//         function (snapshot) {},
//         function (error) {
//           // dispatch(set_snack_bar(true, "Image Could Not Be sUploaded"));
//         },
//         function () {
//           uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
//             console.log(downloadURL)
//             dispatch(signup_api(user, downloadURL))
//           })
//         }
//       )
//     } else {
//       dispatch(signup_api(user, ''))
//     }
//   }
// }

export function signup(user) {
  return (dispatch) => {
    return fetch(UNIVERSAL.BASEURL + '/api/users/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === 'success') {
          dispatch(set_login(responseJson))
          //   dispatch(reset_user())
          //   dispatch(set_snackbar(responseJson.message, true, 'success'))
          //   dispatch(unset_login_loader())
          //   history.push('/')
        } else {
          //   dispatch(set_snackbar(responseJson.message, true, 'error'))
          //   dispatch(unset_login_loader())
        }
        // dispatch(unsetLoader()) ;
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function do_login(user) {
  return (dispatch) => {
    dispatch(set_login_status('logining'))
    return fetch(UNIVERSAL.BASEURL + '/api/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === 'success') {
          dispatch(set_login(responseJson))

          dispatch(set_current_user_documents(responseJson.data.user.edocs))
          dispatch(set_login_status(''))

          //   dispatch(get_user_cart(responseJson.data.user))
          //   dispatch(reset_user())
          //   history.push('/')
          //   dispatch(set_snackbar(responseJson.message, true, 'success'))
        } else {
          //   dispatch(set_snackbar(responseJson.message, true, 'error'))
          dispatch(set_login_status('error'))
        }
        // dispatch(unset_login_loader())
      })
      .catch((error) => {
        console.log(error)
        dispatch(set_login_status('error'))
      })
  }
}

export const setLoginToken = async (payload) => {
  await AsyncStorage.setItem('E_DOC_TOKEN', payload.token)
}

export const setLoginData = async (payload) => {
  await AsyncStorage.setItem('E_DOC_LOGIN', JSON.stringify(payload.data.user))
}

export function set_login(payload) {
  setLoginToken(payload)
  setLoginData(payload)
  return {
    type: LOGIN,
    payload: { token: payload.token, user: payload.data.user, language: 'en' },
  }
}

export function set_reload_login(payload) {
  console.log(payload.user.edocs, 'PAYLOAD')
  set_current_user_documents(payload.user.edocs)
  return {
    type: RELOAD_LOGIN,
    payload: payload,
  }
}

export function logout() {
  console.log('LOGOUT')
  try {
    AsyncStorage.removeItem('E_DOC_TOKEN')
    AsyncStorage.removeItem('E_DOC_LOGIN')
    return (dispatch) => {
      dispatch({
        type: LOGOUT,
      })
    }
  } catch (e) {
    console.error(e)
  }
}

export function set_login_status(payload) {
  return {
    type: SET_LOGIN_STATUS,
    payload: payload,
  }
}

// export function googleLogin() {
//   return (dispatch) => {
//     firebase
//       .auth()
//       .signInWithPopup(googleProvider)
//       .then((res) => {
//         let payload = {
//           token: res.credential.idToken,
//           user: {
//             _id: res.additionalUserInfo.profile.id,
//             name: res.additionalUserInfo.profile.name,
//             email: res.additionalUserInfo.profile.email,
//             contact_no: '',
//             url: res.additionalUserInfo.profile.picture,
//           },
//         }
//         dispatch(set_login(payload))
//         history.push('/')
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }
// }
