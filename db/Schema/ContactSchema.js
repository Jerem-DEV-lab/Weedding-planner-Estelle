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
   eventDep        : {
     type    : String,
     required: true,
   },
   organizationName: {
     type    : String,
     required: true,
   },
   numberOfGuests  : {
     type    : Number,
     required: true
   },
   message         : {
     type     : String,
     required : true,
     maxlength: 255,
     minlength: 20
   }
  
 }, { timestamps: true })

module.exports = model('contact', ContactSchema)
