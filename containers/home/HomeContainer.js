import React from 'react'
import { connect } from 'react-redux'
import { do_login, set_reload_login } from '../../actions/login/loginActions'
import {
  upload_document,
  delete_document,
  get_user_documents,
  set_current_document,
} from '../../actions/document/documentActions'
import Home from '../../screens/home/Home'

const HomeContainer = (props) => {
  return <Home {...props} />
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    document: store.document,
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
    get_user_documents: (uid, login) => {
      dispatch(get_user_documents(uid, login))
    },
    upload_document: (doc, login) => {
      dispatch(upload_document(doc, login))
    },
    delete_document: (id, login) => {
      dispatch(delete_document(id, login))
    },
    set_current_document: (doc) => {
      dispatch(set_current_document(doc))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
