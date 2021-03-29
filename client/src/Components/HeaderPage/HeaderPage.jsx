import React from 'react'
import NavBar              from '../NavBar/NavBar'
import HeroPage from '../HeroPage/HeroPage'

const HeaderPage = ({language, nameImg}) => {
  return <>
    <header>
      <NavBar/>
      <HeroPage nameImg={nameImg}>
        <h1 className="hero-title">{language.titleHero}</h1>
      </HeroPage>
    </header>
  </>
}

export default HeaderPage
