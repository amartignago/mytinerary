const userController = require ('../controllers/user.controller')
const router = require ('express').Router()
const upload = require ('../controllers/imageUploader')
const passport = require('../passport')
const jwt = require("jsonwebtoken")
const key = require("../config/config")

// router.get("/users", userController.getUsers);

//User registration
router.post("/users", upload.single('avatarImage'), userController.registerUser); //utilizo campo del formulario del front

//auth login:
router.post("/auth/login", userController.loginUser); 
router.get("/auth/users", passport.authenticate("jwt", { session: false }), userController.getUserData);

//auth logout:
router.get("/auth/logout", (req, res)=>{
    //handle with Passport IN CONTROLLER
    res.send("logging out with passport")
})

//Google auth login:
router.get("/auth/google", passport.authenticate(
        'google', // first param: strategy (passport knows it)
        {
            scope: ['profile'] 
        }
    ));

//google callback route
router.get("/auth/google/redirect", passport.authenticate('google',{ session: false }), (req, res) => {
    const payload = {
        id: req.user.id,
        username: req.user.username,
        // avatarPicture: user.avatarPicture
    };
    const options = {expiresIn: 2592000};
    jwt.sign(
    payload,
    key.secretOrKey,
    options,
    (err, token) => {
        if(err){
         return res.json({
            success: false,
            token: "There was an error"
        });
        }else {
         return res.json({
            success: true,
            token: token
        });
        }
    }
    )

}
); 

module.exports = router

