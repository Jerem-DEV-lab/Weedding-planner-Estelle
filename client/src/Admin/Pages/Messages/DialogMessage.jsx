import React, { useEffect } from 'react'
import {
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography
}                           from '@material-ui/core'

import Button                                                    from '@material-ui/core/Button'
import FormEmail                                                 from './FormMessage/FormEmail'
import { withStyles }                                            from '@material-ui/core/styles'
import { Link, useHistory }                                      from 'react-router-dom'
import { useDispatch, useSelector }                              from 'react-redux'
import { requestApiDeleteEmail, requestApiSendMail, resetEvent } from '../../../actions/adminAction'
import { useForm }                                               from '../../../Hooks/useForm'
import { Alert }                                                 from '@material-ui/lab'

const HeaderEmailUsers  = withStyles(theme => (
  {
    root: {
      fontSize  : '14px',
      color     : 'var(--color)',
      fontWeight: '500'
    }
  }))(Typography)
const initialFieldValue = {
  userEmail     : '',
  subjectEmail  : '',
  contentMessage: ''
}
const DialogMessage     = ({ open, close, routerDial }) => {
  const dispatch                                 = useDispatch()
  const { values, setValues, handleChangeInput } = useForm(initialFieldValue)
  const history                                  = useHistory()
  const sendMail                                 = () => {
    dispatch(requestApiSendMail(values))
    setValues(initialFieldValue)
  }
  const handleRequestState                       = useSelector(state => state.adminReducers)
  const deleteEmail                              = (e) => {
    e.preventDefault()
    dispatch(requestApiDeleteEmail(routerDial.messageId, routerDial.messageId))
    close(false)
  }
  useEffect(() => {
    if (handleRequestState.successSendMail) {
      setTimeout(() => {
        dispatch(resetEvent())
        history.push('/admin/messages')
      }, 1500)
    }
  }, [handleRequestState.successSendMail])
  return (
    <>
      <Dialog
        maxWidth={'md'}
        open={open}
        onClose={() => close(false)}>
        {routerDial.path === 'readEmail' ?
         <DialogTitle>
           <HeaderEmailUsers>
             {routerDial.title}
           </HeaderEmailUsers>
         </DialogTitle>
                                         :
         <DialogTitle>{routerDial.title}</DialogTitle>
        }
        {handleRequestState.successSendMail && <Alert severity="success">{handleRequestState.successSendMail}</Alert>}
        <DialogContent dividers={true}>
          <DialogContentText>
            {routerDial.path === 'createEmail' &&
             <FormEmail values={values} handleChangeInput={handleChangeInput}
                        errorsForm={handleRequestState.errorSendMail}/>}
            {routerDial.path === 'readEmail' &&
             <>
               {routerDial.messageContent}
             </>}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {routerDial.path === 'readEmail' &&
           <>
             <Button color="primary" variant="contained" disableElevation={true} size="small">
               <Link to={`/admin/messages/reply/${routerDial.messageId}`}>Répondre</Link>
             </Button>
             <Button color="secondary" variant="outlined" size="small" onClick={deleteEmail}>
               Supprimer
             </Button>
           </>}
          {routerDial.path === 'createEmail' &&
           <>
             <Button onClick={sendMail} disabled={handleRequestState.sendEmailLoading} color="primary">
               Envoyer {handleRequestState.sendEmailLoading && <CircularProgress size={20} className="ml3"/>}
             </Button>
           </>}
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DialogMessage
