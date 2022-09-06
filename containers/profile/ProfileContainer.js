import { View, Text } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import {
  do_login,
  set_reload_login,
  logout,
} from '../../actions/login/loginActions'
import Profile from '../../screens/profile/Profile'

const ProfileContainer = (props) => {
  return <Profile {...props} />
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // do_login: (user) => {
    //   dispatch(do_login(user))
    // },
    set_reload_login: (user) => {
      dispatch(set_reload_login(user))
    },
    logout: () => {
      dispatch(logout())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
