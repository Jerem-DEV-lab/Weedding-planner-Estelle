const { Schema, model } = require('mongoose')

const NewsletterSchema = new Schema(
  {
    users      : [{
      type: Schema.Types.ObjectId,
      ref : 'user'
    }],
    titleNews   : {
      type    : String,
      required: true,
    },
    contentNews : {
      type    : String,
      required: true
    },
    categoryNews: {
      type    : String,
      required: true
    }
  })

module.exports = model('newsletter', NewsletterSchema)
