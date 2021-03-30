import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch }        from 'react-router-dom'
import { useDispatch, useSelector }   from 'react-redux'
import { requestApiAuth }             from '../actions/authenticatorAction'

const ModalAuth = () => {
  const [stateForm, setStateForm]       = useState('')
  const useRoutesMatch                  = useRouteMatch()
  const dispatch                        = useDispatch()
  const stateLogin                      = useSelector(state => state.userReducers)
  const [formRegister, setFormRegister] = useState(
    {
      civility       : '',
      lastName       : '',
      firstName      : '',
      birthday       : '',
      password       : '',
      confirmPassword: '',
      email          : '',
      newsLetter     : false,
    })
  const [formLogin, setFormLogin]       = useState(
    {
      password: '',
      email   : '',
    })
  useEffect(() => {
    setStateForm(useRoutesMatch.path.split('/fr/')[1])
  }, [useRoutesMatch])
  const FormRegister       = [
    { type: 'text', label: 'Nom : *', id: 'lastName', required: true },
    { type: 'text', label: 'Prénom : *', id: 'firstName', required: true },
    { type: 'date', label: 'Votre date d\'anniversaire : *', id: 'birthday', required: true },
    { type: 'password', label: 'Mot de passe : *', id: 'password', required: true },
    { type: 'password', label: 'Confirmez votre mot de passe : *', id: 'confirmPassword', required: true },
    { type: 'email', label: 'Email', required: true, id: 'email' }
  ]
  const FormLogin          = [
    { type: 'text', label: 'Email : *', id: 'email' },
    { type: 'password', label: 'Mot de passe', id: 'password' },
  ]
  const onChangeLogin      = (e) => {
    setFormLogin({ ...formLogin, [e.target.id]: e.target.value })
  }
  const onChangeRegister   = (e) => {
    if (e.target.type !== 'checkbox') {
      setFormLogin({ ...formLogin, [e.target.id]: e.target.value })
    } else {
      if (e.target.id === 'Mr' || e.target.id === 'Mme') {
        setFormRegister({ ...formRegister, civility: e.target.id })
      } else {
        setFormRegister({ ...formRegister, [e.target.id]: e.target.checked })
      }
    }
  }
  const submitFormLogin    = (e) => {
    e.preventDefault()
    dispatch(requestApiAuth(formLogin))
  }
  const submitFormRegister = (e) => {
    e.preventDefault()
    dispatch(requestApiAuth(formRegister))
  }
  return <>
    <div className={`modal-auth ${stateForm}`}>
      <h1 className="h1 modal-title">Rejoindre Côté Campagne :</h1>
      {stateLogin.isLoading && 'Chargement...'}
      {stateLogin.userInfo.message && stateLogin.userInfo.message}
      
      {stateForm === 'register' ?
       <form className="form-register" onSubmit={submitFormRegister}>
         <div className="grid-modal form-register">
           <fieldset className="form-group-civility">
             <legend className="col-form-label">Civilité : *</legend>
             <div className="form-check">
               <input id="Mme" type="checkbox" className="form-check-input"
                      defaultChecked={formRegister.civility === 'Mme' ? 'true' : 'false'} onChange={onChangeRegister}/>
               <label htmlFor="Mme" className="form-check-label">Mme</label>
             </div>
             <div className="form-check">
               <input id="Mr" type="checkbox" className="form-check-input" onChange={onChangeRegister}
                      defaultChecked={formRegister.civility === 'Mr'}/>
               <label htmlFor="Mr" className="form-check-label">Mr</label>
             </div>
           </fieldset>
           {FormRegister.map(input => (
             input.type === 'text' || 'date' || 'email' ? <>
               <div className={`form-group-${input.id}`}>
                 <label htmlFor={input.id} className="form-label">{input.label}</label>
                 <input type={input.type} id={input.id} className="form-control" onChange={onChangeRegister}/>
               </div>
             </> : input.type === 'date'
           ))}
           <fieldset className="form-group-rgpd">
             <div className="form-check">
               <input id="newsletter" type="checkbox" className="form-check-input" onChange={onChangeRegister}/>
               <label htmlFor="rgpd" className="form-check-label">Accepter les <strong>
                 <a href="#">
                   conditions générale d'utilisation.
                 </a>
               </strong>
               </label>
             </div>
             <div className="form-check">
               <input id="civility" type="checkbox" className="form-check-input" onChange={onChangeRegister}/>
               <label htmlFor="newsletter" className="form-check-label">Recevoir la newsletters</label>
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
       </form> : stateForm === 'login' && <form className="form-login" onSubmit={submitFormLogin}>
        <div className="grid-modal form-login">
          {FormLogin.map(input => (
            <>
              <div className={`form-group-${input.id}`}>
                <label htmlFor={input.id} className="form-label">{input.label}</label>
                <input type={input.type} className="form-control" id={input.id} onChange={onChangeLogin}/>
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
