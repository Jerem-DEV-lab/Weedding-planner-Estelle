const router        = require('express').Router()
const RatingService = require('../../Services/Users')

function createRouterRating (req, res, next) {
  router.post('/rating', RatingService.sendRating)
  router.get('/rating', RatingService.getAllRatings)
  return router
}

module.exports = {
  createRouterRating
}
