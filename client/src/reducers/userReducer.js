import {
  LANG_USER_PREF,
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS, LOGOUT_USER
}                                                                                     from '../actions/authenticatorAction'
import { CHANGE_USER_INFO_ERROR, CHANGE_USER_INFO_LOADING, CHANGE_USER_INFO_SUCCESS } from '../actions/userAction'

const initialState = {
  isLoading          : false,
  userIsLogged       : false,
  userInfo           : {},
  loginError         : '',
  loginSuccess       : '',
  registrationFail   : '',
  registrationSuccess: '',
  langPref           : 'FR_fr',
  isLogged           : false,
  userId             : null,
  userRole           : 'ROLE_USER'
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
        registrationSuccess: ''
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
        successChange: 'sa marche',
        isLoading    : false,
        userInfo     : action.payload
      }
    case CHANGE_USER_INFO_ERROR:
      return {
        ...state,
        isLoading  : false,
        changeError: action.payload
      }
    case LANG_USER_PREF:
      return {
        ...state,
        langPref: action.payload
      }
    default:
      return state
  }
}
