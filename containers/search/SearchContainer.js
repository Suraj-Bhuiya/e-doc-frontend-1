import React from 'react'
import { connect } from 'react-redux'
import { get_user_documents } from '../../actions/document/documentActions'
import Search from '../../screens/search/Search'

const SearchContainer = (props) => {
  return <Search {...props} />
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    document: store.document,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    get_user_documents: (uid, login, other) => {
      dispatch(get_user_documents(uid, login, other))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
