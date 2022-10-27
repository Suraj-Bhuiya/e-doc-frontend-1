import React from 'react'
import Login from '../../screens/login/Login'
import { connect } from 'react-redux'
import {
  do_login,
  set_reload_login,
  set_login_status,
} from '../../actions/login/loginActions'

const LoginContainer = (props) => {
  return <Login {...props} />
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    do_login: (user) => {
      dispatch(do_login(user))
    },
    set_reload_login: (user) => {
      dispatch(set_reload_login(user))
    },
    set_login_status: (status) => {
      dispatch(set_login_status(status))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
