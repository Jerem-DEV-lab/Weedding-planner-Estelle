import React                           from 'react'
import HeroPage                        from '../../Components/HeroPage/HeroPage'
import Nav                             from '../../Components/NavBar/Nav'
import { useTranslation }              from 'react-i18next'
import { Container, Grid, makeStyles } from '@material-ui/core'
import FormuleCard                     from '../../Components/Card/FormuleCard'

const useStyles  = makeStyles((theme) => ({
  dBlock             : {
    display: 'block'
  },
  subtitle           : {
    textAlign     : 'left',
    fontSize      : '22px',
    fontWeight    : '600',
    textDecoration: 'underline'
  },
  sectionContainerImg: {
    display : 'block',
    overflow: 'hidden',
  },
  sectionContainerImg2: {
    display : 'block',
    overflow: 'hidden',
  },
  imgSection         : {
    height        : '100%',
    width         : '100%',
    objectFit     : 'cover',
    objectPosition: 'center'
    
  }
}))
const MyWorkShop = () => {
  const { t }   = useTranslation()
  const classes = useStyles()
  return <>
    <HeroPage nameImg="/myWorkshop/hero_workshop.jpg" positionImg={'bottom center'}>
      <Nav/>
      <div className="hero-container">
        <div className="hero-home-content">
          <h1>{t('workshop')}...</h1>
        </div>
      </div>
    </HeroPage>
    <section>
      <Container>
        <h2>{t('workShopTitle1')}</h2>
        <Grid container={true} spacing={4}>
          <Grid item={true} xs={12} md={12} lg={6}>
            <p className="section-content">
              {t('workShopContent1')}
              <span className={`mt2 ${classes.dBlock}`}>
          {t('workShopContent2')}
          </span>
              <span className={`mt2 ${classes.dBlock}`}>
          {t('workShopContent3')}
          </span>
            </p>
          </Grid>
          <Grid item={true} xs={12} md={12} lg={6}>
            <div className={classes.sectionContainerImg2} style={{height: "350px"}}>
              <img src="/assets/art-therapy/art-therapy2.jpg" alt="" className={classes.imgSection}/>
            </div>
          </Grid>
        </Grid>
        <h2 className="mt3">{t('offerTitle')}</h2>
        <h5 className={classes.subtitle}>{t('offerCourse')}</h5>
        <Grid container={true} spacing={4} className="mt2">
          <Grid item={true} xs={12} md={4}>
            <FormuleCard
              cardContent={t('privateLessonsContent1')}
              formuleTitle={t('privateLessonTitle1')}
              formulePrice={t('100')}
            />
          </Grid>
          <Grid item={true} xs={12} md={4}>
            <FormuleCard
              cardContent={t('privateLessonContent2')}
              formuleTitle={t('privateLessonTitle2')}
              formulePrice={t('120')}
            />
          </Grid>
          <Grid item={true} xs={12} md={4}>
            <FormuleCard
              cardContent={t('privateLessonContent3')}
              formuleTitle={t('privateLessonTitle3')}
              formulePrice={t('150')}
            />
          </Grid>
        </Grid>
        <h5 className={`${classes.subtitle} my4`}>{t('offerWorkShop')}</h5>
        <Grid container={true} spacing={4} className="mt2">
          <Grid item={true} xs={12} md={4}>
            <FormuleCard
              cardContent={t('privateWorkShopContent1')}
              formuleTitle={t('privateWorkShopTitle1')}
              formulePrice={t('50')}
            />
          </Grid>
          <Grid item={true} xs={12} md={4}>
            <FormuleCard
              cardContent={t('privateWorkShopContent2')}
              formuleTitle={t('privateWorkShopTitle2')}
              formulePrice={t('70')}
            />
          </Grid>
          <Grid item={true} xs={12} md={4}>
            <FormuleCard
              cardContent={t('privateWorkShopContent3')}
              formuleTitle={t('privateWorkShopTitle3')}
              formulePrice={t('150')}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
    
    <section>
      <Container>
        <h2>{t('workShopTitle2')}</h2>
        <Grid container={true} spacing={4}>
          <Grid item={true} xs={12} md={12} lg={6}>
            <div className={classes.sectionContainerImg} style={{height: "200px"}}>
              <img src="/assets/art-therapy/art-therapy1.jpg" alt="" className={classes.imgSection}/>
            </div>
          </Grid>
          <Grid item={true} xs={12} md={12} lg={6}>
            <p className="section-content">
              {t('workShopContent4')}
            </p>
          </Grid>
        </Grid>
        <h2 className="mt3">{t('offerTitle')}</h2>
        <h5 className={classes.subtitle}>{t('offerCourse')}</h5>
        <Grid container={true} spacing={4} className="mt2">
          <Grid item={true} xs={12} md={4}>
            <FormuleCard
              cardContent={t('privateArtTherapyContent')}
              formuleTitle={t('privateArtTherapyTitle')}
              formulePrice="50"
            />
          </Grid>
          <Grid item={true} xs={12} md={4}>
            <FormuleCard
              cardContent={t('privateArtTherapyContent5')}
              formuleTitle={t('privateArtTherapyTitle5')}
              formulePrice="55"
            />
          </Grid>
          <Grid item={true} xs={12} md={4}>
            <FormuleCard
              cardContent={t('privateArtTherapyContent1')}
              formuleTitle={t('privateArtTherapyTitle1')}
              formulePrice="150"
            />
          </Grid>
          <Grid item={true} xs={12} md={4}>
            <FormuleCard
              cardContent={t('privateArtTherapyContent2')}
              formuleTitle={t('privateArtTherapyTitle2')}
              formulePrice="30"
            />
          </Grid>
          <Grid item={true} xs={12} md={4}>
            <FormuleCard
              cardContent={t('privateArtTherapyContent3')}
              formuleTitle={t('privateArtTherapyTitle3')}
              formulePrice={t('35')}
            />
          </Grid>
          <Grid item={true} xs={12} md={4}>
            <FormuleCard
              cardContent={t('privateArtTherapyContent4')}
              formuleTitle={t('privateArtTherapyTitle4')}
              formulePrice={t('135')}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  </>
}

export default MyWorkShop
