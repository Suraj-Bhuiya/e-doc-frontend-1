import React from 'react'
import { connect } from 'react-redux'
import { do_login, set_reload_login } from '../../actions/login/loginActions'
import Home from '../../screens/home/Home'

const HomeContainer = (props) => {
  return <Home {...props} />
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
