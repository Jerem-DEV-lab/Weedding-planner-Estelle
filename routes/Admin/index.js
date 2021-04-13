const router     = require('express').Router()
const UserSchema = require('../../db/Schema/UserSchema')

function createRouterAdmin () {
  router.get('/admin/get-users', async (req, res) => {
    try {
      const users = await UserSchema.find({ roles: 'ROLE_USER' }).select('-password')
      return res.status(200).json({ users: users })
    } catch (e) {
      /*console.log(e)*/
      return res.status(400).json(e)
    }
  })
  return router
}

module.exports = {
  createRouterAdmin
}
