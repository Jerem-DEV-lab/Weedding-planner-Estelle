const ObjectId            = require('mongoose').Types.ObjectId
const NewsletterSchema    = require('../../db/Schema/NewsletterSchema')
const UserSchema          = require('../../db/Schema/UserSchema')
const EmailSchema         = require('../../db/Schema/ContactSchema')
const RatingSchema        = require('../../db/Schema/RatingSchema')
const sendMailSG          = require('../Lib/mailer')
const { ErrorCreateNews } = require('../../tools/Newsletter')

module.exports.createNewsletter = async (req, res) => {
  const { titleNews, contentNews, template_id, subjectEmail, dynamicDatas } = req.body
  try {
    const Newsletter = new NewsletterSchema({ titleNews, contentNews, template_id, subjectEmail, dynamicDatas })
    await Newsletter.save()
    return res.status(200).json({ success: 'News correctement créer' })
  
  } catch (e) {
    let errors = ErrorCreateNews(e)
    return res.status(400).json(errors)
  }
  
}

module.exports.sendNewsletterWithTemplate = async (req, res) => {
  const { users, template_id, dynamicDatas, titleNews } = req.body
  const serializeDynamicData                            = (datas) => {
    let newObj = {}
    
    datas.forEach((v) => {
      newObj = {
        ...newObj,
        [Object.values(v)[1]]: Object.values(v)[2]
      }
    })
    return newObj
  }
  try {
    const usersFind = await UserSchema.find({ _id: users })
    await usersFind.forEach(user => {
      const obj = {
        'from'                 : { 'email': 'estelle-rouille@estelle-events.fr', 'name': 'Côté Campagne' },
        'reply_to'             : { 'email': 'guillemet.jeremy087@gmail.com' },
        'to'                   : user.email,
        'dynamic_template_data': serializeDynamicData(dynamicDatas),
        'content'              : [{ 'type': 'text/html', 'value': ' ' }],
        'template_id'          : template_id
      }
      sendMailSG(obj)
    })
    return res.status(200).json({ success: ' Email correctement envoyer', titleNews })
  } catch (e) {
    return res.status(400).json({ errors: 'Impossible d\'envoyer l\'email pour le moment', e })
  }
}

module.exports.getNewsletters = async (req, res) => {
  const newsletters = await NewsletterSchema.find()
  return res.status(200).json(newsletters)
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

module.exports.deleteEmail = async (req, res) => {
  const emails = req.body.emails
  try {
    await EmailSchema.deleteMany({ _id: emails })
    return res.status(200).json({ success: 'Email correctement supprimer' })
  } catch (e) {
    console.log(e)
    return res.status(500).json({ errors: 'Impossible de supprimer l\'email' })
  }
}

module.exports.getAllRatingUnpublished = async (req, res) => {
  try {
    await RatingSchema.find({ isPublished: false }, (err, docs) => {
      if (!err && !docs) {
        return res.status(200)
      }
      if (docs) {
        return res.status(200).json(docs)
      }
    })
  } catch (e) {
    return res.status(500).json(e)
  }
}
