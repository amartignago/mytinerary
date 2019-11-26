const itineraryController = require ('../controllers/itinerary.controller')
const router = require ('express').Router()

//aca van a quedar declaradas todas las rutas, las saco de server

router.get("/itineraries", itineraryController.getItineraries);

module.exports = router

