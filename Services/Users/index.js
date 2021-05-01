const RatingSchema        = require('../../db/Schema/RatingSchema')
const { ErrorRatingUser } = require('../../tools/UserTools')

module.exports.sendRating = async (req, res) => {
  try {
    const newRating = new RatingSchema(req.body)
    await newRating.save()
    return res.status(201).json({ success: 'Votre avis sera soumis à une vérification ', newRating })
  } catch (e) {
    let errors = ErrorRatingUser(e)
    console.log(e)
    return res.status(500).json(errors)
  }
}

module.exports.getAllRatings = async (req, res) => {
  try {
    await RatingSchema.find({ isPublished: true }, (err, docs) => {
      if (!err) {
        return res.status(200).json(docs)
      } else {
        return res.status(404).json({ errors: 'Impossible de récupérer les avis pour le moment' })
      }
    })
  } catch (e) {
    console.log(e)
    return res.status(404).json(e)
  }
}
