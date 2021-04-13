const router     = require('express').Router()
const UserSchema = require('../../db/Schema/UserSchema')
const faker      = require('faker')

function createRouterTest () {
  const roles = ['ROLE_USER']
  router.post('/fake-data', async (req, res) => {
    try {
      for (let i = 1; i < 10; i++) {
        const user = new UserSchema(
          {
            firstName : faker.name.firstName(),
            lastName  : faker.name.lastName(),
            email     : faker.internet.email(),
            phone     : faker.phone.phoneNumber('0695415462'),
            password  : '123456',
            civility  : 'Mme',
            address   : faker.address.cityName(),
            postalCode: faker.address.zipCode('21490'),
            birthday  : faker.date.past('2021', ''),
            roles     : roles
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

module.exports = {
  createRouterTest
}
