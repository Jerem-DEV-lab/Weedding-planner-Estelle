module.exports.ErrorCreateNews = (err) => {
  let errors = {
    titleNews   : '',
    contentNews : '',
    categoryNews: '',
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
  return errors
}
