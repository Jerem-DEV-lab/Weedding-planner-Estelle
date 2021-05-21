const { Schema, model } = require('mongoose')

const RatingSchema = new Schema
({
   rating     : { type: Number, required: true, max: 5 },
   content    : { type: String, required: true },
   isPublished: { type: Boolean, required: true, default: false },
   firstName  : { type: String, required: true },
   lastName   : { type: String, required: true }
 }, { timestamps: true })

module.exports = model('rating', RatingSchema)
