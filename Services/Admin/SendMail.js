const transport = require('../Lib/mailer')

function templateMail (receiverEmail, subject, messageContent) {
  return {
    from   : '<test.dev.node@gmail.com>',
    to     : receiverEmail,
    subject: subject,
    html   : messageContent
  }
}

module.exports.sendEmail = async (req, res) => {
  try {
    await transport.sendMail(templateMail(req.body.userEmail, req.body.subjectEmail, req.body.contentMessage))
    return res.status(201).json({ success: 'Votre message a bien été envoyer' })
  } catch (e) {
    return res.status(408).json({ errors: 'Impossible d\'envoyer votre message pour le moment' })
  }
}
