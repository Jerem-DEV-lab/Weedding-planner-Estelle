import React, { useContext, useState }      from 'react'
import { useTranslation }                   from 'react-i18next'
import { FaLock, FaTimes, FaTrash, FaUser } from 'react-icons/fa'
import Button                               from '../Button/Button'
import { UserContext }                      from '../../Context/UserContext'
import axios                                from 'axios'
import 'toastr/build/toastr.min.css'
import Toastify                             from '../Toastify'

const ParamsAccount = () => {
  const { t }          = useTranslation()
  const userContext    = useContext(UserContext)
  const FormUpdateInfo = [
    { type: 'email', label: `${t('label_email')} : *`, id: 'email', required: true, value: userContext.email },
    { type: 'text', label: `${t('label_address')} : *`, id: 'address', required: true, value: '18 route du mariage' },
    { type: 'text', label: `${t('label_postal_code')} : *`, id: 'postalCode', required: true, value: '93780' },
    {
      type    : 'phone',
      label   : `${t('label_number_phone')} : *`,
      id      : 'phoneNumber',
      required: true,
      value   : '06.06.06.06.06'
    },
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
          <FormUpdateProfil
            icon={<FaUser/>}
            formEntries={FormUpdateInfo}
            title={t('my_informations')}
            labelBtn={t('update_my_informations')}
          />
          <FormChangePassword/>
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

function FormUpdateProfil ({ icon, title, formEntries = [], labelBtn, onsubmit }) {
  const { email }                                         = useContext(UserContext)
  const [stateFormInformations, setStateFormInformations] = useState(
    {
      email      : email,
      address    : '18 route du mariage',
      postalCode : '93780',
      phoneNumber: '06.06.06.06.08'
    })
  const onChangeInfos                                     = (e) => {
    setStateFormInformations({ ...stateFormInformations, [e.target.id]: e.target.value })
  }
  return <>
    <div className="name-form">
      {icon} {title}
    </div>
    <form className="mb2" onSubmit={() => onsubmit(stateFormInformations)}>
      <div className="container-form">
        {formEntries.map((entries, index) => <div className="form-group" key={index}>
          <label htmlFor={entries.id} className="form-label text-uppercase">{entries.label}</label>
          {entries.type === 'select' ? <select className="form-control" id={entries.id} onChange={onChangeInfos}>
                                       {entries.options.map((opt, index) => <option key={index}>{opt.label}</option>)}
                                     </select> :
           <input type={entries.type} placeholder={entries.placeholder} defaultValue={entries.value}
                  className="form-control"
                  id={entries.id}
                  onChange={onChangeInfos}/>}
        </div>)}
      </div>
      <Button isButton={true} type="submit" color="primary" className="d-flex mt2 ml-auto" label={labelBtn}/>
    </form>
  </>
}

function FormChangePassword () {
  const { t }             = useTranslation()
  const [state, setState] = useState(
    {
      actualPassword : '',
      newPassword    : '',
      confirmPassword: ''
    })
  
  const [formError, setFormError]         = useState({})
  const [submitSuccess, setSubmitSuccess] = useState('')
  const submitNewPassword                 = (e) => {
    e.preventDefault()
    setFormError({})
    axios.post('/changePassword', state)
         .then(res => {
           setSubmitSuccess(res.data.success)
           setState(
             {
               actualPassword : '',
               newPassword    : '',
               confirmPassword: ''
             })
         })
         .catch(err => {
           setFormError({ ...err.response.data })
         })
  }
  const onChangeInput                     = (e) => {
    setState({ ...state, [e.target.id]: e.target.value })
  }
  return <>
    <div className="name-form">
      <FaLock/> {t('label_password')}
    </div>
    {submitSuccess && <Toastify message={submitSuccess}/>}
    <form className="mb2" onSubmit={submitNewPassword}>
      <div className="container-form">
        <div className="form-group">
          <input type="password" placeholder="Ancien mot de passe"
                 className={`form-control ${formError.actualPassword ? 'is-invalid' : ''}`}
                 id="actualPassword"
                 value={state.actualPassword}
                 onChange={onChangeInput}
          />
          {formError.actualPassword &&
           <span className="is-invalid"> <FaTimes/> {formError.actualPassword}</span>
          }
        </div>
        <div className="form-group">
          <input type="password" placeholder="Nouveau mot de passe"
                 className={`form-control ${formError.newPassword ? 'is-invalid' : ''}`}
                 id="newPassword"
                 onChange={onChangeInput}
                 value={state.newPassword}
          />
          {formError.confirmPassword &&
           <span className="is-invalid"> <FaTimes/> {formError.newPassword}</span>
          }
        </div>
        <div className="form-group">
          <input type="password" placeholder="Nouveau mot de passe"
                 className={`form-control ${formError.confirmPassword ? 'is-invalid' : ''}`}
                 id="confirmPassword"
                 onChange={onChangeInput}
                 value={state.confirmPassword}
          />
          {formError.confirmPassword &&
           <span className="is-invalid"> <FaTimes/> {formError.confirmPassword}</span>
          }
        </div>
      </div>
      <Button isButton={true} type="submit" color="primary" className="d-flex mt2 ml-auto"
              label={t('update_my_password')}/>
    </form>
  </>
}

function ChangePreferenceProfil ({ icon, title, formEntries = [], labelBtn, onChange }) {
  
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
          <label htmlFor="newsLetterChoice" className="form-label">Recevoir la newsletter pour :</label>
          <select className="form-control" id="newsLetterChoice" onChange={onChange}>
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
