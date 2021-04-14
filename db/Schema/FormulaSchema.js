const { Schema, model } = require('mongoose')

const FormulaSchema = new Schema(
  {
      type          : { type: String, required: true },
      image         : { type: String, default: '' },
      name          : { type: String, required: true },
      descriptif    : { type: String, required: true },
      price         : { type: Number, required: true },
      offerInfo     : { type: String, required: true },
      formuleSection: { type: String, defaultValue: 'UNDEFINED' },
  })

module.exports = model('formule', FormulaSchema)
