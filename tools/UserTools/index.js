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
