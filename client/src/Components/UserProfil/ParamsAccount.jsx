import React                       from 'react'
import { useTranslation }          from 'react-i18next'
import { FaLock, FaTrash, FaUser } from 'react-icons/fa'
import Button                      from '../Button/Button'

const ParamsAccount = () => {
  const { t }                = useTranslation()
  const FormUpdateInfo       = [
    { type: 'email', label: `${t('label_email')} : *`, id: 'email', required: true },
    { type: 'text', label: `${t('label_address')} : *`, id: 'address', required: true },
    { type: 'text', label: `${t('label_postal_code')} : *`, id: 'postalCode', required: true },
    { ype: 'phone', label: `${t('label_number_phone')} : *`, id: 'numberPhone', required: true },
  ]
  const FormUpdatePassword   = [
    { type: 'password', id: 'oldPassword', required: true },
    { type: 'password', id: 'newPassword', required: true },
    { type: 'password', id: 'confirmNewPassword', required: true },
  ]
  const FormUpdatePreference = [
    {
      type    : 'checkbox',
      id      : 'email_promo',
      label   : `${t('pref_code_promo')}`,
      required: true,
      subtitle: 'Notification'
    },
    {
      type    : 'checkbox',
      id      : 'email_interet',
      label   : `${t('pref_newsletter')}`,
      required: true,
      subtitle: t('my_interest')
    },
  ]
  return <>
    <div className="container-margin">
      <div className="grid-profil">
        <div className="col-left">
          <FormUpdateProfil icon={<FaUser/>} formEntries={FormUpdateInfo} title={t('my_informations')}
                            labelBtn={t('update_my_informations')}/>
          <FormUpdateProfil icon={<FaLock/>} formEntries={FormUpdatePassword} title={t('label_password')}
                            labelBtn={t('update_my_password')}/>
          <FormUpdateProfil icon={<FaLock/>} formEntries={FormUpdatePassword} title={t('label_password')}
                            labelBtn={t('update_my_password')}/>
        </div>
        <div className="col-right">
          <ChangePreferenceProfil icon={<FaUser/>} formEntries={FormUpdatePreference} title={t('label_preferences')}
                                  labelBtn={t('update_my_informations')}
          />
          <DeleteAccount/>
        </div>
      </div>
    </div>
  </>
}

export default ParamsAccount

function FormUpdateProfil ({ icon, title, formEntries = [], labelBtn, onChange }) {
  return <>
    <div className="name-form">
      {icon} {title}
    </div>
    <form className="mb2">
      <div className="container-form">
        {formEntries.map((entries, index) => <div className="form-group" key={index}>
          <label htmlFor={entries.id} className="form-label text-uppercase">{entries.label}</label>
          {entries.type === 'select' ? <select className="form-control">
                                       {entries.options.map((opt, index) => <option key={index}>{opt.label}</option>)}
                                     </select> :
           <input type={entries.type} className="form-control" onChange={onChange}/>}
        </div>)}
      </div>
      <Button isButton={true} type="submit" color="primary" className="d-flex mt2 ml-auto" label={labelBtn}/>
    </form>
  </>
}

function ChangePreferenceProfil ({ icon, title, formEntries = [], labelBtn, onChange }) {
  const newsLetter = [
    {
      type    : 'checkbox',
      id      : 'email_promo',
      label   : 'test',
      required: true,
      subtitle: 'Notification'
    },
  ]
  return <>
    <div className="name-form">
      {icon} {title}
    </div>
    <form className="mb2">
      <div className="container-form justify-start">
        {formEntries.map((entries, index) => <>
                           <div className="form-row">
                             <div className="form-subtitle">
                               <h3 className="text-strong">{entries.subtitle}</h3>
                             </div>
                             <div className="form-group" key={index}>
                               {entries.type === 'checkbox' && <>
                                 <label className="switch">
                                   <input type="checkbox" onChange={onChange}/>
                                   <span className="slider round"/>
                                 </label>
                                 <span className="ml1">{entries.label}</span>
                               </>}
                             </div>
                           </div>
                         </>
        )}
        
        <div className="form-group">
          <label htmlFor="test" className="form-label" id="newsLetterChoice">Recevoir la newsletter pour :</label>
          <select className="form-control">
            <option defaultValue="Sélectionner votre préférence">Sélectionner votre préférence...</option>
            <option value="Uniquement pour les codes promos">Uniquement pour les codes promos</option>
            <option value="Uniquement pour les ateliers">Uniquement pour les ateliers</option>
            <option value="Recevoir toutes les newsletters">Recevoir toutes les newsletters</option>
          </select>
        </div>
      </div>
      <Button isButton={true} type="submit" color="primary" className="d-flex mt2 ml-auto" label={labelBtn}/>
    </form>
  </>
}

function DeleteAccount () {
  return <div className="delete-account mb4">
    <h3 className="mb2"><FaTrash/> Supprimer votre compte</h3>
    <p>Vous n'êtes plus satisfait du contenu du site ? <br/> Ou vous souhaitez supprimer toutes les informations
      associées
      à ce compte ?</p>
    <button type="button" className="btn btn-danger btn-delete-account">
      <FaTrash className="mr1"/> Supprimer votre compte
    </button>
  </div>
}
