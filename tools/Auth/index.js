const UserSchema        = require('../../db/Schema/UserSchema')
const jwt               = require('jsonwebtoken')
const { hash, compare } = require('bcryptjs')

module.exports.ErrorAuthentification = (err) => {
  let errors = { email: '', password: '', confirmPassword: '' }
  if (err.message.includes('email') && err.message.includes('is required')) {
    errors.name = 'Vous devez renseigner une adresse mail valide'
  }
  if (err.message.includes('password') && err.message.includes('is required')) {
    errors.name = 'Vous devez renseigner un mot de passe'
  }
  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email')) {
    errors.email = 'Vous possédez déjà un compte'
  }
  
  return errors
}

module.exports.ExistingUser = async (email) => {
  let user = await UserSchema.findOne({ email })
  console.log(user)
  return !user
}

module.exports.HashPassword    = async (password) => {
  return await hash(password, 10)
}
module.exports.ComparePassword = async (passwordDb, userPassword) => {
  return await compare(passwordDb, userPassword)
}

module.exports.setTokenAuth = (role, userId, timeStampCookie) => {
  return jwt.sign({ role, userId }, `${process.env.SECRET_KEY}`, { expiresIn: timeStampCookie })
}

module.exports.checkUserLogin = (req, res) => {
  const token = req.cookies.jwt
  
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null
        return res.status(400).json({ err })
        
      } else {
        const user = res.locals.user = await UserSchema.findById(decodedToken.userId).select('-password')
        return res.status(200).json(user)
      }
    })
  } else {
    res.locals.user = null
    return res.status(400).json({})
  }
}

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt
  if (!token) {
    return res.status(400).json({ errorMessage: 'Veuillez vous connecter' })
  }
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
      if (err) {
        return res.status(200).send('no token')
      } else {
        return res.status(200).send('no token')
      }
    })
  }
}
