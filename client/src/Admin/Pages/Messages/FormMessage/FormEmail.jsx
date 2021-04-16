import React           from 'react'
import { useForm }     from '../../../../Hooks/useForm'
import Controls        from '../../../Components/Controls/Controls'
import { FormControl } from '@material-ui/core'

const FormEmail = ({ formContext }) => {
  const { userEmail, subjectEmail }                 = formContext
  const initialValue                  = {
    userEmail   : userEmail ? userEmail : '',
    subjectEmail: subjectEmail ? subjectEmail : '',
    contentEmail: '',
  }
  console.log(formContext)
  const { values, handleChangeInput } = useForm(initialValue)
  console.log('values', values)
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
          name="titleEmail"
          value={values.subjectEmail}
          onChange={handleChangeInput}
          label="Sujet de contact"
          size="small" variant="standard"/>
      </FormControl>
      <FormControl fullWidth={true}>
        <Controls.Input
          multiline={true}
          rows={5}
          onChange={handleChangeInput}
          value={values.contentEmail}
          label="Message"/>
      </FormControl>
    </form>
  </>
}

export default FormEmail
