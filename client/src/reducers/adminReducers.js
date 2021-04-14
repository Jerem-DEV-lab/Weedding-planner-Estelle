import {
  CHANGE_PRICE_FORMULA_ERROR,
  CHANGE_PRICE_FORMULA_LOADING,
  CHANGE_PRICE_FORMULA_SUCCESS,
  DELETE_FORMULA_ERROR,
  DELETE_FORMULA_LOADING,
  DELETE_FORMULA_SUCCESS, GET_FORMULA_ERROR, GET_FORMULA_LOADING, GET_FORMULA_SUCCESS,
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  RESET_EVENTS_ACTION
} from '../actions/adminAction'

const initialState = {
  ListUser          : [],
  isLoading         : false,
  errorFetchUsers   : '',
  changePriceError  : '',
  changePriceSuccess: '',
  isSuccess         : null,
  status            : '',
  deleteSuccess     : '',
  deleteError       : '',
  formulas          : [],
  anyErrors         : ''
}


export default function adminReducers (state = initialState, action) {
  switch (action.type) {
    case GET_FORMULA_LOADING:
      return {
        ...state, isLoading: true,
      }
    case GET_FORMULA_SUCCESS:
      return {
        ...state, isLoading: false,
        formulas           : action.payload
      }
    case GET_FORMULA_ERROR:
      return {
        ...state,
        isLoading: false,
        formulas : [],
        anyErrors: action.payload
      }
    case GET_USER_LOADING:
      return {
        ...state,
        isLoading: true,
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
    case CHANGE_PRICE_FORMULA_LOADING:
      return {
        ...state,
        isLoading         : true,
        changePriceError  : '',
        changePriceSuccess: ''
      }
    case CHANGE_PRICE_FORMULA_SUCCESS:
      return {
        ...state,
        isLoading         : false,
        changePriceError  : '',
        status            : 'is success',
        changePriceSuccess: action.payload
      }
    case CHANGE_PRICE_FORMULA_ERROR:
      return {
        ...state,
        isLoading         : false,
        changePriceError  : action.payload,
        status            : 'failed',
        changePriceSuccess: ''
      }
    case DELETE_FORMULA_LOADING: {
      return {
        ...state,
        status   : 'is loading',
        isLoading: true,
      }
    }
    case DELETE_FORMULA_SUCCESS: {
      return {
        ...state,
        isLoading    : false,
        status       : 'is success',
        deleteSuccess: action.payload.success,
        deleteError  : '',
        formulas     : state.formulas.filter(formula => formula._id !== action.payload.docsId)
      }
    }
    case DELETE_FORMULA_ERROR: {
      return {
        ...state,
        isLoading    : false,
        status       : 'failed',
        deleteSuccess: '',
        deleteError  : action.payload
      }
    }
    case RESET_EVENTS_ACTION: {
      return {
        ...state,
        isSuccess         : null,
        changePriceError  : '',
        changePriceSuccess: '',
        status            : 'closed',
        deleteSuccess     : '',
        deleteError       : ''
      }
    }
    default:
      return initialState
  }
}
