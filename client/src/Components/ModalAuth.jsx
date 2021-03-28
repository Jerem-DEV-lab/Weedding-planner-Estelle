import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch }        from 'react-router-dom'

const ModalAuth = () => {
  const [stateForm, setStateForm] = useState('')
  const useRoutesMatch            = useRouteMatch()
  useEffect(() => {
    setStateForm(useRoutesMatch.path.split('/')[1])
  }, [useRoutesMatch])
  const FormRegister = [
    { type: 'text', label: 'Nom : *', id: 'lastName', required: true },
    { type: 'date', label: 'Prénom : *', id: 'firstName', required: true },
    { type: 'text', label: 'Date de naissance : *', id: 'birthday', required: true },
    { type: 'password', label: 'Mot de passe : *', id: 'password', required: true },
    { type: 'password', label: 'Confirmez votre mot de passe : *', id: 'confirmPassword', required: true },
    { type: 'email', label: 'email', required: true, id: 'email' }
  ]
  const FormLogin    = [
    { type: 'text', label: 'Email : *', id: 'email' },
    { type: 'password', label: 'Mot de passe', id: 'password' },
  ]
  return <>
    <div className={`modal-auth ${stateForm}`}>
      <h1 className="h1 modal-title">Rejoindre Côté Campagne :</h1>
      {stateForm === 'register' ?
       <form className="form-register">
         <div className="grid-modal form-register">
           <fieldset className="form-group-civility">
             <legend className="col-form-label">Civilité : *</legend>
             <div className="form-check">
               <input id="civility" type="checkbox" className="form-check-input"/>
               <label htmlFor="civility" className="form-check-label">Mme</label>
             </div>
             <div className="form-check">
               <input id="civility" type="checkbox" className="form-check-input"/>
               <label htmlFor="civility" className="form-check-label">Mr</label>
             </div>
           </fieldset>
           {FormRegister.map(input => (
             input.type === 'text' || 'date' || 'email' ? <>
               <div className={`form-group-${input.id}`}>
                 <label htmlFor={input.id} className="form-label">{input.label}</label>
                 <input type={input.type} className="form-control"/>
               </div>
             </> : input.type === 'date'
           ))}
           <fieldset className="form-group-rgpd">
             <div className="form-check">
               <input id="civility" type="checkbox" className="form-check-input"/>
               <label htmlFor="civility" className="form-check-label">Accepter les <strong>
                 <a href="#">
                   conditions générale d'utilisation.
                 </a>
               </strong>
               </label>
             </div>
             <div className="form-check">
               <input id="civility" type="checkbox" className="form-check-input"/>
               <label htmlFor="civility" className="form-check-label">Recevoir la newsletters</label>
             </div>
           </fieldset>
           <div className="link-existing-account">
             <Link to="/login">
               Déjà un compte ? Se connecter...
             </Link>
           </div>
         </div>
         <div className="btn-group btn-center">
           <button className="btn btn-primary hover-outline">S'inscrire</button>
         </div>
       </form> : stateForm === 'login' && <form className="form-login">
        <div className="grid-modal form-login">
          {FormLogin.map(input => (
            <>
              <div className={`form-group-${input.id}`}>
                <label htmlFor={input.id} className="form-label">{input.label}</label>
                <input type={input.type} className="form-control"/>
              </div>
            </>
          ))}
          <div className="link-register-account">
            <Link to="/register">
              Pas encore de compte ? S'inscrire
            </Link>
          </div>
        </div>
        <div className="btn-group btn-center">
          <button className="btn btn-primary hover-outline">Se connecter</button>
        </div>
      </form>
      }
    </div>
  </>
}

export default ModalAuth
