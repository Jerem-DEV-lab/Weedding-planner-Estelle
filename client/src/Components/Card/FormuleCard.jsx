import React from 'react'

const FormuleCard = ({
                       formuleTitle = '',
                       pathImg = '',
                       altTag = '',
                       cardTitle = '',
                       cardSubtitle = '',
                       cardContent,
                       isImportant = false,
                       formuleInfo = '',
                       formuleOfferInfo = '',
                       formulePrice = ''
                     }) => {
  return <>
    <div className={`card card-formule ${isImportant ? 'card-important' : ''}`}>
      <header className="formule-card-header">
        <h1 className={`header-title ${isImportant ? 'title-important' : ''}`}>{formuleTitle}</h1>
        <div className={`formule-img ${isImportant ? 'is-important' : ''}`}>
          <img src={pathImg} alt={altTag}/>
        </div>
      </header>
      <section className="formule-card-content">
        {cardTitle &&
         <h2 className={`${isImportant ? 'is-important' : ''}`}>{cardTitle}</h2>
        }
        {cardSubtitle &&
         <h3 className={`${isImportant ? 'is-important' : ''}`}>{cardSubtitle}</h3>
        }
        <p className="formule-content">{cardContent}</p>
      </section>
      <div className="formule-card-footer">
        <span className="formule-info">{formuleInfo}</span>
        <h4 className="formule-prices">{formulePrice} <span style={{ color: 'var(--color-primary)' }}>*</span></h4>
        <span className="formule-offert"> <span
          style={{ color: 'var(--color-primary)', fontWeight: '600' }}>*</span> {formuleOfferInfo}</span>
      </div>
    </div>
  </>
}

export default FormuleCard
