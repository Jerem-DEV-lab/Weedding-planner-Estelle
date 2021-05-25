module.exports.ErrorCreateNews = (err) => {
  let errors = {
    titleNews   : '',
    contentNews : '',
    categoryNews: '',
    dynamicData : {
      indexLabel: '',
      nameData  : ''
    },
    subjectEmail: '',
    template_id : ''
  }
  if (err.message.includes('titleNews') && err.message.includes('is required')) {
    errors.titleNews = 'Vous devez renseigner le titre de la newsletter'
  }
  if (err.message.includes('contentNews') && err.message.includes('is required')) {
    errors.contentNews = 'Que voulez-vous dire à vos clients ? '
  }
  if (err.message.includes('categoryNews') && err.message.includes('is required')) {
    errors.categoryNews = 'Choisissez le type de newsletter'
  }
  if (err.message.includes('dynamicDatas') && err.message.includes('indexLabel') && err.message.includes('is required')) {
    errors.dynamicData.indexLabel = 'Champs requis !'
  }
  if (err.message.includes('dynamicDatas') && err.message.includes('nameData') && err.message.includes('is required')) {
    errors.dynamicData.nameData = 'Champs requis !'
  }
  if (err.message.includes('subjectEmail') && err.message.includes('is required')) {
    errors.subjectEmail = 'Champs requis !'
  }
  if (err.message.includes('template_id') && err.message.includes('is required')) {
    errors.template_id = 'Champs requis !'
  }
  return errors
}
