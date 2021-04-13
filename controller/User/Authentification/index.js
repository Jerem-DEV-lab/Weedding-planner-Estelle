const { HashPassword }          = require('../../../tools/Auth')
const UserSchema                = require('../../../db/Schema/UserSchema')
const { ComparePassword }       = require('../../../tools/Auth')
const { setTokenAuth }          = require('../../../tools/Auth')
const { ErrorAuthentification } = require('../../../tools/Auth')
const maxAge                    = 24 * 60 * 60 * 1000

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
      console.log(e)
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
      console.log(e)
    }
  }
  
  async logoutUser (request, response) {
    response.cookie('jwt', '', { maxAge: 1 })
    return response.status(200).json({ logout: true })
  }
}

module.exports = Authentification
