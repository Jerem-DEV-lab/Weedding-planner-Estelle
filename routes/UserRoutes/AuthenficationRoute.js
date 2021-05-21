const Authentification   = require('../../controller/User/Authentification')
const { checkUserLogin } = require('../../tools/Auth')
const router             = require('express').Router()

function createRouterAuthentification (req, res, next) {
  const AuthentificationController = new Authentification(req, res)
  
  router.post('/register', AuthentificationController.createUser)
  router.post('/login', AuthentificationController.loginUser)
  router.get('/logoutUser', AuthentificationController.logoutUser)
  router.post('/resetPassword', AuthentificationController.resetPassword)
  router.patch('/confirmResetPassword/:tokenReset', AuthentificationController.confirmResetPassword)
  router.get('/check', checkUserLogin)
  return router
}

module.exports = {
  createRouterAuthentification
}
