import React              from 'react'
import HeaderPage         from '../../Components/HeaderPage/HeaderPage'
import { useTranslation } from 'react-i18next'
import Button             from '../../Components/Button/Button'

const About = () => {
  const { t } = useTranslation()
  return <>
    <HeaderPage nameImg="about.jpg" positionImg="top 20% center" titleHero={`${t('title_about')}...`}/>
    <div className="section-decoration"/>
    <section className="container p-relative">
      <img src="/assets/flowers-about.svg" aria-hidden className="p-absolute container-deco"/>
      <div className="row wrap-reverse-sm">
        <div className="col-6-lg">
          <div className="img-section-2">
            <img src="/assets/about-me.jpg" alt="estelle rouillé"/>
          </div>
        </div>
        <div className="col-6-lg d-flex flex-column space-around">
          <h1 className="title-section text-uppercase">{t('my_background')}...</h1>
          <div className="content-section">
            <p>{t('my_background_content')}</p>
            <div className="btn-center-x">
              <Button isButton={false} label={t('buttonSection1')} size={'sm'} color="primary"/>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row wrap-sm section-bg">
        <div className="col-6-lg d-flex flex-column space-around">
          <h1 className="title-section text-uppercase">{t('the_beginning_business')} !</h1>
          <div className="content-section">
            <p>{t('the_beginning_business_content')}</p>
            <div className="btn-center-x">
              <Button isButton={false} label={t('buttonSection1')} size={'sm'} color="primary"/>
            </div>
          </div>
        </div>
        <div className="col-6-lg">
          <div className="img-full">
            <img src="/assets/startBusiness.jpg" alt="estelle rouillé"/>
          </div>
        </div>
      </div>
      <div className="row wrap-reverse-sm ">
        <div className="col-6-lg">
          <div className="img-full">
            <img src="/assets/evolution.jpg" alt="estelle rouillé"/>
          </div>
        </div>
        <div className="col-6-lg d-flex flex-column space-around">
          <h1 className="title-section text-uppercase">{t('my_progress')}...</h1>
          <div className="content-section">
            <p>{t('my_progress_content')}</p>
            <div className="btn-center-x">
              <Button isButton={false} label={t('buttonSection1')} size={'sm'} color="primary"/>
            </div>
          </div>
        </div>
      </div>
      <div className="row section-bg py3">
        <div className="col-12">
          <h1 className="title-section text-uppercase ">{t('share_passion')}...</h1>
          <div className="img-100 my2">
            <img src="/assets/passion.jpg" alt="atelier florale" className="d-flex m-auto"/>
          </div>
          <p>{t('shared_passion')}</p>
        </div>
      </div>
    </section>
  </>
}

export default About
