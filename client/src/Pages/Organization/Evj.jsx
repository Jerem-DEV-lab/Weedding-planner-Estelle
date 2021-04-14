import React              from 'react'
import HeaderPage         from '../../Components/HeaderPage/HeaderPage'
import Button             from '../../Components/Button/Button'
import { useTranslation } from 'react-i18next'
import FormuleCard        from '../../Components/Card/FormuleCard'

const Evj = () => {
  const formuleContent = 'Sunt in cognito mortalem itinera omnes casu agitare conaretur milites.Sunt in cognito mo' +
                         ' rtalem itinera omnes casu agitare conaretur milites.'
  const { t }          = useTranslation()
  return <>
    <HeaderPage nameImg='evj.jpg' titleHero="EVJF / EVJG" positionImg='top -350px center'/>
    <div className="section-decoration"/>
    
    <section>
      <div className="container-margin">
        <div className="grid grid-x2-lg">
          <div className="col">
            <div className="d-flex align-center flex-column h-100">
              <img src="/assets/EVJ_section.jpg" className="my3"
                   alt="illustration de 3 copines assis sur une branche d'un arbre"/>
            </div>
          </div>
          <div className="col">
            <h1 className="text-uppercase">{t('title_evj_section1')}</h1>
            <p>{t('content_evj_section1')}</p>
            <div className="btn-center-x">
              <Button isButton={false} isAnchor={true} label={t('seeMyOffers')} className="my1" color="primary-light"
                      size="lg" link={'ceremonie-laique#Mes-formules'}/>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="section-bg">
      <div className="container-margin">
        <div className="grid grid-x2-lg">
          <div className="col">
            <h1 className="text-uppercase">{t('title_evj_section1')}</h1>
            <p>{t('content_evj_section1')}</p>
            <div className="btn-center-x">
              <Button isButton={false} isAnchor={true} label={t('seeMyOffers')} className="mt2" color="primary-light"
                      size="lg" link={'ceremonie-laique#Mes-formules'}/>
            </div>
          </div>
          <div className="col my3">
            <div className="d-flex align-center flex-column h-100 ">
              <img src="/assets/evjg.jpg" alt="illustration de 3 copines assis sur une branche d'un arbre"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="pt0" id="Mes-formules">
      <div className="container-margin py3">
        <h1 className="h1 text-strong text-center mb5">{t('myPlanForSecularCeremonies')} :</h1>
        <div className="grid-3-col-md card-group-sm flex-column-sm">
          <FormuleCard formuleTitle={t('cardMediumFormuleTitle')}
                       cardContent={formuleContent}
                       pathImg="/assets/secularCeremony2-lg.jpg"
                       cardSubtitle={t('cardServiceSecularSubtitle')}
                       formuleInfo={t('offerFrom')}
                       formuleOfferInfo={t('customizableOffer')}
                       formulePrice="800 €"
          
          />
          <FormuleCard formuleTitle={t('cardBestFormuleTitle')}
                       cardContent={formuleContent}
                       pathImg="/assets/home.jpg"
                       isImportant={true}
                       cardSubtitle={t('cardServiceSecularSubtitle2')}
                       formuleOfferInfo={t('customizableOffer')}
                       formulePrice="1300 €"
                       formuleInfo={t('offerFrom')}
          
          />
          <FormuleCard formuleTitle={t('cardVipFormuleTitle')}
                       cardContent={formuleContent}
                       pathImg="/assets/contact.jpg"
                       cardSubtitle={t('cardServiceSecularSubtitle3')}
                       formuleOfferInfo={t('customizableOffer')}
                       formulePrice="2400 €"
                       formuleInfo={t('offerFrom')}
          />
        </div>
      </div>
    </section>
  </>
}

export default Evj
