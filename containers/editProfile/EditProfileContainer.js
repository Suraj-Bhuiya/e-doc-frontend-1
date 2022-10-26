import React from 'react'
import { connect } from 'react-redux'
import EditProfile from '../../screens/editProfile/EditProfile'
import { update_profile } from '../../actions/user/userActions'

const EditProfileContainer = (props) => {
  return <EditProfile {...props} />
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
    document: store.document,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update_profile: (data, login) => {
      dispatch(update_profile(data, login))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileContainer)
