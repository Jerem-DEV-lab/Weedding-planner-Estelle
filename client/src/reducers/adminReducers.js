import {
  CHANGE_PRICE_FORMULA_ERROR,
  CHANGE_PRICE_FORMULA_LOADING,
  CHANGE_PRICE_FORMULA_SUCCESS,
  CREATE_NEWS_ERRORS,
  CREATE_NEWS_LOADING,
  CREATE_NEWS_SUCCESS, DELETE_EMAIL_SUCCESS,
  DELETE_FORMULA_ERROR,
  DELETE_FORMULA_LOADING,
  DELETE_FORMULA_SUCCESS,
  DELETE_NEWS_ERRORS,
  DELETE_NEWS_LOADING,
  DELETE_NEWS_SUCCESS, DELETE_RATING_ERROR, DELETE_RATING_SUCCESS, GET_ALL_RATINGS_SUCCESS,
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
  SCHEDULE_WORKSHOP_ERRORS,
  SCHEDULE_WORKSHOP_LOADING, SCHEDULE_WORKSHOP_SUCCESS,
  SEND_EMAIL_ERROR,
  SEND_EMAIL_LOADING,
  SEND_EMAIL_SUCCESS,
  SET_MESSAGES_ISREAD_ERROR,
  SET_MESSAGES_ISREAD_SUCCESS,
  UPDATE_NEWS_ERRORS,
  UPDATE_NEWS_LOADING,
  UPDATE_NEWS_SUCCESS, VALID_RATING_SUCCESS
} from '../actions/adminAction'

const initialState = {
  listUser           : [],
  isLoading          : false,
  errorFetchUsers    : '',
  changePriceError   : '',
  changePriceSuccess : '',
  isSuccess          : null,
  status             : '',
  deleteSuccess      : '',
  deleteError        : '',
  formulas           : [],
  anyErrors          : '',
  messages           : [],
  newsLetters        : [],
  successCreateNews  : '',
  updateSuccessNews  : '',
  errorsCreateNews   : {},
  sendEmailLoading   : false,
  successSendMail    : '',
  errorSendMail      : '',
  successSchedule    : '',
  errorsSchedule     : '',
  ratings            : [],
  deleteNoticeError  : '',
  deleteNotice       : '',
  deleteNoticeSuccess: ''
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
    case SEND_EMAIL_LOADING:
      return {
        ...state,
        sendEmailLoading: true
      }
    case SEND_EMAIL_SUCCESS:
      return {
        ...state,
        sendEmailLoading: false,
        successSendMail : action.payload,
        errorSendMail   : ''
      }
  
    case SEND_EMAIL_ERROR:
      return {
        ...state,
        sendEmailLoading: false,
        successSendMail : '',
        errorSendMail   : action.payload
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
    case SCHEDULE_WORKSHOP_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case SCHEDULE_WORKSHOP_ERRORS:
      return {
        ...state,
        isLoading     : false,
        errorsSchedule: action.payload
      }
    case SCHEDULE_WORKSHOP_SUCCESS:
      return {
        ...state,
        isLoading      : false,
        errorsSchedule : '',
        successSchedule: action.payload
      }
    case DELETE_EMAIL_SUCCESS:
      return {
        ...state,
        messages: state.messages.filter(email => email._id !== action.payload.messageId)
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
        updateSuccessNews : '',
        successSendMail   : '',
        errorSendMail     : ''
      }
    }
    case GET_ALL_RATINGS_SUCCESS: {
      return {
        ...state,
        ratings: action.payload
      }
    }
    case VALID_RATING_SUCCESS: {
      return {
        ...state,
        ratings: state.ratings.filter(notice => notice._id !== action.payload.noticeId)
      }
    }
    case DELETE_RATING_SUCCESS: {
      return {
        ...state,
        ratings: state.ratings.filter(notice => notice._id !== action.payload.noticeId),
        deleteNoticeSuccess: action.payload
      }
    }
    case DELETE_RATING_ERROR: {
      return {
        ...state,
        errors: action.payload
      }
    }
    /*    case GET_ALL_RATINGS_ERROR:
     return {
     ...state,
   
     }*/
    default:
      return initialState
  }
}
