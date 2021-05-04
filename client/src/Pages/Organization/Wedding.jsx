import React              from 'react'
import { useTranslation } from 'react-i18next'
import Footer             from '../../Components/Footer/Footer'
import HeroPage           from '../../Components/HeroPage/HeroPage'
import Nav                from '../../Components/NavBar/Nav'
import { Container }      from '@material-ui/core'

const Wedding = () => {
  const { t } = useTranslation()
  
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
        <p>{t('contentSectionWedding1')}</p>
      </Container>
    </section>
    <Footer />
  </>
}

export default Wedding
