import React, { useState }   from 'react'
import { Box, Button, Grid } from '@material-ui/core'
import TabsMessages          from './TabsMessages'
import { useSelector }       from 'react-redux'
import { withStyles }        from '@material-ui/core/styles'
import SendIcon              from '@material-ui/icons/Send'
import Typography            from '@material-ui/core/Typography'
import DialogMessage         from './DialogMessage'

const ButtonCreateMail   = withStyles((theme) => ({
  root: {
    color          : theme.palette.common.white,
    backgroundColor: theme.palette.primary.dark,
    border         : 'solid 2px' + theme.palette.primary.dark,
    transition     : `all ${theme.transitions.easing.easeInOut} .75s`,
    textTransform  : 'none',
    '&:hover'      : {
      backgroundColor: theme.palette.primary.main,
      border         : 'solid 2px' + theme.palette.primary.main,
    },
  },
}))(Button)
const IndexMessagesAdmin = () => {
  const adminInfo                         = useSelector(state => state.adminReducers)
  const [selectAll, setSelectAll]         = useState(false)
  const [open, setOpen]                   = useState(false)
  const [routerDial, setRouterdial]       = useState({})
  
  const closeModal     = (v) => {
    setOpen(v)
  }
  const openMessage    = (userFirstName, userLastName, messageContent, userEmail, messageId) => {
    setOpen(true)
    setRouterdial(
      {
        title: `Message de : ${userFirstName} ${userLastName}`,
        path : 'readEmail',
        messageContent,
        userEmail,
        messageId
      })
  }
  const createNewEmail = () => {
    setOpen(true)
    setRouterdial({ title: 'Nouveau message', path: 'createEmail' }
    )
  }
  return <>
    <DialogMessage open={open} routerDial={routerDial} close={closeModal} />
    <Grid container>
      <Grid item xs={12}>
        <Box component="div" marginBottom={2} alignItems="center" display="flex" width="100%"
             justifyContent="space-between" padding={1}>
          <Typography variant="h5" component="h2">Boite de réception</Typography>
          <ButtonCreateMail size="small" endIcon={<SendIcon/>} onClick={createNewEmail}>Envoyer un nouveau
            message</ButtonCreateMail>
        </Box>
      </Grid>
      <Grid item md={12} sm={12} xs={12}>
        <TabsMessages
          messages={adminInfo.messages}
          select={() => setSelectAll(!selectAll)}
          selected={selectAll}
          openMessage={openMessage}
        />
      </Grid>
    </Grid>
  </>
}

export default IndexMessagesAdmin
