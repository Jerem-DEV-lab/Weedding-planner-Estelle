const router                           = require('express').Router()
const UserSchema                       = require('../../db/Schema/UserSchema')
const adminController                  = require('../../controller/Admin/AdminController')
const User                             = require('../../controller/User/User')
const { deleteNotice }                 = require('../../Services/Admin/RatingsService')
const { valideNotice }                 = require('../../Services/Admin/RatingsService')
const { getAllRatingUnpublished }      = require('../../Services/Admin/NewsletterService')
const { deleteEmail }                  = require('../../Services/Admin/NewsletterService')
const { createWorkshop }               = require('../../Services/Admin/WorkshopService')
const { findUserByRegisteredWorkshop } = require('../../Services/Admin/WorkshopService')
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
  router.get('/admin/get/messages', checkRole('ROLE_ADMIN'), async (req, res) => {
    const adminService = new adminController(req, res)
    return adminService.getAllMessages(req, res)
  })
  router.get('/admin/get/news', checkRole('ROLE_ADMIN'), (req, res) => {
    return getNewsletters(req, res)
  })
  router.get('/admin/get/ratings', checkRole('ROLE_ADMIN'), (req, res) => {
    return getAllRatingUnpublished(req, res)
  })
  router.post('/admin/create/formule', checkRole('ROLE_ADMIN'), async (req, res) => {
    return adminController.formulaCreate(req, res)
  })
  router.delete('/admin/delete/formule/:formulaId', checkRole('ROLE_ADMIN'), async (req, res) => {
    const adminService = new adminController(req, res)
    return adminService.formulaDelete(req, res)
  })
  router.delete('/admin/delete/news/:newsId', checkRole('ROLE_ADMIN'), (req, res) => {
    return deleteNewsletter(req, res)
  })
  router.delete('/admin/delete/email', checkRole('ROLE_ADMIN'), (req, res) => {
    return deleteEmail(req, res)
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
  router.post('/admin/send/email', checkRole('ROLE_ADMIN'), async (req, res) => {
    const AdminController = new adminController(req, res)
    try {
      const sendMail = await AdminController.sendEmail()
      return res.status(200).json(sendMail)
    } catch (e) {
      console.log(e)
      return res.status(400).json(e)
    }
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
  router.put('/admin/users/banUser/:userId', checkRole('ROLE_ADMIN'), async (req, res) => {
    const authCookie    = req.cookies
    const authJwtCookie = authCookie.jwt
    if (!authJwtCookie || !authJwtCookie.startsWith('Bearer ')) {
      return res.status(400).json({ error: 'Vous devez être connecté' })
    }
    const adminService = new adminController(req, res, authJwtCookie.split('Bearer ')[1])
    try {
      const response = await adminService.banUser()
      return res.status(response.statusCode).json({ success: response.successMessage })
    } catch (e) {
      return res.status(e.statusCode).json({ errors: e.reason })
    }
  })
  router.patch('/admin/patch/ratings/:noticeId', checkRole('ROLE_ADMIN'), (req, res) => {
    return valideNotice(req, res)
  })
  
  router.delete('/admin/delete/ratings/:noticeId', checkRole('ROLE_ADMIN'), (req, res) => {
    return deleteNotice(req, res)
  })
  return router
}

module.exports = {
  createRouterAdmin
}
