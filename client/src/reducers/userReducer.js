import {
  LANG_USER_PREF,
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS, LOGOUT_USER
} from '../actions/authenticatorAction'
import {
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_LOADING, CHANGE_PASSWORD_SUCCESS,
  CHANGE_USER_INFO_ERROR,
  CHANGE_USER_INFO_LOADING,
  CHANGE_USER_INFO_SUCCESS, RESET_EVENT_USER
} from '../actions/userAction'

const initialState = {
  isLoading          : false,
  userIsLogged       : false,
  userInfo           : {},
  loginError         : '',
  loginSuccess       : '',
  registrationFail   : '',
  registrationSuccess: '',
  errorChange        : '',
  langPref           : 'FR_fr',
  isLogged           : false,
  userId             : null,
  userRole           : 'ROLE_USER',
  successChange      : ''
}

export default function userReducers (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_LOADING: {
      return { ...state, isLoading: true }
    }
    case LOGIN_USER_SUCCESS: {
      return {
        isLoading          : false,
        userInfo           : action.payload.user,
        userIsLogged       : true,
        isLogged           : true,
        loginSuccess       : action.payload.message,
        loginError         : '',
        registrationFail   : '',
        registrationSuccess: '',
        errorChange        : '',
        successChange      : ''
      }
    }
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading          : false,
        userInfo           : {},
        userIsLogged       : false,
        isLogged           : false,
        loginError         : action.payload,
        loginSuccess       : '',
        registrationFail   : '',
        registrationSuccess: ''
  
      }
    case LOGOUT_USER:
      return {
        ...state,
        isLoading   : false,
        userInfo    : {},
        isLogged    : false,
        userIsLogged: false,
        loginSuccess: ''
      }
    case CHANGE_USER_INFO_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case CHANGE_USER_INFO_SUCCESS:
      return {
        ...state,
        successChange: '',
        isLoading    : false,
        userInfo     : action.payload
      }
    case CHANGE_USER_INFO_ERROR:
      return {
        ...state,
        isLoading  : false,
        changeError: action.payload
      }
    case CHANGE_PASSWORD_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading    : false,
        successChange: action.payload,
      }
    case CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        isLoading    : false,
        successChange: '',
        errorChange  : action.payload
      }
    case LANG_USER_PREF:
      return {
        ...state,
        langPref: action.payload
      }
    case RESET_EVENT_USER:
      return {
        ...state,
        changeError  : '',
        successChange: ''
      }
    default:
      return state
  }
}
