const router        = require('express').Router()
const UserSchema    = require('../../db/Schema/UserSchema')
const ContactSchema = require('../../db/Schema/ContactSchema')
const NewsLetterSchema = require('../../db/Schema/NewsletterSchema')
const faker         = require('faker')

function createRouterTest () {
  const roles = ['ROLE_USER']
  router.post('/fake-data', async (req, res) => {
    try {
      for (let i = 1; i < 2; i++) {
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
      for (let i = 1; i < 2; i++) {
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
 }*/

module.exports = {
  createRouterTest
}
