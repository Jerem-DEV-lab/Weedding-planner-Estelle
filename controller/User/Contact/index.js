const ContactSchema = require('../../../db/Schema/ContactSchema')
const { ErrorForm } = require('../../../tools/Auth')

class Contact {
  constructor () {
  
  }
  
  static async sendMessageToAdmin (request, response) {
    const { email, lastName, firstName, eventDep, organizationName, numberOfGuests, message } = request.body
    try {
      const messageUser = new ContactSchema({
                                          email,
                                          lastName,
                                          firstName,
                                          eventDep,
                                          organizationName,
                                          numberOfGuests,
                                          message
                                        })
      await messageUser.save()
      return response.status(200).json(
        {
          success: 'Votre message a bien été envoyer et je vous répondrez le plus' +
                   ' rapidement possible'
        })
    } catch (e) {
      return response.status(400).json(ErrorForm(e))
    }
  }
  
}

module.exports = Contact
