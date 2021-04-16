const ObjectId            = require('mongoose').Types.ObjectId
const NewsletterSchema    = require('../../db/Schema/NewsletterSchema')
const UserSchema          = require('../../db/Schema/UserSchema')
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

module.exports.getNewsletters = async (req, res) => {
  try {
    const newsletters = await NewsletterSchema.find()
    return res.status(200).json(newsletters)
    
  } catch (e) {
    console.log(e)
  }
}

module.exports.deleteNewsletter = async (req, res) => {
  const newsId = req.params.newsId
  if (!ObjectId.isValid(newsId)) {
    return res.status(404).json({ errors: 'ID inconnu' })
  }
  try {
    await NewsletterSchema.findByIdAndDelete({ _id: newsId }, {}, function (err, docs) {
      if (!err) {
        return res.status(200).json({ success: 'News correctement supprimer', docsDeleted: docs })
      }
    })
  } catch (e) {
    return res.status(404).json(e)
  }
}

module.exports.updateNewsletter = async (req, res) => {
  const newsId = req.params.newsId
  if (!ObjectId.isValid(newsId)) {
    return res.status(404).json({ errors: 'ID inconnu' })
  }
  try {
    const updatedNewsletter = req.body
    await NewsletterSchema.findByIdAndUpdate({ _id: newsId }, { ...updatedNewsletter }, { new: true }, function (err, docs) {
      if (!err && !docs) {
        return res.status(404).json({ errors: 'Aucune newsletter n\'a été mise à jour' })
      }
      return res.status(200).json({ success: 'Newsletter correctement mise à jour', docs: docs })
    })
  } catch (e) {
  
  }
}
