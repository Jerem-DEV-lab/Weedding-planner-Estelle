const { setMessageIsRead }                                              = require('../../Services/Admin/ContactService')
const { getAllMessages }                                                = require('../../Services/Admin/ContactService')
const { sendNewsletter }                                                = require('../../Services/Admin/NewsletterService')
const { createFormula, deleteFormula, updatePriceFormula, getFormulas } = require('../../Services/Admin/FormulaService')
const ObjectId                                                          = require('mongoose').Types.ObjectId

class AdminController {
  constructor (request, response) {
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
  
  async sendNewsletter (request, response) {
    return sendNewsletter(request, response)
  }
  
  async getAllMessages (request, response) {
    return getAllMessages(request, response)
  }
  
  async setMessageIsRead (request, response) {
    return setMessageIsRead(request, response)
  }
}

module.exports = AdminController
