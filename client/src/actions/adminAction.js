import axios from 'axios'

export const RESET_EVENTS_ACTION          = 'RESET_EVENTS_ACTION'
export const GET_USER_LOADING             = 'GET_USER_LOADING'
export const GET_USER_SUCCESS             = 'GET_USER_SUCCESS'
export const GET_USER_ERROR               = 'GET_USER_ERROR'
export const CHANGE_PRICE_FORMULA_LOADING = 'CHANGE_PRICE_FORMULA_LOADING'
export const CHANGE_PRICE_FORMULA_SUCCESS = 'CHANGE_PRICE_FORMULA_SUCCESS'
export const CHANGE_PRICE_FORMULA_ERROR   = 'CHANGE_PRICE_FORMULA_ERROR'
export const DELETE_FORMULA_LOADING       = 'DELETE_FORMULA_LOADING'
export const DELETE_FORMULA_SUCCESS       = 'DELETE_FORMULA_SUCCESS'
export const DELETE_FORMULA_ERROR         = 'DELETE_FORMULA_ERROR'
export const GET_FORMULA_LOADING          = 'GET_FORMULA_LOADING'
export const GET_FORMULA_ERROR            = 'GET_FORMULA_ERROR'
export const GET_FORMULA_SUCCESS          = 'GET_FORMULA_SUCCESS'
export const GET_MESSAGES_LOADING         = 'GET_MESSAGES_LOADING'
export const GET_MESSAGES_ERROR           = 'GET_MESSAGES_ERROR'
export const GET_MESSAGES_SUCCESS         = 'GET_MESSAGES_SUCCESS'
export const SET_MESSAGES_ISREAD_ERROR    = 'SET_MESSAGES_ISREAD_ERROR'
export const SET_MESSAGES_ISREAD_SUCCESS  = 'SET_MESSAGES_ISREAD_SUCCESS'
export const CREATE_NEWS_LOADING          = 'CREATE_NEWS_LOADING'
export const CREATE_NEWS_SUCCESS          = 'CREATE_NEWS_SUCCESS'
export const CREATE_NEWS_ERRORS           = 'CREATE_NEWS_ERRORS'
export const GET_NEWS_LOADING             = 'GET_NEWS_LOADING'
export const GET_NEWS_SUCCESS             = 'GET_NEWS_SUCCESS'
export const GET_NEWS_ERRORS              = 'GET_NEWS_ERRORS'
export const DELETE_NEWS_LOADING          = 'DELETE_NEWS_LOADING'
export const DELETE_NEWS_SUCCESS          = 'DELETE_NEWS_SUCCESS'
export const DELETE_NEWS_ERRORS           = 'DELETE_NEWS_ERRORS'
export const UPDATE_NEWS_LOADING          = 'UPDATE_NEWS_LOADING'
export const UPDATE_NEWS_SUCCESS          = 'UPDATE_NEWS_SUCCESS'
export const UPDATE_NEWS_ERRORS           = 'UPDATE_NEWS_ERRORS'

export const getUserLoading  = () => {
  return {
    type: GET_USER_LOADING
  }
}
export const getUserSuccess  = (users) => {
  return {
    type   : GET_USER_SUCCESS,
    payload: users
  }
}
export const getUserError    = (err) => {
  return {
    type   : GET_USER_SUCCESS,
    payload: err
  }
}
export const requestApiUsers = () => {
  return dispatch => {
    dispatch(getUserLoading())
    axios.get('/admin/get-users')
         .then(res => {
           dispatch(getUserSuccess(res.data.users))
         })
         .catch(err => {
           dispatch(getUserError(err))
         })
  }
}

export const changePriceLoading           = () => {
  return {
    type: CHANGE_PRICE_FORMULA_LOADING
  }
}
export const changePriceSuccess           = (message) => {
  return {
    type   : CHANGE_PRICE_FORMULA_SUCCESS,
    payload: message
  }
}
export const changePriceError             = (err) => {
  return {
    type   : CHANGE_PRICE_FORMULA_ERROR,
    payload: err
  }
}
export const requestApiChangePriceFormula = (formulaId, newPrice) => {
  return dispatch => {
    dispatch(changePriceLoading())
    axios.patch(`/admin/update/formule-price/${formulaId}`, newPrice)
         .then(res => {
           dispatch(changePriceSuccess(res.data.success))
           setTimeout(() => {
             dispatch(resetEvent())
           }, 2000)
         })
         .catch(err => {
           console.log(err.response.data.errors)
           dispatch(changePriceError(err.response.data.errors))
         })
  }
}

export const deleteFormulaLoading    = () => {
  return {
    type: DELETE_FORMULA_LOADING
  }
}
export const deleteFormulaError      = (err) => {
  return {
    type   : DELETE_FORMULA_ERROR,
    payload: err
  }
}
export const deleteFormulaSuccess    = (success, docsId) => {
  return {
    type   : DELETE_FORMULA_SUCCESS,
    payload: { success, docsId }
  }
}
export const requestApiDeleteFormula = (formulaId) => {
  return dispatch => {
    dispatch(deleteFormulaLoading())
    axios.delete(`/admin/delete/formule/${formulaId}`)
         .then(res => {
           dispatch(deleteFormulaSuccess(res.data.success, formulaId))
/*           setTimeout(() => {
             dispatch(resetEvent())
           }, 2000)*/
         })
         .catch(err => dispatch(deleteFormulaError(err.response.data.errors)))
  }
}

export const getFormulaLoading = () => {
  return {
    type: GET_FORMULA_LOADING
  }
}
export const getFormulaSuccess = (formulas) => {
  return {
    type   : GET_FORMULA_SUCCESS,
    payload: formulas
  }
}
export const getFormulaError   = (error) => {
  return {
    type   : GET_FORMULA_ERROR,
    payload: error
  }
}
export const requestApiFormula = () => {
  return dispatch => {
    dispatch(getFormulaLoading())
    axios.get('/admin/get/formule')
         .then(res => dispatch(getFormulaSuccess(res.data.docs)))
         .catch(err => dispatch(getFormulaError(err.response.data.errors)))
  }
}

export const getMessageLoading = () => {
  return {
    type: GET_MESSAGES_LOADING
  }
}
export const getMessageSuccess = (messages) => {
  return {
    type   : GET_MESSAGES_SUCCESS,
    payload: messages
  }
}
export const getMessageError   = (error) => {
  return {
    type   : GET_MESSAGES_ERROR,
    payload: error
  }
}
export const requestApiMessage = () => {
  return dispatch => {
    dispatch(getMessageLoading())
    axios.get('/admin/get/messages')
         .then(res => dispatch(getMessageSuccess(res.data)))
         .catch(err => dispatch(getMessageError(err.response.data.errors)))
  }
}

export const setMessageIsReadSuccess    = (messages) => {
  return {
    type   : SET_MESSAGES_ISREAD_SUCCESS,
    payload: messages
  }
}
export const setMessageIsReadError      = (error) => {
  return {
    type   : SET_MESSAGES_ISREAD_ERROR,
    payload: error
  }
}
export const requestApiSetMessageIsRead = (messageId) => {
  return dispatch => {
    dispatch(getMessageLoading())
    axios.patch(`/admin/update/messages/${messageId}`)
         .then(res => dispatch(setMessageIsReadSuccess(res.data)))
         .catch(err => dispatch(setMessageIsReadError(err.response.data.errors)))
  }
}

export const createNewsLoading          = () => {
  return {
    type: CREATE_NEWS_LOADING
  }
}
export const createNewsSuccess          = (message) => {
  return {
    type   : CREATE_NEWS_SUCCESS,
    payload: message
  }
}
export const createNewsError            = (message) => {
  return {
    type   : CREATE_NEWS_ERRORS,
    payload: message
  }
}
export const requestApiCreateNewsletter   = (data) => {
  return dispatch => {
    dispatch(createNewsLoading())
    axios.post(`/admin/create/news`, data)
         .then(res => dispatch(createNewsSuccess(res.data.success)))
         .catch(err => dispatch(createNewsError(err.response.data)))
  }
}

export const getNewsLoading = () => {
  return {
    type: GET_NEWS_LOADING
  }
}
export const getNewsSuccess = (news) => {
  return {
    type   : GET_NEWS_SUCCESS,
    payload: news
  }
}
export const getNewsError   = (err) => {
  return {
    type   : GET_NEWS_ERRORS,
    payload: err
  }
}

export const requestApiGetNewsletter = () => {
  return dispatch => {
    dispatch(getNewsLoading())
    axios.get(`/admin/get/news`)
         .then(res => dispatch(getNewsSuccess(res.data)))
         .catch(err => dispatch(getNewsError(err.response)))
  }
}
export const deleteNewsLoading       = () => {
  return {
    type: DELETE_NEWS_LOADING
  }
}
export const deleteNewsSuccess       = (success, docsId) => {
  return {
    type   : DELETE_NEWS_SUCCESS,
    payload: { success, docsId }
  }
}
export const deleteNewsError         = (err) => {
  return {
    type   : DELETE_NEWS_ERRORS,
    payload: err
  }
}

export const requestApiDeleteNewsletter = (newsId) => {
  return dispatch => {
    /*dispatch(deleteNewsLoading())*/
    axios.delete(`/admin/delete/news/${newsId}`)
         .then(res => dispatch(deleteNewsSuccess(res.data.success, newsId)))
         .catch(err => dispatch(deleteNewsError(err.response)))
  }
}

export const updateNewsLoading = () => {
  return {
    type: UPDATE_NEWS_LOADING
  }
}
export const updateNewsSuccess = (success) => {
  return {
    type   : UPDATE_NEWS_SUCCESS,
    payload: success
  }
}
export const updateNewsError   = (err) => {
  return {
    type   : UPDATE_NEWS_ERRORS,
    payload: err
  }
}

export const requestApiUpdateNewsletter = (updateBody, newsId) => {
  return dispatch => {
    axios.patch(`/admin/update/news/${newsId}`, updateBody)
         .then(res => dispatch(updateNewsSuccess(res.data.success)))
         .catch(err => dispatch(updateNewsError(err.response)))
  }
}
export const resetEvent                 = () => {
  return {
    type: RESET_EVENTS_ACTION
  }
}
