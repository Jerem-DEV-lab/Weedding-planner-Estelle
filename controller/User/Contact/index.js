const ContactSchema        = require('../../../db/Schema/ContactSchema')
const { deleteMessage }    = require('../../../Services/Admin/ContactService')
const { setMessageIsRead } = require('../../../Services/Admin/ContactService')
const { ErrorForm }        = require('../../../tools/Auth')

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
  
  static async setMessageIsRead (request, response) {
    return await setMessageIsRead(request, response)
  }
  
  static async deleteMessage (request, response) {
    return await deleteMessage(request, response)
  }
}

module.exports = Contact
