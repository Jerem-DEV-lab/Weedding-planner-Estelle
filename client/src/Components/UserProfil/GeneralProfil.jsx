import React                              from 'react'
import { Avatar, Grid, Paper, TextField } from '@material-ui/core'
import { makeStyles, withStyles }         from '@material-ui/core/styles'
import Typography                         from '@material-ui/core/Typography'
import { useSelector }                    from 'react-redux'
import Divider                            from '@material-ui/core/Divider'
import PersonIcon                         from '@material-ui/icons/Person'
import { useTranslation }                 from 'react-i18next'
import Box                                from '@material-ui/core/Box'
import Button                             from '@material-ui/core/Button'
import Logout                             from '../Authentification/Logout'

const useStyles = makeStyles(theme => (
  {
    dashed: {
      padding     : '8px',
      border      : '1px dashed rgba(0,0,0,0.5)',
      borderRadius: '50%'
    },
    root  : {
      padding      : theme.spacing(2),
      display      : 'flex',
      alignItems   : 'center',
      flexDirection: 'column'
    },
    large : {
      height: '100px',
      width : '100px'
    }
  }
))

export const ContentProfil = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  }
}))(Paper)
const GeneralProfil        = () => {
  const classes      = useStyles()
  const { userInfo } = useSelector(state => state.userReducers)
  const { t }        = useTranslation()
  return (
    <>
      <Grid container={true} spacing={4} style={{minHeight: "calc(100vh - 329px)"}}>
        <Grid item={true} xs={12} md={3}>
          <Paper className={classes.root}>
            <div className={classes.dashed}>
              <Avatar className={classes.large}>
                <img src="/assets/about-me.jpg" alt=""/>
              </Avatar>
            </div>
            <Typography variant="subtitle2" component="h6" className="mt3">
              {userInfo.lastName} {userInfo.firstName}
            </Typography>
            <Logout/>
          </Paper>
        </Grid>
        <Grid item={true} xs={12} md={9}>
          
          <ContentProfil>
            <Box component="span" display="flex" alignItems="center">
              <PersonIcon style={{ marginRight: '10px' }}/>
              <Typography variant="h6" component="span" color="textPrimary">
                Profil
              </Typography>
            </Box>
            <form style={{ marginBottom: '24px' }}>
              <Divider/>
              <Grid container={true} xs={12} spacing={4}>
                <Grid item={true} xs={12} lg={6}>
                  <TextField variant="filled" disabled value={userInfo.lastName} size="medium" label={t('lastName')}
                             style={{ width: '100%', marginTop: '26px' }}/>
                </Grid>
                <Grid item={true} xs={12} lg={6}>
                  <TextField variant="filled" value={userInfo.email} disabled={true} size="medium" label={t('email')}
                             style={{ width: '100%', marginTop: '26px' }}/>
                </Grid>
                <Grid item={true} xs={12} lg={6}>
                  <TextField variant="filled" value={userInfo.phone} disabled={true} size="medium" label={t('lastName')}
                             style={{ width: '100%' }}/>
                </Grid>
                <Grid item={true} xs={12} lg={6}>
                  <TextField variant="filled" value={userInfo.address} disabled={true} size="medium"
                             label={t('label_address')}
                             style={{ width: '100%' }}/>
                </Grid>
                <Grid item={true} xs={12} lg={6}>
                  <TextField variant="filled" value={userInfo.postalCode} disabled={true} size="medium"
                             label={t('label_postal_code')}
                             style={{ width: '100%' }}/>
                </Grid>
              </Grid>
            </form>
            <Divider/>
            <Box display="flex" justifyContent="flex-end" marginTop={2}>
              <Button color="primary" variant="contained" disableRippl={true}> {t('label_edit')}</Button>
            </Box>
          </ContentProfil>
        </Grid>
      </Grid>
    </>
  )
}

export default GeneralProfil
