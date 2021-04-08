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
        console.log(err)
        return new Error('Le token est invalide')
      }
    })
  }
  
  async changePassword (newPassword) {
    const newPasswordHashed = await HashPassword(newPassword)
    return UserSchema.findByIdAndUpdate({ _id: this.userInfo.userId }, {
      password: newPasswordHashed
    }, { new: false })
  }
}

module.exports = User
