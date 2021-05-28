import React               from 'react'
import { useTranslation }  from 'react-i18next'
import Footer              from '../../Components/Footer/Footer'
import HeroPage            from '../../Components/HeroPage/HeroPage'
import Nav                 from '../../Components/NavBar/Nav'
import { Container, Grid } from '@material-ui/core'
import SliderImg           from '../../Components/SliderImg/SliderImg'
import { useStyles }       from '../Styles/OrganizationStyle'

const BabyShower = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const imgs  = [
    {
      imgSrc : '/assets/organizations/baby_shower1.jpg',
      altAttr: 'aucune'
    },
    {
      imgSrc : '/assets/organizations/baby_shower2.jpg',
      altAttr: 'aucune',
    },
    {
      imgSrc : '/assets/organizations/baby_shower3.jpg',
      altAttr: 'aucune',
    },
    {
      imgSrc : '/assets/organizations/baby_shower4.jpg',
      altAttr: 'aucune',
    },
  ]
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
        <Grid container={true} spacing={4}>
          <Grid item={true} xs={12} md={12} lg={6}>
              <SliderImg imgToShow={imgs} styleImg={{
                objectPosition: '50% 50%',
                height        : '100%',
                maxHeight     : '600px',
                objectFit     : 'cover'
              }}/>
          </Grid>
          <Grid item={true} xs={12} md={12} lg={6}>
            <h2 className={classes.titleResponsive}>{t('new_baby')}...</h2>
            <p className="section-content">{t('new_baby_content')}</p>
            <br/>
            <h2 className={classes.titleResponsive}>{t('new_baby_subtitle1')}</h2>
            <p className="section-content">{t('new_baby_content2')}</p>
            <br/>
            <p className="section-content">{t('new_baby_content3')}</p>
            <br/>
            <p className="section-content">{t('morePlanBaby_ShowerContent')}</p>
          </Grid>
        </Grid>
      </Container>
    </section>
    <Footer/>
  </>
}

export default BabyShower
