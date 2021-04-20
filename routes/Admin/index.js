const router                           = require('express').Router()
const UserSchema                       = require('../../db/Schema/UserSchema')
const adminController                  = require('../../controller/Admin/AdminController')
const { createWorkshop }               = require('../../Services/Admin/WorkshopService')
const { findUserByRegisteredWorkshop } = require('../../Services/Admin/WorkshopService')
const { sendEmail }                    = require('../../Services/Admin/SendMail')
const { updateNewsletter }             = require('../../Services/Admin/NewsletterService')
const { deleteNewsletter }             = require('../../Services/Admin/NewsletterService')
const { getNewsletters }               = require('../../Services/Admin/NewsletterService')
const { createNewsletter }             = require('../../Services/Admin/NewsletterService')
const { checkRole }                    = require('../../tools/Auth')

function createRouterAdmin () {
  router.get('/admin/get-users', checkRole('ROLE_ADMIN'), async (req, res) => {
    try {
      const users = await UserSchema.find({ roles: 'ROLE_USER' }).select('-password')
      return res.status(200).json({ users: users })
    } catch (e) {
      return res.status(400).json(e)
    }
  })
  router.get('/admin/get/formule',checkRole('ROLE_ADMIN'), async (req, res) => {
    const adminService = new adminController(req, res)
    return adminService.getFormules(req, res)
  })
  router.get('/admin/get/messages',checkRole('ROLE_ADMIN'), async (req, res) => {
    const adminService = new adminController(req, res)
    return adminService.getAllMessages(req, res)
  })
  router.get('/admin/get/news', checkRole('ROLE_ADMIN'), (req, res) => {
    return getNewsletters(req, res)
  })
  router.post('/admin/create/formule', checkRole('ROLE_ADMIN'), async (req, res) => {
    return adminController.formulaCreate(req, res)
  })
  router.delete('/admin/delete/formule/:formulaId',checkRole('ROLE_ADMIN'),  async (req, res) => {
    const adminService = new adminController(req, res)
    return adminService.formulaDelete(req, res)
  })
  router.delete('/admin/delete/news/:newsId', checkRole('ROLE_ADMIN'), (req, res) => {
    return deleteNewsletter(req, res)
  })
  router.patch('/admin/update/formule-price/:formulaId', checkRole('ROLE_ADMIN'), (req, res) => {
    const adminService = new adminController(req, res)
    return adminService.formuleUpdate(req, res)
  })
  router.patch('/admin/update/messages/:messageId', checkRole('ROLE_ADMIN'), (req, res) => {
    const adminService = new adminController(req, res)
    return adminService.setMessageIsRead(req, res)
  })
  router.patch('/admin/update/news/:newsId', checkRole('ROLE_ADMIN'), (req, res) => {
    return updateNewsletter(req, res)
  })
  router.post('/admin/send/news', checkRole('ROLE_ADMIN'), (req, res) => {
    const adminService = new adminController(req, res)
    return adminService.sendNewsletter(req, res)
  })
  router.post('/admin/send/email', checkRole('ROLE_ADMIN'), (req, res) => {
    return sendEmail(req, res)
  })
  router.post('/admin/create/news', checkRole('ROLE_ADMIN'), (req, res) => {
    return createNewsletter(req, res)
  })
  router.post('/admin/workshop/create', checkRole('ROLE_ADMIN'), (req, res) => {
    return createWorkshop(req, res)
  })
  router.get('/admin/users/manage-workshop', checkRole('ROLE_ADMIN'), (req, res) => {
    return findUserByRegisteredWorkshop(req, res)
  })
  return router
}

module.exports = {
  createRouterAdmin
}
