const { isEmpty }            = require('../Auth')
module.exports.ErrorInfoUser = async (request) => {
  let errors = {
    email     : '',
    address   : '',
    postalCode: '',
    phone     : ''
  }
  if (isEmpty(request.email)) {
    errors.email = 'Vous devez renseigner une adresse email'
  }
  if (isEmpty(request.address)) {
    errors.address = 'Vous devez renseigner une adresse'
  }
  if (isEmpty(request.postalCode)) {
    errors.postalCode = 'Vous devez renseigner un code postal'
  }
  if (isEmpty(request.phone)) {
    errors.phone = 'Vous devez renseigner un numéro de téléphone'
  }
  return errors
}

module.exports.ErrorRatingUser = (err) => {
  let errors = {
    rating : '',
    content: ''
  }
  if (err.message.includes('rating') && err.message.includes('validation')) {
    errors.rating = 'Vous devez renseigner une note'
  }
  if (err.message.includes('titleNews') && err.message.includes('is required')) {
    errors.titleNews = 'Vous devez renseigner le titre de la newsletter'
  }
  if (err.message.includes('content') && err.message.includes('is required')) {
    errors.content = 'Champs requis'
  }
  return errors
}
