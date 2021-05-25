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
    template_id: {
      type    : String,
    }
  })

module.exports = model('newsletter', NewsletterSchema)
