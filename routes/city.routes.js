const cityController = require ('../controllers/city.controller')
const router = require ('express').Router()

//aca van a quedar declaradas todas las rutas, las saco de server

router.get("/cities", cityController.getCities);
router.get("/cities/:_id", cityController.getCityItinerary)
router.post("/cities/", cityController.createCity)
// router.get("/cities/images/:cityID?", cityController.getCitiesImages)


module.exports = router

