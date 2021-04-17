import React from 'react'
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography
}            from '@material-ui/core'

import Button                 from '@material-ui/core/Button'
import FormEmail              from './FormMessage/FormEmail'
import { withStyles }         from '@material-ui/core/styles'
import { Link }               from 'react-router-dom'
import { useDispatch }        from 'react-redux'
import { requestApiSendMail } from '../../../actions/adminAction'
import { useForm }            from '../../../Hooks/useForm'

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
const DialogMessage     = ({ open, close, targetContext, routerDial }) => {
  const dispatch                      = useDispatch()
  const { values, handleChangeInput } = useForm(initialFieldValue)
  const sendMail                      = () => {
    dispatch(requestApiSendMail(values))
  }
  return (
    <>
      <Dialog
        fullWidth={true}
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
        <DialogContent dividers={true}>
          <DialogContentText>
            {routerDial.path === 'createEmail' &&
             <FormEmail values={values} handleChangeInput={handleChangeInput}/>}
            {routerDial.path === 'readEmail' &&
             <>
               {routerDial.messageContent}
             </>}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {routerDial.path === 'readEmail' &&
           <>
             <Button color="primary">
               <Link to={`/admin/messages/reply/${routerDial.messageId}`}>Répondre</Link>
             </Button>
           </>}
          {routerDial.path === 'createEmail' &&
           <>
             <Button onClick={sendMail} color="primary">
               Envoyer
             </Button>
           </>}
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DialogMessage
