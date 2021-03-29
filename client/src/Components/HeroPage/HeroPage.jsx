import React from 'react'

const HeroPage = ({ children, nameImg }) => {
  return <>
    <div className="hero hero-primary" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/${nameImg}')` }}>
      <div className="hero-content">
        {children}
      </div>
    </div>
  </>
}

export default HeroPage
