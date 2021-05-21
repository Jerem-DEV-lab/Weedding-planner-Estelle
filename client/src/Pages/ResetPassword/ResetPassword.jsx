import React, { useEffect, useState } from 'react'
import axios                          from 'axios'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  TextField
}                                     from '@material-ui/core'
import Button                         from '@material-ui/core/Button'
import { useTranslation }             from 'react-i18next'
import { Alert }                      from '@material-ui/lab'

const Transition    = React.forwardRef(function Transition (props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
const ResetPassword = ({ openModalResetPassword, close }) => {
  const { t }                 = useTranslation()
  const [email, setEmail]     = useState('')
  const [success, setSuccess] = useState('')
  const [errors, setErrors]   = useState('')
  const sendNewPassword       = (e) => {
    e.preventDefault()
    setSuccess('')
    setErrors('')
    axios.post('/resetPassword', { email })
         .then(res => setSuccess(res.data.success))
         .catch(err => setErrors(err.response.data.errors))
  }
  useEffect(() => {
    if (success) {
      setTimeout(() => { close()}, 3000)
    }
  }, [close, success])
  return (
    <>
      <Dialog
        open={openModalResetPassword}
        TransitionComponent={Transition}
        keepMounted
        onClose={close}>
        {success && <Alert severity="success">{success}</Alert>}
        {errors && <Alert severity="success">Impossible de vous envoyer un e-mail pour le moment</Alert>}
        <DialogTitle>Vous avez oublié votre mot de passe ? </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Renseigner votre adresse email pour recevoir un mot de passe.
            <form style={{ marginTop: '.75rem' }} onSubmit={sendNewPassword}>
              <TextField
                label={t('label_email')}
                type="email"
                size="small"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth={true}
                variant="outlined"
              />
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={close}>
            {t('cancelLabel')}
          </Button>
          <Button color="primary" onClick={sendNewPassword}>
            {t('askNewPassword')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ResetPassword
