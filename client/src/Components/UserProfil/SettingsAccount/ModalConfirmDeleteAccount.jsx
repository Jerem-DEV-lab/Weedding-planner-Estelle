import React, { useEffect, useState }                                                      from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core'
import { useTranslation }                                                                  from 'react-i18next'

import injectHtmlCode                           from '../../../tools/injectHtml'
import Button                                   from '@material-ui/core/Button'
import { useDispatch, useSelector }             from 'react-redux'
import { requestDeleteAccount, resetEventUser } from '../../../actions/userAction'
import { requestApiLogoutUser }                 from '../../../actions/authenticatorAction'
import { useHistory }                           from 'react-router-dom'

const ModalConfirmDeleteAccount = ({ open, closeModal }) => {
  const { t }                         = useTranslation()
  const [password, setPassword]       = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const dispatch                      = useDispatch()
  const userState                     = useSelector((state) => state.userReducers)
  const history                       = useHistory()
  useEffect(() => {
    resetEventUser()
    if (password.length > 2) {
      setBtnDisabled(false)
    } else {
      setBtnDisabled(true)
    }
  }, [password])
  const deleteAccount = (e) => {
    e.preventDefault()
    dispatch(requestDeleteAccount(password))
    setPassword('')
  }
  useEffect(() => {
    if (userState.successDeleteAccount) {
      dispatch(requestApiLogoutUser())
      closeModal()
      history.push('/')
    }
  }, [userState.successDeleteAccount])
  return (
    <>
      <Dialog open={open} onClose={closeModal}>
        <DialogTitle>{t('confirm_delete_account_title')}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p dangerouslySetInnerHTML={injectHtmlCode(t('confirm_delete_account_content1'))} className="mb1"/>
            <p dangerouslySetInnerHTML={injectHtmlCode(t('confirm_delete_account_content2'))}/>
          </DialogContentText>
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            margin="dense"
            error={userState.errorDeleteAccount && userState.errorDeleteAccount.error}
            helperText={userState.errorDeleteAccount && userState.errorDeleteAccount.reason}
            color="secondary"
            value={password}
            variant="outlined"
            size="medium"
            label={t('label_password')}
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" disabled={btnDisabled} onClick={deleteAccount}>Supprimer mon compte</Button>
          <Button color="primary" onClick={closeModal}>{t('cancelLabel')}</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ModalConfirmDeleteAccount
