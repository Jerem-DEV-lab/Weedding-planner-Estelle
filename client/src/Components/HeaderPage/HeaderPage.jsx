import React    from 'react'
import HeroPage from '../HeroPage/HeroPage'
import NavOld   from '../NavBar/Nav.old'

const HeaderPage = ({ titleHero, nameImg, positionImg }) => {
  return <>
    <header>
      <NavOld/>
      <HeroPage nameImg={nameImg} positionImg={positionImg}>
        <h1 className="hero-title">{titleHero}</h1>
      </HeroPage>
    </header>
  </>
}

export default HeaderPage
