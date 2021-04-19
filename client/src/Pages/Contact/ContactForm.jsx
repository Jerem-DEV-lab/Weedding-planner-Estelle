import React, { useEffect }                               from 'react'
import { Button, FormHelperText, Grid, Paper, TextField } from '@material-ui/core'
import Typography                                         from '@material-ui/core/Typography'
import { makeStyles, withStyles }                         from '@material-ui/core/styles'
import { useTranslation }                                 from 'react-i18next'
import FormControl                                        from '@material-ui/core/FormControl'
import InputLabel                                         from '@material-ui/core/InputLabel'
import OutlinedInput                                      from '@material-ui/core/OutlinedInput'
import { BiCookie }                                       from 'react-icons/bi'
import { Link }                                           from 'react-router-dom'
import ArrowBackIcon                                      from '@material-ui/icons/ArrowBack'
import { useForm }                                        from '../../Hooks/useForm'
import { useDispatch, useSelector }                       from 'react-redux'
import { requestApiContact }                              from '../../actions/contactAction'
import { FaTimes }                                        from 'react-icons/fa'
import { Alert }                                          from '@material-ui/lab'
import { resetEvent }                                     from '../../actions/adminAction'
import { useHistory }                                     from 'react-router-dom'

const useStyles     = makeStyles((theme) => ({
  root          : {
    padding  : theme.spacing(2),
    maxHeight: '100vh',
    overflowY: 'auto',
  },
  containerForm : {
    paddingLeft  : theme.spacing(4),
    paddingRight : theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  backHomeButton: {
    display       : 'flex',
    justifyContent: 'start',
    alignItems    : 'center',
    paddingTop    : theme.spacing(2),
    width         : 'max-content'
  }
}))
const ButtonPrimary = withStyles(theme => (
  {
    root: {
      backgroundColor: '#ECD5B8',
      color          : '#000',
    }
  }
))(Button)

const initialFValues = {
  lastName : '',
  firstName: '',
  email    : '',
  message  : ''
}
const ContactForm    = () => {
  const { t }                                    = useTranslation()
  const classes                                  = useStyles()
  const { values, setValues, handleChangeInput } = useForm(initialFValues)
  const dispatch                                 = useDispatch()
  const { formError, successSubmit }             = useSelector(state => state.contactReducers)
  const history                                  = useHistory()
  const handleSubmit                             = (e) => {
    e.preventDefault()
    dispatch(requestApiContact(values))
  }
  
  useEffect(() => {
    if (successSubmit) {
      setTimeout(() => {
        dispatch(resetEvent())
        setValues(initialFValues)
        history.push('/')
      }, 2000)
    }
  }, [successSubmit])
  
  return (
    <div className={classes.root}>
      <Paper className={classes.containerForm} elevation={0}>
        <Typography variant="body2" component="span" color="primary">
          <Link to="/" className={classes.backHomeButton}><ArrowBackIcon/>&nbsp;{t('go_back_label')}</Link>
        </Typography>
        <div className="d-flex justify-center">
          <img src="/assets/logo.png" alt="" height={150}/>
        </div>
        <Typography variant="h6" component="h1">
          {t('titleHeroContact')}
        </Typography>
        {successSubmit &&
         <Alert severity="success" style={{ marginTop: '8px' }}>{successSubmit}</Alert>
        }
        <div className="mt4">
          <form>
            <Grid container={true} spacing={4}>
              <Grid item={true} xs={12} lg={6}>
                <FormControl variant="outlined" size="small" style={{ width: '100%' }}>
                  <InputLabel htmlFor="lastName">{t('lastName')}</InputLabel>
                  <OutlinedInput
                    id="lastName"
                    name="lastName"
                    onChange={handleChangeInput}
                    error={formError.lastName}
                    label={t('lastName')}/>
                  {formError.lastName &&
                   <FormHelperText error><FaTimes/> {formError.lastName}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item={true} xs={12} lg={6}>
                <FormControl variant="outlined" size="small" style={{ width: '100%' }}>
                  <InputLabel htmlFor="component-outlined">{t('firstName')}</InputLabel>
                  <OutlinedInput
                    id="firstName"
                    name="firstName"
                    onChange={handleChangeInput}
                    error={formError.firstName}
                    label={t('firstName')}/>
                  {formError.firstName &&
                   <FormHelperText error><FaTimes/> {formError.firstName}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item={true} xs={12}>
                <FormControl variant="outlined" size="small" style={{ width: '100%' }}>
                  <InputLabel htmlFor="component-outlined">{t('email')}</InputLabel>
                  <OutlinedInput
                    id="email"
                    name="email"
                    onChange={handleChangeInput}
                    label={t('email')}
                    error={formError.email}
                  />
                  {formError.email &&
                   <FormHelperText error><FaTimes/> {formError.email}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item={true} xs={12}>
                <FormControl variant="outlined" size="small" style={{ width: '100%' }}>
                  <TextField
                    id="message"
                    name="message"
                    label={t('message')}
                    multiline
                    rows={6}
                    rowsMax={6}
                    variant="outlined"
                    onChange={handleChangeInput}
                    error={formError.message}
                  />
                  {formError.message &&
                   <FormHelperText error><FaTimes/> {formError.message}</FormHelperText>}
                </FormControl>
              </Grid>
            </Grid>
            <ButtonPrimary variant="contained" fullWidth={true}
                           style={{ marginTop: '30px', marginBottom: '30px' }} onClick={handleSubmit}>
              {t('send')}
            </ButtonPrimary>
            <Typography variant="body2" component="span">
              <BiCookie color="brown" size={15} style={{ marginRight: '2px' }}/> {t('rgpd_cookie_label')}
            </Typography>
          </form>
        </div>
      </Paper>
    </div>
  )
}

export default ContactForm
/*
 
 <Box>
 <form className={classes.rootForm} noValidate autoComplete="off">
 
 <div className={classes.boxFlex}>
 <FormControl variant="outlined" size="small" style={{width: "100%"}}>
 <InputLabel htmlFor="component-outlined">{t('email')}</InputLabel>
 <OutlinedInput id="component-outlined" label={t('email')}/>
 </FormControl>
 </div>
 <div className={classes.boxFlex}>
 <FormControl variant="outlined" size="small">
 <InputLabel htmlFor="component-outlined">{t('firstName')}</InputLabel>
 <OutlinedInput id="component-outlined" label={t('firstName')}/>
 </FormControl>
 </div>
 </form>
 </Box>*/
