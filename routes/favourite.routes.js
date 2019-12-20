const favouriteController = require ('../controllers/favourite.controller')
const router = require ('express').Router()
const passport = require('../passport')

router.post(
    "/users/favs/:itinID",  
    passport.authenticate("jwt", {failureRedirect: "http://localhost:3000/login", session: false}),
    favouriteController.updateFavs
)

router.get(
    "/users/favs/:userID",
    passport.authenticate("jwt", {failureRedirect: "http://localhost:3000/login", session: false}),
    favouriteController.getFavs
)

router.get(
    "/users/:userID/favs/:itinID",
    //passport.authenticate("jwt", {failureRedirect: "http://localhost:3000/login", session: false}),
    favouriteController.checkItinIsFav
)

module.exports = router
