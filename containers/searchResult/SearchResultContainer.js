import React from 'react'
import { connect } from 'react-redux'
import SearchResult from '../../screens/searchResult/SearchResult'
import { get_user_documents } from '../../actions/document/documentActions'

const SearchResultContainer = (props) => {
  return <SearchResult {...props} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultContainer)
