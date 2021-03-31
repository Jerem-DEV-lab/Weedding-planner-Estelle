import React         from 'react'
import HeaderPage    from '../../Components/HeaderPage/HeaderPage'
import useChangeLang from '../../Hooks/useChangeLang'
import ContactForm   from './ContactForm'

const Contact = () => {
  const [language] = useChangeLang()
  return <>
    <HeaderPage titleHero={language.titleHeroContact} nameImg={'contact.jpg'}/>
    <div className="section-decoration bg-success-100"/>
    
    <section>
      <div className="container-margin">
        <div className="grid-contact bg-success-20" style={{ padding: '50px' }}>
          <div className="grid-contact-left">
            <div className="contact-img">
              <img src="https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607_960_720.jpg"
                   alt="https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607_960_720.jpg"/>
            </div>
            <h2 className="contact-name-company">
              Estelle Rouillé
            </h2>
            <ul className="contact-description-company text-center">
              <li>{language.floralSceno},&nbsp;</li>
              <li>{language.eventOrganizer}</li>
            </ul>
            
            <ul className="row-network network-link text-center">
              <li>
                <a href="/facebook">
                  <img src="/assets/svg/facebook.svg" alt="logo facebook"/>
                </a>
              </li>
              <li>
                <a href="/insta">
                  <img src="/assets/svg/instagram.svg" alt="logo instagram"/>
                
                </a>
              </li>
              <li>
                <a href="/youtube">
                  <img src="/assets/svg/youtube.svg" alt="logo youtube"/></a>
              </li>
            </ul>
          </div>
          <div className="grid-contact-right">
            <ContactForm/>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Contact
