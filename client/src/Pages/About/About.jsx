import React                           from 'react'
import Footer                          from '../../Components/Footer/Footer'
import Nav                             from '../../Components/NavBar/Nav'
import { Container, Grid, makeStyles } from '@material-ui/core'
import injectHtmlCode                  from '../../tools/injectHtml'
import { useTranslation }              from 'react-i18next'
import Typography                      from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  para        : {
    boxShadow   : ' -7px 0 12px 2px rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
    fontSize    : '.9rem'
  },
  bgSection   : {
    paddingBottom: '0',
    background   : 'linear-gradient(1.22deg, #ECD5B8 1.13%, #F1E0CB 58.88%, #FBF6F0 84.82%, #FFFFFF 99.05%)'
  },
  imgSection  : {
    height: '590px'
  },
  containerImg: {
    position  : 'absolute',
    right     : '-70px',
    bottom    : 0,
    height    : '100%',
    width     : 'auto',
    display   : 'flex',
    alignItems: 'flex-end',
  },
  mobileNone  : {
    [theme.breakpoints.down('959.99')]: {
      display: 'none'
    }
  }
}))
const About     = () => {
  const { t }   = useTranslation()
  const classes = useStyles()
  return <>
    <Nav bgColor="#FFF" typoColor="#000"/>
    <section className={classes.bgSection}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom={true}>
          Découvrez mon parcours
        </Typography>
        <Grid container={true} spacing={0}>
          <Grid item={true} xs={12} md={4} lg={4} style={{ position: 'relative' }} className={classes.mobileNone}>
            <div className={classes.containerImg}>
              <img src="/assets/about.png" alt="profil d'Estelle Rouillé" className={classes.imgSection}/>
            </div>
          </Grid>
          <Grid item={true} xs={12} md={8} lg={8}>
            <div style={{ backgroundColor: 'white' }}>
              <p className={`section-content ${classes.para}`} style={{ padding: '1.75rem', marginBottom: '1.75rem' }}
                 dangerouslySetInnerHTML={injectHtmlCode(t('about_section'))}/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
    <Footer/>
  </>
}

export default About
