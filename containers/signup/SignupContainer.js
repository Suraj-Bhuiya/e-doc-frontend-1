import React from 'react'
import { connect } from 'react-redux'
import Signup from '../../screens/signup/Signup'
import {
  do_login,
  set_reload_login,
  signup,
} from '../../actions/login/loginActions'

const SignupContainer = (props) => {
  return <Signup {...props} />
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => {
      dispatch(signup(user))
    },
    do_login: (user) => {
      dispatch(do_login(user))
    },
    set_reload_login: (user) => {
      dispatch(set_reload_login(user))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)
