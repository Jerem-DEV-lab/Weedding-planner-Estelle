const User                                                              = require('../User/User')
const { setMessageIsRead }                                              = require('../../Services/Admin/ContactService')
const { getAllMessages }                                                = require('../../Services/Admin/ContactService')
const { sendNewsletter }                                                = require('../../Services/Admin/NewsletterService')
const { createFormula, deleteFormula, updatePriceFormula, getFormulas } = require('../../Services/Admin/FormulaService')
const ObjectId                                                          = require('mongoose').Types.ObjectId
const UserSchema                                                        = require('../../db/Schema/UserSchema')
const { isEmpty }                                                       = require('../../tools/Auth/index')

class AdminController extends User {
  constructor (request, response, token) {
    super(token)
    this.request  = request
    this.response = response
  }
  
  static formulaCreate (request, response) {
    return createFormula(request, response)
  }
  
  async formulaDelete (request, response) {
    const formuleId = this.request.params.formulaId
    
    if (!formuleId || !ObjectId.isValid(formuleId)) {
      return this.response.status(400).json({ errors: 'ID de la formule inconnu' })
    }
    return deleteFormula(request, response)
  }
  
  async getFormules (request, response) {
    return getFormulas(request, response)
  }
  
  async formuleUpdate (request, response) {
    const formuleId = this.request.params.formulaId
    const { price } = request.body
    if (!formuleId || !ObjectId.isValid(formuleId)) {
      return this.response.status(400).json({ errors: 'ID de la formule inconnu' })
    }
    if (!price) {
      return this.response.status(404).json({ errors: 'Vous devez renseigner un prix' })
    }
    return updatePriceFormula(request, response)
  }
  
  async sendNewsletter () {
    const request = this.request.body
    if (isEmpty(request.users)) {
      return this.response.status(403).json({ errors: 'Vous devez sélectionner un ou plusieurs utilisateur(s)' })
    }
    if (isEmpty(request.titleNews) && isEmpty(request.contentNews) && isEmpty(request.subjectEmail)) {
      return this.response.status(403).json({ errors: 'Vous devez choisir une newsletter' })
    }
    try {
      await sendNewsletter(this.request, this.response)
    } catch (e) {
      console.log(e)
      return this.response.status(500).json({ errors: 'Impossible d\'envoyer la news pour le moment' })
    }
  }
  
  async getAllMessages (request, response) {
    return getAllMessages(request, response)
  }
  
  async setMessageIsRead (request, response) {
    return setMessageIsRead(request, response)
  }
  
  checkIsNotAdmin (role) {
    return !role.includes('ROLE_ADMIN')
  }
  
  async banUser () {
    const request  = this.request.body
    const userId   = this.request.params.userId
    const findUser = await UserSchema.findById({ _id: userId }, '_id userIsBan roles', {})
    return new Promise((resolve, reject) => {
      if (!this.checkIsNotAdmin(findUser.roles)) {
        return reject({ errors: true, reason: 'Vous ne pouvez pas bannir un administrateur', statusCode: 403 })
      }
      if (!request || typeof request.userIsBan !== 'boolean') {
        return reject({ errors: true, statusCode: 403, reason: 'Vous devez bannir ou débannir l\'utilisateur' })
      }
      findUser.userIsBan = request.userIsBan
      findUser.save()
      return resolve(
        {
          success       : true,
          successMessage: request.userIsBan ? 'Utilisateur banni' : 'Utilisateur débanni',
          statusCode    : 201
        })
    })
  }
}

module.exports = AdminController
