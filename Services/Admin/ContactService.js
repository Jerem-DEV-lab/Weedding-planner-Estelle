const ContactSchema           = require('../../db/Schema/ContactSchema')
module.exports.getAllMessages = async (req, res) => {
  return ContactSchema.find({}, null, { sort: { createdAt: -1 } }, function (err, docs) {
  
    if (!docs) {
      return res.status(400).json({ docs: docs })
    }
    if (!err) {
      return res.status(200).json(docs)
    }
    if (err) {
      return res.status(400).json(err)
    }
  })
}

module.exports.setMessageIsRead = async (request, response) => {
  const messageId   = request.params.messageId
  return ContactSchema.findByIdAndUpdate({ _id: messageId }, { propertyMessage: { isRead: true } }, { new: true }, function (err, docs) {
    if (!err) {
      return response.status(200).json(docs)
    } else {
      return response.status(400).json(err)
    }
  })
}
module.exports.deleteMessage    = async (request, response) => {
  const messageId = request.params.messageId
  return ContactSchema.findByIdAndDelete({ _id: messageId }, {}, function (err, docs) {
    if (!docs) {
      return response.status(404).json(
        {
          errors: 'Aucun message ne correspond à votre demande',
          docs  : {}
        })
    }
    if (!err) {
      return response.status(200).json(
        {
          success: 'Le message a bien été supprimer',
          docs   : docs
        })
    } else {
      return response.status(404).json(
        {
          errors: 'Impossible de supprimer le message pour le moment',
          reason: err
        })
    }
  })
}
