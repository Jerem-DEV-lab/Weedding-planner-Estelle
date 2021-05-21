const { Schema, model } = require('mongoose')
const { isEmail }       = require('validator')

const ContactSchema = new Schema
({
   lastName        : {
     type     : String,
     required : true,
     trim     : true,
     lowercase: true,
   },
   firstName       : {
     type     : String,
     required : true,
     trim     : true,
     lowercase: true,
   },
   email           : {
     type     : String,
     required : true,
     trim     : true,
     lowercase: true,
     validate : [isEmail]
   },
   message         : {
     type     : String,
     required : true,
     maxlength: 255,
     minlength: 20
   },
   propertyMessage : {
     isRead: {
       type: Boolean, required: true, default: false
     }
   }
 }, { timestamps: true })

module.exports = model('contact', ContactSchema)
