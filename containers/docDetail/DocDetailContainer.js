import React from 'react'
import { connect } from 'react-redux'
import DocDetail from '../../screens/docDetail/DocDetail'
import { delete_document } from '../../actions/document/documentActions'

const DocDetailContainer = (props) => {
  return <DocDetail {...props} />
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    document: store.document,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete_document: (id, login) => {
      dispatch(delete_document(id, login))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DocDetailContainer)
