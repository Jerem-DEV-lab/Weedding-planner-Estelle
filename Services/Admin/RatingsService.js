const RatingSchema = require('../../db/Schema/RatingSchema')
const ObjectId     = require('mongoose').Types.ObjectId

module.exports.valideNotice = async (req, res) => {
  const Idnotice = req.params.noticeId
  if (!ObjectId.isValid(Idnotice)) {
    return res.status(404).json({ errors: 'ID inconnu' })
  }
  try {
    await RatingSchema.findByIdAndUpdate(Idnotice, { isPublished: true }, null, (err, docs) => {
      if (!err) {
        return res.status(200).json({ success: 'L\'avis a bien été valider' })
      }
    })
  } catch (e) {
    console.log(e)
    return res.status(500).json({ errors: 'Impossible de publier l\'avis pour le moment' })
  }
}
module.exports.deleteNotice = async (req, res) => {
  const Idnotice = req.params.noticeId
  if (!ObjectId.isValid(Idnotice)) {
    return res.status(404).json({ errors: 'ID inconnu' })
  }
  try {
    await RatingSchema.findByIdAndDelete(Idnotice, null, (err, docs) => {
      if (!err) {
        return res.status(200).json({ success: 'L\'avis a bien été supprimer' })
      }
    })
  } catch (e) {
    console.log(e)
    return res.status(500).json({ errors: 'Impossible de publier l\'avis pour le moment' })
  }
}
