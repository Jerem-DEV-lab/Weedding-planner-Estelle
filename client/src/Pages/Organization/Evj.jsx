import React                           from 'react'
import { useTranslation }              from 'react-i18next'
import Footer                          from '../../Components/Footer/Footer'
import HeroPage                        from '../../Components/HeroPage/HeroPage'
import Nav                             from '../../Components/NavBar/Nav'
import { Container, Grid, makeStyles } from '@material-ui/core'
import Button                          from '../../Components/Button/Button'
import injectHtmlCode                  from '../../tools/injectHtml'
import FormuleCard                     from '../../Components/Card/FormuleCard'

const Evj = () => {
  const classes   = useStyles()
  const { t }     = useTranslation()
  const listEvent = [t('evjfEvent1'), t('evjfEvent2'), t('evjfEvent3'), t('evjfEvent4'), t('evjfEvent5')]
  
  return <>
    <HeroPage nameImg="/organizations/evj.jpg" positionImg={'center center'}>
      <Nav/>
      <div className="hero-container">
        <div className="hero-home-content">
          <h1>EVJF / EVJG...</h1>
        </div>
      </div>
    </HeroPage>
    <section>
      <Container maxWidth="lg">
        <Grid container={true} spacing={4}>
          <Grid item={true} xs={12} md={6}>
            <div>
              <img src="/assets/organizations/EVJ_section.jpg"
                   alt="illustration de 3 copines assis sur une branche d'un arbre"/>
            </div>
          </Grid>
          <Grid item={true} xs={12} md={6}>
            <h3 className={classes.title}>{t('title_evjf_section')}</h3>
            <p dangerouslySetInnerHTML={injectHtmlCode(t('content_evjf_section'))} className="section-content"/>
            <p className="section-content" style={{ marginTop: '.75rem' }}>
              <ul className="list-bull list-number">
                {listEvent.map((events, index) => (
                  <li key={index}>{events}</li>
                ))}
              </ul>
              {t('partenaireEvj')}
            </p>
            <div className="btn-center-x">
              <Button isButton={false} isAnchor={true} label={t('seeMyOffers')} className="my1" color="primary-light"
                      size="lg" link={'evj#Mes-formules'}/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
    <section>
      <Container maxWidth="lg">
        <Grid container={true} spacing={4}>
          <Grid item={true} xs={12} md={6}>
            <h3 className={classes.title}>{t('title_evjg_section')}</h3>
            <p className={`${classes.paragraphe} section-content`}
               dangerouslySetInnerHTML={injectHtmlCode(t('content_evjg_section'))}/>
            <br/>
            <p className={`${classes.paragraphe} section-content`}>
              {t('partenaireEvj')}
            </p>
            <div className="btn-center-x">
              <Button isButton={false} isAnchor={true} label={t('seeMyOffers')} className="my1" color="primary-light"
                      size="lg" link={'/organisation/evj#Mes-formules'}/>
            </div>
          </Grid>
          <Grid item={true} xs={12} md={6}>
            <div>
              <img src="/assets/organizations/evjg.jpg"
                   alt="illustration de 3 copines assis sur une branche d'un arbre"/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
    <section>
      <Container>
        <h2>{t('offerTitle')} :</h2>
        <Grid container={true} spacing={4}>
          <Grid item xs={12} md={4} lg={4}>
            <FormuleCard formuleTitle={t('formuleDayD')} formulePrice={'800'}/>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <FormuleCard formuleTitle={t('formuleHelpMe')} formulePrice={'1 300'}/>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <FormuleCard formuleTitle={t('formuleSoCool')} formulePrice={'2 400'}/>
          </Grid>
        </Grid>
      </Container>
    </section>
    <Footer/>
  </>
}

export default Evj
const useStyles = makeStyles(theme => (
  {
    title     : {
      fontSize     : '20px',
      textAlign    : 'justify',
      lineHeight   : 1.5,
      fontWeight   : '600',
      textTransform: 'uppercase',
      marginBottom : '.75rem'
    },
    paragraphe: {
      fontWeight: '500',
      textAlign : 'justify',
      lineHeight: 1.5,
    }
  }))
