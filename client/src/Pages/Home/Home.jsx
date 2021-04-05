import React                            from 'react'
import HeaderPage                       from '../../Components/HeaderPage/HeaderPage'
import Card                             from '../../Components/Card/Card'
import { FaChartBar, FaHeart, FaMedal } from 'react-icons/fa'
import { useTranslation }               from 'react-i18next'

const Home = () => {
  const {t} = useTranslation()
  function injectHtmlCode (text) {
    return { __html: text }
  }
  return <>
    <HeaderPage titleHero={t('titleHero')} nameImg={'home.jpg'}/>
    <div className="section-decoration"/>
    <section>
      <div className="container-margin">
        <h2 className="h2">{t('titleSection1')}</h2>
        <p dangerouslySetInnerHTML={injectHtmlCode(t('contentSection1'))}/>
        <div className="btn-center-x">
          <button className="btn btn-primary hover-opacity">{t('buttonSection1')}</button>
        </div>
      </div>
    </section>
    <section className="section-bg section-top-left-rounded">
      <div className="container-margin">
        <div className="grid-3-col-md card-group-sm flex-column-sm">
          <Card titleContent={`${t('cardTitleContent1')}`} cardContent={t('cardContent1')}
                icons={<FaMedal size={60}/>}/>
          <Card titleContent={`${t('cardTitleContent2')}`} cardContent={t('cardContent2')}
                icons={<FaHeart size={60}/>}/>
          <Card titleContent={`${t('cardTitleContent3')}`} cardContent={t('cardContent3')}
                icons={<FaChartBar size={60}/>}/>
        </div>
      </div>
    </section>
  </>
}

export default Home
