const UserSchema        = require('../../db/Schema/UserSchema')
const jwt               = require('jsonwebtoken')
const { hash, compare } = require('bcryptjs')

module.exports.ErrorAuthentification = (err) => {
  let errors = {
    email          : '',
    password       : '',
    confirmPassword: '',
    civility       : '',
    birthday       : '',
    phone          : '',
    postalCode     : '',
  }
  if (err.message.includes('email') && err.message.includes('is required')) {
    errors.name = 'Vous devez renseigner une adresse mail valide'
  }
  if (err.message.includes('password') && err.message.includes('is required')) {
    errors.name = 'Vous devez renseigner un mot de passe'
  }
  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email')) {
    errors.email = 'Vous possédez déjà un compte'
  }
  if (err.message.includes('civility') && err.message.includes('is required')) {
    errors.civility = 'Vous devez renseigner votre civilité'
  }
  if (err.message.includes('birthday') && err.message.includes('is required')) {
    errors.birthday = 'Vous devez renseigner votre date de naissance'
  }
  if (err.message.includes('phone') && err.message.includes('is required')) {
    errors.phone = 'Vous devez renseigner votre numéro de téléphone'
  }
  if (err.message.includes('postalCode') && err.message.includes('is required')) {
    errors.postalCode = 'Vous devez renseigner votre département / région'
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
  const authTokenJWT = req.cookies.jwt
  if (authTokenJWT.startsWith('Bearer ')) {
    let parsedCookie = authTokenJWT.split('Bearer ')[1]
    jwt.verify(parsedCookie, process.env.SECRET_KEY, async (err, decodedToken) => {
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
module.exports.ErrorForm   = (err) => {
  let errors = {
    email           : '',
    lastName        : '',
    firstName       : '',
    eventDep        : '',
    organizationName: '',
    numberOfGuests  : '',
    message         : ''
  }
  
  if (err.message.includes('email') && err.message.includes('is required')) {
    errors.email = 'Vous devez renseigner une adresse mail valide'
  }
  if (err.message.includes('lastName') && err.message.includes('is required')) {
    errors.lastName = 'Ce champs est requis'
  }
  if (err.message.includes('firstName') && err.message.includes('is required')) {
    errors.firstName = 'Ce champs est requis'
  }
  if (err.message.includes('numberOfGuests') && err.message.includes('is required')) {
    errors.numberOfGuests = 'Veuillez renseigner un nombre approximative d\'invités'
  }
  if (err.message.includes('organizationName') && err.message.includes('is required')) {
    errors.organizationName = 'Sélectionner une organisation'
  }
  if (err.message.includes('eventDep') && err.message.includes('is required')) {
    errors.eventDep = 'Sélection le département dans lequel où se déroulera votre évènement'
  }
  if (err.message.includes('message') && err.message.includes('is required')) {
    errors.message = 'Décrivez votre projet en quelques lignes'
  }
  if (err.message.includes('numberOfGuests') && err.message.includes('Number')) {
    errors.numberOfGuests = 'Vous devez entrer un chiffre valide'
  }
  if (err.message.includes('email') && err.message.includes('Validator failed') && err.message.includes('with value')) {
    errors.email = 'L\'adresse mail saisie n\'est pas valide'
  }
  if (err.message.includes('message') && err.message.includes('is shorter')) {
    errors.message = 'Votre message doit faire un minimum de 20 caractères'
  }
  if (err.message.includes('message') && err.message.includes('is longer')) {
    errors.message = 'Votre message doit faire un minimum de 255 caractères'
  }
  return errors
}

module.exports.isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0) ||
    (typeof value === 'array' && value !== 'undefined' && value.length != null && value.length > 0)
  )
}
