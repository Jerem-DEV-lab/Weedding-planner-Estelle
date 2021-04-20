const { Schema, model } = require('mongoose')

const WorkshopSchema = new Schema(
  {
    nameWorkshop   : { type: String, required: true },
    typeWorkshop   : { type: String, required: true },
    start_at       : { type: Date, required: true },
    moreInfo       : { type: String, maxlength: 255 },
    membersWorkshop: [{ type: Schema.Types.ObjectId, ref: 'user' }]
  })

module.exports = model('workshop', WorkshopSchema)
