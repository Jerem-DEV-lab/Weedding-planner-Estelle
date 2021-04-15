const UserSchema          = require('../../db/Schema/UserSchema')
const NewsletterSchema    = require('../../db/Schema/NewsletterSchema')
const transport           = require('../Lib/mailer')
const { ErrorCreateNews } = require('../../tools/Newsletter')

function templateMail (receiverEmail, subject, messageContent) {
  return {
    from   : '<test.dev.node@gmail.com>',
    to     : receiverEmail,
    subject: subject,
    html   : messageContent
  }
}

module.exports.createNewsletter = async (req, res) => {
  const { titleNews, contentNews, categoryNews } = req.body
  
  try {
    const Newsletter = new NewsletterSchema({ titleNews, contentNews, categoryNews })
    await Newsletter.save()
    return res.status(200).json({ success: 'News correctement créer' })
    
  } catch (e) {
    let errors = ErrorCreateNews(e)
    return res.status(400).json(errors)
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
