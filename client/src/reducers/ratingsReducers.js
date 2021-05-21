import { ADD_RATING_ERRORS, ADD_RATING_LOADING, ADD_RATING_SUCCESS } from '../actions/ratingAction'

const initialState = {
  isLoading    : false,
  formError    : {},
  successSubmit: '',
}

export default function ratingReducers (state = initialState, action) {
  switch (action.type) {
    case ADD_RATING_LOADING: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case ADD_RATING_SUCCESS: {
      return {
        ...state,
        isLoading    : false,
        formError    : {},
        successSubmit: action.payload
      }
    }
    case ADD_RATING_ERRORS: {
      return {
        ...state,
        isLoading    : false,
        successSubmit: '',
        formError    : action.payload
      }
    }
    default:
      return initialState
  }
}
