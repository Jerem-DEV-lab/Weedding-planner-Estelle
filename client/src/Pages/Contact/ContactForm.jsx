import React, { useState }          from 'react'
import departementJSON              from '../../Components/departements-region.json'
import Button                       from '../../Components/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { requestApiContact }        from '../../actions/contactAction'

const ContactForm = () => {
  const [formContact, setFormContact] = useState({})
  const dispatch                      = useDispatch()
  const contactState                  = useSelector(state => state.contactReducers)
  
  const onChangeContact = (e) => {
    setFormContact({ ...formContact, [e.target.id]: e.target.value })
  }
  const handleSubmit     = (e) => {
    e.preventDefault()
    dispatch(requestApiContact(formContact))
  }
  return <>
    <form className="form-grid" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className={`form-group`}>
          <label htmlFor="lastName" className="form-label">Nom</label>
          <input type="text" id="lastName" className="form-control" onChange={onChangeContact}/>
        </div>
        <div className={`form-group`}>
          <label htmlFor="firstName" className="form-label">Prénom</label>
          <input type="text" id="firstName" className="form-control" onChange={onChangeContact}/>
        </div>
      </div>
      <div className="form-row">
        <div className={`form-group`}>
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-control" onChange={onChangeContact}/>
        </div>
        <div className={`form-group`}>
          <label htmlFor="eventDep" className="form-label">Votre région</label>
          <select id="eventDep" className="form-select" onChange={onChangeContact}>
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
        </div>
      </div>
      <div className="form-row">
        <div className={`form-group`}>
          <label htmlFor="organizationName" className="form-label">Organisation</label>
          <select id="organizationName" className="form-select" onChange={onChangeContact}>
            <option defaultValue="Organisation / Service concernée">Organisation / Service concernée</option>
            <option value="Organisation de mariage">Organisation de mariage</option>
            <option value="Organisation d'une baby shower">Organisation d'une baby shower</option>
            <option value="Organisation d'une EVJF / EVJG">Organisation d'une EVJF / EVJG</option>
            <option value="Un atelier">Un atelier</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="numberOfGuests" className="form-label">Nombre d'invités</label>
          <input type="number" className="form-control" id="numberOfGuests" onChange={onChangeContact}/>
        </div>
        <div className="form-group">
          <label htmlFor="budget" className="form-label">Votre budget</label>
          <input type="number" id="budget" className="form-control" onChange={onChangeContact}/>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">Un petit message pour mieux vous aidez ?</label>
        <textarea id="message" cols="6" rows="3" className="form-control" onChange={onChangeContact}/>
      </div>
      <div className="d-flex justify-center">
        <Button label="Envoyer" color="primary" type="submit" className="mt2"/>
      </div>
    </form>
  </>
}

export default ContactForm
