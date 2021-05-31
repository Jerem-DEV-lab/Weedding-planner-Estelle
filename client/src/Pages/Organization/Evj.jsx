import React                           from 'react'
import { useTranslation }              from 'react-i18next'
import Footer                          from '../../Components/Footer/Footer'
import HeroPage                        from '../../Components/HeroPage/HeroPage'
import Nav                             from '../../Components/NavBar/Nav'
import { Container, Grid, makeStyles } from '@material-ui/core'
import Button                          from '../../Components/Button/Button'
import injectHtmlCode                  from '../../tools/injectHtml'
import SliderImg                       from '../../Components/SliderImg/SliderImg'

const Evj = () => {
  const classes   = useStyles()
  const { t }     = useTranslation()
  const listEvent = [t('evjfEvent1'), t('evjfEvent2'), t('evjfEvent3'), t('evjfEvent4'), t('evjfEvent5')]
  
  const imgDiapoEvjf = [
    
    {
      imgSrc : '/assets/organizations/ejvf/evjf2.jpg',
      altAttr: '5 jeunes filles habillé en blanc et bleu pour un enterrement de vie de jeune fille'
    },
    {
      imgSrc : '/assets/organizations/ejvf/evjf3.jpg',
      altAttr: '5 jeunes filles habillé en blanc et bleu pour un enterrement de vie de jeune fille'
    }
  ]
  const imgDiapoEvjg = [
    
    {
      imgSrc : '/assets/organizations/evjg/evjg1.jpg',
      altAttr: '5 jeunes filles habillé en blanc et bleu pour un enterrement de vie de jeune fille'
    },
    {
      imgSrc : '/assets/organizations/evjg/evjg2.jpg',
      altAttr: '5 jeunes filles habillé en blanc et bleu pour un enterrement de vie de jeune fille'
    },
    {
      imgSrc : '/assets/organizations/evjg/evjg3.jpg',
      altAttr: '5 jeunes filles habillé en blanc et bleu pour un enterrement de vie de jeune fille'
    }
  ]
  
  return <>
    <HeroPage nameImg="/organizations/evj.d.jpg" positionImg={'top center'}>
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
            <SliderImg imgToShow={imgDiapoEvjf}/>
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
              <Button isButton={false} isAnchor={false} label={t('AskForQuote')} className="my1" color="primary-light"
                      size="lg" link={'/contact'}/>
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
              <Button isButton={false} isAnchor={false} label={t('AskForQuote')} className="my1" color="primary-light"
                      size="lg" link={'/contact'}/>
            </div>
          </Grid>
          <Grid item={true} xs={12} md={6}>
            <div>
              <SliderImg imgToShow={imgDiapoEvjg}/>
            </div>
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
