import { GET_USER_ERROR, GET_USER_LOADING, GET_USER_SUCCESS } from '../actions/adminAction'

const initialState = {
  ListUser       : [],
  isLoading      : false,
  errorFetchUsers: ''
}

export default function adminReducers (state = initialState, action) {
  switch (action.type) {
    case GET_USER_LOADING:
      return {
        ...state,
        isLoading: true,
        ListUser : []
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        ListUser : action.payload,
        isLoading: false
      }
    case GET_USER_ERROR:
      return {
        ...state,
        isLoading      : false,
        users          : [],
        errorFetchUsers: action.payload
      }
    default:
      return initialState
  }
}
