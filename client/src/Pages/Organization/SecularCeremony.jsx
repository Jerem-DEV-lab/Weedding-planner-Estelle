import React                           from 'react'
import injectHtmlCode                  from '../../tools/injectHtml'
import Button                          from '../../Components/Button/Button'
import { useTranslation }              from 'react-i18next'
import Footer                          from '../../Components/Footer/Footer'
import HeroPage                        from '../../Components/HeroPage/HeroPage'
import Nav                             from '../../Components/NavBar/Nav'
import { Container, Grid, makeStyles } from '@material-ui/core'

const SecularCeremony = () => {
  const { t }          = useTranslation()
  const classes        = useStyles()
  /*const formuleContent = 'Sunt in cognito mortalem itinera omnes casu agitare conaretur milites.Sunt in cognito mo' +
                         ' rtalem itinera omnes casu agitare conaretur milites.'*/
  return <>
    <HeroPage nameImg="/organizations/weeding.jpg" positionImg={'center center'}>
      <Nav/>
      <div className="hero-container">
        <div className="hero-home-content">
          <h1>{t('titleSectionSecularCeremony')}...</h1>
        </div>
      </div>
    </HeroPage>
    <section>
      <Container maxWidth="lg">
        <Grid container={true}>
          <Grid item={true} xs={12} md={6}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <img src="/assets/secularCeremony-lg.jpg" alt=""/>
            </div>
          </Grid>
          <Grid item={true} xs={12} md={6} xl={6}>
            <h3 className={classes.title}>{t('titleCeremonyWeddingPlanner')}</h3>
            <p dangerouslySetInnerHTML={injectHtmlCode(t('contentCeremonyWeddingPlanner'))}
               className={classes.paragraphe}/>
            <Button isButton={false} isAnchor={true} label={t('seeMyOffers')} className="mt3" color="primary-light"
                    size="lg" link={'ceremonie-laique#Mes-formules'}/>
          </Grid>
        </Grid>
      </Container>
    </section>
    <section>
      <Container maxWidth="lg">
        <Grid container={true}>
          <Grid item={true} xs={12} md={6} xl={6}>
            <h3 className={classes.title}>{t('titleCeremonyWeddingPlanner')}</h3>
            <p className={classes.paragraphe}>
              {t('contentCeremonyOfficiant')}
            </p>
          </Grid>
          <Grid item={true} xs={12} md={6} xl={6}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="/assets/secularCeremony2-lg.jpg" alt="example de cérémonie laïque qu'organise Estelle Rouillé"
                   aria-describedby="example de cérémonie laïque qu'organise Estelle Rouillé"
                   style={{ maxHeight: '400px' }}/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
    {/*    <section>
     <Container maxWidth="lg">
     <h2 className="mb3">{t('myPlanForSecularCeremonies')} :</h2>
     <Grid container={true}>
     <Grid item={true} xs={12} md={4} xl={4}>
     <FormuleCard formuleTitle={t('cardMediumFormuleTitle')}
     cardContent={formuleContent}
     pathImg="/assets/secularCeremony2-lg.jpg"
     cardSubtitle={t('cardServiceSecularSubtitle')}
     formuleInfo={t('offerFrom')}
     formuleOfferInfo={t('customizableOffer')}
     formulePrice="800 €"/>
     </Grid>
     <Grid item={true} xs={12} md={4} xl={4}>
     <FormuleCard formuleTitle={t('cardBestFormuleTitle')}
     cardContent={formuleContent}
     pathImg="/assets/home.jpg"
     isImportant={true}
     cardSubtitle={t('cardServiceSecularSubtitle2')}
     formuleOfferInfo={t('customizableOffer')}
     formulePrice="1300 €"
     formuleInfo={t('offerFrom')}/>
     </Grid>
     <Grid item={true} xs={12} md={4} xl={4}>
     <FormuleCard formuleTitle={t('cardVipFormuleTitle')}
     cardContent={formuleContent}
     pathImg="/assets/contact.jpg"
     cardSubtitle={t('cardServiceSecularSubtitle3')}
     formuleOfferInfo={t('customizableOffer')}
     formulePrice="2400 €"
     formuleInfo={t('offerFrom')}
     />
     </Grid>
     </Grid>
     </Container>
     </section>*/}
    <Footer/>
  
  </>
}

export default SecularCeremony

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
