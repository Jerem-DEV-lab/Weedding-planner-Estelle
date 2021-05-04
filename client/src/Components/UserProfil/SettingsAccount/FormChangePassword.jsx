import React, { useEffect, useState }                          from 'react'
import { Button, DialogContent, DialogTitle, Grid, TextField } from '@material-ui/core'
import Box                                                     from '@material-ui/core/Box'
import { useTranslation }                                      from 'react-i18next'
import { useForm }                                             from '../../../Hooks/useForm'
import { useTheme, withStyles }                                from '@material-ui/core/styles'
import { useDispatch, useSelector }                            from 'react-redux'
import { requestApiChangePassword, resetEventUser }            from '../../../actions/userAction'
import { resetEvent }                                          from '../../../actions/adminAction'
import Modal                                                   from '../../Modal/Modal'
import CheckCircleOutlineIcon
                                                               from '@material-ui/icons/CheckCircleOutline'
import { green }                                               from '@material-ui/core/colors'

const initialFValues = {
  actualPassword : '',
  newPassword    : '',
  confirmPassword: ''
}

function useToggle (initialValue) {
  const [values, setValues] = useState(initialValue)
  const handleChange        = () => {
    setValues(!values)
  }
  return [
    values, setValues, handleChange
  ]
}

const TitleModal = withStyles(theme => (
  {
    root: {
      display       : 'flex',
      alignItems    : 'center',
      justifyContent: 'center',
      whiteSpace    : 'nowrap'
    }
  }))(DialogTitle)

export default function FormChangePassword () {
  const { t }                          = useTranslation()
  const { values, handleChangeInput }  = useForm(initialFValues)
  const theme                          = useTheme()
  const dispatch                       = useDispatch()
  const { successChange, errorChange } = useSelector(state => state.userReducers)
  const [open, setOpen]                = useToggle(false)
  
  const changePassword = (e) => {
    e.preventDefault()
    dispatch(resetEvent())
    dispatch(requestApiChangePassword(values))
  }
  useEffect(() => {
    if (successChange) {
      setOpen(true)
      setTimeout(() => {
        setOpen(false)
        dispatch(resetEventUser())
      }, 2000)
    }
    // eslint-disable-next-line
  }, [successChange])
  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <TitleModal>
          <Box component="div" display="flex" justifyContent="center" alignItems="center" padding={2}>
            <CheckCircleOutlineIcon style={{ fontSize: '80px', color: green.A700 }}/>
          </Box>
        </TitleModal>
        <DialogContent style={{ padding: '24px', fontSize: '18px', lineHeight: '30px', textAlign: 'justify' }}>
          {successChange}
        </DialogContent>
      </Modal>
      <form autoComplete={false}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <TextField
              error={errorChange.actualPassword}
              type="password"
              variant="outlined"
              value={values.actualPassword}
              label={t('old_password')}
              name="actualPassword"
              onChange={handleChangeInput}
              size="medium"
              fullWidth={true}
              helperText={errorChange.actualPassword}
            />
          </Grid>
          <Grid item xs={12} md={4} direction="row">
            <TextField
              error={errorChange.newPassword}
              helperText={errorChange.newPassword}
              type="password"
              variant="outlined"
              value={values.newPassword}
              label={t('new_password')}
              name="newPassword"
              onChange={handleChangeInput}
              size="medium"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={4} direction="row">
            <TextField
              error={errorChange.confirmPassword}
              helperText={errorChange.confirmPassword}
              type="password"
              variant="outlined"
              label={t('confirm_password')}
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChangeInput}
              size="medium"
              fullWidth={true}
            />
          </Grid>
        </Grid>
        <Box display="flex" marginTop={theme.spacing(0.2)} justifyContent="flex-end">
          <Button variant="outlined" color="primary" onClick={changePassword}>{t('update_my_password')}</Button>
        </Box>
      </form>
    </>
  )
}
