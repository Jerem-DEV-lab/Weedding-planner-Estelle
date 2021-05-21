import React           from 'react'
import Controls        from '../../../Components/Controls/Controls'
import { FormControl } from '@material-ui/core'

const FormEmail = ({values, handleChangeInput}) => {
  
  return <>
    <form>
      <FormControl fullWidth={true}>
        <Controls.Input
          name="userEmail"
          onChange={handleChangeInput}
          label="Email de l'utilisateur"
          value={values.userEmail}
          size="small" variant="standard"/>
      </FormControl>
      <FormControl fullWidth={true} margin="normal">
        <Controls.Input
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
  </>
}

export default FormEmail
