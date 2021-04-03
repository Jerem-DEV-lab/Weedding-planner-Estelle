import React          from 'react'
import HeaderPage     from '../../Components/HeaderPage/HeaderPage'
import useChangeLang  from '../../Hooks/useChangeLang'
import injectHtmlCode from '../../tools/injectHtml'
import Button         from '../../Components/Button/Button'
import FormuleCard    from '../../Components/Card/FormuleCard'

const SecularCeremony = () => {
  const [lang]         = useChangeLang()
  const formuleContent = 'Sunt in cognito mortalem itinera omnes casu agitare conaretur milites.Sunt in cognito mo' +
                         ' rtalem itinera omnes casu agitare conaretur milites.'
  return <>
    <HeaderPage nameImg="secularCeremony.jpg" titleHero={lang.titleSectionSecularCeremony}/>
    <div className="section-decoration"/>
    
    <section>
      <div className="container-margin">
        <div className="grid grid-x2-lg">
          <div className="col">
            <div className="d-flex align-center flex-column h-100">
              <img src="/assets/secularCeremony-lg.jpg" alt=""/>
              <Button isButton={false} isAnchor={true} label={lang.seeMyOffers} className="mt3" color="primary-light"
                      size="lg" link={'/fr/organisation/ceremonie-laique#Mes-formules'}/>
            </div>
          </div>
          <div className="col">
            <h1 className="text-uppercase">{lang.titleCeremonyWeddingPlanner}</h1>
            <p dangerouslySetInnerHTML={injectHtmlCode(lang.contentCeremonyWeddingPlanner)}/>
          </div>
        </div>
      </div>
    </section>
    <section className="mb0 pb0">
      <div className="container-margin section-bg p2">
        <div className="grid grid-x2-lg">
          <div className="col p-relative">
            
            <div className="d-flex align-center flex-column ">
              <h1 className="text-uppercase">{lang.titleCeremonyWeddingPlanner}</h1>
              <p className="text-strong">
                {lang.contentCeremonyOfficiant}
              </p>
            </div>
            <img src="/assets/flowers1.png" className="p-absolute img-bottom-left" aria-hidden={'true'}/>
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
        <h1 className="h1 text-strong text-center mb5">{lang.myPlanForSecularCeremonies} :</h1>
        <div className="grid-3-col-md card-group-sm flex-column-sm">
          <FormuleCard formuleTitle={lang.cardMediumFormuleTitle}
                       cardContent={formuleContent}
                       pathImg="/assets/secularCeremony2-lg.jpg"
                       cardSubtitle={lang.cardServiceSecularSubtitle}
                       formuleInfo={lang.offerFrom}
                       formuleOfferInfo={lang.customizableOffer}
                       formulePrice="800 €"
        
          />
          <FormuleCard formuleTitle={lang.cardBestFormuleTitle}
                       cardContent={formuleContent}
                       pathImg="/assets/home.jpg"
                       isImportant={true}
                       cardSubtitle={lang.cardServiceSecularSubtitle2}
                       formuleOfferInfo={lang.customizableOffer}
                       formulePrice="1300 €"
                       formuleInfo={lang.offerFrom}
          
          />
          <FormuleCard formuleTitle={lang.cardVipFormuleTitle}
                       cardContent={formuleContent}
                       pathImg="/assets/contact.jpg"
                       cardSubtitle={lang.cardServiceSecularSubtitle3}
                       formuleOfferInfo={lang.customizableOffer}
                       formulePrice="2400 €"
                       formuleInfo={lang.offerFrom}
          />
        </div>
      </div>
    </section>
  </>
}

export default SecularCeremony
