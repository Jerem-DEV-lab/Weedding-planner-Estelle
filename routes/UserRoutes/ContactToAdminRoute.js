const Contact   = require('../../controller/User/Contact')
const router             = require('express').Router()

function createRouterContact (req, res, next) {
  router.post('/contact', Contact.sendMessageToAdmin)
  return router
}

module.exports = {
  createRouterContact
}
