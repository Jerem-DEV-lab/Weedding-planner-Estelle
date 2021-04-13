const router          = require('express').Router()
const UserSchema      = require('../../db/Schema/UserSchema')
const adminController = require('../../controller/Admin/AdminController')
const { checkRole }   = require('../../tools/Auth')

function createRouterAdmin () {
  router.get('/admin/get-users', async (req, res) => {
    try {
      const users = await UserSchema.find({ roles: 'ROLE_USER' }).select('-password')
      return res.status(200).json({ users: users })
    } catch (e) {
      return res.status(400).json(e)
    }
  })
  router.post('/admin/create/formule', async (req, res) => {
    return adminController.formulaCreate(req, res)
  })
  router.delete('/admin/delete/formule/:formulaId', async (req, res) => {
    const adminService = new adminController(req, res)
    return adminService.formulaDelete(req, res)
  })
  router.patch('/admin/update/formule-price/:formulaId', (req, res) => {
    const adminService = new adminController(req, res)
    return adminService.formuleUpdate(req, res)
  })
  return router
}

module.exports = {
  createRouterAdmin
}
