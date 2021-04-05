import React, { useState }          from 'react'
import departementJSON              from '../../Components/departements-region.json'
import Button                       from '../../Components/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { requestApiContact }        from '../../actions/contactAction'
import { FaTimes }                  from 'react-icons/fa'
import Alert                        from '../../Components/Alert/Alert'
import { useTranslation }           from 'react-i18next'

const ContactForm = () => {
  const [formContact, setFormContact] = useState({})
  const dispatch                      = useDispatch()
  const { formError, successSubmit }  = useSelector(state => state.contactReducers)
  const { t }                         = useTranslation()
  const onChangeContact               = (e) => {
    setFormContact({ ...formContact, [e.target.id]: e.target.value })
  }
  const handleSubmit                  = (e) => {
    e.preventDefault()
    dispatch(requestApiContact(formContact))
  }
  return <>
    <form className="form-grid" onSubmit={handleSubmit}>
      {successSubmit &&
       <Alert type="success" message={`${successSubmit && successSubmit}`}/>}
      <div className="form-row">
        <div className={`form-group`}>
          <label htmlFor="lastName" className="form-label">{t('lastName')}</label>
          <input type="text" id="lastName"
                 className={`form-control ${formError.lastName ? 'is-invalid' : ''}`}
                 placeholder="Dupont"
                 onChange={onChangeContact}/>
          {formError.lastName &&
           <span className="is-invalid"> <FaTimes/> {t('error_requiredField')}</span>}
      
        </div>
        <div className={`form-group`}>
          <label htmlFor="firstName" className="form-label">{t('firstName')}</label>
          <input type="text" id="firstName" className={`form-control ${formError.firstName ? 'is-invalid' : ''}`}
                 placeholder="Christiane"
                 onChange={onChangeContact}/>
          {formError.firstName &&
           <span className="is-invalid"> <FaTimes/> {t('error_requiredField')}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className={`form-group`}>
          <label htmlFor="email" className="form-label">{t('email')}</label>
          <input type="email" id="email" className={`form-control ${formError.email ? 'is-invalid' : ''}`}
                 onChange={onChangeContact}
                 placeholder="example@example.com"
          />
          {formError.email &&
           <span className="is-invalid"> <FaTimes/> {t('error_emailField')}</span>}
        </div>
        <div className={`form-group`}>
          <label htmlFor="eventDep" className="form-label">{t('yourDepartment')}</label>
          <select id="eventDep" className={`form-select ${formError.eventDep ? 'is-invalid' : ''}`}
                  onChange={onChangeContact}>
            <option defaultValue="Sélectionnez la région où aura lieu l'évènement...">
              {t('helper_yourRegion')}
            </option>
            {departementJSON.map(dep => <>
              <option value={`${dep.num_dep} - ${dep.region_name}`}>
                {dep.num_dep} - {dep.region_name}
              </option>
            </>)}
          </select>
          {formError.eventDep &&
           <span className="is-invalid"> <FaTimes/> {t('error_regionField')}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className={`form-group`}>
          <label htmlFor="organizationName" className="form-label">{t('concernedOrganization')}</label>
          <select id="organizationName" className={`form-select ${formError.organizationName ? 'is-invalid' : ''}`}
                  onChange={onChangeContact}>
            <option defaultValue="Organisation / Service concernée" className="text-strong">{t('helper_organisation')}</option>
            <option value="Organisation de mariage">Organisation de mariage</option>
            <option value="Organisation d'une baby shower">Organisation d'une baby shower</option>
            <option value="Organisation d'une EVJF / EVJG">Organisation d'une EVJF / EVJG</option>
            <option value="Un atelier">Un atelier</option>
          </select>
          {formError.organizationName &&
           <span className="is-invalid"> <FaTimes/> {('error_concernedOrganizationField')}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="numberOfGuests" className="form-label ">{t('numberOfGuests')}</label>
          <input type="number" className={`form-control ${formError.numberOfGuests ? 'is-invalid' : ''}`}
                 id="numberOfGuests" onChange={onChangeContact}
                  placeholder="300"
          />
          {formError.numberOfGuests &&
           <span className="is-invalid"> <FaTimes/> {t('error_numberOfGuestsField')}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="budget" className="form-label">{t('yourBudget')}</label>
          <input type="number" id="budget" className={`form-control ${formError.budget ? 'is-invalid' : ''}`}
                 placeholder="1 500 €"
                 onChange={onChangeContact}/>
          {formError.budget && <span className="is-invalid"> <FaTimes/> {formError.budget}</span>
          }
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">{t('message')}</label>
        <textarea id="message" cols="6" rows="3" className={`form-control ${formError.message ? 'is-invalid' : ''}`}
                  placeholder={t('helper_message')}
                  onChange={onChangeContact}/>
        {formError.message && <span className="is-invalid"> <FaTimes/> {t('error_messageField')} </span>}
      </div>
      <div className="d-flex justify-center">
        <Button label={t('send')} color="primary" type="submit" className="mt2"/>
      </div>
    </form>
  </>
}

export default ContactForm
