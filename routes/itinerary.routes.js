const itineraryController = require ('../controllers/itinerary.controller')
const router = require ('express').Router()

//aca van a quedar declaradas todas las rutas, las saco de server

router.get("/itineraries", itineraryController.getItinerary);
router.get("/itineraries/:cityId", itineraryController.getItineraryById)


module.exports = router

