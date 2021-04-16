import React                                                                                from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@material-ui/core'

import Button         from '@material-ui/core/Button'
import FormEmail      from './FormMessage/FormEmail'
import { withStyles } from '@material-ui/core/styles'

const HeaderEmailUsers = withStyles(theme => (
  {
    root: {
      fontSize  : '14px',
      color     : 'var(--color)',
      fontWeight: '500'
    }
  }))(Typography)

const DialogMessage = ({ open, close, targetContext, routerDial }) => {
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
             <FormEmail formContext={targetContext}/>}
            {routerDial.path === 'readEmail' &&
             <>
               {routerDial.messageContent}
             </>}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {routerDial.path === 'readEmail' &&
           <>
             <Button onClick={() => close(false)} color="primary">
               Répondre
             </Button>
           </>}
          {routerDial.path === 'createEmail' &&
           <>
             <Button onClick={() => close(false)} color="primary">
               Envoyer
             </Button>
           </>}
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DialogMessage
