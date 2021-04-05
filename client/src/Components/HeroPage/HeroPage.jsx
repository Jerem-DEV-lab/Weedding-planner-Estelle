import React from 'react'

const HeroPage = ({ children, nameImg, positionImg }) => {
  return <>
    <div className="hero hero-primary" style={{
      backgroundImage   : `url('${process.env.PUBLIC_URL}/assets/${nameImg}')`,
      backgroundPosition: positionImg,
      backgroundRepeat  : 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <div className="hero-content">
        {children}
      </div>
    </div>
  </>
}

export default HeroPage
