import React                           from 'react'
import { useTranslation }              from 'react-i18next'
import Footer                          from '../../Components/Footer/Footer'
import HeroPage                        from '../../Components/HeroPage/HeroPage'
import Nav                             from '../../Components/NavBar/Nav'
import { Container, Grid, makeStyles } from '@material-ui/core'
import FormuleCard                     from '../../Components/Card/FormuleCard'
import SliderImg                       from '../../Components/SliderImg/SliderImg'
import { useStyles }                   from '../Styles/OrganizationStyle'

const usesStyle       = makeStyles((theme) => ({
  imgContent: {
    position      : 'relative',
    objectFit     : 'contain',
    overflow      : 'hidden',
    height        : '250px',
    display       : 'flex',
    justifyContent: 'center',
    alignItems    : 'center',
    borderRadius  : '20px',
    ' & > img'    : {
      position  : 'absolute',
      top       : '-150px',
      filter    : 'grayscale(20%)',
      transition: 'filter .3s ease-in-out',
      '&:hover' : {
        filter: 'grayscale(0%)',
      }
    }
  }
}))
const SecularCeremony = () => {
  const { t }        = useTranslation()
  const classes      = usesStyle()
  const generalStyle = useStyles()
  const imgs         = [
    {
      imgSrc : '/assets/organizations/decoration_secular_ceremony.jpg',
      altAttr: 'aucune'
    },
    {
      imgSrc : '/assets/organizations/decoration_secular_ceremony2.jpg',
      altAttr: 'aucune',
    }
  ]
  return <>
    <HeroPage nameImg="/organizations/decoration_secular_ceremony.jpg" positionImg={'top center'}>
      <Nav/>
      <div className="hero-container">
        <div className="hero-home-content">
          <h1>{t('titleSectionSecularCeremony')}...</h1>
        </div>
      </div>
    </HeroPage>
    <section>
      <Container>
        <h2 className={`${generalStyle.titleResponsive}`}>{t('titleCeremonyOfficiant')}</h2>
        <Grid container={true} spacing={5}>
          <Grid item={true} xs={12} md={6} lg={6}>
            <div style={{ overflow: 'hidden', height: '450px', width: '100%' }}>
              <SliderImg imgToShow={imgs}
                         styleImg={{
                           objectFit     : 'cover',
                           width         : '100%',
                           objectPosition: '20% 100%',
                           maxHeight     : '750px'
                         }}/>
            </div>
          </Grid>
          <Grid item={true} xs={12} md={6} lg={6}>
            <p className="section-content">{t('contentCeremonyOfficiant')}</p>
          </Grid>
        </Grid>
      </Container>
    </section>
    <section>
      <Container>
        <h2 className={`${generalStyle.titleResponsive}`}>{t('offerTitle')} :</h2>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} lg={4}>
            <FormuleCard formuleTitle={t('d-dayOfficiant')} formulePrice="450"
                         cardContent={t('contentD-DayOfficiant')}/>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <FormuleCard formuleTitle={t('partialOrganization')} formulePrice="700"
                         cardContent={t('contentPartialOrganization')}/>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <FormuleCard formuleTitle={t('totalOrganization')} formulePrice="1 000"
                         cardContent={t('contentTotalOrganization')}/>
          </Grid>
        </Grid>
      </Container>
    </section>
    <Footer/>
  
  </>
}

export default SecularCeremony
