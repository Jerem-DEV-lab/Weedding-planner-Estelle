const { createFormula, deleteFormula, updatePriceFormula } = require('../../Services/FormulaService')
const ObjectId                                             = require('mongoose').Types.ObjectId

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
  
  async formuleUpdate (request, response) {
    const formuleId = this.request.params.formulaId
    
    if (!formuleId || !ObjectId.isValid(formuleId)) {
      return this.response.status(400).json({ errors: 'ID de la formule inconnu' })
    }
    return updatePriceFormula(request, response)
  }
}

module.exports = AdminController
