import React, { useEffect, useState } from 'react'
import { useForm }                    from '../../../Hooks/useForm'
import { Grid, TextField }            from '@material-ui/core'
import ControlSelect                  from './ControlSelect'
import { useDispatch, useSelector }   from 'react-redux'
import FormControl                    from '@material-ui/core/FormControl'
import Button                                     from '@material-ui/core/Button'
import { requestApiScheduleWorkshop, resetEvent } from '../../../actions/adminAction'
import Toastify                                   from '../../../Components/Toastify'

const initialFValue   = {
  nameWorkshop   : '',
  typeWorkshop   : '',
  start_at       : '',
  membersWorkshop: []
}
const FormAddWorkshop = () => {
  const { values, setValues, handleChangeInput } = useForm(initialFValue)
  const { listUser, successSchedule }            = useSelector(state => state.adminReducers)
  const [filteredUser, setFilteredUser]          = useState([])
  const dispatch                                 = useDispatch()
  
  useEffect(() => {
    dispatch(resetEvent())
    if (listUser) {
      setFilteredUser(listUser.filter(u => u.workshopRegistered !== false))
    }
  }, [listUser])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(requestApiScheduleWorkshop(values))
    setValues(initialFValue)
  }
  return (
    <>
      {successSchedule && <Toastify message={successSchedule}/>}
      <form onSubmit={handleSubmit}>
        <Grid container={true} spacing={4}>
          <Grid item xs={12} sm={4} lg={4} xl={4}>
            <TextField
              name="nameWorkshop"
              onChange={handleChangeInput}
              label="Nom de l'atelier"
              value={values.nameWorkshop}
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={4} lg={4} xl={4}>
            <TextField
              name="typeWorkshop"
              value={values.typeWorkshop}
              onChange={handleChangeInput}
              label="Type de l'atelier"
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={4} lg={4} xl={4}>
            <FormControl>
              <TextField
                fullWidth={true}
                name="start_at"
                onChange={handleChangeInput}
                label="Date de l'atelier"
                variant="outlined"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} lg={4} xl={4}>
            <ControlSelect filteredUser={filteredUser} selected={values.membersWorkshop}
                           handleInputChange={handleChangeInput}/>
          </Grid>
        </Grid>
        <Button color="primary" variant="contained" disableElevation={true} type="submit">
          Programmer
        </Button>
      </form>
    </>
  )
}

export default FormAddWorkshop
