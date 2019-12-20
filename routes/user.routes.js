const userController = require ('../controllers/user.controller')
const router = require ('express').Router()
const upload = require ('../controllers/imageUploader')
const passport = require('../passport')
const jwt = require("jsonwebtoken")
const key = require("../config/config")
let jwtDecode = require('jwt-decode');

router.get("/users", userController.getUsers);

//User registration
router.post("/users", upload.single('avatarImage'), userController.registerUser); //utilizo campo del formulario del front

//local auth login:
router.post("/auth/login", userController.loginUser); 
router.get("/auth/users", passport.authenticate("jwt", { session: false }), userController.getUserData);

// //auth logout:
// router.get("/auth/logout", (req, res)=>{
//     //handle with Passport IN CONTROLLER
//     res.send("logging out with passport")
// })

//Google auth login:
router.get("/auth/google", passport.authenticate('google', // first param: strategy (passport knows it)
        {scope: ['profile']}, //second param: google info wanted
        {session: false }
    ));
//google callback route (JWT)
router.get("/auth/google/redirect", passport.authenticate('google',{ session: false }), userController.userRedirect); 



// router.get(
//     "/users/favsss/:userID",  
//     passport.authenticate("jwt", {failureRedirect: "http://localhost:3000/login", session: false}), 
//     userController.getFavs
// )

module.exports = router

//con passport puedo usar req.logout para cerrar sesion, el tema es que el redirect me redirige a una ruta del back...

