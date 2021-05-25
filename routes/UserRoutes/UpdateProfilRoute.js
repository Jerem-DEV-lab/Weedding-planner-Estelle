const router                       = require('express').Router()
const User                         = require('../../controller/User/User')
const { ErrorInfoUser }            = require('../../tools/UserTools')
const { isEmpty, ComparePassword } = require('../../tools/Auth')

function createRouterUpdateProfil () {
  router.post('/user/changePassword', async (req, res) => {
    const authCookie    = req.cookies
    const authJwtCookie = authCookie.jwt
    if (!authJwtCookie || !authJwtCookie.startsWith('Bearer ')) {
      return res.status(400).json({ error: 'Vous devez être connecté' })
    }
    try {
      let { actualPassword, newPassword, confirmPassword } = req.body
    
      let errors         = {
        actualPassword        : '',
        newPassword           : '',
        confirmPassword       : ''
      }
      const user         = new User(authJwtCookie.split('Bearer ')[1])
      const passwordInDB = await user.getEncryptedPassword()
      const isMatch      = await ComparePassword(actualPassword, passwordInDB)
      
      if (!isMatch) {
        errors.actualPassword= 'Mot de passe incorrecte !'
        return res.status(400).json(errors)
      }
      
      if (isEmpty(newPassword) && isEmpty(confirmPassword)) {
        errors.newPassword     = 'Ce champs est requis !'
        errors.confirmPassword = 'Ce champs est requis !'
        return res.status(400).json(errors)
      } else if (isEmpty(newPassword)) {
        errors.newPassword = 'Ce champs est requis !'
        return res.status(400).json(errors)
      } else if (isEmpty(confirmPassword)) {
        errors.confirmPassword = 'Ce champs est requis !'
        return res.status(400).json(errors)
      }
      
      if (newPassword !== confirmPassword) {
        errors.newPassword     = 'Vos mots de passe ne correspondent pas !'
        errors.confirmPassword = 'Vos mots de passe ne correspondent pas !'
        return res.status(400).json(errors)
      }
  
      await user.changePassword(newPassword)
  
      return res.status(200).json({ success: 'Votre nouveau mot de passe à bien été modifier' })
    } catch (e) {
      return res.status(500).json({ errors: 'Impossible de communiquer pour le moment' })
    }
  })
  
  router.post('/user/changeInfo', async (req, res) => {
    const authCookie    = req.cookies
    const authJwtCookie = authCookie.jwt
    if (!authJwtCookie || !authJwtCookie.startsWith('Bearer ')) {
      return res.status(400).json({ error: 'Vous devez être connecté' })
    }
    try {
      let { email, address, postalCode, phone } = req.body
      
      const user  = new User(authJwtCookie.split('Bearer ')[1])
      const error = await ErrorInfoUser(req.body)
      if (!isEmpty(error.postalCode) || !isEmpty(error.address) || !isEmpty(error.email) || !isEmpty(error.phone)) {
        return res.status(200).json(error)
      }
      return res.status(200).json({ success: await user.updateProfilInfo({ ...req.body }) })
    } catch (e) {
      return res.status(400).json({errors: "Impossible de modifier votre mot de passe pour le moment"})
    }
  })
  
  router.delete('/user/delete-account', async (req, res) => {
    const authCookie    = req.cookies
    const authJwtCookie = authCookie.jwt
    if (!authJwtCookie || !authJwtCookie.startsWith('Bearer ')) {
      return res.status(400).json({ error: 'Vous devez être connecté' })
    }
    try {
      const user         = new User(authJwtCookie.split('Bearer ')[1])
      const passwordInDB = await user.getEncryptedPassword()
      const isMatch      = await ComparePassword(req.body.userPassword, passwordInDB)
      if (!isMatch) {
        return res.status(403).json({ error: true, reason: 'Votre mot de passe est incorrecte' })
      }
      const deleteAccount = await user.deleteAccount()
      res.cookie('jwt', '', { maxAge: 1 })
      return res.status(deleteAccount.statusCode).json({ success: deleteAccount.successMsg })
    } catch (e) {
      console.log(e)
    }
  })
  
  router.put('/user/change-avatar', async (req, res) => {
    const authCookie    = req.cookies
    const authJwtCookie = authCookie.jwt
    if (!authJwtCookie || !authJwtCookie.startsWith('Bearer ')) {
      return res.status(401).json({ errors: 'Vous devez être connecté' })
    }
    try {
      const user         = new User(authJwtCookie.split('Bearer ')[1])
      const changeAvatar = await user.changeAvatar(req.body.avatarPath)
      return res.status(changeAvatar.statusCode).json({ success: changeAvatar.successMessage })
    } catch (e) {
      return res.status(e.statusCode).json({ errors: e.reason })
    }
  })
  
  router.put('/user/change-preference-new', async (req, res) => {
    const authCookie                          = req.cookies
    const authJwtCookie                       = authCookie.jwt
    const user                                = new User(authJwtCookie.split('Bearer ')[1])
    const { preferenceName, preferenceValue } = req.body
    try {
      if (!preferenceName && !preferenceValue) {
        return res.status(403).json({ errors: 'Vous devez sélectionner une préférence' })
      }
      const response = await user.changeInfoPref(preferenceName, preferenceValue)
      return res.status(response.statusCode).json(response.docs)
    } catch (e) {
      console.log(e)
    }
  })
  return router
}

module.exports = {
  createRouterUpdateProfil
}
