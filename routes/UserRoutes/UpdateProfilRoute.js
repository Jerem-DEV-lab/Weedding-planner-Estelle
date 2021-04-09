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
      console.log('err', '=>>>>>', e)
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
      console.log('err', '=>>>>>', e)
    }
  })
  
  router.get('/user/delete-account', async (req, res) => {
    const authCookie    = req.cookies
    const authJwtCookie = authCookie.jwt
    if (!authJwtCookie || !authJwtCookie.startsWith('Bearer ')) {
      return res.status(400).json({ error: 'Vous devez être connecté' })
    }
    
    try {
      const user          = new User(authJwtCookie.split('Bearer ')[1])
      const deleteAccount = await user.deleteAccount()
      if (deleteAccount.success) {
        User.logoutUser(req, res)
        return res.status(200).json(deleteAccount)
      }
    } catch (e) {
      console.log(e)
    }
  })
  return router
}

module.exports = {
  createRouterUpdateProfil
}
