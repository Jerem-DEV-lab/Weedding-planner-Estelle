import React                        from 'react'
import { Box, Grid, Hidden, Paper } from '@material-ui/core'
import { OverlayForm }              from './Login'
import { useTranslation }           from 'react-i18next'
import { Link }                     from 'react-router-dom'
import { useForm }                  from '../../Hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import Typography                   from '@material-ui/core/Typography'
import ArrowBackIcon                from '@material-ui/icons/ArrowBack'
import FormControl                  from '@material-ui/core/FormControl'
import InputLabel                   from '@material-ui/core/InputLabel'
import OutlinedInput                from '@material-ui/core/OutlinedInput'
import Button                       from '@material-ui/core/Button'
import Divider                      from '@material-ui/core/Divider'
import { makeStyles }               from '@material-ui/core/styles'
import { requestApiRegister }       from '../../actions/authenticatorAction'

const useStyles = makeStyles(theme => ({
  root          : {
    padding  : theme.spacing(2),
    maxHeight: '100vh',
    overflowY: 'auto',
    height   : '100%'
  },
  containerForm : {
    display      : 'flex',
    flexDirection: 'column',
    paddingLeft  : theme.spacing(4),
    paddingRight : theme.spacing(4),
    paddingBottom: theme.spacing(4),
    height       : '100%'
  },
  backHomeButton: {
    display       : 'flex',
    justifyContent: 'start',
    alignItems    : 'center',
    paddingTop    : theme.spacing(2),
    width         : 'max-content'
  }
}))

const Register = () => {
  return <>
    <Grid container={true} style={{ backgroundColor: '#F6F8FB' }}>
      <Hidden smDown>
        <Grid item={true} xs={12} sm={12} md={7}>
          <Box component="div" style={{
            height          : '100vh',
            backgroundImage : 'url("/assets/register.jpg")',
            backgroundSize  : 'cover',
            backgroundRepeat: 'no-repeat',
            position        : 'relative',
            display         : 'flex',
            alignItems      : 'center',
            justifyContent  : 'center',
            width           : '100%'
          }}>
            <OverlayForm/>
          </Box>
        </Grid>
      </Hidden>
      <Grid item={true} xs={12} sm={12} md={5}>
        <RegisterForm/>
      </Grid>
    </Grid>
  </>
}

export default Register

const RegisterForm = () => {
  const classes = useStyles()
  const { t }   = useTranslation()
  /*const history                       = useHistory()*/
  const initialState                  = {
    email     : '',
    password  : '',
    firstName : '',
    lastName  : '',
    address   : '',
    postalCode: '',
    phone     : ''
  }
  const { values, handleChangeInput } = useForm(initialState)
  const dispatch                      = useDispatch()
  const errorForm                     = useSelector(state => state.userReducers).registrationFail
  const InputsForm                    = [
    {
      name : 'lastName',
      type : 'text',
      value: values.lastName,
      label: t('lastName'),
      error: errorForm.lastName || ''
    },
    {
      name : 'firstName',
      type : 'text',
      value: values.firstName,
      label: t('firstName'),
      error: errorForm.firstName || ''
    },
    {
      name : 'phone',
      type : 'tel',
      value: values.phone,
      label: t('label_number_phone'),
      error: errorForm.phone || ''
    },
    {
      name : 'email',
      type : 'email',
      value: values.email,
      label: t('label_email'),
      error: errorForm.email || ''
    },
    {
      name : 'password',
      type : 'password',
      value: values.password,
      label: t('label_password'),
      error: errorForm.password || ''
    },
    {
      name : 'address',
      type : 'text',
      value: values.address,
      label: t('label_address'),
      error: errorForm.address || ''
    },
    {
      name : 'postalCode',
      type : 'text',
      value: values.postalCode,
      label: t('label_postal_code'),
      error: errorForm.postalCode || ''
    },
  ]
  
  const submitForm = (e) => {
    e.preventDefault()
    dispatch(requestApiRegister(values))
  }
  /*useEffect(() => {
   if (loginSuccess) {
   history.push('/')
   }
   }, [loginSuccess])*/
  return <>
    <div className={classes.root}>
      <Paper className={classes.containerForm} elevation={0}>
        <Typography variant="body2" component="span" color="primary">
          <Link to="/" className={classes.backHomeButton}><ArrowBackIcon/>&nbsp;{t('go_back_label')}</Link>
        </Typography>
        <div className="d-flex justify-center">
          <img src="/assets/logo.png" alt="logo de côté campagne" height={150}/>
        </div>
        <div className="mt4">
          <form>
            <Grid container={true} spacing={3}>
              {InputsForm.map((input, index) => (
                <Grid item={true} xs={12} lg={6} key={index}>
                  <FormControl variant="outlined" size="small" fullWidth={true}>
                    <InputLabel htmlFor="email">{input.label}</InputLabel>
                    <OutlinedInput
                      name={input.name}
                      type={input.name}
                      value={values.value}
                      onChange={handleChangeInput}
                      error={input.error ? true : false}
                      helperText={input.error}
                      label={input.label}/>
                  </FormControl>
                </Grid>
              ))}
            </Grid>
            <Button fullWidth={true} color="primary" variant="contained" style={{ marginTop: '1.75rem' }}
                    onClick={submitForm}>
              Connexion
            </Button>
          </form>
          <Divider style={{ marginTop: '1.75rem' }}/>
          <Link to="/connexion">
            <Typography variant="body2" component="p" gutterBottom={true}
                        style={{ marginTop: '.75rem', color: 'grey', fontSize: '13px' }}>
              Vous avez déjà un compte ? Connectez-vous
            </Typography>
          </Link>
        </div>
      </Paper>
    </div>
  </>
}
