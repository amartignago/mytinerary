const favouriteController = require ('../controllers/favourite.controller')
const router = require ('express').Router()
const passport = require('../passport')

router.post(
    "/users/favs/:itinID",  
    passport.authenticate("jwt", {failureRedirect: "http://localhost:3000/login", session: false}),
    favouriteController.updateFavs
)


module.exports = router
