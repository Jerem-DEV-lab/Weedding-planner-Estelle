import React               from 'react'
import { useTranslation }  from 'react-i18next'
import Footer              from '../../Components/Footer/Footer'
import HeroPage            from '../../Components/HeroPage/HeroPage'
import Nav                 from '../../Components/NavBar/Nav'
import { Container, Grid } from '@material-ui/core'
import injectHtmlCode      from '../../tools/injectHtml'
import FormuleCard         from '../../Components/Card/FormuleCard'
import SliderImg           from '../../Components/SliderImg/SliderImg'

const Wedding = () => {
  const { t }     = useTranslation()
  const imgs      = [
    {
      imgSrc : '/assets/home/home1.jpg',
      altAttr: 'aucune'
    },
    {
      imgSrc : '/assets/home/home2.jpg',
      altAttr: 'aucune',
    },
    {
      imgSrc : '/assets/home/home3.jpg',
      altAttr: 'aucune',
    },
  ]
  const listSteps = [t('WeedingStep1'), t('WeedingStep2'), t('WeedingStep3'), t('WeedingStep4'), t('WeedingStep5'), t('WeedingStep6'), t('WeedingStep7')]
  return <>
    <HeroPage nameImg="/organizations/weeding.jpg" positionImg={'center center'}>
      <Nav/>
      <div className="hero-container">
        <div className="hero-home-content">
          <h1>{t('titleHeroWeeding')}...</h1>
        </div>
      </div>
    </HeroPage>
    <section>
      <Container>
        <h2>{t('titleSectionWedding1')}</h2>
        <Grid container={true} spacing={1}>
          <Grid item={true} xs={12} md={6} lg={6}>
            <div style={{ overflow: 'hidden', height: '450px', width: '100%' }}>
              <SliderImg imgToShow={imgs}
                         styleImg={{
                           objectFit     : 'contain',
                           objectPosition: '20% 100%',
                           maxHeight     : '750px'
                         }}/>
            </div>
          </Grid>
          <Grid item={true} xs={12} md={6} lg={6}>
            <p dangerouslySetInnerHTML={injectHtmlCode(t('contentSectionWedding1'))} className="section-content"/>
          </Grid>
        </Grid>
      </Container>
    </section>
    <section>
      <Container>
        <h2>{t('titleSectionWedding2')}</h2>
        <p dangerouslySetInnerHTML={injectHtmlCode(t('contentSectionWedding2'))} className="section-content"/><br/>
        <p className="section-content">
          <ul className="list-number">
            {listSteps.map((list, index) => (
              <li key={index} dangerouslySetInnerHTML={injectHtmlCode(list)}/>
            ))}
          </ul>
        </p>
      </Container>
    </section>
    <section>
      <Container>
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

export default Wedding
