import React              from 'react'
import HeaderPage         from '../../Components/HeaderPage/HeaderPage'
import injectHtmlCode     from '../../tools/injectHtml'
import Button             from '../../Components/Button/Button'
import FormuleCard        from '../../Components/Card/FormuleCard'
import { useTranslation } from 'react-i18next'

const SecularCeremony = () => {
  const { t }          = useTranslation()
  const formuleContent = 'Sunt in cognito mortalem itinera omnes casu agitare conaretur milites.Sunt in cognito mo' +
                         ' rtalem itinera omnes casu agitare conaretur milites.'
  return <>
    <HeaderPage nameImg="secularCeremony.jpg" titleHero={t('titleSectionSecularCeremony')}/>
    <div className="section-decoration"/>
    
    <section>
      <div className="container-margin">
        <div className="grid grid-x2-lg">
          <div className="col">
            <div className="d-flex align-center flex-column h-100">
              <img src="/assets/secularCeremony-lg.jpg" alt=""/>
              <Button isButton={false} isAnchor={true} label={t('seeMyOffers')} className="mt3" color="primary-light"
                      size="lg" link={'ceremonie-laique#Mes-formules'}/>
            </div>
          </div>
          <div className="col">
            <h1 className="text-uppercase">{t('titleCeremonyWeddingPlanner')}</h1>
            <p dangerouslySetInnerHTML={injectHtmlCode(t('contentCeremonyWeddingPlanner'))}/>
          </div>
        </div>
      </div>
    </section>
    <section className="mb0 pb0">
      <div className="container-margin section-bg p2">
        <div className="grid grid-x2-lg">
          <div className="col p-relative">
            
            <div className="d-flex align-center flex-column ">
              <h1 className="text-uppercase">{t('titleCeremonyWeddingPlanner')}</h1>
              <p className="text-strong">
                {t('contentCeremonyOfficiant')}
              </p>
            </div>
            <img src="/assets/flowers1.png" className="p-absolute img-bottom-left" aria-hidden={'true'} alt="fleurs"/>
          </div>
          <div className="col">
            <img src="/assets/secularCeremony2-lg.jpg" alt="example de cérémonie laïque qu'organise Estelle Rouillé"
                 aria-describedby="example de cérémonie laïque qu'organise Estelle Rouillé"/>
          </div>
        </div>
      </div>
    </section>
    <section className="pt0" id="Mes-formules">
      <div className="container-margin py3" style={{ background: '#FCFCFC' }}>
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

export default SecularCeremony
