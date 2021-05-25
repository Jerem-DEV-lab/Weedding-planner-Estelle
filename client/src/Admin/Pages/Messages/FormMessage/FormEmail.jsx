import React, { useState }              from 'react'
import Controls                         from '../../../Components/Controls/Controls'
import { FormControl, Grid, TextField } from '@material-ui/core'
import { useSelector }                  from 'react-redux'
import IconButton                       from '@material-ui/core/IconButton'
import { AccountCircle }                from '@material-ui/icons'
import ListContact                      from '../../../Components/ListContact/ListContact'

const FormEmail = ({ values, handleChangeInput, openList, listOpened }) => {
  const { errorSendMail }                 = useSelector(state => state.adminReducers)
  const [openedContact, setOpenedContact] = useState(false)
  return <>
    <form style={{ position: 'relative' }} >
      <Grid container spacing={2} alignItems="left">
        <Grid item xs={2}>
          <IconButton size="large" color="primary" >
            <AccountCircle fontSize="large"/>
          </IconButton>
        </Grid>
        <Grid item xs={10}>
          {listOpened &&
           <ListContact openedContact={openedContact} handleOpenContact={() => setOpenedContact(!openedContact)}/>}
          <FormControl fullWidth={true} >
            <Controls.Input
              name="userEmail"
              onChange={handleChangeInput}
              label="Email de l'utilisateur"
              value={values.userEmail}
              error={errorSendMail.errors}
              size="small" variant="standard"/>
          </FormControl>
        </Grid>
      </Grid>
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
