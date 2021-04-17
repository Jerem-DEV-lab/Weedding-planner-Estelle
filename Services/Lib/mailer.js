const nodemailer = require('nodemailer')

module.exports = transporter = nodemailer.createTransport(
  {
    service   : 'gmail',
    auth      : {
      user: "test.dev.node@gmail.com",
      pass: "yf1Nr53X"
    },
  })

transporter.verify((err) => {
  if (err) {
    console.log(err)
  }
  console.log('envoi de mail possible')
})
