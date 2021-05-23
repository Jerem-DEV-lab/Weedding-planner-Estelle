import {
  CONFIRM_ACCOUNT_ERROR,
  CONFIRM_ACCOUNT_SUCCESS,
  LANG_USER_PREF,
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS, LOGOUT_USER, REGISTER_USER_ERROR, REGISTER_USER_LOADING, REGISTER_USER_SUCCESS
} from '../actions/authenticatorAction'
import {
  ADD_EVENT_ERRORS,
  ADD_EVENT_LOADING, ADD_EVENT_SUCCESS, CHANGE_AVATAR_ERROR, CHANGE_AVATAR_LOADING, CHANGE_AVATAR_SUCCESS,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_LOADING, CHANGE_PASSWORD_SUCCESS,
  CHANGE_USER_INFO_ERROR,
  CHANGE_USER_INFO_LOADING,
  CHANGE_USER_INFO_SUCCESS, RESET_EVENT_USER
} from '../actions/userAction'

const initialState = {
  isLoading            : false,
  userIsLogged         : false,
  userInfo             : {},
  loginError           : '',
  loginSuccess         : '',
  registrationFail     : {},
  registrationSuccess  : '',
  errorChange          : '',
  langPref             : 'FR_fr',
  isLogged             : false,
  userId               : null,
  userRole             : 'ROLE_USER',
  successChange        : '',
  addEventSuccess      : '',
  addEventErrors       : '',
  addEventLoading      : false,
  confirmAccountSuccess: '',
  confirmAccountError  : ''
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
        successChange      : '',
        changeAvatarSuccess: '',
        changeAvatarLoading: false,
        changeAvatarError  : '',
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
        successChange: '',
        confirmAccountSuccess: '',
        confirmAccountError  : ''
      }
    case ADD_EVENT_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case ADD_EVENT_SUCCESS:
      return {
        ...state,
        isLoading      : false,
        addEventSuccess: action.payload,
        addEventErrors : ''
      }
    case ADD_EVENT_ERRORS:
      return {
        ...state,
        isLoading      : false,
        addEventSuccess: '',
        addEventErrors : action.payload
      }
    case REGISTER_USER_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case REGISTER_USER_ERROR:
      return {
        ...state,
        isLoading       : false,
        registrationFail: action.payload
      }
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading          : false,
        registrationFail   : {},
        registrationSuccess: action.payload
      }
    case CHANGE_AVATAR_LOADING:
      return {
        ...state,
        changeAvatarLoading: true
      }
    case CHANGE_AVATAR_SUCCESS:
      return {
        ...state,
        changeAvatarLoading: false,
        changeAvatarSuccess: action.payload,
        changeAvatarError  : ''
      }
    case CHANGE_AVATAR_ERROR:
      return {
        ...state,
        changeAvatarLoading: false,
        changeAvatarError  : action.payload,
        changeAvatarSuccess: ''
      }
    case CONFIRM_ACCOUNT_SUCCESS:
      return {
        ...state,
        confirmAccountError  : '',
        confirmAccountSuccess: action.payload
      }
    case CONFIRM_ACCOUNT_ERROR:
      return {
        ...state,
        confirmAccountError  : action.payload,
        confirmAccountSuccess: ''
      }
    default:
      return state
  }
}
