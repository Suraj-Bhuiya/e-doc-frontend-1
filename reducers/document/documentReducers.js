import {
  SET_USER_DOCUMENTS,
  SET_CURRENT_USER_DOCUMENTS,
  SET_CURRENT_DOCUMENT,
  SET_UPLOAD_STATUS,
  RESET_USER_DOCUMENTS,
  SET_GET_DOCUMENT_STATUS,
} from '../../constants/document/documentConstants'

const initial_state = {
  other_user_documents: [],
  current_user_documents: [],
  current_document: '',
  upload_status: '',
  get_document_status: '',
}

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_USER_DOCUMENTS:
      return (state = { ...state, other_user_documents: action.payload })
    case SET_CURRENT_USER_DOCUMENTS:
      return (state = { ...state, current_user_documents: action.payload })
    case SET_CURRENT_DOCUMENT:
      return (state = { ...state, current_document: action.payload })
    case SET_UPLOAD_STATUS:
      return (state = { ...state, upload_status: action.payload })
    case SET_GET_DOCUMENT_STATUS:
      return (state = { ...state, get_document_status: action.payload })
    case RESET_USER_DOCUMENTS:
      return (state = { ...state, other_user_documents: [] })
    default:
      return state
  }
}
