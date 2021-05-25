const { HashPassword }            = require('../../../tools/Auth')
const UserSchema                  = require('../../../db/Schema/UserSchema')
const { ComparePassword }         = require('../../../tools/Auth')
const { setTokenAuth }            = require('../../../tools/Auth')
const { ErrorAuthentification }   = require('../../../tools/Auth')
const maxAge                      = 24 * 60 * 60 * 1000
const { checkTokenResetPassword } = require('../../../Services/Users')
const sendMailSG                  = require('../../../Services/Lib/mailer')
const { v1 }                      = require('uuid')

class Authentification {
  constructor (request, response) {
    this.request  = request
    this.response = response
  }
  
  async createUser (request, response) {
    const { email, password, address, firstName, lastName, phone, postalCode } = request.body
    const ROLE                                                                 = 'ROLE_USER'
    const hashedPassword                                                       = await HashPassword(password)
    const token                                                                = v1()
    try {
      const newUser = new UserSchema(
        {
          email,
          roles              : ROLE,
          password           : hashedPassword,
          address,
          firstName,
          lastName,
          phone,
          postalCode,
          confirmAccountToken: token
        })
      await newUser.save()
      const linkConfirmAccount = `${process.env.DOMAIN}${process.env.LINK_CONFIRM_ACCOUNT}${token}`
      const options            = {
        dynamicData: {
          'link_confirm_account': linkConfirmAccount
        },
        template_id: 'd-79438c14ba0d4e76a44b47f25614f039'
      }
      await sendMailSG(options, email)
      return response.status(200).json({ message: 'Un email vient de vous être envoyé pour confirmer votre compte.' })
    } catch (e) {
      const errors = ErrorAuthentification(e)
      return response.status(400).json(errors)
    }
  }
  
  async setVerifiedAccount (req, res) {
    const userFind = await UserSchema.findOne(
      { confirmAccountToken: req.params.tokenAccount },
      'email _id' +
      ' accountVerified' +
      ' confirmAccountToken')
    return new Promise((resolve, reject) => {
      if (!userFind) {
        return reject({
                        errors: true, statusCode: 404, reason: 'Impossible d\'activer votre compte ! Lien invalide !' +
                                                               ' ❌'
                      })
      }
      userFind.confirmAccountToken = ''
      userFind.accountVerified     = true
      userFind.save()
      return resolve({ success: true, statusCode: 200, userFind })
    })
  }
  
  async loginUser (request, response) {
    const { email, password } = request.body
    const findUser            = await UserSchema.findOne({ email })
    
    try {
      if (!findUser) {return response.status(403).json({ error: 'Email ou mot de passe incorrect' })}
      
      if (findUser.userIsBan) {
        return response.status(403).json(
          { error: 'Votre compte a été banni pour non respect des conditions d\'utilisation' })
      }
      if (!findUser.accountVerified) {
        return response.status(403).json(
          {
            error: 'Vérifier vos e-mails pour activer votre compte. Penser a vérifier vos spams...'
          })
      }
      const passwordMatch = await ComparePassword(password, findUser.password)
      if (passwordMatch) {
        const tokenAuth = setTokenAuth(findUser.roles, findUser._id, maxAge)
        response.cookie('jwt', 'Bearer' + ' ' + tokenAuth, { httpOnly: true, maxAge })
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
      const resetLinkWithToken = `${process.env.DOMAIN}/mot-de-passe-oublier/${setTokenToUser.resetPasswordToken}`
      const options            = {
        dynamicData: {
          link_token: resetLinkWithToken
        },
        template_id: 'd-0202edc301c74545b652318102b0f780'
      }
      await sendMailSG(options, userEmail)
      return response.status(200).json({ success: 'Un email viens de vous être envoyer sur ' + userEmail })
    } catch (e) {
      return response.status(500).json(e)
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
