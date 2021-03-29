const { Schema, model } = require('mongoose')
const { isEmail }       = require('validator')

const UserSchema = new Schema
({
   email                   : {
     type     : String,
     required : true,
     unique   : true,
     trim     : true,
     lowercase: true,
     validate : [isEmail]
   },
   password                : { type: String, required: true, minlength: 6, maxlength: 1024 },
   roles                   : [{ type: String, defaultValue: 'ROLE_USER' }],
   firstName               : { type: String, required: true, minlength: 3, maxlength: 25 },
   lastName                : { type: String, required: true, minlength: 3, maxlength: 25 },
   userIsBan               : { type: Boolean, required: true, default: false },
   accountVerified         : { type: Boolean, required: true, default: false },
   resetPasswordToken      : { type: String, default: '' },
   confirmAccountToken     : { type: String, default: '' },
   expireTokenResetPassword: { type: Date, default: '' },
   userAvatar              : { type: String, required: true, default: 'https://i.pravatar.cc/300' },
   phone                   : { type: String, required: true },
   civility                : { type: String, required: true },
   birthday                : { type: String, required: true },
   newsLetter              : { type: Boolean, required: true }
  
 }, { timestamps: true })

module.exports = model('user', UserSchema)
