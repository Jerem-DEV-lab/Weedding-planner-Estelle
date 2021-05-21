const { Schema, model } = require('mongoose')

const NewsletterSchema = new Schema(
  {
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
