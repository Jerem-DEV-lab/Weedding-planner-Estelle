const { HashPassword }            = require('../../../tools/Auth')
const UserSchema                  = require('../../../db/Schema/UserSchema')
const { ComparePassword }         = require('../../../tools/Auth')
const { setTokenAuth }            = require('../../../tools/Auth')
const { ErrorAuthentification }   = require('../../../tools/Auth')
const maxAge                      = 24 * 60 * 60 * 1000
const transport                   = require('../../../Services/Lib/mailer')
const { checkTokenResetPassword } = require('../../../Services/Users')
const { templateMail }            = require('../../../Services/Admin/NewsletterService')
const { v1, v4 }                  = require('uuid')

class Authentification {
  constructor (request, response) {
    this.request  = request
    this.response = response
  }
  
  async createUser (request, response) {
    const { email, password, address, firstName, lastName, phone, birthday, civility, postalCode } = request.body
    
    const ROLE           = 'ROLE_USER'
    const hashedPassword = await HashPassword(password)
    try {
      const newUser = new UserSchema(
        {
          email,
          roles   : ROLE,
          password: hashedPassword,
          address,
          firstName,
          lastName,
          phone,
          birthday,
          civility,
          postalCode,
        
        })
      await newUser.save()
      return response.status(200).json({ message: 'Un email vient de vous être envoyé pour confirmer votre compte.' })
    } catch (e) {
      const errors = ErrorAuthentification(e)
      return response.status(400).json(errors)
    }
  }
  
  async loginUser (request, response) {
    const { email, password } = request.body
    const findUser            = await UserSchema.findOne({ email })
    try {
      if (!findUser) {
        return response.status(403).json({ error: 'Email ou mot de passe incorrect' })
      }
      const passwordMatch = await ComparePassword(password, findUser.password)
      if (passwordMatch) {
        const tokenAuth = setTokenAuth(findUser.roles, findUser._id, maxAge)
        response.cookie('jwt', 'Bearer' + ' ' + tokenAuth  , { httpOnly: true, maxAge })
        return response.status(200).json(
          {
            userAuthenticated: true,
            userId           : findUser._id,
            message          : 'Connexion réussie'
          })
      } else {
        return response.status(403).json({ error: 'Email ou mot de passe incorrect' })
      }
    } catch (e) {
      return response.status(500)
    }
  }
  
  async resetPassword (request, response) {
    const userEmail = request.body.email
    const findUser  = await UserSchema.findOne({ email: userEmail })
    try {
      if (!userEmail) {
        return response.status(404).json({ errors: 'Veuillez renseigner une adresse mail correcte' })
      }
      if (!findUser) {
        return response.status(404).json({ errors: 'Vérifier votre email' })
      }
      const token              = v1()
      const setTokenToUser     = await UserSchema.findOneAndUpdate({ email: userEmail }, { resetPasswordToken: token }, { new: true })
      const resetLinkWithToken = `${process.env.LINK_RESET_PASSWORD}${setTokenToUser.resetPasswordToken}`
      await transport(userEmail, findUser.firstName, "Réinitialisation mot de passe")
      return response.status(200).json({ success: 'Un email viens de vous être envoyer sur ' + userEmail })
    } catch (e) {
      return response.status(500)
    }
  }
  
  async checkTokenResetPassword (request, response) {
    const reqToken = request.params.tokenReset
    try {
      const userChecked = await checkTokenResetPassword(reqToken)
      return response.status(userChecked.statusCode).json(userChecked)
    } catch (e) {
      return response.status(e.statusCode).json(e)
    }
  }
  async confirmResetPassword (request, response) {
    const reqToken = request.params.tokenReset
    if (!reqToken) {
      return response.status(403).json({ errors: 'Invalid Token' })
    }
    if (!request.body.password) {
      return response.status(400).json({ errors: 'Merci de renseigner un mot de passe' })
    }
    const foundUser = await UserSchema.findOne({ resetPasswordToken: reqToken })
    if (!foundUser) {
      return response.status(403).json({ errors: 'Lien expirer' })
    }
    const hashedNewPassword      = await HashPassword(request.body.password)
    foundUser.resetPasswordToken = ''
    foundUser.password           = hashedNewPassword
    await foundUser.save({}, (err, docs) => {
      if (err) {
        return response.status(500).json({ errors: 'Impossible de réinitialisé votre mot de passe pour le moment' })
      }
      return response.status(200).json({ success: 'Vous pouvez désormais vous connectez avec votre nouveau mot de passe' })
    })
  }
  
  async logoutUser (request, response) {
    response.cookie('jwt', '', { maxAge: 1 })
    return response.status(200).json({ logout: true })
  }
}

module.exports = Authentification
