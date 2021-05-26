const sgMail               = require('@sendgrid/mail')

const sendMailSG = (options) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  return new Promise((resolve, reject) => {
    sgMail
      .send(options)
      .then((res) => {
        return resolve({ success: true, statusCode: 200, successMsg: 'Votre email a bien été envoyer', options })
      }, (error) => {
        return reject({
                        error     : true,
                        statusCode: 200,
                        reason    : 'Impossible d\'envoyer votre e-mail pour le moment',
                        errors    : error
                      })
      })
  })
}

module.exports = sendSimpleMail = async (options) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  return new Promise((resolve, reject) => {
    sgMail.send(options)
          .then(() => {
            return resolve({ success: true, statusCode: 200, successMsg: 'Votre e-mail a bien été envoyer' })
          }, (error) => {
            return reject({
                            error     : true,
                            statusCode: 200,
                            reason    : 'Impossible d\'envoyer l\'email pour le moment !',
                            errors    : error
                          })
          })
  })
}

const emailRegister = (options) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  return new Promise((resolve, reject) => {
    sgMail
      .send(options)
      .then(() => {
        return resolve(
          {
            success: true,
            statusCode: 200,
            successMsg: 'Un e-viens de vous être envoyer pour confirmer votre compte',
          })
      }, (error) => {
        return reject({
                        error     : true,
                        statusCode: 200,
                        reason    : 'Impossible d\'envoyer votre e-mail pour le moment',
                        errors    : error
                      })
      })
  })
}
module.exports      = {
  emailRegister,
  sendMailSG
}
