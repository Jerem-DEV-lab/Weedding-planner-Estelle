import {
  CHANGE_PRICE_FORMULA_ERROR,
  CHANGE_PRICE_FORMULA_LOADING,
  CHANGE_PRICE_FORMULA_SUCCESS,
  CREATE_NEWS_ERRORS,
  CREATE_NEWS_LOADING,
  CREATE_NEWS_SUCCESS,
  DELETE_FORMULA_ERROR,
  DELETE_FORMULA_LOADING,
  DELETE_FORMULA_SUCCESS,
  DELETE_NEWS_ERRORS,
  DELETE_NEWS_LOADING,
  DELETE_NEWS_SUCCESS,
  GET_FORMULA_ERROR,
  GET_FORMULA_LOADING,
  GET_FORMULA_SUCCESS,
  GET_MESSAGES_ERROR,
  GET_MESSAGES_LOADING,
  GET_MESSAGES_SUCCESS,
  GET_NEWS_ERRORS,
  GET_NEWS_LOADING,
  GET_NEWS_SUCCESS,
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  RESET_EVENTS_ACTION,
  SET_MESSAGES_ISREAD_ERROR,
  SET_MESSAGES_ISREAD_SUCCESS,
  UPDATE_NEWS_ERRORS,
  UPDATE_NEWS_LOADING,
  UPDATE_NEWS_SUCCESS
} from '../actions/adminAction'

const initialState = {
  listUser          : [],
  isLoading         : false,
  errorFetchUsers   : '',
  changePriceError  : '',
  changePriceSuccess: '',
  isSuccess         : null,
  status            : '',
  deleteSuccess     : '',
  deleteError       : '',
  formulas          : [],
  anyErrors         : '',
  messages          : [],
  newsLetters       : [],
  successCreateNews : '',
  updateSuccessNews : '',
  errorsCreateNews  : {}
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
        listUser : action.payload,
        isLoading: false
      }
    case GET_USER_ERROR:
      return {
        ...state,
        isLoading      : false,
        listUser          : [],
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
    case GET_MESSAGES_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        messages : action.payload
      }
    case GET_MESSAGES_ERROR:
      return {
        ...state,
        isLoading: false,
        messages : [],
        anyErrors: action.payload
      }
    case SET_MESSAGES_ISREAD_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    case SET_MESSAGES_ISREAD_ERROR:
      return {
        ...state,
        isLoading: false
      }
    case CREATE_NEWS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case CREATE_NEWS_SUCCESS:
      return {
        ...state,
        successCreateNews: action.payload,
        errorsCreateNews : {}
      }
    case CREATE_NEWS_ERRORS:
      return {
        ...state,
        errorsCreateNews : action.payload,
        successCreateNews: ''
      }
    case GET_NEWS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        newsLetters: action.payload,
        isLoading  : false,
      }
    case GET_NEWS_ERRORS:
      return {
        ...state,
        isLoading: false,
        anyErrors: action.payload,
      }
    case DELETE_NEWS_LOADING:
      return { ...state, isLoading: true }
    case DELETE_NEWS_SUCCESS:
      return {
        ...state,
        isLoading  : false,
        newsLetters: state.newsLetters.filter(news => news._id !== action.payload.docsId)
      }
    case DELETE_NEWS_ERRORS:
      return { ...state, isLoading: false }
    case UPDATE_NEWS_LOADING:
      return {
        ...state,
        isLoading: false
      }
    case UPDATE_NEWS_SUCCESS:
      return {
        ...state,
        isLoading        : false,
        updateSuccessNews: action.payload.success
      }
    case UPDATE_NEWS_ERRORS:
      return {
        ...state,
        isLoading: false
      }
  
    case RESET_EVENTS_ACTION: {
      return {
        ...state,
        isSuccess         : null,
        changePriceError  : '',
        changePriceSuccess: '',
        status            : 'closed',
        deleteSuccess     : '',
        deleteError       : '',
        successCreateNews : '',
        errorsCreateNews  : {},
        updateSuccessNews : ''
      }
    }
  
    default:
      return initialState
  }
}
