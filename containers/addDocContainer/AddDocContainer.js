import React from 'react'
import AddDoc from '../../screens/addDoc/AddDoc'
import { connect } from 'react-redux'
import { upload_document } from '../../actions/document/documentActions'
import { set_upload_status } from '../../actions/document/documentActions'

const AddDocContainer = (props) => {
  return <AddDoc {...props} />
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    document: store.document,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upload_document: (doc, login) => {
      dispatch(upload_document(doc, login))
    },
    set_upload_status: (status) => {
      dispatch(set_upload_status(status))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDocContainer)
