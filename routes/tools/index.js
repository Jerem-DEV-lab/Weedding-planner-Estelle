const router           = require('express').Router()
const UserSchema       = require('../../db/Schema/UserSchema')
const ContactSchema    = require('../../db/Schema/ContactSchema')
const NewsLetterSchema = require('../../db/Schema/NewsletterSchema')
const RatingSchema     = require('../../db/Schema/RatingSchema')
const faker            = require('faker')
const axios            = require('axios')
/*
 function createRouterTest () {
 const roles = ['ROLE_USER']
 router.post('/fake-data', async (req, res) => {
 try {
 for (let i = 0; i < 5; i++) {
 const user = new UserSchema(
 {
 firstName         : faker.name.firstName(),
 lastName          : faker.name.lastName(),
 email             : faker.internet.email(),
 phone             : faker.phone.phoneNumber('0695415462'),
 password          : '123456',
 civility          : 'Mme',
 address           : faker.address.cityName(),
 postalCode        : faker.address.zipCode('21490'),
 roles             : roles,
 workshopRegistered: true,
 workshopUser      : 'test'
 })
 await user.save()
 }
 for (let i = 0; i < 5; i++) {
   const user = new UserSchema(
     {
       firstName         : faker.name.firstName(),
       lastName          : faker.name.lastName(),
       email             : faker.internet.email(),
       phone             : faker.phone.phoneNumber('0695415462'),
       password          : '123456',
       civility          : 'Mme',
       address           : faker.address.cityName(),
       postalCode        : faker.address.zipCode('21490'),
       roles             : roles,
       workshopRegistered: false,
       workshopUser      : ''
     })
   await user.save()
 }
  
   return res.status(200).send('Data correctement générer')
 } catch (e) {
   console.log('err', e)
 }
 })
  
   return router
 }

/*
 function getRandomInt (max) {
 return Math.floor(Math.random() * max)
 }
 
 function createRouterTest () {
 router.post('/fake-data', async (req, res) => {
 try {
 for (let i = 1; i < 10; i++) {
 const user = new ContactSchema(
 {
 firstName       : faker.name.firstName(),
 lastName        : faker.name.lastName(),
 email           : faker.internet.email(),
 numberOfGuests  : getRandomInt(10),
 eventDep        : '123456',
 organizationName: 'Mme',
 message         : "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was.",
 })
 await user.save()
 }
 return res.status(200).send('Data correctement générer')
 } catch (e) {
 console.log('err', e)
 }
 })
 
 return router
 }*/

/*function createRouterTest () {
 router.post('/fake-data', async (req, res) => {
 try {
 for (let i = 1; i < 10; i++) {
 const user = new NewsLetterSchema(
 {
 titleNews       : faker.lorem.slug(10),
 contentNews        : faker.lorem.words(),
 categoryNews         : "Code Promo",
 })
 await user.save()
 }
 return res.status(200).send('Data correctement générer')
 } catch (e) {
 console.log('err', e)
 }
 })
 return router
 }
 function createRouterTest () {
 router.post('/fake-data', async (req, res) => {
 try {
 for (let i = 1; i < 4; i++) {
 const rating = new RatingSchema(
 {
 firstName: faker.name.firstName(),
 lastName : faker.name.lastName(),
 content  : faker.lorem.text(),
 rating: 4
 })
 await rating.save()
 }
 for (let i = 1; i < 6; i++) {
 const rating = new RatingSchema(
 {
 firstName  : faker.name.firstName(),
 lastName   : faker.name.lastName(),
 isPublished: true,
 content    : faker.lorem.text(),
 rating: 5
 })
 await rating.save()
 }
 
 return res.status(200).send('Data correctement générer')
 } catch (e) {
 console.log('err', e)
 }
 })
 
 return router
 }*/

/*const msg = {
 to     : 'guillemet.jeremy087@gmail.com', // Change to your recipient
 from   : 'estelle-rouille@estelle-events.fr', // Change to your verified sender
 subject: 'Sending with SendGrid is Fun',
 html   : require('./mail.html'),
 }
 sgMail
 .send(msg)
 .then(() => {
 console.log('Email sent')
 })
 .catch((error) => {
 console.error(error)
 })*/

const sgMail               = require('@sendgrid/mail')
const templateMailSendGrid = require('../../Services/Lib/templateMail')

/*
 function createRouterTest () {
 router.post('/fake-data', async (req, res) => {
 const obj = {
 'personalizations': [{
 'to'     : [{ 'email': 'guillemet.jeremy087@gmail.com', 'name': 'John Doe' }],
 'subject': 'Hello, World!'
 }],
 'content'         : [{ 'type': 'text/html', 'value': templateMailSendGrid }],
 'from'            : { 'email': 'estelle-rouille@estelle-events.fr', 'name': 'Sam Smith' },
 'reply_to'        : { 'email': 'estelle-rouille@estelle-events.fr', 'name': 'Sam Smith' },
 }
 axios.post('https://api.sendgrid.com/v3/mail/send', obj, {
 headers: { Authorization: 'Bearer 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' }
 }).then(res => {
 console.log('email send')
 })
 .catch(err => {
 console.log(err.response.data)
 console.log('email not send')
 })
 
 })
 return router
 }
 */
function createRouterTest () {
  router.post('/fake-data', async (req, res) => {
    sgMail.setApiKey('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')
    const obj = {
      'personalizations': [{
        'to'     : [{ 'email': 'kev87rouil@hotmail.fr', 'name': 'KEVIN' }],
        'subject': 'TEST DEPUIS NODE'
      }],
      'content'         : [{ 'type': 'text/html', 'value': templateMailSendGrid }],
      'from'            : { 'email': 'estelle-rouille@estelle-events.fr', 'name': 'Sam Smith' },
      'reply_to'        : { 'email': 'guillemet.jeremy087@gmail.com', 'name': 'Sam Smith' },
    }
    sgMail
      .send(obj)
      .then(() => {}, error => {
        console.error(error);
      
        if (error.response) {
          console.error(error.response.body)
        }
      });
  })
  return router
}

module.exports = {
  createRouterTest
}
