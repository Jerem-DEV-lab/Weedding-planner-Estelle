import React              from 'react'
import { useTranslation } from 'react-i18next'
import Button             from '../Button/Button'

const ResumeProfil = () => {
  const { t } = useTranslation()
  return <>
    <div className="container-margin">
      <div className="update-profil">
        <Button isButton={false} label="Modifier" size="md" color="update"/>
      </div>
      <div className="profil-content">
        <div className="user-info">
          <h2 className="text-strong">Vos coordonnées : </h2>
          <ul>
            <li className="text-medium">Sandrine Dupont</li>
            <li className="text-medium">18 route du mariage</li>
            <li className="text-medium">92 150 Bordeaux</li>
            <li className="text-medium">06.00.00.00.00</li>
            <li className="text-medium">sandrineDupont@test.fr</li>
          </ul>
        </div>
        <div className="user-event">
          <h2 className="text-strong">Votre événement : </h2>
          <ul>
            <li className="text-medium">Date l'évènement : <strong>Non renseigner</strong></li>
            <li className="text-medium">Type d'évènement : <strong>Non renseigner</strong></li>
            <li className="text-medium">Nombre d'invités : <strong>Non renseigner</strong></li>
          </ul>
        </div>
        <div className="user-workshop">
          <h2 className="text-strong">Vos ateliers : </h2>
          <ul>
            <li className="text-medium">Date du prochaine atelier : <strong>Non renseigner</strong></li>
            <li className="text-medium">Type du prochaine atelier : <strong>Non renseigner</strong></li>
            <li className="text-medium">Nombres d'invités : <strong>Non renseigner</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </>
}

export default ResumeProfil
