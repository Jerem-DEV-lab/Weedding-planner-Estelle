import React, { useEffect, useState }                 from 'react'
import { useParams }                                  from 'react-router-dom'
import { useDispatch, useSelector }                   from 'react-redux'
import { Box, Button, FormControl, Paper, TextField } from '@material-ui/core'
import SendRoundedIcon                                from '@material-ui/icons/SendRounded'
import { useForm }                                    from '../../../Hooks/useForm'
import Controls                                       from '../../Components/Controls/Controls'
import { requestApiSendMail, resetEvent }             from '../../../actions/adminAction'
import { Alert }                                      from '@material-ui/lab'
import { useHistory }                                 from 'react-router-dom'

function findMessageById (messageId, arrayMsg) {
  return arrayMsg.find(x => x._id === messageId)
}

const ReplyMessage = () => {
  const history                                       = useHistory()
  const dispatch                                      = useDispatch()
  const { successSendMail, errorSendEmail, messages } = useSelector(state => state.adminReducers)
  let { messageId }                                   = useParams()
  const formContext                                   = {
    userEmail     : '',
    subjectEmail  : '',
    contentMessage: ''
  }
  const { values, setValues, handleChangeInput }      = useForm(formContext)
  
  useEffect(() => {
    if (messages) {
      setValues({ ...values, userEmail: findMessageById(messageId, messages).email })
    }
  }, [messageId, messages])
  
  const sendEmail = () => {
    dispatch(requestApiSendMail(values))
  }
  useEffect(() => {
    if (successSendMail) {
      setValues(formContext)
      setTimeout(() => {
        dispatch(resetEvent())
        history.push('/admin/messages')
      }, 2000)
    }
  }, [successSendMail])
  
  return <>
    <Paper>
      <Box padding={2}>
        {successSendMail &&
         <Alert severity="success">{successSendMail}</Alert>
        }
        {errorSendEmail &&
         <Alert severity="error">{errorSendEmail}</Alert>
        }
        <form>
          <FormControl fullWidth={true}>
            <TextField name="userEmail" value={values.userEmail} onChange={handleChangeInput}
                       label="Email de l'utilisateur"/>
          </FormControl>
          <FormControl fullWidth={true} margin="normal">
            <TextField
              name="subjectEmail"
              value={values.subjectEmail}
              onChange={handleChangeInput}
              label="Sujet de contact"
              size="small" variant="standard"/>
          </FormControl>
          <FormControl fullWidth={true}>
            <Controls.Input
              multiline={true}
              rows={5}
              name="contentMessage"
              onChange={handleChangeInput}
              value={values.contentMessage}
              label="Message"/>
          </FormControl>
        </form>
      </Box>
      <Box display="flex" justifyContent="flex-end" paddingRight={4} paddingBottom={2} marginBottom={2}>
        <Button size="medium" color="primary" variant="contained" disableElevation={true} endIcon={<SendRoundedIcon/>}
                onClick={sendEmail}>
          Envoyer
        </Button>
      </Box>
    </Paper>
  </>
}

export default ReplyMessage
