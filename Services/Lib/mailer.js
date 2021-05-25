const sgMail               = require('@sendgrid/mail')
const templateMailSendGrid = require('../../Services/Lib/templateMail')

module.exports = transporter = function sendMailWithSG (receiverEmail, nameUser, subjectMessage) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const obj = {
    'personalizations': [{
      'to'     : [{ 'email': receiverEmail, 'name': 'John Doe' }],
      'subject': subjectMessage
    }],
    'content'         : [{ 'type': 'text/html', 'value': templateMailSendGrid }],
    'from'            : { 'email': 'estelle-rouille@estelle-events.fr', 'name': nameUser },
    'reply_to'        : { 'email': 'guillemet.jeremy087@gmail.com', 'name': 'estelle events' },
  }
  sgMail
    .send(obj)
    .then(() => {console.log('envoyer')}, error => {
      console.error(error)
      
      if (error.response) {
        console.error(error.response.body)
      }
    })
}

module.exports = sendMailSG = async (options) => {
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
            return reject({ error: true,
                            statusCode: 200,
                            reason: 'Impossible d\'envoyer l\'email pour le moment !',
                            errors: error
                          })
          })
  })
}
