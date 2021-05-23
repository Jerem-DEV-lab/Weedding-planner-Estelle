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

module.exports = sendMailSG = async (receiverEmail, nameUser, subjectMessage, options = {}) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const obj = {
    'personalizations': [{
      'to'     : [{ 'email': receiverEmail, 'name': 'estelle-events.fr' }],
      'subject': subjectMessage
    }],
    'content'         : [{ 'type': options.type, 'value': options.templateEmail || options.messageContent }],
    'from'            : { 'email': 'estelle-rouille@estelle-events.fr', 'name': nameUser },
    'reply_to'        : { 'email': 'estelle.rouille.events@gmail.com', 'name': 'estelle events' },
  }
  return new Promise((resolve, reject) => {
    sgMail
      .send(obj)
      .then((res) => {
        return resolve({ success: true, statusCode: 200, successMsg: 'Votre email a bien été envoyer' })
      }, () => {
        return reject({ error: true, statusCode: 404, reason: 'Impossible d\'envoyer votre e-mail pour le moment' })
      })
  })
}
