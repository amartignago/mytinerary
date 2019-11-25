const imagesController = require ('../controllers/images.controller')
const router = require ('express').Router()

// router.get("/cities/images", imagesController.getItinerary);
router.get("/images/cities/:cityID?", imagesController.getCityHeader)
router.get("/images/cities/activities/:activID?", imagesController.getActivityImages)


module.exports = router
