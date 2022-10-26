import React from 'react'
import { connect } from 'react-redux'
import { set_language } from '../../actions/user/userActions'
import ChooseLanguage from '../../screens/chooseLanguage/ChooseLanguage'

const ChooseLanguageContainer = (props) => {
  return <ChooseLanguage {...props} />
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    set_language: (lang) => {
      dispatch(set_language(lang))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseLanguageContainer)
