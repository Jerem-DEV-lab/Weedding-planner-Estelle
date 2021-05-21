import React, { useEffect, useState }                      from 'react'
import { useHistory, useParams }                           from 'react-router-dom'
import Nav                                                 from '../../Components/NavBar/Nav'
import { Button, Container, makeStyles, Paper, TextField } from '@material-ui/core'
import axios                                               from 'axios'
import { useForm }                                         from '../../Hooks/useForm'
import { Alert, AlertTitle }                               from '@material-ui/lab'
import Box                                                 from '@material-ui/core/Box'
import ResetPassword                                       from '../ResetPassword/ResetPassword'
import Footer                                              from '../../Components/Footer/Footer'

const useStyle          = makeStyles(theme => (
  {
    root       : {
      padding                       : theme.spacing(3),
      margin                        : `${theme.spacing(3)}px auto`,
      maxWidth                      : '50%',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '90%'
      }
    },
    titleModal : {
      fontSize  : '28px',
      textAlign : 'center',
      fontWeight: '500'
    },
    header     : {
      minHeight: 'calc(100vh - 274px)',
    },
    columnInput: {
      display      : 'flex',
      flexDirection: 'column',
      '& > *'      : {
        marginBottom: '1rem'
      }
    }
  }))
const ResetPasswordForm = () => {
  const [valideToken, setValideToken] = useState(false)
  const { tokenReset }                = useParams()
  const classes                       = useStyle()
  useEffect(() => {
    axios.get(`/check-token-reset/${tokenReset}`)
         .then(res => setValideToken(res.data.valideToken))
         .catch(err => setValideToken(err.response.data.valideToken))
  }, [tokenReset])
  
  return (
    <>
      <Nav bgColor="#FFF" typoColor="#000"/>
      <section className={classes.header}>
        <header>
          <Container>
            <Paper className={classes.root} component="div">
              <h1 className={classes.titleModal}>Modifier votre mot de passe.</h1>
              {valideToken ? <FormChangePassword valideToken={tokenReset}/> : <LinkExpired/>}
            </Paper>
          </Container>
        </header>
      </section>
      <Footer/>
    </>
  )
}

export default ResetPasswordForm

const LinkExpired = () => {
  const [openNewPasswordModal, setOpenNewPasswordModal] = useState(false)
  return (
    <>
      {openNewPasswordModal &&
       <ResetPassword openModalResetPassword={openNewPasswordModal} close={() => setOpenNewPasswordModal(false)}/>}
      <Box marginTop="20px">
        <Alert severity="error">
          <AlertTitle>Lien expiré !</AlertTitle>
          Vous pouvez faire une demande de nouveau mot de passe &nbsp;
          <Box component="span" fontWeight="600"
               style={{ cursor: 'pointer' }} onClick={() => setOpenNewPasswordModal(true)}>ICI</Box>
        </Alert>
      </Box>
    </>
  )
}

const initialFValues     = {
  newPassword    : '',
  confirmPassword: '',
}
const FormChangePassword = ({ valideToken }) => {
  const classes                                  = useStyle()
  const { values, setValues, handleChangeInput } = useForm(initialFValues)
  const [disableBtn, setDisableBtn]              = useState(true)
  const [errors, setErrors]                      = useState({ errors: '', isNotValide: false })
  const [errorsSubmit, setErrorsSubmit]          = useState('')
  const [successSubmit, setSuccessSubmit]        = useState('')
  const history                                  = useHistory()
  const handleNewPassword                        = (e) => {
    e.preventDefault()
    axios.put(`/confirmResetPassword/${valideToken}`, { password: values.newPassword })
         .then(res => setSuccessSubmit(res.data.success))
         .catch(err => setErrorsSubmit(err.response.data.errors))
  }
  useEffect(() => {
    if (values.newPassword !== values.confirmPassword) {
      setDisableBtn(true)
      setErrors({ errors: 'Les mot de passe ne corresponde pas', isNotValide: true })
    } else if (values.newPassword === '' && values.confirmPassword === '') {
      setDisableBtn(true)
      setErrors({ errors: '', isNotValide: false })
    } else {
      setDisableBtn(false)
      setErrors({ errors: '', isNotValide: false })
    }
  }, [values.newPassword, values.confirmPassword])
  
  useEffect(() => {
    if (successSubmit) {
      setValues(initialFValues)
      setTimeout(() => {
        history.push('/connexion')
      }, 2000)
    }
  }, [successSubmit])
  
  return <>
    <Paper component="form" onSubmit={handleNewPassword} style={{ padding: '1rem .75rem', marginTop: '1rem' }}
           elevation={0} variant="outlined">
      <div className="mb3">
        {successSubmit && <Alert severity="success" component="span">{successSubmit}</Alert>}
        {errorsSubmit && <Alert severity="error" component="span">{errorsSubmit}</Alert>}
      </div>
      <div className={classes.columnInput}>
        <TextField name="newPassword" error={errors.isNotValide} helperText={errors.errors} onChange={handleChangeInput}
                   type="password" value={values.newPassword}
                   size="small" variant="outlined" label="Nouveau mot de passe" autoComplete={false}/>
        <TextField name="confirmPassword" error={errors.isNotValide} helperText={errors.errors}
                   onChange={handleChangeInput} type="password" value={values.confirmPassword}
                   size="small" variant="outlined" label="Confirmer votre mot de passe" autoComplete={false}/>
      </div>
      <Button disabled={disableBtn} type="submit" color="primary" size="small" variant="contained"
              disableElevation={true}>Modifier le mot de passe</Button>
    </Paper>
  </>
}
