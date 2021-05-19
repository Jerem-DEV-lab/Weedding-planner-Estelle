import React                           from 'react'
import Nav                             from '../../Components/NavBar/Nav'
import HeroPage                        from '../../Components/HeroPage/HeroPage'
import { Container, Typography } from '@material-ui/core'
import { useTranslation }              from 'react-i18next'
import { Link }                        from 'react-router-dom'
import Footer                          from '../../Components/Footer/Footer'

const Home = () => {
  const { t } = useTranslation()
  return (<>
      <HeroPage nameImg="home.jpg" positionImg={'center center'}>
        <Nav/>
        <div className="hero-container">
          <div className="hero-home-content">
            <h1>{t('titleHeroHome')}</h1>
          </div>
        </div>
      </HeroPage>
      <section>
        <Container>
          <h2 className="mb4">{t('titleSection2Home')}</h2>
          <div className="section-about">
            <Typography component="p">{t('contentSection2Home')}</Typography>
          </div>
        </Container>
      </section>
      <section className="section-gallery">
        <Container maxWidth="lg">
          <h2>{t('titleSection1Home')}...</h2>
          <div className="gallery">
            <div className="img-1">
              <img src="/assets/galleryHome/1.jpg" alt="baby shower organisé par Estelle Rouillé"/>
            </div>
            <div className="img-2">
              <img src="/assets/galleryHome/2.jpg" alt="anniversaire organisé par Estelle Rouillé"/>
            </div>
            <div className="img-3">
              <img src="/assets/galleryHome/3.jpg" alt="atelier organisé par Estelle Rouillé"/>
            </div>
            <div className="img-4">
              <img src="/assets/galleryHome/4.jpg" alt="illustration d'un mariage organisé par Estelle Rouillé"/>
            </div>
            <div className="img-5">
              <img src="/assets/galleryHome/5.jpg"
                   alt="Estelle Rouillé met en place les décoration pour une cérémonie"/>
            </div>
            <div className="img-6">
              <img src="/assets/galleryHome/6.jpg" alt="Deux mariée main dans la main"/>
            </div>
            <div className="img-7">
              <img src="/assets/galleryHome/7.jpg" alt="Demande en mariage homme à sa femme"/>
            </div>
          </div>
          <Link to="/galerie" className="btn-home">Voir plus de photos</Link>
        </Container>
      </section>
      
      <Footer/>
    </>
  )
}

export default Home
