import React               from 'react'
import HeroPage            from '../../Components/HeroPage/HeroPage'
import Nav                 from '../../Components/NavBar/Nav'
import { useTranslation }  from 'react-i18next'
import { Container, Grid } from '@material-ui/core'
import FormuleCard         from '../../Components/Card/FormuleCard'
import SliderImg           from '../../Components/SliderImg/SliderImg'
import { useStyles }       from '../Styles/OrganizationStyle'
import Footer              from '../../Components/Footer/Footer'

const OtherEvents = () => {
  const classes = useStyles()
  const { t }            = useTranslation()
  const listOtherEvents1 = [
    t('other_events1'),
    t('other_events2'),
    t('other_events3'),
    t('other_events4'),
    t('other_events5')]
  const listOtherEvents2 = [
    t('other_events6'),
    t('other_events7'),
    t('other_events8'),
    t('other_events9'),
    t('other_events10')
  ]
  const imgs             = [
    {
      imgSrc : '/assets/organizations/other_event1.jpg',
      altAttr: 'aucune',
    },
    {
      imgSrc : '/assets/organizations/other_event5.jpg',
      altAttr: 'aucune',
    },
    {
      imgSrc : '/assets/organizations/other_event2.jpg',
      altAttr: 'aucune',
    },
    {
      imgSrc : '/assets/organizations/other_event3.jpg',
      altAttr: 'aucune',
    },
    {
      imgSrc : '/assets/organizations/other_event4.jpg',
      altAttr: 'aucune',
    },
  ]
  return <>
    <HeroPage nameImg="/organizations/other_event4.jpg" positionImg={'top center'}>
      <Nav/>
      <div className="hero-container">
        <div className="hero-home-content">
          <h1 className={classes.titleHero}>{t('other_type_event')}</h1>
        </div>
      </div>
    </HeroPage>
    <section>
      <Container>
        <h2 className={classes.titleResponsive}>Nos événements</h2>
        <Grid container={true} spacing={6}>
          <Grid item={true} xs={12} md={12} lg={6}>
            <p className="section-content">
              J'interviens dans l'organisation de tout type d'événement privé tel que :
              <Grid container={true} spacing={10}>
                <Grid item={true} xs={12} md="6">
                  <ul className="list-bull mt2">
                    {listOtherEvents1.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Grid>
                <Grid item={true} xs={12} md="6">
                  <ul className="list-bull mt2">
                    {listOtherEvents2.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Grid>
              </Grid>
              {t('other_eventsContent1')}
              <br/>
              {t('other_eventsContent2')}
              <br/>
              {t('other_eventsContent3')}
              <br/>
            </p>
          </Grid>
          <Grid item={true} xs={12} md={12} lg={6}>
            <div style={{
              overflow: 'hidden',
            }}>
              <SliderImg imgToShow={imgs} styleImg={{
                height        : '500px',
                objectPosition: 'center center',
                objectFit     : 'cover',
                width         : '100%'
              }}/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
    <section>
      <Container>
        <h2 className={classes.titleResponsive}>{t('offerTitle')} :</h2>
        <Grid container={true} spacing={4}>
          <Grid item xs={12} md={4} lg={4}>
            <FormuleCard formuleTitle={t('Alittlehelp')} formulePrice="50" cardContent={t('formulaEventsLittleHelp')}/>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <FormuleCard formuleTitle={t('partialOrganization')} formulePrice={'100'}
                         cardContent={t('formulaEventsPartialOrganization')}/>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <FormuleCard formuleTitle={t('totalOrganization')} formulePrice={'200'}
                         cardContent={t('formulaEventsTotalOrganization')}/>
          </Grid>
          <p className="section-content mb3" style={{ fontSize: '12px' }}>* {t('moreInfoEvents')}</p>
        </Grid>
      </Container>
    </section>
    <Footer />
  </>
}

export default OtherEvents
