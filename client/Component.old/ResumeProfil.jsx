import React, { useContext } from 'react'
import { useTranslation }    from 'react-i18next'
import Button                from '../Button/Button'
import { UserContext }       from '../../Context/UserContext'

const ResumeProfil = () => {
  const { t }           = useTranslation()
  const userInfoContext = useContext(UserContext)
  return <>
    <div className="container-margin">
      <div className="update-profil">
        <Button isButton={false} label={t('label_edit')} size="md" color="update"
                link={`/profil/${userInfoContext._id}/gestion-compte`}/>
      </div>
      <div className="profil-content">
        <div className="user-info">
          <h2 className="text-strong">{t('your_information')} :</h2>
          <ul>
            <li className="text-medium">{userInfoContext.firstName} {userInfoContext.lastName}</li>
            <li className="text-medium">{userInfoContext.address}</li>
            <li className="text-medium">{userInfoContext.postalCode}</li>
            <li className="text-medium">{userInfoContext.phone}</li>
            <li className="text-medium">{userInfoContext.email}</li>
          </ul>
        </div>
        <div className="user-event">
          <h2 className="text-strong">Votre événement : </h2>
          <ul>
            <li className="text-medium">{t('date_event')} : <strong>Non renseigner</strong></li>
            <li className="text-medium">{t('type_event')} : <strong>Non renseigner</strong></li>
            <li className="text-medium">{t('numberOfGuests')} : <strong>Non renseigner</strong></li>
          </ul>
        </div>
        <div className="user-workshop">
          <h2 className="text-strong">{t('workshop')} : </h2>
          <ul>
            <li className="text-medium">{t('date_next_workshop')} : <strong>Non renseigner</strong></li>
            <li className="text-medium">{t('type_workshop')} : <strong>Non renseigner</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </>
}

export default ResumeProfil
