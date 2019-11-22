const cityController = require ('../controllers/city.controller')
const router = require ('express').Router()

//aca van a quedar declaradas todas las rutas, las saco de server

router.get("/cities", cityController.getCities);
router.get("/cities/:_id", cityController.getCityItinerary)

module.exports = router

