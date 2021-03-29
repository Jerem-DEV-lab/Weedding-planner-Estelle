import React from 'react'

const Card = ({ formuleTitle = '', cardImg = '', icons = '', titleContent, cardContent }) => {
  return <>
    <div className="card card-presta">
      {formuleTitle && <div className="card-title text-center">{formuleTitle}</div>}
      {cardImg && <div className="card-img" style={{ backgroundImage: `url("/assets/${cardImg}")` }}/>}
      {icons && <div className="card-icons">{icons}</div>}
      {titleContent && <div className="card-title-content">
        <h3 className="text-center">{titleContent}</h3>
      </div>}
      <div className="card-content">
        <p>
          {cardContent}
        </p>
      </div>
    </div>
  </>
}

export default Card
