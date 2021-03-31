import { CONTACT_ERROR, CONTACT_LOADING, CONTACT_SUCCESS } from '../actions/contactAction'

const initialState = {
  isLoading    : false,
  formError    : [],
  successSubmit: '',
}

export default function contactReducers (state = initialState, action) {
  switch (action.type) {
    case CONTACT_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    
    case CONTACT_ERROR:
      return {
        ...state,
        isLoading    : false,
        formError    : action.payload.error,
        successSubmit: ''
      }
    case CONTACT_SUCCESS:
      return {
        ...state,
        isLoading    : false,
        formError    : [],
        successSubmit: action.payload
      }
    default:
      return initialState
  }
}
