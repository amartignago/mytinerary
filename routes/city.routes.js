const cityController = require ('../controllers/city.controller')
const router = require ('express').Router()

router.get("/cities", cityController.getCities);
router.get("/cities/:_id", cityController.getCityItinerary)
router.post("/cities/", cityController.createCity)



module.exports = router

