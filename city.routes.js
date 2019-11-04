const cityController = require ('./city.controller')
const router = require ('express').Router()

//aca van a quedar declaradas todas las rutas, las saco de server

router.get("/cities", cityController.getCities);

module.exports = {
    router
}