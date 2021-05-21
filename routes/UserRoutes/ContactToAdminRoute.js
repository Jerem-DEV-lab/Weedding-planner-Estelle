const Contact   = require('../../controller/User/Contact')
const router             = require('express').Router()

function createRouterContact (req, res, next) {
  router.post('/contact', Contact.sendMessageToAdmin)
  router.put('/contact/read/:messageId', Contact.setMessageIsRead)
  router.delete('/contact/delete/:messageId', Contact.deleteMessage)
  return router
}

module.exports = {
  createRouterContact
}
