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
export const SEND_EMAIL_LOADING           = 'SEND_EMAIL_LOADING'
export const SEND_EMAIL_SUCCESS           = 'SEND_EMAIL_SUCCESS'
export const SEND_EMAIL_ERROR             = 'SEND_EMAIL_ERROR'
export const CREATE_NEWS_LOADING          = 'CREATE_NEWS_LOADING'
export const CREATE_NEWS_SUCCESS          = 'CREATE_NEWS_SUCCESS'
export const CREATE_NEWS_ERRORS           = 'CREATE_NEWS_ERRORS'
export const GET_NEWS_LOADING             = 'GET_NEWS_LOADING'
export const GET_NEWS_SUCCESS             = 'GET_NEWS_SUCCESS'
export const GET_NEWS_ERRORS              = 'GET_NEWS_ERRORS'
export const DELETE_NEWS_LOADING          = 'DELETE_NEWS_LOADING'
export const DELETE_NEWS_SUCCESS          = 'DELETE_NEWS_SUCCESS'
export const DELETE_NEWS_ERRORS           = 'DELETE_NEWS_ERRORS'
export const DELETE_EMAIL_SUCCESS         = 'DELETE_EMAIL_SUCCESS'
export const DELETE_EMAIL_ERRORS          = 'DELETE_EMAIL_ERRORS'
export const UPDATE_NEWS_LOADING          = 'UPDATE_NEWS_LOADING'
export const UPDATE_NEWS_SUCCESS          = 'UPDATE_NEWS_SUCCESS'
export const UPDATE_NEWS_ERRORS           = 'UPDATE_NEWS_ERRORS'
export const SCHEDULE_WORKSHOP_LOADING    = 'SCHEDULE_WORKSHOP_LOADING'
export const SCHEDULE_WORKSHOP_SUCCESS    = 'SCHEDULE_WORKSHOP_SUCCESS'
export const SCHEDULE_WORKSHOP_ERRORS     = 'SCHEDULE_WORKSHOP_ERRORS'
export const GET_ALL_RATINGS_SUCCESS      = 'GET_ALL_RATINGS_SUCCESS'
export const GET_ALL_RATINGS_ERROR        = 'GET_ALL_RATINGS_ERROR'
export const VALID_RATING_SUCCESS         = 'VALID_RATING_SUCCESS'
export const VALID_RATING_ERROR           = 'VALID_RATING_ERROR'
export const DELETE_RATING_SUCCESS        = 'DELETE_RATING_SUCCESS'
export const DELETE_RATING_ERROR          = 'DELETE_RATING_ERROR'
export const BAN_USER_LOADING             = 'BAN_USER_LOADING'
export const BAN_USER_ERROR               = 'BAN_USER_ERROR'
export const BAN_USER_SUCCESS             = 'BAN_USER_SUCCESS'

export const banUserLoading = () => {
  return {
    type: BAN_USER_LOADING
  }
}
export const banUserSuccess = (success) => {
  return {
    type   : BAN_USER_SUCCESS,
    payload: success
  }
}

export const banUserError = (error) => {
  return {
    type   : BAN_USER_ERROR,
    payload: error
  }
}

export const requestApiBanUser = (userId, userIsBan) => {
  return dispatch => {
    dispatch(banUserLoading())
    axios.put(`/admin/users/banUser/${userId}`, {
           userIsBan
         })
         .then(res => {
           dispatch(banUserSuccess(res.data.success))
         })
         .catch(err => {
           dispatch(banUserError(err.response.data.errors))
         })
  }
}
export const getUserLoading    = () => {
  return {
    type: GET_USER_LOADING
  }
}
export const getUserSuccess    = (users) => {
  return {
    type   : GET_USER_SUCCESS,
    payload: users
  }
}
export const getUserError      = (err) => {
  return {
    type   : GET_USER_SUCCESS,
    payload: err
  }
}
export const requestApiUsers   = () => {
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

export const sendEmailLoading   = () => {
  return {
    type: SEND_EMAIL_LOADING
  }
}
export const sendEmailSuccess   = (success) => {
  return {
    type   : SEND_EMAIL_SUCCESS,
    payload: success
  }
}
export const sendEmailError     = (error) => {
  return {
    type   : SEND_EMAIL_ERROR,
    payload: error
  }
}
export const requestApiSendMail = (data) => {
  return dispatch => {
    dispatch(sendEmailLoading())
    axios.post('/admin/send/email', data)
         .then(res => dispatch(sendEmailSuccess(res.data.success)))
         .catch(err => dispatch(sendEmailError(err.response.data.errors)))
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

export const scheduleWorkshopLoading = () => {
  return {
    type: SCHEDULE_WORKSHOP_LOADING
  }
}
export const scheduleWorkshopSuccess = (success) => {
  return {
    type   : SCHEDULE_WORKSHOP_SUCCESS,
    payload: success
  }
}
export const scheduleWorkshopErrors  = (errors) => {
  return {
    type   : SCHEDULE_WORKSHOP_ERRORS,
    payload: errors
  }
}

export const requestApiScheduleWorkshop = (data) => {
  return dispatch => {
    dispatch(scheduleWorkshopLoading())
    axios.post(`/admin/workshop/create`, data)
         .then(res => {
           dispatch(scheduleWorkshopSuccess(res.data.success))
         })
         .catch(err => {
           dispatch(scheduleWorkshopErrors(err.response.errors))
         })
  }
}

export const deleteEmailSuccess = (success, messageId) => {
  return {
    type   : DELETE_EMAIL_SUCCESS,
    payload: { success, messageId }
  }
}
export const deleteEmailError      = (errors) => {
  return {
    type   : DELETE_EMAIL_ERRORS,
    payload: errors
  }
}
export const requestApiDeleteEmail = (datas, messageId) => {
  return (dispatch) => {
    axios(
      {
        method: 'delete',
        url   : '/admin/delete/email',
        data  : {
          emails: [datas]
        }
      })
      .then(res => dispatch(deleteEmailSuccess(res.data.success, messageId)))
      .catch(err => dispatch(deleteEmailError(err.response.data.errors)))
  }
}

export const getAllUnpublishedRatingsSuccess = (ratings) => {
  return {
    type   : GET_ALL_RATINGS_SUCCESS,
    payload: ratings
  }
}
export const getAllUnpublishedRatingsError   = (err) => {
  return {
    type   : GET_ALL_RATINGS_ERROR,
    payload: err
  }
}
export const requestApiRating                = () => {
  return dispatch => {
    axios.get(`/admin/get/ratings`)
         .then(res => {
           dispatch(getAllUnpublishedRatingsSuccess(res.data))
         })
         .catch(err => {
           dispatch(getAllUnpublishedRatingsError(err.response.errors))
         })
  }
}

export const validRatingSuccess = (success, noticeId) => {
  return {
    type   : VALID_RATING_SUCCESS,
    payload: { success, noticeId }
  }
}
export const validRatingError   = (error) => {
  return {
    type   : VALID_RATING_ERROR,
    payload: error
  }
}
export const requestValidRating = (noticeId) => {
  return dispatch => {
    axios.patch(`/admin/patch/ratings/${noticeId}`)
         .then(res => {
           dispatch(validRatingSuccess(res.data.success, noticeId))
         })
         .catch(err => dispatch(validRatingError(err.response.data.error)))
  }
}

export const deleteRatingSuccess = (success, noticeId) => {
  return {
    type   : DELETE_RATING_SUCCESS,
    payload: { success, noticeId }
  }
}
export const deleteRatingError   = (error) => {
  return {
    type   : DELETE_RATING_ERROR,
    payload: error
  }
}
export const requestDeleteRating = (noticeId) => {
  return dispatch => {
    axios.delete(`/admin/delete/ratings/${noticeId}`)
         .then(res => {
           dispatch(deleteRatingSuccess(res.data.success, noticeId))
         })
         .catch(err => dispatch(deleteRatingError(err.response.data.error)))
  }
}

export const resetEvent          = () => {
  return {
    type: RESET_EVENTS_ACTION
  }
}
