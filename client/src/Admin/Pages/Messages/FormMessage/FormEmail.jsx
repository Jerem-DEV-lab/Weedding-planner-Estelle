import React                      from 'react'
import Controls                   from '../../../Components/Controls/Controls'
import { FormControl, TextField } from '@material-ui/core'
import { useSelector }            from 'react-redux'

const FormEmail = ({ values, handleChangeInput }) => {
  const { errorSendMail } = useSelector(state => state.adminReducers)
  return <>
    <form>
      <FormControl fullWidth={true}>
        <Controls.Input
          name="userEmail"
          onChange={handleChangeInput}
          label="Email de l'utilisateur"
          value={values.userEmail}
          error={errorSendMail.errors}
          size="small" variant="standard"/>
      </FormControl>
      <FormControl fullWidth={true} margin="normal">
        <Controls.Input
          name="subjectEmail"
          value={values.subjectEmail}
          onChange={handleChangeInput}
          label="Sujet de contact"
          error={errorSendMail.errors}
          size="small" variant="standard"/>
      </FormControl>
      <FormControl fullWidth={true}>
        <TextField
          multiline={true}
          rows={5}
          name="contentMessage"
          onChange={handleChangeInput}
          value={values.contentMessage}
          error={errorSendMail.errors}
          label="Message"/>
      </FormControl>
    </form>
  </>
}

export default FormEmail
