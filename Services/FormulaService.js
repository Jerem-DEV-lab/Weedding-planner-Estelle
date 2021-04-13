const FormulaSchema = require('../db/Schema/FormulaSchema')

module.exports.createFormula = async (req, res) => {
  const { type, image, name, title, descriptif, price, offerInfo, formuleSection } = req.body
  
  const newFormula = new FormulaSchema({ type, image, name, title, descriptif, price, offerInfo, formuleSection })
  
  await newFormula.save((err, doc) => {
    if (!err) {
      return res.status(200).json({ success: doc, message: 'La formule a bien été créer !' })
    }
    return res.status(404).json({ errors: err })
  })
}

module.exports.deleteFormula = async (req, res) => {
  const formulaId = req.params.formulaId
  await FormulaSchema.findByIdAndDelete({ _id: formulaId }, {}, (err, docs) => {
    if (!err && !docs) {
      return res.status(404).json({ errors: 'Aucun ID ne correspond à une formule' })
    }
    if (err) {
      return res.status(400).json({ errors: 'Impossible de supprimer la formule pour le moment' })
    }
    return res.status(200).json({ success: 'La formule a bien été supprimer !', docs: docs })
  })
}

module.exports.updatePriceFormula = async (req, res) => {
  const formulaId = req.params.formulaId
  const { price } = req.body
  await FormulaSchema.findByIdAndUpdate({ _id: formulaId }, { price }, { new: true }, (err, doc) => {
    if (!err && !doc) {
      return res.status(404).json({ errors: 'Aucun ID ne correspond à une formule' })
    }
    if (err) {
      return res.status(400).json({ errors: 'Impossible de supprimer la formule pour le moment' })
    }
    return res.status(200).json({ success: 'La formule a bien été supprimer !', doc: doc })
  })
}
