import React                            from 'react'
import HeaderPage                       from '../../Components/HeaderPage/HeaderPage'
import Card                             from '../../Components/Card/Card'
import { FaChartBar, FaHeart, FaMedal } from 'react-icons/fa'
import useChangeLang                    from '../../Hooks/useChangeLang'

const Home = () => {
  const [language] = useChangeLang()
  function injectHtmlCode (text) {
    return { __html: text }
  }
  return language && <>
    <HeaderPage titleHero={language.titleHero} nameImg={'home.jpg'}/>
    <div className="section-decoration"/>
    <section>
      <div className="container-margin">
        <h2 className="h2">{language.titleSection1}</h2>
        <p dangerouslySetInnerHTML={injectHtmlCode(language.contentSection1)}/>
        <div className="btn-center-x">
          <button className="btn btn-primary hover-opacity">{language.buttonSection1}</button>
        </div>
      </div>
    </section>
    <section className="section-bg section-top-left-rounded">
      <div className="container-margin">
        <div className="grid-3-col-md card-group-sm flex-column-sm">
          <Card titleContent={`${language.cardTitleContent1}`} cardContent={language.cardContent1}
                icons={<FaMedal size={60}/>}/>
          <Card titleContent={`${language.cardTitleContent2}`} cardContent={language.cardContent2}
                icons={<FaHeart size={60}/>}/>
          <Card titleContent={`${language.cardTitleContent3}`} cardContent={language.cardContent3}
                icons={<FaChartBar size={60}/>}/>
        </div>
      </div>
    </section>
  </>
}

export default Home
