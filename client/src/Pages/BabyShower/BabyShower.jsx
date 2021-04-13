import React              from 'react'
import HeaderPage         from '../../Components/HeaderPage/HeaderPage'
import Button             from '../../Components/Button/Button'
import { useTranslation } from 'react-i18next'
import FormuleCard        from '../../Components/Card/FormuleCard'

const BabyShower = () => {
  const { t }          = useTranslation()
  const formuleContent = 'Sunt in cognito mortalem itinera omnes casu agitare conaretur milites.Sunt in cognito mo' +
                         ' rtalem itinera omnes casu agitare conaretur milites.'
  return <>
    <HeaderPage nameImg="baby-shower.jpg" titleHero="Baby Shower"/>
    <div className="section-decoration"/>
    <section className="container">
      <div className="row wrap-reverse-sm">
        <div className="col-6-lg">
          <div className="img-section-2">
            <img src="/assets/baby-shower.jpg" alt="estelle rouillé"/>
          </div>
        </div>
        <div className="col-6-lg">
          <h1 className="title-section text-uppercase">{t('new_baby')}...</h1>
          <div className="content-section">
            <p>{t('new_baby_content')}</p>
  
            <div className="btn-center-x">
              <Button isButton={false} label={t('seeMyOffers')} size={'lg'} color="primary"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="container-margin section-bg mb0">
      <div className="row wrap-sm">
        <div className="col-6-lg">
          <h1 className="title-section text-uppercase">{t('new_baby')}...</h1>
          <div className="content-section">
            <p>{t('new_baby_content_1')}</p>
            <div className="btn-center-x">
              <Button isButton={false} label={t('seeMyOffers')} size={'lg'} color="primary"/>
            </div>
          </div>
        </div>
        <div className="col-6-lg">
          <div className="img-section-2">
            <img src="/assets/baby-shower2.jpg" alt="estelle rouillé"/>
          </div>
        </div>
      </div>
    </section>
    
    
    <section className="pt0" id="Mes-formules">
      <div className="container-margin py3" style={{ background: '#FCFCFC' }}>
        <h1 className="h1 text-strong text-center mb5">{t('my_plan_baby_shower')} :</h1>
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

export default BabyShower
