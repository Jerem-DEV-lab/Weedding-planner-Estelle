import React                           from 'react'
import HeroPage                        from '../../Components/HeroPage/HeroPage'
import Nav                             from '../../Components/NavBar/Nav'
import { useTranslation }              from 'react-i18next'
import { Container, Grid, makeStyles } from '@material-ui/core'
import injectHtmlCode                  from '../../tools/injectHtml'
import Footer                          from '../../Components/Footer/Footer'
import { useStyles }                   from '../Styles/OrganizationStyle'

const usesStyles    = makeStyles((theme) => ({
  address : {
    fontSize  : '20px',
    fontWeight: '600',
    marginTop : '.75rem'
  },
  subtitle: {
    fontSize      : '18px',
    fontWeight    : 600,
    textDecoration: 'underline',
    display       : 'block',
    marginBottom  : theme.spacing(2),
    marginTop     : theme.spacing(4)
  },
  flexSection:{
    display: 'flex',
    height: '100%',
    alignItems: 'center'
  }
}))
const FloralDesign = () => {
  const { t }                       = useTranslation()
  const classes                     = usesStyles()
  const generalStyle = useStyles()
  const listPossibilityAllOccasions = [
    t('otherPossibilityAllOccasions1'), t('otherPossibilityAllOccasions2'), t('otherPossibilityAllOccasions3'),
    'Bougie florale : à partir de 12€']
  const listPossibilityWedding      = [
    t('otherPossibilityWedding1'),
    t('otherPossibilityWedding2'),
    t('otherPossibilityWedding3'),
    t('otherPossibilityWedding4'),
    t('otherPossibilityWedding5'),
    t('otherPossibilityWedding6'),
    t('otherPossibilityWedding7'),
    t('otherPossibilityWedding8')
  ]
  const listPossibilityGrief        = [
    t('otherPossibilityWedding1'),
    t('otherPossibilityWedding2'),
    t('otherPossibilityWedding3'),
    t('otherPossibilityWedding4'),
    t('otherPossibilityWedding5'),
    t('otherPossibilityWedding6'),
    t('otherPossibilityWedding7'),
    t('otherPossibilityWedding8')
  ]
  return <>
    <HeroPage nameImg="/floralDesign/conception-floral.jpg" positionImg={'bottom center'}>
      <Nav/>
      <div className="hero-container">
        <div className="hero-home-content">
          <h1>{t('titleHeroFloralDesign')}</h1>
        </div>
      </div>
    </HeroPage>
    <section>
      <Container>
        <Grid container={true} spacing={4}>
          <Grid item={true} xs={12} lg={6}>
            <div style={{ display: 'flex', overflow: 'hidden', maxHeight: '90%', width: '100%' }}>
              <img src="/assets/floralDesign/floralDesign1.jpg"
                   style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                   alt=""/>
            </div>
          </Grid>
          <Grid item={true} xs={12} lg={6}>
            <section>
              <Container>
                <h2 className={generalStyle.titleResponsive}>{t('titleSectionFloralDesign')}</h2>
                <p className="section-content">
                  {t('contentFloralDesign1')} <br/>
                  {t('contentFloralDesign2')} <br/>
                  {t('contentFloralDesign3')} <br/>
                  {t('contentFloralDesign4')} <br/>
                  {t('contentFloralDesign5')}
                </p>
              </Container>
            </section>
            <section>
              <h2 className={generalStyle.titleResponsive}>{t('subscription')}</h2>
              <p className="section-content">{t('subscriptionContent')}</p>
            </section>
          </Grid>
          <Grid item={true} xs={12} lg={6}>
            <section style={{paddingTop: 0}}>
              <Container>
                <h2 className={generalStyle.titleResponsive}>{t('HowWork')}</h2>
                <p className="section-content">{t('HowWorkContent1')}</p>
                <p className="section-content">{t('HowWorkContent2')}</p>
  
                <h2 className={generalStyle.titleResponsive} style={{marginTop: "1.2rem"}}>{t('commitment')}</h2>
                <p className="section-content" dangerouslySetInnerHTML={injectHtmlCode(t('commitmentContent1'))}/>
              </Container>
            </section>
            <section style={{paddingTop: 0}}>
              <Container>
                <h2 className={generalStyle.titleResponsive}>{t('prices')}</h2>
                <p className="section-content">
                  {t('price1')} <br/>
                  {t('price2')} <br/>
                  {t('price3')} <br/>
                  {t('price4')} <br/>
                  {t('price5')} <br/>
                </p>
                <p className="section-content mt2">{t('moreInfoPrices')}</p>
                <p className={classes.address} style={{lineHeight: '28px'}}>{t('addressConceptStore')}</p>
              </Container>
            </section>
          </Grid>
          <Grid item={true} xs={12} lg={6}>
            <div style={{ display: 'flex', overflow: 'hidden', maxHeight: '90%', width: '100%' }}>
              <img src="/assets/floralDesign/floralDesign2.jpg"
                   style={{ objectFit: 'cover', width: '100%' }}
                   alt=""/>
            </div>
          </Grid>
        </Grid>

        <section>
          <Container>
            <h2 className={generalStyle.titleResponsive}>{t('otherPossibility')}</h2>
            <Grid container={true} spacing={4}>
              <Grid item={true} xs={12} md="4">
                <p className={`section-content`}><span
                  className={classes.subtitle}>{t('otherPossibilitySubtitle1')}</span>
                  <ul className="list-bull p0">
                    {listPossibilityAllOccasions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </p>
              </Grid>
              <Grid item={true} xs={12} md="4">
                <p className={`section-content`}><span
                  className={classes.subtitle}>{t('otherPossibilitySubtitle2')}</span>
                  <ul className="list-bull p0">
                    {listPossibilityGrief.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </p>
              </Grid>
              <Grid item={true} xs={12} md="4">
                <p className={`section-content`}><span
                  className={classes.subtitle}>{t('otherPossibilitySubtitle3')}</span>
                  <ul className="list-bull p0">
                    {listPossibilityWedding.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </p>
              </Grid>
            </Grid>
          </Container>
        </section>
      </Container>
    </section>
    
    <Footer/>
  </>
}

export default FloralDesign
