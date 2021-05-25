const UserSchema = require('../../db/Schema/UserSchema')
const jwt        = require('jsonwebtoken')
const { HashPassword } = require('../../tools/Auth')

class User {
  constructor (token) {
    this.token    = token
    this.userInfo = this.getParsedToken()
  }
  
  async updateProfilInfo (newInfo) {
    return UserSchema.findByIdAndUpdate({ _id: this.userInfo.userId }, newInfo, { new: false }, (err, doc) => {
      return !err ? doc : err
    }).select('-password')
    
  }
  
  async getEncryptedPassword () {
    const { password } = await UserSchema.findById({ _id: this.userInfo.userId })
    return password
  }
  
  getParsedToken () {
    return jwt.verify(this.token, process.env.SECRET_KEY, {}, (err, decodedToken) => {
      if (!err) {
        return decodedToken
      } else {
        return new Error('Le token est invalide')
      }
    })
  }
  
  async changePassword (newPassword) {
    const newPasswordHashed = await HashPassword(newPassword)
    return UserSchema.findByIdAndUpdate({ _id: this.userInfo.userId }, {
      password: newPasswordHashed
    }, { new: true })
  }
  
  static logoutUser (req, res) {
    return res.cookie('jwt', '', { maxAge: 1 })
  }
  
  deleteAccount () {
    return new Promise((resolve, reject) => {
      UserSchema.findByIdAndDelete({ _id: this.userInfo.userId })
                .then(() => (resolve(
                    { success: true, successMsg: 'Votre compte à bien été supprimer', statusCode: 200 })
                ))
                .catch((err) => (
                  reject({ error: true, statusCode: 403, reason: 'Impossible de supprimer votre compte' })))
    })
  }
  
  async changeAvatar (pathAvatar) {
    let responseHelper = {
      errors        : false,
      reason        : '',
      success       : false,
      successMessage: '',
      statusCode    : null
    }
    return new Promise((resolve, reject) => {
      if (!pathAvatar) {
        return reject(
          {
            ...responseHelper,
            errors: true,
            statusCode: 403,
            reason: 'Vous devez sélectionner une image',
          })
      }
      UserSchema.findByIdAndUpdate(this.userInfo.userId, {
        userAvatar: pathAvatar
      }, { new: true }, (err, docs) => {
        if (!err) {
          return resolve(
            {
              ...responseHelper,
              success       : true,
              successMessage: 'Votre avatar a bien été changer',
              statusCode: 201,
            })
        } else {
          return reject(
            {
              ...responseHelper,
              errors    : false,
              reason    : 'Impossible de modifier votre avatar pour le moment',
              statusCode: 500,
            }
          )
        }
      })
    })
  }
  
  async changeInfoPref (preferenceName, preferenceValue) {
    return new Promise((resolve, reject) => {
      if (preferenceName === 'newsletter') {
        UserSchema.findByIdAndUpdate(this.userInfo.userId, { newsLetter: preferenceValue }, { new: true }, (err, docs) => {
          if (!err) {
            return resolve(
              {
                success: true, statusCode: 200, docs, successMsg: 'Votre préférence à correctement été mis a jour'
              })
          } else {
            return reject({ errors: true, statusCode: 403, reason: 'Impossible de mettre à jour votre profil', })
          }
        }).select('newsLetter')
      }
    })
  }
}

module.exports = User
