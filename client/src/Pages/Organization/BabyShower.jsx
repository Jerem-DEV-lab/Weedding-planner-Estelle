import React              from 'react'
import { useTranslation } from 'react-i18next'
import Footer              from '../../Components/Footer/Footer'
import HeroPage            from '../../Components/HeroPage/HeroPage'
import Nav                 from '../../Components/NavBar/Nav'
import { Container, Grid } from '@material-ui/core'
import { useStyles }       from '../Styles/OrganizationStyle'
import Button              from '../../Components/Button/Button'

const BabyShower = () => {
  const { t }   = useTranslation()
  const classes = useStyles()
  /* const formuleContent = 'Sunt in cognito mortalem itinera omnes casu agitare conaretur milites.Sunt in cognito mo' +
   ' rtalem itinera omnes casu agitare conaretur milites.'*/
  return <>
    <HeroPage nameImg="/organizations/baby_shower.jpg" positionImg={'center center'}>
      <Nav/>
      <div className="hero-container">
        <div className="hero-home-content">
          <h1>Baby Shower</h1>
        </div>
      </div>
    </HeroPage>
    <section>
      <Container>
        <Grid container={true}>
          <Grid item={true} xs={12} md={12} lg={6}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img src="/assets/organizations/baby_shower2.jpg" alt="gâteau pour une baby shower"
                   style={{ height: '400px' }}/>
            </div>
          </Grid>
          <Grid item={true} xs={12} md={12} lg={6}>
            <h1 className={classes.title}>{t('new_baby')}...</h1>
            <p className={classes.paragraphe}>{t('new_baby_content')}</p>
            <div className="btn-center-x">
              <Button isButton={false} label={t('seeMyOffers')} size={'lg'} color="primary"/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
    <section>
      <Container>
        <Grid container={true}>
          <Grid item={true} xs={12} md={12} lg={6}>
            <h1 className={classes.title}>{t('new_baby')}...</h1>
            <p className={classes.paragraphe}>{t('new_baby_content')}</p>
            <div className="btn-center-x">
              <Button isButton={false} label={t('seeMyOffers')} size={'lg'} color="primary"/>
            </div>
          </Grid>
          <Grid item={true} xs={12} md={12} lg={6}>
            <img src="/assets/organizations/baby_shower1.jpg" alt="gâteau pour une baby shower"/>
          </Grid>
        </Grid>
      </Container>
    </section>
    {/*<section className="pt0" id="Mes-formules">
      <div className="container-margin py3" style={{ background: '#FCFCFC' }}>
        <h1 className="h1 text-strong text-center mb5">{t('my_plan_baby_shower')} :</h1>
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

export default BabyShower
