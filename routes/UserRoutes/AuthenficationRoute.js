const Authentification   = require('../../controller/User/Authentification')
const { checkUserLogin } = require('../../tools/Auth')
const router             = require('express').Router()

function createRouterAuthentification (req, res, next) {
  const AuthentificationController = new Authentification(req, res)
  router.post('/register', AuthentificationController.createUser)
  router.post('/login', AuthentificationController.loginUser)
  router.get('/logoutUser', AuthentificationController.logoutUser)
  router.post('/resetPassword', AuthentificationController.resetPassword)
  router.put('/confirmResetPassword/:tokenReset', AuthentificationController.confirmResetPassword)
  router.get('/check-token-reset/:tokenReset', AuthentificationController.checkTokenResetPassword)
  router.put('/confirmAccount/:tokenAccount', async (req, res) => {
    try {
      const response = await AuthentificationController.setVerifiedAccount(req, res)
      return res.status(response.statusCode).json(response)
    } catch (e) {
      return res.status(e.statusCode).json(e)
    }
  })
  router.get('/check', checkUserLogin)
  return router
}

module.exports = {
  createRouterAuthentification
}
