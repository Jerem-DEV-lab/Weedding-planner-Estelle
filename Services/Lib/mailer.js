const nodemailer = require('nodemailer')

module.exports = transporter = nodemailer.createTransport(
  {
    service   : 'gmail',
    auth      : {
      user: process.env.LOGIN_ADDRESS_GMAIL,
      pass: process.env.PASSWORD_ADDRESS_GMAIL
    },
  })

transporter.verify((err) => {
  if (err) {
    console.log(err)
  }
  console.log('envoi de mail possible')
})
