import React                           from 'react'
import Nav                             from '../../Components/NavBar/Nav'
import { Container, Paper, TextField } from '@material-ui/core'
import { makeStyles }                  from '@material-ui/core/styles'
import Typography                      from '@material-ui/core/Typography'
import Button                          from '@material-ui/core/Button'
import Divider                         from '@material-ui/core/Divider'
import { Link }                        from 'react-router-dom'

const usesStyles = makeStyles(theme => ({
    root       : {
      padding: theme.spacing(3),
      width  : '100%'
    },
    headerForm : {
      display       : 'flex',
      justifyContent: 'space-between'
    },
    logoForm   : {
      height      : '80px',
      marginBottom: theme.spacing(3),
      '& > *'     : {
        maxHeight: '100%',
        width    : 'auto'
      }
    },
    formContent: {
      display      : 'flex',
      flexDirection: 'column',
      '& > *'      : {
        marginTop: theme.spacing(2)
      }
    }
  }
))
const Login      = () => {
  const classes = usesStyles()
  return (
    <>
      <Nav/>
      <Container
        maxWidth="sm"
        style={{ minHeight: 'calc(100vh - 60px)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Paper component="div" className={classes.root} variant="outlined">
          <div className={classes.headerForm}>
            <div>
              <Typography component="h1" variant="h4" gutterBottom={true}>
                Connexion
              </Typography>
              <Typography component="p" align="center" variant="body2" gutterBottom={true}>
                Connectez-vous à votre compte Côté campagne
              </Typography>
            </div>
            <div className={classes.logoForm}>
              <img src="/assets/logo.png" alt="logo de côté campagne"/>
            </div>
          </div>
          <form className={classes.formContent}>
            <TextField label="Adresse email" variant="outlined" size="small"/>
            <TextField label="Mot de passe" type="password" variant="outlined" size="small"/>
          </form>
          <div style={{ marginTop: '1.75rem' }}>
            <Button variant="contained" color="primary" fullWidth={true}>Connexion</Button>
          </div>
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
        </Paper>
      </Container>
    </>
  )
}

export default Login
