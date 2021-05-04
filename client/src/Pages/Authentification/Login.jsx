import React, { useEffect }         from 'react'
import { Box, Grid, Hidden, Paper } from '@material-ui/core'
import { makeStyles, withStyles }   from '@material-ui/core/styles'
import Typography                   from '@material-ui/core/Typography'
import Button                       from '@material-ui/core/Button'
import { Link, useHistory }         from 'react-router-dom'
import ArrowBackIcon                from '@material-ui/icons/ArrowBack'
import FormControl                  from '@material-ui/core/FormControl'
import InputLabel                   from '@material-ui/core/InputLabel'
import OutlinedInput                from '@material-ui/core/OutlinedInput'
import { useTranslation }           from 'react-i18next'
import { useForm }                  from '../../Hooks/useForm'
import Divider                      from '@material-ui/core/Divider'
import { useDispatch, useSelector } from 'react-redux'
import { requestApiAuth }           from '../../actions/authenticatorAction'
import { Alert }                    from '@material-ui/lab'
import { resetEvent }               from '../../actions/adminAction'

export const OverlayForm = withStyles((theme) => (
  {
    root: {
      display   : 'block',
      height    : '100vh',
      position  : 'absolute',
      background: 'rgba(0,0,0,0.4)',
      top       : '0',
      right     : '0',
      left      : '0',
      bottom    : '0',
    }
  }))(Box)

const Login = () => {
  return <>
    <Grid container={true} style={{ backgroundColor: '#F6F8FB' }}>
      <Hidden smDown>
        <Grid item={true} xs={12} sm={12} md={7}>
          <Box component="div" style={{
            height          : '100vh',
            backgroundImage : 'url("/assets/evolution.jpg")',
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
        <LoginForm/>
      </Grid>
    </Grid>
  </>
}

export default Login
const usesStyles = makeStyles((theme) => ({
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

const LoginForm = () => {
  const classes                       = usesStyles()
  const { t }                         = useTranslation()
  const history                       = useHistory()
  const initialState                  = {
    email   : '',
    password: ''
  }
  const { values, handleChangeInput } = useForm(initialState)
  const dispatch                      = useDispatch()
  const { loginError, loginSuccess }  = useSelector(state => state.userReducers)
  const submitForm                    = (e) => {
    e.preventDefault()
    dispatch(resetEvent())
    dispatch(requestApiAuth(values))
  }
  useEffect(() => {
    if (loginSuccess) {
      history.push('/')
    }
    // eslint-disable-next-line
  }, [loginSuccess])
  return <>
    <div className={classes.root}>
      <Paper className={classes.containerForm} elevation={0}>
        <Typography variant="body2" component="span" color="primary">
          <Link to="/" className={classes.backHomeButton}><ArrowBackIcon/>&nbsp;{t('go_back_label')}</Link>
        </Typography>
        <div className="d-flex justify-center">
          <img src="/assets/logo.png" alt="logo de côté campagne" height={150}/>
        </div>
        {loginError && <Alert severity="error">{loginError}</Alert>}
        {loginSuccess && <Alert severity="success">{loginSuccess}</Alert>}
        <div className="mt4">
          <form>
            <Grid container={true} spacing={4}>
              <Grid item={true} xs={12}>
                <FormControl variant="outlined" size="small" fullWidth={true}>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <OutlinedInput
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChangeInput}
                    label="Email"/>
                </FormControl>
              </Grid>
              <Grid item={true} xs={12}>
                <FormControl variant="outlined" size="small" style={{ width: '100%' }}>
                  <InputLabel htmlFor="component-outlined">Mot de passe</InputLabel>
                  <OutlinedInput
                    name="password"
                    value={values.password}
                    type="password"
                    onChange={handleChangeInput}
                    label="Mot de passe"/>
                </FormControl>
              </Grid>
            </Grid>
            <Button fullWidth={true} color="primary" variant="contained" style={{ marginTop: '1.75rem' }}
                    onClick={submitForm}>
              Connexion
            </Button>
          </form>
          <Divider style={{ marginTop: '1.75rem' }}/>
          <Link to="/inscription">
            <Typography variant="body2" component="p" gutterBottom={true}
                        style={{ marginTop: '.75rem', color: 'grey', fontSize: '13px' }}>
              Vous n'avez pas de compte ? Inscrivez-vous
            </Typography>
          </Link>
          <Link to="/mot-de-passe-oublie">
            <Typography variant="body2" component="p" gutterBottom={true}
                        style={{ marginTop: '.75rem', color: 'grey', fontSize: '13px' }}>
              Mot de passe oublié ?
            </Typography>
          </Link>
        </div>
      </Paper>
    </div>
  </>
}
