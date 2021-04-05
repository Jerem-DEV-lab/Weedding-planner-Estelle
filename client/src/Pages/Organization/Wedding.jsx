import React              from 'react'
import HeaderPage         from '../../Components/HeaderPage/HeaderPage'
import { useTranslation } from 'react-i18next'

const Wedding = () => {
  const { t } = useTranslation()
  return <>
    <HeaderPage titleHero={`${t('titleHeroWeeding')}`} nameImg={'home.jpg'}/>
    <div className="section-decoration"/>
    <section>
      <div className="container-margin">
        <h1 className="h1 text-strong text-center mb2">{t('titleSectionWedding1')}</h1>
        <p className="text-center">{t('contentSectionWedding1')}</p>
      </div>
    </section>
    <section className="section-bg">
      <div className="container-margin">
        <h1 className="h1 text-center text-strong mb5">{t('priceList')}</h1>
        <div className="d-flex space-around align-center">
          <div className="grid-tarifs">
            <div className="grid-header">
              <div className="tarif-name-title">
                {t('nameOfService')}
              </div>
              <div className="tarif-name-title">
                A partir de :
              </div>
            </div>
            <div className="tarifs-row">
              <div className="tarif-name">
                {t('bridalBouquet')}
              </div>
              <div className="tarif-price">
                80 €
              </div>
            </div>
            <div className="tarifs-row">
              <div className="tarif-name">
                {t('buttonhole')}
              </div>
              <div className="tarif-price">
                8 €
              </div>
            </div>
            <div className="tarifs-row">
              <div className="tarif-name">
                {t('bracelet')}
              </div>
              <div className="tarif-price">
                20 €
              </div>
            </div>
            <div className="tarifs-row">
              <div className="tarif-name">
                {t('duplicateBouquet')}
              </div>
              <div className="tarif-price">
                30 €
              </div>
            </div>
            <div className="tarifs-row">
              <div className="tarif-name">
                {t('simpleCenterPiece')}
              </div>
              <div className="tarif-price">
                40 €
              </div>
            </div>
            <div className="tarifs-row">
              <div className="tarif-name">
                {t('complexCenterPiece')}
              </div>
              <div className="tarif-price">
                120 €
              </div>
            </div>
            <div className="tarifs-row">
              <div className="tarif-name">
                {t('leafGarland')}
              </div>
              <div className="tarif-price">
                40 € / m
              </div>
            </div>
            <div className="tarifs-row">
              <div className="tarif-name">
                {t('carDecoration')}
              </div>
              <div className="tarif-price">
                150 €
              </div>
            </div>
            <div className="tarifs-row">
              <div className="tarif-name">
                {t('floralArch')}
              </div>
              <div className="tarif-price">
                300 €
              </div>
            </div>
          </div>
          <div className="img-section">
            <img src="/assets/weddingPlanerService.jpg" alt=""/>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Wedding
