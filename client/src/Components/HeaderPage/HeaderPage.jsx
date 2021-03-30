import React    from 'react'
import HeroPage from '../HeroPage/HeroPage'
import Nav      from '../NavBar/Nav'

const HeaderPage = ({ language, nameImg }) => {
  return <>
    <header>
      <Nav/>
      <HeroPage nameImg={nameImg}>
        <h1 className="hero-title">{language.titleHero}</h1>
      </HeroPage>
    </header>
  </>
}

export default HeaderPage
