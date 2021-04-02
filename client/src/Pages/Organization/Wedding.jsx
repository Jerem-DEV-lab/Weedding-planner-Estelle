import React         from 'react'
import HeaderPage    from '../../Components/HeaderPage/HeaderPage'
import useChangeLang from '../../Hooks/useChangeLang'

const Wedding = () => {
  const [lang] = useChangeLang()
  return <>
    <HeaderPage titleHero={lang.titleHeroWeeding} nameImg={'home.jpg'}/>
    <div className="section-decoration"/>
    <section>
      <div className="container-margin">
        <h1 className="h1 text-strong text-center mb2">{lang.titleSectionWedding1}</h1>
        <p className="text-center">{lang.contentSectionWedding1}</p>
      </div>
    </section>
    <section className="section-bg">
      <div className="container-margin">
        <h1 className="h1 text-center text-strong mb5">{lang.priceList}</h1>
        <div className="d-flex space-around align-center">
          <div className="grid-tarifs">
            <div className="grid-header">
              <div className="tarif-name-title">
                {lang.nameOfService}
              </div>
              <div className="tarif-name-title">
                A partir de :
              </div>
            </div>
            <div className="tarifs-row">
              <div className="tarif-name">
                {lang.bridalBouquet}
              </div>
              <div className="tarif-price">
                80 €
              </div>
            </div>
            <div className="tarifs-row">
              <div className="tarif-name">
                {lang.buttonhole}
              </div>
              <div className="tarif-price">
                8 €
              </div>
            </div>
            <div className="tarifs-row">
              <div className="tarif-name">
                {lang.bracelet}
              </div>
              <div className="tarif-price">
                20 €
              </div>
            </div>
            <div className="tarifs-row">
              <div className="tarif-name">
                {lang.duplicateBouquet}
              </div>
              <div className="tarif-price">
                30 €
              </div>
            </div>
            <div className="tarifs-row">
              <div className="tarif-name">
                {lang.simpleCenterPiece}
              </div>
              <div className="tarif-price">
                40 €
              </div>
            </div>
            <div className="tarifs-row">
              <div className="tarif-name">
                {lang.complexCenterPiece}
              </div>
              <div className="tarif-price">
                120 €
              </div>
            </div>
            <div className="tarifs-row">
              <div className="tarif-name">
                {lang.leafGarland}
              </div>
              <div className="tarif-price">
                40 € / m
              </div>
            </div>
            <div className="tarifs-row">
              <div className="tarif-name">
                {lang.carDecoration}
              </div>
              <div className="tarif-price">
                150 €
              </div>
            </div>
            <div className="tarifs-row">
              <div className="tarif-name">
                {lang.floralArch}
              </div>
              <div className="tarif-price">
                300 €
              </div>
            </div>
          </div>
          <div className="img-section">
            <img src="/assets/home.jpg" alt=""/>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Wedding
