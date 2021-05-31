const RatingSchema        = require('../../db/Schema/RatingSchema')
const UserSchema          = require('../../db/Schema/UserSchema')
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
    return res.status(404).json(e)
  }
}

module.exports.checkTokenResetPassword = async (token) => {
  const userCheckedToken = await UserSchema.findOne({ resetPasswordToken: token },
                                                    'resetPasswordToken email userIsBan', {})
  return new Promise((resolve, reject) => {
    if (!userCheckedToken) {
      return reject({ errors: true, statusCode: 403, reason: 'Lien expiré', valideToken: false })
    }
    if (userCheckedToken.userIsBan) {
      return reject({ errors: true, statusCode: 404, reason: 'Votre compte à été banni', valideToken: false })
    }
    if (!userCheckedToken.resetPasswordToken) {
      return reject({ errors: true, statusCode: 403, reason: 'Lien expiré', valideToken: false })
    }
    if (userCheckedToken.resetPasswordToken !== token) {
      return reject({ errors: true, statusCode: 403, reason: 'Token invalid', valideToken: false })
    }
    return resolve({ success: true, statusCode: 200, docs: userCheckedToken, valideToken: true })
  })
}
