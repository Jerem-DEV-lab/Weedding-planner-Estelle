import React              from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  TextField
}                         from '@material-ui/core'
import Button             from '@material-ui/core/Button'
import { useTranslation } from 'react-i18next'

const Transition    = React.forwardRef(function Transition (props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
const ResetPassword = ({ openModalResetPassword, close }) => {
  const { t } = useTranslation()
  const sendNewPassword = (e) => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <>
      <Dialog
        open={openModalResetPassword}
        TransitionComponent={Transition}
        keepMounted
        onClose={close}>
        <DialogTitle>Vous avez oublié votre mot de passe ? </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Renseigner votre adresse email pour recevoir un mot de passe.
            <form style={{marginTop: '.75rem'}} onSubmit={sendNewPassword}>
              <TextField
                label={t('label_password')}
                type="password"
                size="small"
                fullWidth={true}
                variant="outlined"
              />
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={close}>
            Annuler
          </Button>
          <Button color="primary" onClick={sendNewPassword}>
            Demander un nouveau mot de passe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ResetPassword
