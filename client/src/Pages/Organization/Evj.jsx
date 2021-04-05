import React              from 'react'
import HeaderPage         from '../../Components/HeaderPage/HeaderPage'
import Button             from '../../Components/Button/Button'
import { useTranslation } from 'react-i18next'

const Evj = () => {
  const { t } = useTranslation()
  return <>
    <HeaderPage nameImg='evj.jpg' titleHero="EVJF / EVJG" positionImg='top -350px center'/>
    <div className="section-decoration"/>
    
    <section>
      <div className="container-margin">
        <div className="grid grid-x2-lg">
          <div className="col">
            <div className="d-flex align-center flex-column h-100">
              <img src="/assets/EVJ_section.jpg" alt="illustration de 3 copines assis sur une branche d'un arbre"/>
              <Button isButton={false} isAnchor={true} label={t('seeMyOffers')} className="mt3" color="primary-light"
                      size="lg" link={'ceremonie-laique#Mes-formules'}/>
            </div>
          </div>
          <div className="col">
            <h1 className="text-uppercase">{t('title_evj_section1')}</h1>
            <p>{t('content_evj_section1')}</p>
          </div>
        </div>
      </div>
    </section>
  
    <section>
      <div className="container-margin">
        <div className="grid grid-x2-lg">
          <div className="col">
            <h1 className="text-uppercase">{t('title_evj_section1')}</h1>
            <p>{t('content_evj_section1')}</p>
          </div>
          <div className="col">
            <div className="d-flex align-center flex-column h-100">
              <img src="/assets/evjg.jpg" alt="illustration de 3 copines assis sur une branche d'un arbre"/>
              <Button isButton={false} isAnchor={true} label={t('seeMyOffers')} className="mt3" color="primary-light"
                      size="lg" link={'ceremonie-laique#Mes-formules'}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Evj
