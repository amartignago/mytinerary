const imagesController = require ('../controllers/images.controller')
const router = require ('express').Router()

//rutas del back que levantan imagen del servidor:
router.get("/images/cities/:cityID?", imagesController.getCityHeader)
router.get("/images/activities/:activID?", imagesController.getActivityImages)
router.get("/images/users/:userName?", imagesController.getUserImage)

module.exports = router
