import React, { useContext }  from 'react'
import { Container, Grid }    from '@material-ui/core'
import Typography             from '@material-ui/core/Typography'
import { makeStyles }         from '@material-ui/core/styles'
import FooterSocialLink       from './FooterSocialLink'
import FooterCopyright        from './FooterCopyright'
import { useTranslation }     from 'react-i18next'
import FooterUtilsLink        from './FooterUtilsLink'
import { UserContext }        from '../../Context/UserContext'
import { useSelector }        from 'react-redux'
import FooterUser             from './FooterUser'
import { SelectLanguagePref } from '../UserProfil/SettingsAccount/SettingsAccount'
import Button                 from '@material-ui/core/Button'
import i18next                from 'i18next'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#B7884C',
    color          : '#FFF',
    padding        : '.75rem'
  }
}))
const Footer    = () => {
  const classes     = useStyles()
  const { t }       = useTranslation()
  const userContext = useContext(UserContext)
  const userInfo    = useSelector(state => state.userReducers).userInfo
  return <>
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container={true}>
          <Grid item={true} xs={12} md={4}>
            <Typography variant="subtitle2">
              {t('titleSocial')}
            </Typography>
            <FooterSocialLink/>
          </Grid>
          <Grid item={true} xs={12} md={4}>
            <Typography variant="subtitle2">
              {t('useful_links')}
            </Typography>
            <FooterUtilsLink/>
          </Grid>
          {userContext.isLogged ?
           <Grid item={true} xs={12} md={4}>
             <Typography variant="subtitle2">
               {t('your_account')}
             </Typography>
             <FooterUser userInfo={userInfo} />
           </Grid>:
           <Grid>
             <Typography>
               Préférence langue
             </Typography>
             <div className="d-flex justify-center mt2">
               <span className="mr2">
                 <button onClick={() => i18next.changeLanguage(`en`)}>EN</button>
               </span>
               <span><button onClick={() => i18next.changeLanguage(`fr`)}>FR</button></span>
             </div>
           </Grid>
          }
        </Grid>
      </Container>
      <FooterCopyright/>
    </footer>
  </>
}

export default Footer
