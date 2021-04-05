import React    from 'react'
import HeroPage from '../HeroPage/HeroPage'
import Nav      from '../NavBar/Nav'

const HeaderPage = ({ titleHero, nameImg, positionImg }) => {
  return <>
    <header>
      <Nav/>
      <HeroPage nameImg={nameImg} positionImg={positionImg}>
        <h1 className="hero-title">{titleHero}</h1>
      </HeroPage>
    </header>
  </>
}

export default HeaderPage
