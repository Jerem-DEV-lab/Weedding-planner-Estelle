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
    template_id : {
      type    : String,
      required: true
    },
    subjectEmail: {
      type    : String,
      required: true,
    },
    dynamicDatas: [{
      indexLabel: { type: String, required: true },
      content  : { type: String, required: true }
    }]
  })

module.exports = model('newsletter', NewsletterSchema)
