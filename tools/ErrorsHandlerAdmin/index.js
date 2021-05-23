module.exports.CheckFormEmail = (reqBody) => {
  let errors      = {
    userEmail     : '',
    subjectEmail: '',
    contentMessage: '',
  }
  let errorsCount = 1
  if (reqBody.userEmail === '') {
    errors.userEmail = 'Vous devez renseigner une adresse mail valide'
    errorsCount      = errorsCount + 1
  }
  if (reqBody.subjectEmail === '') {
    errors.subjectEmail = 'Indiquer un sujet de contact'
    errorsCount           = errorsCount + 1
  }
  if (reqBody.contentMessage === '') {
    errors.contentMessage = 'Le message est requis'
    errorsCount           = errorsCount + 1
  }
  return new Promise((resolve, reject) => {
    if (errorsCount > 1) {
      return reject({ errors: true, statusCode: 409, reason: { ...errors }, errorsCount })
    } else {
      return resolve({ isValid: true, statusCode: 200, })
    }
  })
}
