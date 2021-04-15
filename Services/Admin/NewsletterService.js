const UserSchema       = require('../../db/Schema/UserSchema')
const NewsletterSchema = require('../../db/Schema/NewsletterSchema')
const transport        = require('../Lib/mailer')

function templateMail (receiverEmail, subject, messageContent) {
  return {
    from   : '<test.dev.node@gmail.com>',
    to     : receiverEmail,
    subject: subject,
    html   : messageContent
  }
}

module.exports.sendNewsletter = async (req, res) => {
  const preparedNewsletter = new NewsletterSchema({ ...req.body })
  const findManyUsers      = await UserSchema.find({ _id: req.body.users })
  
  let EmailUsers = []
  await preparedNewsletter.save()
  
  findManyUsers.forEach(({ email }) => EmailUsers.push(email))
  
  EmailUsers.forEach(user => transport.sendMail(templateMail(user, req.body.titleNews, req.body.contentNews)))
  
  return res.status(200).json({ success: 'Ok' })
}
