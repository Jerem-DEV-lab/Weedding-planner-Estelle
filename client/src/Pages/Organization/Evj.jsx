import React                           from 'react'
import { useTranslation }              from 'react-i18next'
import Footer                          from '../../Components/Footer/Footer'
import HeroPage                        from '../../Components/HeroPage/HeroPage'
import Nav                             from '../../Components/NavBar/Nav'
import { Container, Grid, makeStyles } from '@material-ui/core'
import Button                          from '../../Components/Button/Button'

const Evj = () => {
  const classes        = useStyles()
/*  const formuleContent = 'Sunt in cognito mortalem itinera omnes casu agitare conaretur milites.Sunt in cognito mo' +
                         ' rtalem itinera omnes casu agitare conaretur milites.'*/
  const { t }          = useTranslation()
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
        <Grid container={true}>
          <Grid item={true} xs={12} md={6}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="/assets/organizations/EVJ_section.jpg" className="my3"
                   style={{ maxHeight: '450px' }}
                   alt="illustration de 3 copines assis sur une branche d'un arbre"/>
            </div>
          </Grid>
          <Grid item={true} xs={12} md={6}>
            <h3 className={classes.title}>{t('title_evj_section1')}</h3>
            <p className={classes.paragraphe}>{t('content_evj_section1')}</p>
            <div className="btn-center-x">
              <Button isButton={false} isAnchor={true} label={t('seeMyOffers')} className="my1" color="primary-light"
                      size="lg" link={'ceremonie-laique#Mes-formules'}/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
    <section>
      <Container maxWidth="lg">
        <Grid container={true}>
          <Grid item={true} xs={12} md={6}>
            <h3 className={classes.title}>{t('title_evj_section1')}</h3>
            <p className={classes.paragraphe}>{t('content_evj_section1')}</p>
            <div className="btn-center-x">
              <Button isButton={false} isAnchor={true} label={t('seeMyOffers')} className="my1" color="primary-light"
                      size="lg" link={'ceremonie-laique#Mes-formules'}/>
            </div>
          </Grid>
          <Grid item={true} xs={12} md={6}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="/assets/organizations/evjg.jpg" className="my3"
                   style={{ maxHeight: '450px' }}
                   alt="illustration de 3 copines assis sur une branche d'un arbre"/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
    {/*<section className="pt0" id="Mes-formules">
      <div className="container-margin py3">
        <h1 className="h1 text-strong text-center mb5">{t('myPlanForSecularCeremonies')} :</h1>
        <div className="grid-3-col-md card-group-sm flex-column-sm">
          <FormuleCard formuleTitle={t('cardMediumFormuleTitle')}
                       cardContent={formuleContent}
                       pathImg="/assets/secularCeremony2-lg.jpg"
                       cardSubtitle={t('cardServiceSecularSubtitle')}
                       formuleInfo={t('offerFrom')}
                       formuleOfferInfo={t('customizableOffer')}
                       formulePrice="800 €"
        
          />
          <FormuleCard formuleTitle={t('cardBestFormuleTitle')}
                       cardContent={formuleContent}
                       pathImg="/assets/home.jpg"
                       isImportant={true}
                       cardSubtitle={t('cardServiceSecularSubtitle2')}
                       formuleOfferInfo={t('customizableOffer')}
                       formulePrice="1300 €"
                       formuleInfo={t('offerFrom')}
        
          />
          <FormuleCard formuleTitle={t('cardVipFormuleTitle')}
                       cardContent={formuleContent}
                       pathImg="/assets/contact.jpg"
                       cardSubtitle={t('cardServiceSecularSubtitle3')}
                       formuleOfferInfo={t('customizableOffer')}
                       formulePrice="2400 €"
                       formuleInfo={t('offerFrom')}
          />
        </div>
      </div>
    </section>*/}
    <Footer/>
  </>
}

export default Evj
const useStyles = makeStyles(theme => (
  {
    title     : {
      fontSize     : '26px',
      lineHeight   : 1.5,
      fontWeight   : '500',
      textTransform: 'uppercase',
      marginBottom : '.75rem'
    },
    paragraphe: {
      maxWidth  : '90%',
      margin    : 'auto',
      fontWeight: '500',
      textAlign : 'justify',
      lineHeight: 1.5,
    }
  }))
