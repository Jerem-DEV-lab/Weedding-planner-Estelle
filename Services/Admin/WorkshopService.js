const UserSchema     = require('../../db/Schema/UserSchema')
const WorkshopSchema = require('../../db/Schema/WorkshopSchema')

let errors = {
  typeEvent: '',
  nameEvent: '',
}
/*Méthode @GET*/
module.exports.findUserByRegisteredWorkshop = async (request, response) => {
  const queryUserRegistered = request.query.registered
  const queryUserName       = request.query.name
  try {
    const usersRegistered = await UserSchema.find(
      {
        workshopRegistered: queryUserRegistered,
        workshopUser      : queryUserName
      })
    return response.status(200).json(usersRegistered)
  } catch (e) {
    return response.status(500).json({ errors: 'Impossible de récupérer les utilisateurs' })
  }
}

module.exports.createWorkshop = async (request, response) => {
  try {
    const { nameWorkshop, typeWorkshop, start_at, moreInfo, membersWorkshop } = request.body
    
    const workShop = new WorkshopSchema(
      {
        nameWorkshop,
        typeWorkshop,
        start_at,
        moreInfo,
        membersWorkshop
      })
    await workShop.save()
    await UserSchema.updateMany({ _id: { $in: request.body.membersWorkshop } }, { workshopInfos: workShop._id })
    return response.status(201).json({ success: 'Le workShop a bien été programmer ' })
  } catch (e) {
    return response.status(500).json({ errors: 'Impossible d\'ajouter votre événement pour le moment' })
  }
}
