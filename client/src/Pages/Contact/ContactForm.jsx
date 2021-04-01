import React, { useState }          from 'react'
import departementJSON              from '../../Components/departements-region.json'
import Button                       from '../../Components/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { requestApiContact }        from '../../actions/contactAction'
import { FaTimes }                  from 'react-icons/fa'
import Alert                        from '../../Components/Alert/Alert'

const ContactForm = () => {
  const [formContact, setFormContact] = useState({})
  const dispatch                      = useDispatch()
  const { formError, successSubmit }  = useSelector(state => state.contactReducers)
  
  const onChangeContact = (e) => {
    setFormContact({ ...formContact, [e.target.id]: e.target.value })
  }
  const handleSubmit    = (e) => {
    e.preventDefault()
    dispatch(requestApiContact(formContact))
  }
  return <>
    <form className="form-grid" onSubmit={handleSubmit}>
      {successSubmit &&
       <Alert type="success" message={`${successSubmit && successSubmit}`}/>}
      <div className="form-row">
        <div className={`form-group`}>
          <label htmlFor="lastName" className="form-label">Nom</label>
          <input type="text" id="lastName"
                 className={`form-control ${formError.lastName ? 'is-invalid' : ''}`}
                 placeholder="Dupont"
                 onChange={onChangeContact}/>
          {formError.lastName &&
           <span className="is-invalid"> <FaTimes/> {formError.lastName}</span>}
      
        </div>
        <div className={`form-group`}>
          <label htmlFor="firstName" className="form-label">Prénom</label>
          <input type="text" id="firstName" className={`form-control ${formError.firstName ? 'is-invalid' : ''}`}
                 placeholder="Christiane"
                 onChange={onChangeContact}/>
          {formError.firstName &&
           <span className="is-invalid"> <FaTimes/> {formError.firstName}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className={`form-group`}>
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className={`form-control ${formError.email ? 'is-invalid' : ''}`}
                 onChange={onChangeContact}
                 placeholder="example@example.com"
          />
          {formError.email &&
           <span className="is-invalid"> <FaTimes/> {formError.email}</span>}
        </div>
        <div className={`form-group`}>
          <label htmlFor="eventDep" className="form-label">Votre région</label>
          <select id="eventDep" className={`form-select ${formError.eventDep ? 'is-invalid' : ''}`}
                  onChange={onChangeContact}>
            <option defaultValue="Sélectionnez la région où aura lieu l'évènement...">Sélectionnez la région où aura
              lieu
              l'évènement...
            </option>
            {departementJSON.map(dep => <>
              <option value={`${dep.num_dep} - ${dep.region_name}`}>
                {dep.num_dep} - {dep.region_name}
              </option>
            </>)}
          </select>
          {formError.eventDep &&
           <span className="is-invalid"> <FaTimes/> {formError.eventDep}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className={`form-group`}>
          <label htmlFor="organizationName" className="form-label">Organisation</label>
          <select id="organizationName" className={`form-select ${formError.organizationName ? 'is-invalid' : ''}`}
                  onChange={onChangeContact}>
            <option defaultValue="Organisation / Service concernée">Organisation / Service concernée</option>
            <option value="Organisation de mariage">Organisation de mariage</option>
            <option value="Organisation d'une baby shower">Organisation d'une baby shower</option>
            <option value="Organisation d'une EVJF / EVJG">Organisation d'une EVJF / EVJG</option>
            <option value="Un atelier">Un atelier</option>
          </select>
          {formError.organizationName &&
           <span className="is-invalid"> <FaTimes/> {formError.organizationName}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="numberOfGuests" className="form-label ">Nombre d'invités</label>
          <input type="number" className={`form-control ${formError.numberOfGuests ? 'is-invalid' : ''}`}
                 id="numberOfGuests" onChange={onChangeContact}
                  placeholder="300"
          />
          {formError.numberOfGuests &&
           <span className="is-invalid"> <FaTimes/> {formError.numberOfGuests}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="budget" className="form-label">Votre budget</label>
          <input type="number" id="budget" className={`form-control ${formError.budget ? 'is-invalid' : ''}`}
                 placeholder="1 500 €"
                 onChange={onChangeContact}/>
          {formError.budget && <span className="is-invalid"> <FaTimes/> {formError.budget}</span>
          }
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">Un petit message pour mieux vous aidez ?</label>
        <textarea id="message" cols="6" rows="3" className={`form-control ${formError.message ? 'is-invalid' : ''}`}
                  placeholder="Message ..."
                  onChange={onChangeContact}/>
        {formError.message && <span className="is-invalid"> <FaTimes/> {formError.message} </span>}
      </div>
      <div className="d-flex justify-center">
        <Button label="Envoyer" color="primary" type="submit" className="mt2"/>
      </div>
    </form>
  </>
}

export default ContactForm
