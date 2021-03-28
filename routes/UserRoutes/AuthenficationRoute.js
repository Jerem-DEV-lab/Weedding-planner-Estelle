const Authentification = require('../../controller/User/Authentification')
const router           = require('express').Router()

function createRouterAuthentification (req, res) {
  const AuthentificationController = new Authentification(req, res)
  
  router.post('/register', AuthentificationController.createUser)
  router.post('/login', AuthentificationController.loginUser)
  return router
}

module.exports = {
  createRouterAuthentification
}
